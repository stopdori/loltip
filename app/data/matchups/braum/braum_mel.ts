// app/data/matchups/braum/braum_mel.ts
import type { MatchupSummary } from "../_types";

export const braum_mel: MatchupSummary = {
  champs: ["braum", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 멜 평타(최초 한대), Q(최초 한대), W(반사된 브라움Q, R), E(최초 한틱), R을 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 멜 평타, Q, W([[REFLECT]]된 브라움 Q, 브라움 R), E를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 멜 W로 [[REFLECT]] 된 브라움 Q의 [[SLOW]], 브라움 P, 멜 P(압도 1스택)는 남아있음.\n단, 멜 W로 [[REFLECT]] 된 브라움 R의 [[AIRBORNE]], 멜 P(압도 1스택)은 남아있음.\n단, 멜 E는 즉시 ''삭제''되어 [[ROOT]]이 없고, 압도 스택을 최소(4스택)로 쌓음.", "브라움 P의 [[STUN]] R의 [[AIRBORNE]]으로 멜 R을 끊을 수 없음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Mel's basic attacks (first hit), Q (first hit), W (reflected Braum Q/R), E (first tick), and R.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Mel's basic attacks, Q, W ([[REFLECT]]ed Braum Q/R), and E.\nNote: [[REFLECT]]ed Braum Q retains [[SLOW]], Braum P, and Mel P (1 Dominance stack).\nNote: [[REFLECT]]ed Braum R retains [[AIRBORNE]] and Mel P (1 Dominance stack).\nNote: Mel's E is immediately ''deleted'' — no [[ROOT]], and only minimum Dominance stacks (4) are applied.","Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Mel's R"],
    },
    mel: {
      ko: ["멜 W([[REFLECT]])로 브라움 Q, R [[REFLECT]] 가능.\n단, 멜 W([[REFLECT]])로 브라움 Q를 [[REFLECT]]하면 브라움 P가 묻어있고 압도 1스택을 줌\n단, 멜 W([[REFLECT]])로 브라움 R을 [[REFLECT]]하면 압도 1스택을 줌.", "멜 E의 [[ROOT]]으로 브라움 W 이동을 끊을 수 있음."],
      en: ["Mel's W ([[REFLECT]]) can reflect Braum's Q and R.\nNote: Reflecting Braum's Q grants Braum's P and 1 Dominance stack.\nNote: Reflecting Braum's R grants 1 Dominance stack.","Mel's E [[ROOT]] can interrupt Braum's W movement."],
    },
  },
};
