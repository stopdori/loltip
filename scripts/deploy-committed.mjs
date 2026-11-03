// 커밋된 내용만 Cloudflare Workers에 배포: 임시 git 워크트리에 커밋을 꺼내 OpenNext 빌드·배포 → 캐시 예열 → 정리.
// 메인 폴더의 미커밋 파일(작업 중인 챔피언·매치업 파일, .env.local 등)은 워크트리에 없으므로 배포에 섞이지 않는다.
// 빌드는 워크트리 안에서만 하므로 메인 폴더의 .next와 실행 중인 dev 서버도 건드리지 않는다.
//
// 사용법: npm run deploy [-- <커밋/브랜치, 기본 HEAD>] [--build-only] [--no-warm] [--keep]
//   --build-only  빌드까지만 하고 배포·예열은 하지 않는다 (배포 전 확인용)
//   --no-warm     배포 후 예열(npm run warm)을 건너뛴다
//   --keep        끝난 뒤 임시 워크트리를 지우지 않는다 (빌드 결과 확인용)

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const WARM_BASE = "https://loltip.com";

const args = process.argv.slice(2);
const ref = args.find((a) => !a.startsWith("--")) ?? "HEAD";
const buildOnly = args.includes("--build-only");
const noWarm = args.includes("--no-warm");
const keep = args.includes("--keep");

function run(cmd, cwd, { capture = false } = {}) {
  console.log(`\n$ ${cmd}${cwd === process.cwd() ? "" : `  (${cwd})`}`);
  const res = spawnSync(cmd, {
    cwd,
    shell: true,
    stdio: capture ? ["ignore", "pipe", "inherit"] : ["ignore", "inherit", "inherit"],
    encoding: "utf8",
  });
  if (res.status !== 0) throw new Error(`실패 (exit ${res.status}): ${cmd}`);
  return capture ? res.stdout.trim() : "";
}

const repo = run("git rev-parse --show-toplevel", process.cwd(), { capture: true });
const commit = run(`git rev-parse --verify "${ref}^{commit}"`, repo, { capture: true });
const subject = run(`git log -1 --format=%s ${commit}`, repo, { capture: true });
const dir = path.join(os.tmpdir(), `loltip-deploy-${commit.slice(0, 8)}-${Date.now()}`);
console.log(`배포 대상 커밋: ${commit.slice(0, 8)} ${subject}`);
if (run(`git branch -r --contains ${commit}`, repo, { capture: true }) === "") {
  console.log("⚠ 이 커밋은 아직 GitHub에 푸시되지 않았다 (배포는 그대로 진행).");
}

const started = Date.now();
let failed = false;
try {
  run(`git worktree add --detach "${dir}" ${commit}`, repo);
  run("npm ci --no-audit --no-fund", dir);

  // 커밋된 매치업 .ts로 _compiled.json을 새로 만든다 (gen:matchup-json을 빠뜨리고 커밋했어도 .ts 기준으로 배포됨).
  run("npm run gen:matchup-json", dir);
  const compiledDiff = spawnSync("git diff --quiet --ignore-cr-at-eol -- app/data/matchups/_compiled.json", {
    cwd: dir,
    shell: true,
  });
  if (compiledDiff.status !== 0) {
    console.log("⚠ 커밋된 _compiled.json이 커밋된 매치업 .ts와 달라 새로 생성한 것으로 빌드한다 (메인 폴더에서 gen:matchup-json 후 커밋 권장).");
  }

  run("npx opennextjs-cloudflare build", dir);
  if (buildOnly) {
    console.log("\n--build-only: 배포·예열은 건너뛴다.");
  } else {
    run("npx opennextjs-cloudflare deploy", dir);
    if (!noWarm) run(`npm run warm -- ${WARM_BASE}`, dir);
  }
} catch (e) {
  failed = true;
  console.error(`\n✖ ${e.message}`);
} finally {
  if (keep) {
    console.log(`\n--keep: 임시 워크트리를 남겨둔다: ${dir}\n  정리: git worktree remove --force "${dir}"`);
  } else if (fs.existsSync(dir)) {
    spawnSync(`git worktree remove --force "${dir}"`, { cwd: repo, shell: true, stdio: "inherit" });
    // Windows에서 node_modules 일부가 잠겨 남는 경우가 있어 한 번 더 지운다.
    fs.rmSync(dir, { recursive: true, force: true, maxRetries: 5, retryDelay: 1000 });
    spawnSync("git worktree prune", { cwd: repo, shell: true });
  }
}

console.log(`\n${failed ? "실패" : "완료"} ${((Date.now() - started) / 1000).toFixed(0)}초 — 커밋 ${commit.slice(0, 8)}`);
if (failed) process.exitCode = 1;
