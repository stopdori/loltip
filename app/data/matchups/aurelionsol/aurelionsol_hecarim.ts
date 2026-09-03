// app/data/matchups/aurelionsol/aurelionsol_hecarim.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_hecarim: MatchupSummary = {
  champs: ["aurelionsol", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 헤카림 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 헤카림 E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Hecarim's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Hecarim's E [[DASH]]."],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]], W의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 아우렐리온 솔 R의 [[STUN]], [[EMPOWERED]] R(천상강림)의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Aurelion Sol's Q [[SKILL_CHANNEL]] and W [[SKILL_CHANNEL]] [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Aurelion Sol's R [[STUN]] and [[EMPOWERED]] R (Falling Star) [[AIRBORNE]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
  },
};
