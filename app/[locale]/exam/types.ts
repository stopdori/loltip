export type ExamQuestion = {
  id: number;
  question: { ko: string; en: string };
  options: { ko: string; en: string }[];
  answer: number;
  point: number;
  difficulty: "easy" | "normal" | "hard";
  explanation?: { ko: string; en: string };
};

export type ExamTier = {
  min: number;
  label: { ko: string; en: string };
  tier:
    | "iron"
    | "bronze"
    | "silver"
    | "gold"
    | "platinum"
    | "emerald"
    | "diamond"
    | "master"
    | "grandmaster"
    | "challenger";
};
