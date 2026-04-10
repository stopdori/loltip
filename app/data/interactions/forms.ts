import kaisa from "../champs/kaisa";
import karma from "../champs/karma";
import khazix from "../champs/khazix";
import lissandra from "../champs/lissandra";

export type FormKey = "base" | "alt" | "alt2";

export const CHAMP_FORMS: Record<
  string,
  {
    base: { ko: string; en: string };
    alt: { ko: string; en: string };
    alt2?: { ko: string; en: string };
  }
> = {

  jayce: {
    base: { ko: "캐논", en: "Ranged" },
    alt: { ko: "해머", en: "Melee" },
  },

  nidalee: {
    base: { ko: "인간폼", en: "Human" },
    alt: { ko: "쿠거폼", en: "Cougar" },
  },

  elise: {
    base: { ko: "인간폼", en: "Human" },
    alt: { ko: "거미폼", en: "Spider" },
  },

  gnar: {
    base: { ko: "미니", en: "Mini" },
    alt: { ko: "메가", en: "Mega" },
  },

  kaisa: {
    base: { ko: "기본", en: "Basic" },
    alt: { ko: "진화", en: "Evolutions" },
    },

  karma: {
    base: { ko: "기본", en: "Basic" },
    alt: { ko: "만트라", en: "Mantra" },
  },

  // ✅ 케인 (3폼)
  kayn: {
    base: { ko: "케인", en: "Base" },
    alt: { ko: "그암", en: "Shadow" },
    alt2: { ko: "다르킨", en: "Rhaast" },
  },

  khazix: {
    base: { ko: "기본", en: "Basic" },
    alt: { ko: "진화", en: "Evolutions" },
    },
    
  kled: {
    base: { ko: "승마폼", en: "Mounted" },
    alt: { ko: "낙마폼", en: "Dismounted" },
  },

  ksante: {
    base: { ko: "기본", en: "Base" },
    alt: { ko: "변신", en: "All Out" },
  },


  reksai: {
    base: { ko: "돌출", en: "Base" },
    alt: { ko: "매복", en: "Burrowed" },
  },

  shyvana: {
    base: { ko: "기본형", en: "Human" },
    alt: { ko: "용형상", en: "Dragon" },
  },

  udyr: {
    base: { ko: "기본", en: "Base" },
    alt: { ko: "각성", en: "Awakened" },
  },

   // ✅ 흐웨이 (3폼)
  hwei: {
    base: { ko: "Q(빨강)", en: "Q Base" },
    alt: { ko: "W(파랑)", en: "W Base" },
    alt2: { ko: "E(보라)", en: "E Base" },
  },
};

export function hasForms(champId: string) {
  return !!CHAMP_FORMS[champId];
}
