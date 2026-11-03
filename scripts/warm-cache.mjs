// 배포 후 캐시 예열: 배포된 sitemap.xml의 모든 URL을 한 번씩 요청해 Cloudflare Workers Cache를 채운다.
// Workers Cache 키에 Worker 버전이 들어가 배포할 때마다 캐시가 비므로, 배포 직후 한 번 실행한다.
// 주의: 엣지 캐시는 데이터센터별이라 이 스크립트를 실행한 위치에서 가까운 데이터센터만 채워진다.
//
// 사용법: npm run warm [-- <기준 주소>] [--concurrency=8]
//   기준 주소 기본값은 workers.dev. 도메인 연결 후에는 https://loltip.com 등으로 넘긴다.
//   sitemap의 <loc>은 항상 https://loltip.com 기준이라, 요청할 때 출처(origin)를 기준 주소로 바꾼다.

const DEFAULT_BASE = "https://loltip.loltip-cf.workers.dev";
const SITEMAP_ORIGIN = "https://loltip.com";
const MAX_ATTEMPTS = 3;
const RETRY_DELAY_MS = 3000;

const args = process.argv.slice(2);
const base = (args.find((a) => !a.startsWith("--")) ?? DEFAULT_BASE).replace(/\/+$/, "");
const concurrency = Number(args.find((a) => a.startsWith("--concurrency="))?.split("=")[1] ?? 8);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 1102(Worker CPU/메모리 초과)는 Cloudflare 에러 페이지로 5xx 응답된다. 5xx·네트워크 오류는 잠시 뒤 다시 시도한다.
async function warm(url) {
  let last = "";
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(url, { redirect: "manual", headers: { "user-agent": "loltip-warm-cache" } });
      const body = await res.text();
      const is1102 = body.includes("1102");
      if (res.status < 500 && !(res.status >= 400 && is1102)) {
        return { ok: res.status === 200, status: res.status, cache: res.headers.get("cf-cache-status") ?? "-", attempt };
      }
      last = `${res.status}${is1102 ? " (1102)" : ""}`;
    } catch (e) {
      last = `network: ${e.message}`;
    }
    if (attempt < MAX_ATTEMPTS) await sleep(RETRY_DELAY_MS * attempt);
  }
  return { ok: false, status: last, cache: "-", attempt: MAX_ATTEMPTS };
}

const started = Date.now();
const sitemapRes = await fetch(`${base}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error(`sitemap.xml 요청 실패: ${sitemapRes.status}`);
  process.exit(1);
}
const urls = [...(await sitemapRes.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
  m[1].replace(SITEMAP_ORIGIN, base),
);
console.log(`${base} — sitemap URL ${urls.length}개, 동시 요청 ${concurrency}`);

const results = [];
let next = 0;
async function worker() {
  while (next < urls.length) {
    const url = urls[next++];
    const result = { url, ...(await warm(url)) };
    results.push(result);
    if (!result.ok) console.log(`  실패 ${result.status} ${url}`);
    if (results.length % 250 === 0) console.log(`  ${results.length}/${urls.length}`);
  }
}
await Promise.all(Array.from({ length: concurrency }, worker));

const count = (key) =>
  Object.entries(results.reduce((acc, r) => ((acc[r[key]] = (acc[r[key]] ?? 0) + 1), acc), {}))
    .map(([k, v]) => `${k} ${v}`)
    .join(", ");
const failed = results.filter((r) => !r.ok);
const retried = results.filter((r) => r.attempt > 1).length;
console.log(`\n완료 ${((Date.now() - started) / 1000).toFixed(1)}초 — 성공 ${results.length - failed.length}, 실패 ${failed.length}, 재시도 ${retried}`);
console.log(`상태 코드: ${count("status")}`);
console.log(`cf-cache-status: ${count("cache")}`);
if (failed.length) process.exitCode = 1;
