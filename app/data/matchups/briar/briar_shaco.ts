// app/data/matchups/briar/briar_shaco.ts
import type { MatchupSummary } from "../_types";

export const briar_shaco: MatchupSummary = {
  champs: ["briar", "shaco"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]], E의 [[KNOCKBACK]], R의 [[FEAR]]로 샤코 Q의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]], [[FEAR]]는 남아있음.", 
        "E의 [[CAST_COMMIT]]으로 샤코 W, R의 [[FEAR]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 샤코 W, R의 [[FEAR]]를 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 샤코 Q의 [[BLINK]], R의 [[UNTARGETABLE]] [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 샤코와 충돌하면 [[HOMING]] 종료.", 
        "R2의 [[HOMING]] [[DASH]]으로 샤코 R의 [[UNTARGETABLE]] [[BLINK]]을 따라갈 수 있음. \n 단, 샤코와 충돌하면 [[HOMING]] 종료. \n 단, 샤코가 R로 사라졌을 때 브라이어가 날아온다면, 샤코가 사라진 자리에 도착하고 [[HOMING]] 종료. \n 사라진 대상은 피해를 입지 않음."],
      en: ["Q [[STUN]], E [[KNOCKBACK]], and R [[FEAR]] cannot interrupt Shaco's Q [[BLINK]]. \n However, the [[STUN]] and [[FEAR]] still apply.",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Shaco's W or R [[FEAR]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Shaco's W or R [[FEAR]].",
        "R2 [[HOMING]] [[DASH]] can follow Shaco's Q [[BLINK]] and R [[UNTARGETABLE]] [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Shaco.",
        "R2 [[HOMING]] [[DASH]] can follow Shaco's R [[UNTARGETABLE]] [[BLINK]]. \n However, the [[HOMING]] ends upon colliding with Shaco. \n However, if Briar is already in flight when Shaco vanishes with R, she arrives at the spot where Shaco disappeared and the [[HOMING]] ends. \n The vanished target takes no damage."],
    },
    shaco: {
      ko: [],
      en: [],
    },
  },
};
