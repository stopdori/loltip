import { readFileSync, writeFileSync } from 'fs';

const translations = {
  braum_lissandra: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Lissandra's basic attacks, P, Q, W, E, and R.\nNote: For Lissandra's R, Braum must hold the shield facing outward (away from the center).\nThis applies whether R is cast on Lissandra herself, on Braum, or on a Braum ally.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Lissandra's basic attacks, Q, and E.\nNote: Lissandra's Q is immediately ''deleted'' — the spreading projectiles behind it also disappear.\nNote: Lissandra's E is immediately ''deleted'' — Lissandra cannot use E2 afterward."]
  },
  braum_lucian: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Lucian's basic attacks (first hit), Q, W, and R (first hit).\nNote: Lucian's W mark remains.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Lucian's basic attacks and R.", "Braum's P [[STUN]] cannot interrupt Lucian's E. Note: [[STUN]] still applies", "Braum's R [[AIRBORNE]] can interrupt Lucian's E"]
  },
  braum_lulu: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Lulu's basic attacks (first hit), Q (first hit), and E.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Lulu's basic attacks, Q, and W ([[POLYMORPH]]).\nNote: If Lulu's W ([[POLYMORPH]]) is cast on a Braum ally behind the shield, Braum is hit instead.\nNote: Skills cast on Lulu's allies cannot be blocked by Braum's E (shield)."]
  },
  braum_lux: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Lux's basic attacks, P, Q, E, and R.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Lux's basic attacks, Q, and E.\nNote: Lux's Q is immediately ''deleted'' and does not pass through. [[ROOT]] still applies.\nNote: If Braum's E (shield) blocks the path of Lux's E while traveling, it stops immediately.", "Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Lux's R (channel)"]
  },
  braum_malphite: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Malphite's basic attacks, Q, W (basic attacks, shockwave), E, and R.\nNote: Malphite's E [[AS_DOWN]] and R [[AIRBORNE]] still apply.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Malphite's Q.\nNote: Malphite's Q [[SLOW]] and Malphite's own [[MS_UP]] remain effective"]
  },
  braum_malzahar: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Malzahar's basic attacks, Q, and W (first hit).\nNote: For Malzahar's Q, Braum must face the direction the Q spawns (perpendicular to Malzahar), not the direction Malzahar is facing.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Malzahar's basic attacks.", "Braum's P [[STUN]] cannot interrupt Malzahar's R. Note: [[STUN]] still applies", "Braum's R [[AIRBORNE]] can interrupt Malzahar's R"],
    champ_en: ["Malzahar's P [[CC_IMMUNE]] prevents Braum's P [[STUN]] and R [[AIRBORNE]] from affecting him.", "Malzahar's Q [[SILENCE]] cannot interrupt Braum's W movement.", "Malzahar's R [[SUPPRESS]] can interrupt Braum's W movement.", "Malzahar's Q [[SILENCE]] and R [[SUPPRESS]] cannot interrupt Braum's R (channel)."]
  },
  braum_maokai: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Maokai's basic attacks, Q, W, E, empowered E (first hit), and R.\nNote: Even if blocked by Braum's E (shield), Maokai's P (basic attack) still triggers Maokai's [[HEAL]].", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Maokai's Q, E, and R.\nNote: Maokai's Q area damage still applies, and [[SLOW]] and [[KNOCKBACK]] remain — only the projectile is immediately ''deleted''.\nNote: When Maokai's E (sapling) is thrown, blocking its path with Braum's E (shield) stops it immediately."]
  },
  braum_masteryi: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Master Yi's basic attacks, P (first basic attack hit), and Q (first hit).\nNote: Master Yi's E true damage cannot be blocked.", "Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Master Yi's W"]
  },
  braum_mel: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Mel's basic attacks (first hit), Q (first hit), W (reflected Braum Q/R), E (first tick), and R.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Mel's basic attacks, Q, W ([[REFLECT]]ed Braum Q/R), and E.\nNote: [[REFLECT]]ed Braum Q retains [[SLOW]], Braum P, and Mel P (1 Dominance stack).\nNote: [[REFLECT]]ed Braum R retains [[AIRBORNE]] and Mel P (1 Dominance stack).\nNote: Mel's E is immediately ''deleted'' — no [[ROOT]], and only minimum Dominance stacks (4) are applied.", "Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Mel's R"],
    champ_en: ["Mel's W ([[REFLECT]]) can reflect Braum's Q and R.\nNote: Reflecting Braum's Q grants Braum's P and 1 Dominance stack.\nNote: Reflecting Braum's R grants 1 Dominance stack.", "Mel's E [[ROOT]] can interrupt Braum's W movement."]
  },
  braum_milio: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Milio's basic attacks, P (basic attack), and Q.\nNote: Milio's P bonus damage can be blocked, but the periodic bonus damage cannot.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Milio's Q.\nNote: Milio's basic attacks cannot be blocked.\nNote: Milio's Q [[KNOCKBACK]] still applies, and there is no landing area damage."]
  },
  braum_missfortune: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Miss Fortune's basic attacks, Q, E (first tick), and R (first tick).", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Miss Fortune's basic attacks, Q, and R.\nNote: If Miss Fortune's Q hits Braum's E (shield) first, there is no bouncing projectile.", "Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Miss Fortune's R (channel)"]
  },
  braum_mordekaiser: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Mordekaiser's basic attacks, Q, and E.\nNote: For Mordekaiser's E, Braum must hold the shield facing away from Mordekaiser.\nNote: Mordekaiser's E [[GRAB]] still applies."]
  },
  braum_morgana: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Morgana's basic attacks, Q, W (first instance), and R ([[TETHER]]).\nNote: R's first hit cannot be blocked — only the second hit ([[TETHER]]) can be [[DAMAGE_NULLIFY]]d.\nNote: R's second hit [[STUN]] still applies.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Morgana's basic attacks and Q.\nNote: Morgana's Q [[ROOT]] still applies."]
  },
  braum_naafiri: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Naafiri's basic attacks, Q1, Q2, E, and R.\nNote: Naafiri's bleed damage cannot be blocked.\nNote: Q2's [[LIFESTEAL]] remains effective", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Naafiri's Q1 and Q2.", "Braum's P [[STUN]] cannot interrupt Naafiri's R. Note: [[STUN]] still applies", "Braum's R [[AIRBORNE]] can interrupt Naafiri's R"]
  },
  braum_nami: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Nami's basic attacks, Q, W (basic attack), E, and R.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Nami's basic attacks, Q, W (varies by champion), E, and R.\nNote: If Braum's E (shield) blocks Nami's Q path, Q immediately triggers and [[SUSPENDING]] is applied.\nNote: Nami's W [[SLOW]] still applies.\nNote: If Nami's E is cast on an enemy and Braum blocks its path, Braum is hit instead. (Nami's E cast on allies cannot be blocked.)"]
  },
  braum_nasus: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Nasus's basic attacks, Q, E (initial damage), and R (first tick)."]
  },
  braum_nautilus: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Nautilus's basic attacks, P (basic attack), Q, E, and R.\nNote: Nautilus's P (basic attack) [[ROOT]] still applies.\nNote: Nautilus's Q [[GRAB]] still applies.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Nautilus's Q. Other skills cannot be blocked.", "Braum's P [[STUN]] cannot interrupt Nautilus's Q. Note: [[STUN]] still applies", "Braum's R [[AIRBORNE]] can interrupt Nautilus's Q (grab phase)"]
  },
  braum_neeko: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Neeko's basic attacks, Q (first hit), W (3rd empowered auto), E, and R.\nNote: Neeko's R deals no damage at all", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Neeko's basic attacks, Q, and E.\nNote: If Braum's E (shield) blocks Neeko's Q path, it immediately triggers.\nNote: Neeko's W (3rd empowered auto) is not a projectile and cannot be blocked.\nNote: Neeko's E [[ROOT]] still applies.", "Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Neeko's R", "When Braum hits Neeko with basic attacks or Q, P stacks are applied.\nAt this point, if Neeko uses W to become [[INVISIBILITY]] and a clone appears, you can identify the real Neeko."]
  },
  braum_nidalee: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Nidalee (human form) basic attacks and Q / (Cougar form) basic attacks, Q, W, and E.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Nidalee (human form) basic attacks and Q.\nNote: Nidalee's P triggered by human form Q still applies.", "Braum's P [[STUN]] cannot interrupt Nidalee Cougar form W. Note: [[STUN]] still applies", "Braum's R [[AIRBORNE]] can interrupt Nidalee Cougar form W"]
  },
  braum_nilah: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Nilah's basic attacks, empowered basic attacks, Q, E, and R.", "Braum's P [[STUN]] cannot interrupt Nilah's E. Note: [[STUN]] still applies", "Braum's R [[AIRBORNE]] can interrupt Nilah's E"],
    champ_en: ["Nilah's W [[DODGE]] can ignore Braum's basic attacks, including P stack application."]
  },
  braum_nocturne: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Nocturne's basic attacks, P (basic attack), Q, and R2.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Nocturne's Q.\nNote: If Nocturne's Q is blocked by Braum's E (shield), the Q immediately disappears — but the trail it leaves on Braum remains.", "Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Nocturne's R2."]
  },
  braum_nunu: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Nunu's basic attacks, Q, W, E (first tick), E ([[ROOT]]), and R.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Nunu's W and E.\nNote: Nunu's W doesn't hit Braum's shield directly — it hits Braum and disappears, dealing area damage. [[AIRBORNE]] still applies.\nNote: Nunu's E [[ROOT]] still applies.", "Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Nunu's W (channel) and R (cast focus)"]
  },
  braum_olaf: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Olaf's basic attacks and Q.\nNote: Olaf's E cannot be blocked by Braum's E (shield).", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Olaf's Q.\nNote: Olaf's Q immediately falls to the ground when blocked. Note: [[AR_SHRED]] still applies."]
  },
  braum_orianna: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Orianna's basic attacks, Q, W, E, and R.\nNote: For all of Orianna's skills (Q, W, E, R), Braum must hold the shield facing toward the ball.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Orianna's basic attacks, Q, and E.\nNote: If Braum's E (shield) blocks the path of Orianna's Q or E, the ball stops in front of the shield."]
  },
  braum_ornn: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Ornn's basic attacks, Q, W (first tick), E, and R1.\nNote: R2 cannot be [[DAMAGE_NULLIFY]]d.\nNote: For Ornn's E, if Braum's E (shield) blocks the charge, the wall area damage is also ignored.\nIf Braum does not block the charge and only wants to block the wall area damage, the shield must face the wall. Note: E's [[AIRBORNE]] still applies.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Ornn's Q, R1, and R2.\nNote: If Braum's E (shield) blocks Ornn's Q path, it is immediately ''deleted'' — no [[WALL]] is created.", "Braum's P [[STUN]] cannot interrupt Ornn's E. Note: [[STUN]] still applies", "Braum's R [[AIRBORNE]] can interrupt Ornn's E"]
  },
  braum_pantheon: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Pantheon's basic attacks, Q, Q (javelin), W (skill), W (empowered auto first hit), E (first tick), R (spear), and R (landing).\nNote: If Braum blocks the falling spear from Pantheon's R, the landing damage cannot be blocked.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Pantheon's Q (javelin).", "Braum's P [[STUN]] cannot interrupt Pantheon's W. Note: [[STUN]] still applies", "Braum's R [[AIRBORNE]] can interrupt Pantheon's W", "Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Pantheon's R (channel)."]
  },
  braum_poppy: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Poppy's basic attacks, P (basic attack), Q (initial damage), Q (explosion damage), W, E, R, and R (charge).\nNote: Only one of Q's initial or explosion damage can be [[DAMAGE_NULLIFY]]d at a time.\nNote: For Poppy's W, if Braum holds the shield toward Poppy while moving via W on an ally, Braum can [[DAMAGE_NULLIFY]] the damage.\nAt this time, Poppy's W [[GROUNDED]] still applies.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Poppy's P (basic attack) and R (charge).\nNote: Even if Braum blocks Poppy's P, Poppy's P (shield) still drops to the ground.", "Braum's P [[STUN]] cannot interrupt Poppy's E.", "Braum's R [[AIRBORNE]] can interrupt Poppy's E", "Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Poppy's R (channel)"],
    champ_en: ["Poppy's W [[GROUNDED]] can interrupt Braum's W movement.", "Poppy's E can interrupt Braum's W movement."]
  },
  braum_pyke: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Pyke's basic attacks, Q, Q (charge), and E.\nNote: For Pyke's E, Braum must hold the shield toward Pyke's afterimage.\nNote: Pyke's R cannot be blocked.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Pyke's Q, Q (charge), and E.\nNote: Pyke's Q (charge) [[GRAB]] still applies.\nNote: For Pyke's E, the shield must face the afterimage.\nNote: Pyke's E [[STUN]] still applies.", "Braum's P [[STUN]] cannot interrupt Pyke's E. Note: [[STUN]] still applies", "Braum's R [[AIRBORNE]] can interrupt Pyke's E"]
  },
  braum_qiyana: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Qiyana's basic attacks, Q, Grass Q, Water Q, Earth Q, E, and R.\nQiyana's R has varied hitboxes.\n1. When R is used near a river or brush, hold Braum's E (shield) facing Qiyana to block the explosion.\n2. When R is used on a wall, hold Braum's E (shield) facing the wall to block the wall explosion.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Qiyana's Grass Q, Water Q, Earth Q, and R.\nNote: Qiyana's Grass Q is immediately deleted upon hitting the shield, stopping the [[INVISIBILITY]] brush movement.\nNote: Qiyana's Water Q and Earth Q are immediately deleted. Water Q's [[SLOW]] and [[ROOT]] still apply.\nQiyana's R projectile disappears when it hits the shield. [[KNOCKBACK]] still applies.", "Braum's P [[STUN]] cannot interrupt Qiyana's E. Note: [[STUN]] still applies", "Braum's R [[AIRBORNE]] can interrupt Qiyana's E"]
  },
  braum_quinn: {
    braum_en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Quinn's basic attacks, P (basic attack), Q, E, and R.\nNote: Quinn's E [[SLOW]] and [[KNOCKBACK]] still apply.", "Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Quinn's basic attacks, P (basic attack), and Q.\nNote: Quinn's Q [[NEARSIGHT]] still applies.", "Braum's P [[STUN]] and R [[AIRBORNE]] can interrupt Quinn's R (channel) and R (active)."]
  }
};

const baseDir = 'app/data/matchups/braum';

for (const [filename, trans] of Object.entries(translations)) {
  const filePath = `${baseDir}/${filename}.ts`;
  let content = readFileSync(filePath, 'utf8');
  const original = content;

  // Replace braum section: en: [""] -> translation
  if (trans.braum_en) {
    const enStr = JSON.stringify(trans.braum_en);
    content = content.replace('      en: [""],', `      en: ${enStr},`);
    // handle en: [] (empty) - only first occurrence = braum section for mel
    if (filename === 'braum_mel') {
      content = content.replace('      en: [],', `      en: ${enStr},`);
    }
  }

  // Replace champ section: en: [] -> translation (last occurrence)
  if (trans.champ_en) {
    const enStr = JSON.stringify(trans.champ_en);
    // Replace the LAST en: []
    const lastIdx = content.lastIndexOf('      en: [],');
    if (lastIdx !== -1) {
      content = content.slice(0, lastIdx) + `      en: ${enStr},` + content.slice(lastIdx + '      en: [],'.length);
    }
  }

  if (content !== original) {
    writeFileSync(filePath, content, 'utf8');
    console.log(`updated: ${filename}.ts`);
  } else {
    console.log(`no change: ${filename}.ts`);
  }
}
