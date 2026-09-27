export type ExamQuestion = {
  id: string;
  source: { champ1: string; champ2: string; highlight: string };
  media?: { kind: "image" | "gif" | "video"; src: string };
  youtube?: string;
  question: { ko: string; en: string };
  options: { ko: string; en: string }[];
  answer: number;
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
