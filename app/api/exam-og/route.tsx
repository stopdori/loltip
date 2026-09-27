import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { computeExamResult } from "@/app/[locale]/exam/data/result";

export const runtime = "nodejs";

// 카드에 쓰는 한글이 바뀌면 scripts/build-exam-og-assets.mjs를 다시 실행해 폰트 서브셋을 갱신할 것.
const ASSET_DIR = path.join(process.cwd(), "assets/exam-og");
const EXAM_ENABLED = process.env.NEXT_PUBLIC_EXAM_ENABLED === "true";

const TIER_HEX: Record<string, string> = {
  unranked: "#64748b",
  iron: "#94a3b8",
  bronze: "#b45309",
  silver: "#cbd5e1",
  gold: "#facc15",
  platinum: "#2dd4bf",
  emerald: "#34d399",
  diamond: "#60a5fa",
  master: "#c084fc",
  grandmaster: "#f87171",
  challenger: "#67e8f9",
};

const TEXT = {
  ko: {
    title: "롤 능력고사",
    subtitle: "챔피언 상호작용 지식 테스트",
    cta: "나도 도전하기 → loltip.com",
    points: "점",
    pointsGap: 0,
  },
  en: {
    title: "LoL Matchup Exam",
    subtitle: "Test your champion interaction knowledge",
    cta: "Take the challenge → loltip.com",
    points: "pts",
    pointsGap: 12,
  },
};

const EMBLEM_HEIGHT = 300;

// PNG 헤더(IHDR)의 가로·세로 — 티어마다 엠블럼 비율이 달라 높이 기준으로 가로를 맞춘다.
function pngSize(buf: Buffer) {
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

export async function GET(req: Request) {
  if (!EXAM_ENABLED) return new Response("Not Found", { status: 404 });

  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("locale") === "en" ? "en" : "ko";
  const t = TEXT[lang];
  const result = computeExamResult(searchParams.get("v"), searchParams.get("a"));

  const font = await readFile(path.join(ASSET_DIR, "NotoSansKR-Bold-subset.ttf"));

  let emblem: { src: string; width: number; height: number } | null = null;
  if (result) {
    const png = await readFile(path.join(ASSET_DIR, "tiers", `${result.tier.tier}.png`));
    const size = pngSize(png);
    emblem = {
      src: `data:image/png;base64,${png.toString("base64")}`,
      height: EMBLEM_HEIGHT,
      width: Math.round((size.width / size.height) * EMBLEM_HEIGHT),
    };
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0f172a",
          color: "#e2e8f0",
          fontFamily: "NotoSansKR",
          padding: "48px 64px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 44, color: "#facc15" }}>LOLTIP</div>
          <div style={{ fontSize: 32, color: "#cbd5e1" }}>{t.title}</div>
        </div>

        {result && emblem ? (
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 72 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={emblem.src} width={emblem.width} height={emblem.height} />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontSize: 96, color: TIER_HEX[result.tier.tier] }}>{result.tier.label[lang]}</div>
              <div style={{ display: "flex", alignItems: "baseline", fontSize: 52 }}>
                {/* satori는 flex 항목 앞뒤 공백을 지우므로 간격은 공백 문자 대신 margin으로 준다 */}
                <span style={{ color: "#facc15" }}>{result.score}</span>
                <span style={{ color: "#64748b", margin: "0 16px" }}>/</span>
                <span style={{ color: "#64748b" }}>{result.totalPoints}</span>
                <span style={{ color: "#cbd5e1", marginLeft: t.pointsGap }}>{t.points}</span>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
            <div style={{ fontSize: 96, color: "#facc15" }}>{t.title}</div>
            <div style={{ fontSize: 40, color: "#94a3b8" }}>{t.subtitle}</div>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "center", fontSize: 34, color: "#facc15" }}>{t.cta}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "NotoSansKR", data: font, weight: 700, style: "normal" }],
      headers: {
        // 같은 v/a/locale이면 항상 같은 이미지. CDN은 1년(재배포 시 무효화), 브라우저는 하루.
        "Cache-Control": "public, max-age=86400, s-maxage=31536000",
      },
    },
  );
}
