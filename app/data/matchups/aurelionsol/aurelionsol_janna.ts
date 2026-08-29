// app/data/matchups/aurelionsol/aurelionsol_janna.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_janna: MatchupSummary = {
  champs: ["aurelionsol", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]], R(천상강림)의 [[AIRBORNE]]으로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] and R (Falling Star) [[AIRBORNE]] can interrupt Janna's R [[SKILL_CHANNEL]]."],
    },
    janna: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]], W의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and R's [[KNOCKBACK]] can interrupt Aurelion Sol's Q [[SKILL_CHANNEL]] and W [[SKILL_CHANNEL]] [[DASH]]."],
    },
  },
};
