import type { ChampSkillTags, ChampData } from "../types";

export async function getChampSkillTags(
  champId: string
): Promise<ChampSkillTags> {
  try {
    const mod = await import(`../../champs/${champId}`);
    const champ: ChampData | undefined = mod.default;

    if (!champ) return {};

    const skills = champ.skills;
    if (!skills) return {};

    return skills;
  } catch (e) {
    console.error("[getChampSkillTags] failed:", champId, e);
    return {};
  }
}