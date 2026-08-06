// app/data/matchups/aphelios/aphelios_briar.ts
import type { MatchupSummary } from "../_types";

export const aphelios_briar: MatchupSummary = {
  champs: ["aphelios", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aphelios: {
      ko: [],
      en: [],
    },
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 아펠리오스 절단검(빨강) Q의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "브라이어 R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 아펠리오스 중력포(보라) Q의 [[ROOT]]을 무시할 수 있음.\n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["Briar's Q [[STUN]] can interrupt Aphelios's Severum (red) Q [[SKILL_CHANNEL]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Aphelios's Gravitum (purple) Q [[ROOT]]. \n However, the [[ROOT]] still applies after [[UNSTOPPABLE]] ends."],
    },
  },
};
