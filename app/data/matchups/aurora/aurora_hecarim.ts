// app/data/matchups/aurora/aurora_hecarim.ts
import type { MatchupSummary } from "../_types";

export const aurora_hecarim: MatchupSummary = {
  champs: ["aurora", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[FEAR]]는 남아있음. \n 단, E의 [[KNOCKBACK]]으로 밀려나다가 [[DASH]] 발동.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[FEAR]]는 남아있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Hecarim's E [[KNOCKBACK]] and R [[FEAR]] and continue [[DASH]]. \n However, the [[FEAR]] still applies. \n However, the [[DASH]] activates while being knocked back by E's [[KNOCKBACK]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Hecarim's E [[KNOCKBACK]] and R [[FEAR]] and continue [[DASH]]. \n However, the [[FEAR]] still applies."],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 오로라 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Aurora's W and E [[DASH]]."],
    },
  },
};
