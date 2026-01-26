export type MatchupSummary = {
  champId: string;
  rating: "very_bad" | "bad" | "even" | "good";
  highlights: string[];
  tags: TagId[];
};

export const MATCHUP_SUMMARIES: MatchupSummary[] = [
  {
    champId: "garen",
    rating: "bad",
    highlights: [
      "Q 침묵 맞으면 손해 큼",
      "R 처형 체력 주의",
    ],
    tags: ["silence", "execute", "bruiser"],
  },
];