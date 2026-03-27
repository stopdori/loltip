import type { ChampSkill, ChampData } from "../types";

export async function getChampSkill(
  champId: string
): Promise<ChampSkill> {
  try {
    const mod = await import(`../../champs/${champId}`);
    const champ: ChampData | undefined = mod.default;

    if (!champ) return {};

    const skills = champ.skills;
    if (!skills) return {};

    return skills;
  } catch (e) {
    console.error("[getChampSkill] failed:", champId, e);
    return {};
  }
}