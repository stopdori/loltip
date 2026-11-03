// OpenNext(Cloudflare Workers) 빌드 설정 — ISR 캐시는 R2에 저장한다(wrangler.jsonc의 NEXT_INC_CACHE_R2_BUCKET)
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
});
