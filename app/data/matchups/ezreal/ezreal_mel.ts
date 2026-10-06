// app/data/matchups/ezreal/ezreal_mel.ts
import type { MatchupSummary } from "../_types";

export const ezreal_mel: MatchupSummary = {
  champs: ["ezreal", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ezreal: {
      ko: ["E(비전 이동)의 [[CC_BUFFER]]로 멜 E의 [[ROOT]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["E (Arcane Shift) [[CC_BUFFER]] can ignore Mel's E [[ROOT]] and [[BLINK]]. [[EXIST]] \n However, the [[ROOT]] still applies."],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 이즈리얼 평타, Q, W, E, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Ezreal's basic attacks, Q, W, E, and R [[PROJECTILE]]. [[EXIST]]"],
    },
  },
};
