// scripts/make-unranked-emblem.mjs
// node scripts/make-unranked-emblem.mjs
//
// CommunityDragon ranked-emblem/(및 하위 tier/, wings/)에 unranked 엠블럼이 없어서,
// public/tiers/iron.webp를 바탕으로 흑백 + 반투명(약 35%) + 약간의 블러를 준 언랭 엠블럼을 만든다.
// iron.webp가 먼저 있어야 한다 (scripts/download-tier-emblems.mjs로 생성).

import sharp from "sharp";

const SRC = "public/tiers/iron.webp";
const OUT = "public/tiers/unranked.webp";
const OPACITY = 0.35;
const BLUR_SIGMA = 1.2;

(async () => {
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .blur(BLUR_SIGMA)
    .raw()
    .toBuffer({ resolveWithObject: true });

  // 픽셀 단위로 흑백(휘도) + 알파에 OPACITY 곱하기 — grayscale()은 알파 채널 구성을 바꿀 수 있어 직접 처리
  for (let i = 0; i < data.length; i += 4) {
    const y = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
    data[i] = data[i + 1] = data[i + 2] = y;
    data[i + 3] = Math.round(data[i + 3] * OPACITY);
  }

  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .webp({ quality: 82 })
    .toFile(OUT);

  console.log(`Saved to: ${OUT} (${info.width}x${info.height})`);
})();
