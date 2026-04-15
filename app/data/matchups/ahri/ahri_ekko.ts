// app/data/matchups/ahri/ahri_ekko.ts
import type { MatchupSummary } from "../_types";

export const ahri_ekko: MatchupSummary = {
  champs: ["ahri", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 에코 E(구르기)의 [[DASH]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Ekko's E (roll) [[DASH]]."],
    },
    ekko: {
      ko: ["에코 W의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "에코 E(순간이동단계)의 [[HOMING]]으로 아리 R의 [[DASH]]을 따라갈 수 있음.", "에코 E(경직단계)의 [[CC_BUFFER]]로 아리 E의 [[CHARM]]을 잠시 무시하고 다음 단계를 시전할 수 있음. \n 단, E(순간이동단계) 종료 후 [[CHARM]]은 남아있음."],
      en: ["Ekko's W [[STUN]] cannot interrupt Ahri's R [[DASH]]. However, the [[STUN]] still applies.", "Ekko's E (teleport phase) [[HOMING]] can follow Ahri's R [[DASH]].", "Ekko's E (stun phase) [[CC_BUFFER]] can briefly ignore Ahri's E [[CHARM]] to cast the next phase.\nHowever, the [[CHARM]] still applies after the teleport phase ends."],
    },
  },
};
