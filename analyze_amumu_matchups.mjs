import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const BASE = '/c/Users/stopdori/loltip/app/data/matchups';

const VALID_TAGS = new Set([
  'ALLY_TP_OK','WALL_HOP','AA_RESET','UNTARGETABLE','TOWER_DODGE','SHIELD_BREAK','WALL',
  'SUPPRESS','TETHER','REVIVE','INVULNERABLE','REFLECT','INSEC_KICK','MS_UP','AS_UP',
  'AS_DOWN','AD_UP','AD_DOWN','AP_UP','CRIT','EXECUTE','RANGE_UP','PIERCE','DMG_REDUCE',
  'DODGE','TENACITY','VISION','REVEALED','TRUE_SIGHT','VISION_CREATE','POSITION_REVEAL',
  'POSITION_TRACK','OUTLINE_REVEAL','SPELL_SHIELD','CC_IMMUNE','CC_CLEANSE','STEALTH',
  'INVISIBILITY','CAMOUFLAGE','SLOW_RESIST','SLOW_IMMUNE','GHOSTING','WINDSHIELD',
  'PROTECTIVE_ZONE','DAMAGE_NULLIFY','INTERCEPT_PROJECTILE','Q_FLASH','W_FLASH','E_FLASH',
  'R_FLASH','LIFESTEAL','HEAL','SHIELD','MAX_HP_UP','MANA_RESTORE','ENERGY_RESTORE',
  'AR_SHRED','MR_SHRED','AR_MR_SHRED','AR_PEN','MR_PEN','AR_MR_PEN','GW','HARD_CC',
  'STUN','ROOT','SLOW','TAUNT','SLEEP','ANTI_DASH','KNOCKBACK','AIRBORNE','SUSPENDING',
  'GRAB','CHARM','SILENCE','GROUNDED','FEAR','CANCEL','BERSERK','NEARSIGHT','BLIND',
  'POLYMORPH','UNSTOPPABLE','PSEUDO_UNSTOPPABLE','THE_COPYPASTA'
]);

function extractTags(text) {
  const matches = text.match(/\[\[([^\]]+)\]\]/g) || [];
  return matches.map(m => m.slice(2, -2));
}

function checkTags(text) {
  const tags = extractTags(text);
  return tags.filter(t => !VALID_TAGS.has(t));
}

// Collect all files
const files = [];

// amumu_ files
const amumuDir = join(BASE, 'amumu');
for (const f of readdirSync(amumuDir)) {
  if (f.startsWith('amumu_') && f.endsWith('.ts')) {
    files.push(join(amumuDir, f));
  }
}

// _amumu files
for (const champDir of readdirSync(BASE)) {
  const champPath = join(BASE, champDir);
  try {
    for (const f of readdirSync(champPath)) {
      if (f.endsWith('_amumu.ts')) {
        files.push(join(champPath, f));
      }
    }
  } catch(e) {}
}

console.log(`Total files: ${files.length}`);

const tagErrors = [];
const enMissing = [];

for (const filePath of files) {
  const content = readFileSync(filePath, 'utf-8');
  const fileName = filePath.replace('/c/Users/stopdori/loltip/', '');
  
  // Check tags in all text
  const invalidTags = checkTags(content);
  if (invalidTags.length > 0) {
    tagErrors.push({ file: fileName, tags: invalidTags });
  }
  
  // Check EN sync - parse highlights
  // Look for ko/en arrays in the file
  const champBlocks = [...content.matchAll(/(\w+):\s*\{\s*ko:\s*\[([\s\S]*?)\],\s*en:\s*\[([\s\S]*?)\],?\s*\}/g)];
  
  for (const block of champBlocks) {
    const champName = block[1];
    const koRaw = block[2];
    const enRaw = block[3];
    
    // Count non-empty items
    const koItems = koRaw.trim() ? koRaw.split(/",\s*"/).filter(s => s.trim().replace(/^"+|"+$/g, '').length > 0) : [];
    const enItems = enRaw.trim() ? enRaw.split(/",\s*"/).filter(s => s.trim().replace(/^"+|"+$/g, '').length > 0) : [];
    
    // Simple: just check if en is empty or has only ""
    const enIsEmpty = enRaw.trim() === '' || enRaw.trim().replace(/"/g, '').trim() === '';
    const koIsEmpty = koRaw.trim() === '' || koRaw.trim().replace(/"/g, '').trim() === '';
    
    if (!koIsEmpty && enIsEmpty) {
      enMissing.push({ file: fileName, champ: champName });
    }
  }
}

console.log('\n=== TAG ERRORS ===');
for (const e of tagErrors) {
  console.log(`${e.file}: ${e.tags.join(', ')}`);
}

console.log('\n=== EN MISSING ===');
for (const e of enMissing) {
  console.log(`${e.file}: ${e.champ}`);
}

console.log(`\nTag errors: ${tagErrors.length}`);
console.log(`EN missing: ${enMissing.length}`);
