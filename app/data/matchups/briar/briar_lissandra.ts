// app/data/matchups/briar/briar_lissandra.ts
import type { MatchupSummary } from "../_types";

export const briar_lissandra: MatchupSummary = {
  champs: ["briar", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 리산드라 W의 [[ROOT]], R의 [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 리산드라 W의 [[ROOT]], R의 [[STUN]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 리산드라 E의 [[BLINK]]을 따라갈 수 있음. \n 단, 리산드라와 충돌하면 [[HOMING]] 종료. [[NOT_EXIST]]"],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Lissandra's W [[ROOT]] or R [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Lissandra's W [[ROOT]] and R [[STUN]].",
        "R2 [[HOMING]] [[DASH]] can follow Lissandra's E [[BLINK]]. \n However, the [[HOMING]] ends upon colliding with Lissandra."],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 브라이어 Q, W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 브라이어 Q, W의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "브라이어 Q의 [[STUN]], R2의 [[FEAR]]를 맞았을 때, 리산드라 E2를 사용할 수 없음."],
      en: [],
    },
  },
};
