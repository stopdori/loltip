// app/data/matchups/_index.ts
import type { MatchupSummary } from "./_types";

export type MatchupLoadResult =
  | { status: "ok"; data: MatchupSummary }
  | { status: "missing"; key: string };

export async function getMatchupSummary(
  a?: string,
  b?: string
): Promise<MatchupLoadResult | null> {
  if (!a || !b || a === b) return null;

  const [base, other] = a < b ? [a, b] : [b, a];
  const key = `${base}_${other}`;

  try {
    const mod = await import(`./${base}/${key}`);
    const data = mod[key] as MatchupSummary | undefined;

    if (!data) {
      return { status: "missing", key };
    }

    return { status: "ok", data };
  } catch {
    return { status: "missing", key };
  }
}
