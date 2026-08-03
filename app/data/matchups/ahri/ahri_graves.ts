// app/data/matchups/ahri/ahri_graves.ts
import type { MatchupSummary } from "../_types";

export const ahri_graves: MatchupSummary = {
  champs: ["ahri", "graves"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 그브 E의 [[DASH]], R(후진단계)의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Graves' E [[DASH]] and R (backstep phase) [[DASH]]."],
    },
    graves: {
      ko: ["그브 W의 [[NEAR_SIGHT]]로 아리 W, R의 [[HOMING]]을 어렵게 만들 수 있음.",
        "그브 R(준비단계)의 [[CC_BUFFER]]로 아리 E의 [[CHARM]]을 잠시 무시할 수 있음. \n 단, 그브 E(후진단계)가 종료 후 [[CHARM]]은 남아있음.", ],
      en: ["Graves' W [[NEAR_SIGHT]] makes it difficult to land Ahri's W and R [[HOMING]].", 
        "Graves' R (charge phase) [[CC_BUFFER]] allows him to temporarily ignore Ahri's E [[CHARM]]. \n However, the [[CHARM]] remains after Graves' E (backstep phase) ends."],
    },
  },
};
