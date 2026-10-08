// app/data/matchups/ekko/ekko_hecarim.ts
import type { MatchupSummary } from "../_types";

export const ekko_hecarim: MatchupSummary = {
  champs: ["ekko", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 헤카림 E의 [[DASH]], R의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. [[EXIST]] \n 단, 헤카림 R은 에코가 끝까지 따라가지 않고 충돌하면 정지.", 
        "W의 [[STUN]]로 헤카림 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]를 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[KNOCKBACK]]([[AIRBORNE]]), [[FEAR]]는 남아있음."],
      en: [""],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 에코 E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 에코 W의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Ekko's E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Ekko's W [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
