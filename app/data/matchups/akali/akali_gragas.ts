// app/data/matchups/akali/akali_gragas.ts
import type { MatchupSummary } from "../_types";

export const akali_gragas: MatchupSummary = {
  champs: ["akali", "gragas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 그라가스 E의 [[DASH]]을 따라 갈 수 있음.", 
        "E1과 그라가스 E(배치기)가 초 근접에서 사용하고 부딪히면, 아칼리는 데미지와 [[AIRBORNE]]과 [[STUN]]. \n 단, 아칼리는 E1의 [[DASH]]은 끊기지만 [[PROJECTILE]](표창)을 성공적으로 날림.", 
        "E2와 그라가스 E(배치기)가 부딪히면, 서로 데미지가 들어가고 아칼리는 [[AIRBORNE]]과 [[STUN]].",
        "R1과 그라가스 E(배치기)가 부딪히면, \n 서로 데미지가 들어가고 아칼리는 R2를 사용할 수 있고 [[AIRBORNE]]과 [[STUN]].",
      "R2와 그라가스 E(배치기)가 부딪히면, 타이밍에 따라 다름 \n 1. 그라가스 E(배치기)를 먼저 사용한곳에 아칼리 R2를 사용하면 아칼리만 무효. \n 2. 그라가스 E(배치기)를 조금 나중에 사용하고 아칼리 R2를 사용 하면 서로 데미지가 들어가고 아칼리는 [[AIRBORNE]]과 [[STUN]]."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Gragas's E [[DASH]].", "When E1 and Gragas's E (body slam) collide at very close range, Akali takes damage, [[AIRBORNE]], and [[STUN]]. \n However, Akali's E1 [[DASH]] is interrupted but the [[PROJECTILE]] (shuriken) is successfully thrown.", "When E2 and Gragas's E (body slam) collide, both take damage and Akali is [[AIRBORNE]] and [[STUN]]ned.", "When R1 and Gragas's E (body slam) collide, \n both take damage, Akali can use R2, and Akali is [[AIRBORNE]] and [[STUN]]ned.", "When R2 and Gragas's E (body slam) collide, the result depends on timing. \n 1. If Akali uses R2 where Gragas already used E (body slam), only Akali is nullified. \n 2. If Gragas uses E (body slam) slightly later and Akali uses R2, both take damage and Akali is [[AIRBORNE]] and [[STUN]]ned."],
    },
    gragas: {
      ko: ["그라가스 R로 아칼리 E2를 끊을 수 있음"],
      en: ["Gragas's R can interrupt Akali's E2"],
    },
  },
};
