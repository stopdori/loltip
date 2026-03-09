// app/data/matchups/braum/braum_irelia.ts
import type { MatchupSummary } from "../_types";

export const braum_irelia: MatchupSummary = {
  champs: ["braum", "irelia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 이렐리아 평타, Q, W, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, 이렐리아 E는 이렐리아 방향을 바라봐야 적용.", "브라움 E(방패)로 이렐리아 E를 [[INTERCEPT_PROJECTILE]] 할 수 있음. 단, 이렐리아 E는 조건부로 막을 수 있음.\n 이렐리아가 E1 E2를 사용했을때 브라움이 E(방패)로 막으면 이렐리아 의도대로 스킬이 사용되고 P(스택), Q의 표식이 생김.\n브라움이 E(방패)를 들고 있을때, 이렐리아 E1을 사용하고 E2를 브라움 방패 넘어로 사용 할 경우.\nE2가 방패에 막히고 브라움에게 P(스택), Q의 표식은 생김.", "이렐리아 R은 브라움 E(방패)로 [[INTERCEPT_PROJECTILE]] 수 있지만, 정상적으로 발동", "브라움 P의 [[STUN]]로 이렐리아 Q, W를 멈출 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 이렐리아 W을 끊을 수 없음", "브라움 R의 [[AIRBORNE]]으로 이렐리아 Q을 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Irelia's basic attacks, Q, W, E and R.\nHowever, Irelia's E requires facing Irelia's direction to apply.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Irelia's E conditionally.\nWhen Irelia uses E1 and E2, if Braum blocks with E(Shield), the skill activates as intended and P(stack) and Q marks are applied to Braum.\nWhen Braum is holding E(Shield) and Irelia uses E1, then aims E2 past Braum's shield, E2 is blocked by the shield and P(stack) and Q marks are applied to Braum.", "Irelia's R can be [[INTERCEPT_PROJECTILE]]ed by Braum's E(Shield), but activates normally.", "Braum's P [[STUN]] cannot stop Irelia's Q or W. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] cannot interrupt Irelia's W.", "Braum's R [[AIRBORNE]] can interrupt Irelia's Q."],
    },
    irelia: {
      ko: [],
      en: [],
    },
  },
};
