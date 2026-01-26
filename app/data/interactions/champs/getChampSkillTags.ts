export async function getChampSkillTags(
  champId: string
): Promise<ChampSkillTags> {
  try {
    const mod = await import(`../../champs/${champId}`);
    const champ: ChampSkill | undefined = mod.default;

    if (!champ) return {};

    return {
      ...champ.skills,
      notes: champ.notes ?? [],
    };
  } catch (e) {
    console.error("[getChampSkillTags] failed:", champId, e);
    return {};
  }
}
