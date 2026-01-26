// app/api/feedback/route.ts
import { NextResponse } from "next/server";

const MAX_LEN = 500;
const MIN_LEN = 5;
const COOLDOWN_MS = 30_000;

// ✅ IP별 마지막 전송 시간 (메모리 기반)
const lastSentByIp = new Map<string, number>();

function getClientIp(req: Request) {
  // Vercel/프록시 환경: x-forwarded-for가 "ip, ip, ip" 형태로 옴
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();

  const xri = req.headers.get("x-real-ip");
  if (xri) return xri.trim();

  // 로컬 dev에서 위 헤더가 없을 수 있음
  return "unknown";
}

function pruneMap(now: number) {
  // 메모리 누수 방지: 10분 이상 지난 기록 제거
  const TTL = 10 * 60 * 1000;
  for (const [ip, t] of lastSentByIp.entries()) {
    if (now - t > TTL) lastSentByIp.delete(ip);
  }
}

export async function POST(req: Request) {
  try {
    const url = process.env.DISCORD_WEBHOOK_URL;
    if (!url) {
      return NextResponse.json(
        { ok: false, error: "DISCORD_WEBHOOK_URL not set" },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => ({}));

    const message = (body?.message ?? "").toString().trim();
    const page = (body?.page ?? "").toString().trim();
    const champMy = (body?.myChamp ?? "").toString().trim();
    const champEnemy = (body?.enemyChamp ?? "").toString().trim();

    // ✅ 글자수 제한
    if (!message || message.length < MIN_LEN) {
      return NextResponse.json(
        { ok: false, error: "Message too short" },
        { status: 400 }
      );
    }
    if (message.length > MAX_LEN) {
      return NextResponse.json(
        { ok: false, error: "Message too long" },
        { status: 400 }
      );
    }

    // ✅ IP 기준 30초 쿨타임 (초과하면 '성공처럼' 응답하고 디코 전송 X)
    const nowMs = Date.now();
    pruneMap(nowMs);

    const ip = getClientIp(req);
    const last = lastSentByIp.get(ip) ?? 0;

    if (nowMs - last < COOLDOWN_MS) {
      return NextResponse.json({ ok: true }); // 조용히 무시
    }
    lastSentByIp.set(ip, nowMs);

    const nowIso = new Date(nowMs).toISOString();

    // 디코 웹훅 payload
    const payload = {
      content: null,
      embeds: [
        {
          title: "📩 LOLTIP 문의 도착",
          description: message,
          color: 0xfacc15,
          fields: [
            ...(champMy || champEnemy
              ? [
                  {
                    name: "매치업",
                    value: `${champMy || "-"} vs ${champEnemy || "-"}`,
                    inline: true,
                  },
                ]
              : []),
            ...(page ? [{ name: "페이지", value: page, inline: true }] : []),
            { name: "IP", value: ip, inline: false },
            { name: "시간(UTC)", value: nowIso, inline: false },
          ],
        },
      ],
    };

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const txt = await resp.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: "Discord webhook failed", detail: txt },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unknown error" },
      { status: 500 }
    );
  }
}
