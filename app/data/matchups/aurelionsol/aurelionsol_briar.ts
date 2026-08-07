// app/data/matchups/aurelionsol/aurelionsol_briar.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_briar: MatchupSummary = {
  champs: ["aurelionsol", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 브라이어 Q, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 브라이어 Q, W의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Briar's Q and W [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Briar's Q and W [[DASH]]."],
    },
    briar: {
      ko: ["E의 [[KNOCKBACK]], R2의 [[FEAR]]로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]], W의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 아우렐리온 솔 R의 [[STUN]] / [[EMPOWERED]] R(천상강림)의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.",
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 아우렐리온 솔 E의 [[GRAB]] / R의 [[STUN]] / [[EMPOWERED]] R(천상강림)의 [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 아우렐리온 솔 W의 [[DASH]]을 따라갈 수 있음. \n 단, 아우렐리온 솔과 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's E [[KNOCKBACK]] and R2 [[FEAR]] can interrupt Aurelion Sol's Q [[SKILL_CHANNEL]] and W [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Aurelion Sol's R [[STUN]] or [[EMPOWERED]] R (Falling Star) [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Aurelion Sol's E [[GRAB]], R [[STUN]], and [[EMPOWERED]] R (Falling Star) [[AIRBORNE]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Aurelion Sol's W [[DASH]]. \n However, [[HOMING]] ends upon colliding with Aurelion Sol."],
    },
  },
};
