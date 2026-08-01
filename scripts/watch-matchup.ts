// scripts/watch-matchup.ts
// app/data/matchups 하위 .ts 파일 변경을 감시하다가, 변경이 생기면
// scripts/gen-matchup-json.ts를 자동 재실행해서 _compiled.json을 갱신한다.
//
// _index.ts는 _compiled.json만 읽으므로, 이 워처를 켜두지 않으면
// 매치업 .ts 파일을 고쳐도 npm run gen:matchup-json을 수동으로 매번 실행해야 한다.

import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

const MATCHUP_DIR = path.resolve("app/data/matchups");
const DEBOUNCE_MS = 300;

let timer: NodeJS.Timeout | null = null;
let running = false;
let pending = false;

function runGenerator() {
  if (running) {
    pending = true;
    return;
  }
  running = true;
  const child = spawn(process.execPath, ["scripts/gen-matchup-json.ts"], {
    stdio: "inherit",
  });
  child.on("exit", () => {
    running = false;
    if (pending) {
      pending = false;
      runGenerator();
    }
  });
}

function scheduleRun(filename: string | null) {
  if (!filename) return;
  const base = path.basename(filename);
  // _types.ts, _index.ts, _compiled.json, _loader.ts 등은 감시 대상 아님
  if (base.startsWith("_")) return;
  if (!base.endsWith(".ts")) return;

  if (timer) clearTimeout(timer);
  timer = setTimeout(runGenerator, DEBOUNCE_MS);
}

console.log(`👀 매치업 파일 변경 감시 시작: ${path.relative(process.cwd(), MATCHUP_DIR)}`);
runGenerator(); // 시작 시 한 번 동기화

fs.watch(MATCHUP_DIR, { recursive: true }, (_event, filename) => {
  scheduleRun(filename);
});
