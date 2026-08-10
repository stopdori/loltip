// app/data/matchups/aurora/aurora_tristana.ts
import type { MatchupSummary } from "../_types";

export const aurora_tristana: MatchupSummary = {
  champs: ["aurora", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 트리스타나 R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음. \n 단, 트리스타나 R의 [[PROJECTILE]]를 맞을 때 사용하면 늦고 맞기 2티모미터 정도 전에 사용해야 함. \n 오로라 E를 트타 R [[KNOCKBACK]] 반대 방향으로 타이밍 맞게 사용하면 거의 제자리에 머무를 수도 있음.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 트리스타나 R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Tristana's R [[KNOCKBACK]] and continue [[DASH]]. \n However, using it right as Tristana's R [[PROJECTILE]] lands is too late — it needs to be used about 2 Teemo-meters before impact. \n If Aurora times E in the opposite direction of Tristana's R [[KNOCKBACK]], she can end up staying almost in place.",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Tristana's R [[KNOCKBACK]] and continue [[DASH]]."],
    },
    tristana: {
      ko: [],
      en: [],
    },
  },
};
