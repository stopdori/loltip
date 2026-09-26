// app/data/matchups/braum/braum_ekko.ts
import type { MatchupSummary } from "../_types";

export const braum_ekko: MatchupSummary = {
  champs: ["braum", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 에코 평타, Q, E(평타), R을 막을([[DAMAGE_NULLIFY]]) 수 있음. 단, 에코 R은 중심방향을 바라봐야 유효", "브라움 E(방패)로 에코 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음. 에코 Q의 [[SLOW]]는 걸리지 않고, 투사체 삭제. ", "브라움 P의 [[STUN]]로 에코 E을 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 에코 E를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Ekko's basic attacks, Q, E (basic attacks) and R. However, R only applies when facing toward the center.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Ekko's Q. Ekko's Q [[SLOW]] does not apply and the projectile is deleted.", "Braum's P [[STUN]] cannot interrupt Ekko's E. However, the [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Ekko's E"],
    },
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 브라움 W의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 브라움 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 브라움 Q의 [[STUN]], R의 [[AIRBORNE]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[STUN]], [[AIRBORNE]]은 남아있음."],
      en: [],
    },
  },
};
