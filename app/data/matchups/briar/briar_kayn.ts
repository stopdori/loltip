// app/data/matchups/briar/briar_kayn.ts
import type { MatchupSummary } from "../_types";

export const briar_kayn: MatchupSummary = {
  champs: ["briar", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 케인, 그암, 다르킨 Q의 돌진단계의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 회전단계까지 문제없이 시전.",
        "Q의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[FEAR]]로 케인, 그암, 다르킨 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 다르킨 W의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 다르킨 W의 [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 케인 / 그암 / 다르킨 Q, E의 [[DASH]] / R의 [[UNTARGETABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 대상과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt the dash phase of Kayn's (base, Shadow Assassin, Darkin) Q [[DASH]]. \n However, the [[STUN]] still applies. \n The spin-slash phase still casts normally.",
        "Q [[STUN]] / E [[KNOCKBACK]] / R [[FEAR]] can interrupt Kayn's (base, Shadow Assassin, Darkin) E (wall movement) [[SKILL_CHANNEL]] [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Kayn's (Darkin) W [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Kayn's (Darkin) W [[AIRBORNE]].",
        "R2 [[HOMING]] [[DASH]] can follow Kayn's (base / Shadow Assassin / Darkin) Q and E [[DASH]] / R [[UNTARGETABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with the target."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
