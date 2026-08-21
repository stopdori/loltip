// app/data/matchups/briar/briar_rell.ts
import type { MatchupSummary } from "../_types";

export const briar_rell: MatchupSummary = {
  champs: ["briar", "rell"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 렐 승마폼 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 렐 승마폼 W의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 \n 렐 Q의 [[STUN]] / 승마폼 W의 [[AIRBORNE]] / 낙마폼 W(탑승폼으로 [[TRANSFORM]] 했을 때)의 [[BA]] [[KNOCKBACK]], R의 [[GRAB]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 \n 렐 Q의 [[STUN]] / 승마폼 W의 [[AIRBORNE]] / 낙마폼 W의 [[BA]] [[KNOCKBACK]], R의 [[GRAB]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 렐 승마폼 W / 낙마폼 W의 [[DASH]]을 따라갈 수 있음. \n 단, 렐과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Rell's W (Mounted) [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Rell's W (Mounted) [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by \n Rell's Q [[STUN]] / W (Mounted) [[AIRBORNE]] / W (Dismounted, when [[TRANSFORM]]ing into Mounted form) [[BA]] [[KNOCKBACK]], and R [[GRAB]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore \n Rell's Q [[STUN]] / W (Mounted) [[AIRBORNE]] / W (Dismounted) [[BA]] [[KNOCKBACK]], and R [[GRAB]].",
        "R2 [[HOMING]] [[DASH]] can follow Rell's W (Mounted) / W (Dismounted) [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Rell."],
    },
    rell: {
      ko: [],
      en: [],
    },
  },
};
