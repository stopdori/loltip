// OpenNext(Cloudflare Workers) 빌드 설정 — 빌드 때 만든 페이지를 정적 에셋(ASSETS 바인딩)에서 읽는 읽기 전용 캐시.
// R2를 쓰지 않으므로 요청 때 렌더링한 페이지(빌드에 없는 상호작용 쌍 등)는 캐시에 저장되지 않는다.
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
