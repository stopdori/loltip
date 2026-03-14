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
    id: "malzahar-passive-twistedfate-q",
    question: {
      ko: "말자하의 패시브가 트위스티드 페이트의 Q를 막을 수 있나요?",
      en: "Can Malzahar's passive block Twisted Fate's Q?",
    },
    link: {
      champ1: "malzahar",
      champ2: "twistedfate",
      highlight: "malzahar-ko-0",
    },
  },
  {
    id: "sample-quiz-2",
    question: {
      ko: "샘플 퀴즈 2번 질문입니다.",
      en: "This is sample quiz question 2.",
    },
    link: {
      champ1: "aatrox",
      champ2: "ahri",
      highlight: "aatrox-ko-0",
    },
  },
  {
    id: "sample-quiz-3",
    question: {
      ko: "샘플 퀴즈 3번 질문입니다.",
      en: "This is sample quiz question 3.",
    },
    link: {
      champ1: "amumu",
      champ2: "nasus",
      highlight: "amumu-ko-0",
    },
  },
];
