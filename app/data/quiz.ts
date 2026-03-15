export type QuizItem = {
  id: string;
  question: {
    ko: string;
    en: string;
  };
  link: {
    champ1: string;
    champ2: string;
    highlight: string;
  };
};

export const quizData: QuizItem[] = [
  {
    id: "sylas-r-ahri-r-stack",
    question: {
      ko: "사일러스 R로 아리 R을 훔쳐 사용해서 킬관여를 하면 스택이 늘어날까?",
      en: "If Sylas steals Ahri's R and gets a kill assist, does her stack increase?",
    },
    link: {
      champ1: "sylas",
      champ2: "ahri",
      highlight: "sylas-ko-0",
    },
  },
  {
    id: "amumu-q-bard-e",
    question: {
      ko: "아무무 Q(붕대)가 바드 E(터널)로 이동 중인 대상을 맞히면?",
      en: "What if Amumu's Q (Bandage Toss) hits a target moving through Bard's E (Magical Journey)?",
    },
    link: {
      champ1: "amumu",
      champ2: "bard",
      highlight: "amumu-ko-0",
    },
  },
  {
    id: "ambessa-r-bard-r",
    question: {
      ko: "암베사 R(저지불가) 중에 바드 R(존야)를 맞으면?",
      en: "What if Bard's R (Tempered Fate) hits Ambessa during her R (unstoppable)?",
    },
    link: {
      champ1: "ambessa",
      champ2: "bard",
      highlight: "ambessa-ko-2",
    },
  },
  {
    id: "aatrox-w-fizz-e",
    question: {
      ko: "아트록스 W(사슬)에 맞은 피즈가 E(재간둥이)를 사용하면?",
      en: "What if Fizz uses E (Playful/Trickster) after being hit by Aatrox's W (Chain)?",
    },
    link: {
      champ1: "aatrox",
      champ2: "fizz",
      highlight: "aatrox-ko-1",
    },
  },
  {
    id: "amumu-q-tahmkench-r",
    question: {
      ko: "아무무 Q(붕대)를 투척 중에 탐켄치가 R로 삼키면?",
      en: "What if Tahm Kench uses R to swallow Amumu during Q (Bandage Toss) throw phase?",
    },
    link: {
      champ1: "amumu",
      champ2: "tahmkench",
      highlight: "amumu-ko-2",
    },
  },
  {
    id: "tahmkench-r-briar-r",
    question: {
      ko: "탐켄치가 R(삼키기)로 브라이어를 삼켰을 때 브라이어 R이 발동한다면?",
      en: "What if Tahm Kench swallows Briar with R, and Briar's R activates inside?",
    },
    link: {
      champ1: "tahmkench",
      champ2: "briar",
      highlight: "briar-ko-0",
    },
  },
  {
    id: "aatrox-w-vladimir-w",
    question: {
      ko: "아트록스 W(사슬)에 맞은 블라디가 W(피웅덩이)를 사용하면?",
      en: "What if Vladimir uses W (Sanguine Pool) after being hit by Aatrox's W (Chain)?",
    },
    link: {
      champ1: "aatrox",
      champ2: "vladimir",
      highlight: "aatrox-ko-0",
    },
  },
  {
    id: "aatrox-w-malzahar-passive",
    question: {
      ko: "아트록스 W(사슬)는 말자하 P(패시브)에 적중해도 유지될까?",
      en: "Does Aatrox's W (Chain) effect persist even when hitting Malzahar's passive?",
    },
    link: {
      champ1: "aatrox",
      champ2: "malzahar",
      highlight: "aatrox-ko-0",
    },
  },
  {
    id: "akali-e-leblanc-passive",
    question: {
      ko: "아칼리 E로 르블랑 P(패시브)를 볼 수 있을까?",
      en: "Can Akali's E reveal LeBlanc's passive invisibility?",
    },
    link: {
      champ1: "akali",
      champ2: "leblanc",
      highlight: "akali-ko-1",
    },
  },
  {
    id: "brand-r-shield",
    question: {
      ko: "브랜드 R은 브라움 E(방패)에 튕기면 사라질까?",
      en: "Does Brand's R disappear after bouncing off Braum's E (shield)?",
    },
    link: {
      champ1: "brand",
      champ2: "braum",
      highlight: "braum-ko-1",
    },
  },
  {
    id: "braum-e-poppy-r",
    question: {
      ko: "브라움 E(방패)로 뽀삐 R(홈런)을 막을 수 있을까?",
      en: "Can Braum's E (Unbreakable) block Poppy's R (Heroic Charge)?",
    },
    link: {
      champ1: "braum",
      champ2: "poppy",
      highlight: "braum-ko-0",
    },
  },
  {
    id: "ambessa-r-malzahar-r",
    question: {
      ko: "암베사 R(저지불가)로 말자하 R(제압)을 무시할 수 있을까?",
      en: "Can Ambessa's R (unstoppable) ignore Malzahar's R (suppress)?",
    },
    link: {
      champ1: "ambessa",
      champ2: "malzahar",
      highlight: "ambessa-ko-2",
    },
  },
  {
    id: "aurora-r-akshan-r",
    question: {
      ko: "오로라 R(공간이동)로 아크샨 R(투사체)을 피할 수 있을까?",
      en: "Can Aurora's R (teleport) dodge Akshan's R (projectiles)?",
    },
    link: {
      champ1: "akshan",
      champ2: "aurora",
      highlight: "aurora-ko-0",
    },
  },
];
