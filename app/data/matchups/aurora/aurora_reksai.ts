// app/data/matchups/aurora/aurora_reksai.ts
import type { MatchupSummary } from "../_types";

export const aurora_reksai: MatchupSummary = {
  champs: ["aurora", "reksai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: [
        "E(준비단계)의 [[CC_BUFFER]], R의 [[UNSTOPPABLE]] [[DASH]]으로 렉사이 매복폼 [[BA]]의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음.", 
        "R의 [[UNTARGETABLE]] [[BLINK]]으로 렉사이 R의 데미지가 무효화될 수 있음. \n 방법은 [[UNTARGETABLE]] 상태일 때 접촉하면 무효."],
      en: ["E (wind-up phase) [[CC_BUFFER]] and R [[UNSTOPPABLE]] [[DASH]] can ignore Rek'Sai's burrowed form [[BA]] [[AIRBORNE]] and continue [[DASH]].",
        "R [[UNTARGETABLE]] [[BLINK]] can nullify Rek'Sai's R damage. \n It is nullified when it makes contact while Aurora is [[UNTARGETABLE]]."],
    },
    reksai: {
      ko: [],
      en: [],
    },
  },
};
