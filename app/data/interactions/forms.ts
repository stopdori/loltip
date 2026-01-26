import aurelionsol from "../champs/aurelionsol";
import heimerdinger from "../champs/heimerdinger";
import kaisa from "../champs/kaisa";
import karma from "../champs/karma";
import khazix from "../champs/khazix";
import lissandra from "../champs/lissandra";
import lulu from "../champs/lulu";
import pantheon from "../champs/pantheon";
import qiyana from "../champs/qiyana";
import yunara from "../champs/yunara";

export type FormKey = "base" | "alt" | "alt2";

export const CHAMP_FORMS: Record<
  string,
  {
    base: { ko: string; en: string };
    alt: { ko: string; en: string };
    alt2?: { ko: string; en: string };
  }
> = {

  aurelionsol: {
    base: { ko: "기본", en: "Nomal" },
    alt: { ko: "천상강림", en: "Cosmic Flight" },
  },

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

  heimerdinger: {
    base: { ko: "기본", en: "Basic" },
    alt: { ko: "강화", en: "R Enchanted" },
    },

  kaisa: {
    base: { ko: "기본", en: "Basic" },
    alt: { ko: "진화", en: "Evolutions" },
    },

  karma: {
    base: { ko: "기본", en: "Basic" },
    alt: { ko: "만트라", en: "Mantra" },
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
    base: { ko: "기본폼", en: "Base" },
    alt: { ko: "변신폼", en: "All Out" },
  },

  lissandra: {
    base: { ko: "R상대", en: "R Nomal" },
    alt: { ko: "R자신", en: "R Self" },
  },

  lulu: {
    base: { ko: "아군", en: "Base" },
    alt: { ko: "상대", en: "Enermy" },
  },

  pantheon: {
    base: { ko: "기본", en: "Base" },
    alt: { ko: "강화", en: "Enchanted" },
  },

  qiyana: {
    base: { ko: "숲", en: "Brush" },
    alt: { ko: "물", en: "River" },
    alt2: { ko: "땅", en: "Terrain" },
  },

  reksai: {
    base: { ko: "돌출", en: "Base" },
    alt: { ko: "매복", en: "Burrowed" },
  },

  rell: {
    base: { ko: "승마", en: "Mounted" },
    alt: { ko: "중갑", en: "Dismounted" },
  },

  renekton: {
    base: { ko: "기본", en: "Base" },
    alt: { ko: "강화", en: "Anger" },
  },

  rengar: {
    base: { ko: "기본", en: "Base" },
    alt: { ko: "강화", en: "Ferocity" },
  },

  // ✅ 케인 (3폼)
  kayn: {
    base: { ko: "케인", en: "Base" },
    alt: { ko: "다르킨", en: "Rhaast" },
    alt2: { ko: "그암", en: "Shadow" },
  },

  udyr: {
    base: { ko: "기본", en: "Base" },
    alt: { ko: "각성", en: "Awakened" },
  },

  yunara: {
    base: { ko: "기본", en: "Base" },
    alt: { ko: "초월", en: "Transcend" },
  },

   // ✅ 흐웨이 (3폼)
  hwei: {
    base: { ko: "Q스킬", en: "Q Base" },
    alt: { ko: "W스킬", en: "W Base" },
    alt2: { ko: "E스킬", en: "E Base" },
  },
};

export function hasForms(champId: string) {
  return !!CHAMP_FORMS[champId];
}
