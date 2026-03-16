// app/data/matchups/anivia/anivia_kayn.ts
import type { MatchupSummary } from "../_types";

export const anivia_kayn: MatchupSummary = {
  champs: ["anivia", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 케인(일반, 그암, 다르킨) Q, R(나오는 단계)의 이동을 끊을 수 없음.\n단, [[STUN]]은 남아있음.", "애니비아 W의 [[AIRBORNE]]로 케인 Q(돌진 단계), R(나오는 단계)를 끊을 수 있음.\n단, 케인 Q는 돌진 단계 데미지만 유효하고 회전 단계를 발동하지 않음.\n단, 케인 R은 스킬이 유효하고 이동만 끊음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Kayn's (base, Shadow Assassin, Rhaast) Q or R (exit phase) movement.\nHowever, [[STUN]] still applies.", "Anivia's W [[AIRBORNE]] can interrupt Kayn's Q (dash phase) and R (exit phase).\nHowever, for Q only the dash phase damage applies and the spin phase does not trigger.\nHowever, for R the skill effect still applies and only the movement is interrupted."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
