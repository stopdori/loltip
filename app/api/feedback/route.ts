// app/api/feedback/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_LEN = 500;
const MIN_LEN = 5;
const COOLDOWN_MS = 120_000;

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

// ===== 욕설 필터 =====
const BAD_WORDS = [
  "씨발","시발","ㅅㅂ","ㅂㅅ","병신","븅신","병1신",
  "개새끼","개새","개세","ㄱㅅㄲ",
  "지랄","ㅈㄹ","ㅈㄴ","존나","좆","ㅈ같",
  "꺼져","뒤져","죽어","죽어라",
  "fuck","shit","bitch","asshole",
  "새끼","미친","애미","애비","걸레","창녀","꺼지","닥쳐","멍청",
];

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "")          // 공백 제거
    .replace(/[0-9]/g, "")  // 숫자 제거
.replace(/[.\-_,~`'"!@#$%^&*()+=|\\/:;?]/g, ""); // 특수문자 제거
}

function hasBadWord(text: string) {
  const n = normalize(text);
  return BAD_WORDS.some(w => n.includes(w));
}

export async function POST(req: Request) {
  try {
    console.log("WEBHOOK:", process.env.DISCORD_WEBHOOK_URL);

    const url = process.env.DISCORD_WEBHOOK_URL;
    if (!url) {
      return NextResponse.json(
        { ok: false, error: "ENV_MISSING" },
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

    // 욕설 포함 시 전송 차단 (아예 디코 안 감)
if (hasBadWord(message)) {
  return NextResponse.json({ ok: true }); // 성공처럼 응답하고 무시
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
          title: "",
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
