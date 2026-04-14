/**
 * Translation script for all ahri matchup files
 * Processes mismatches.json and updates en arrays
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = 'C:/Users/stopdori/loltip';

// All translations keyed by file path -> arrayIndex -> translated en array
const translations = {
  'app/data/matchups/ahri/ahri_akali.ts': {
    1: ["Ahri's E can interrupt Akali's E1, E2, R1, and R2"],
    2: ["Akali's E2 can follow Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_akshan.ts': {
    1: ["Ahri's E can interrupt Akshan's E and R"],
  },
  'app/data/matchups/ahri/ahri_alistar.ts': {
    1: ["Ahri's E can interrupt Alistar's W"],
    2: [
      "Alistar's Q and W can interrupt Ahri's R",
      "Alistar's E [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies.",
      "Alistar's R [[CC_CLEANSE]] can cleanse Ahri's E [[CHARM]]",
    ],
  },
  'app/data/matchups/ahri/ahri_ambessa.ts': {
    1: ["Ahri's E can interrupt Ambessa's P"],
  },
  'app/data/matchups/ahri/ahri_amumu.ts': {
    1: ["Ahri's E can interrupt Amumu's Q"],
    2: [
      "Amumu's Q cannot interrupt Ahri's R but can follow her. The [[STUN]] still applies.",
      "Amumu's R can interrupt Ahri's R. Both Q and R apply the same [[STUN]], but their interrupt interactions differ.",
    ],
  },
  'app/data/matchups/ahri/ahri_anivia.ts': {
    1: ["Ahri's E can interrupt Anivia's R (channeling)"],
    2: ["Anivia's W can interrupt Ahri's R\nAnivia's Q [[STUN]] cannot interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_annie.ts': {
    2: [
      "Annie's P cannot interrupt Ahri's R (Q, W, or R — none of them work)",
      "Annie's summoned R can block Ahri's E",
    ],
  },
  'app/data/matchups/ahri/ahri_aphelios.ts': {
    2: ["Aphelios's activated turret can block Ahri's E"],
  },
  'app/data/matchups/ahri/ahri_ashe.ts': {
    2: ["Ashe's R [[STUN]] cannot interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_aurelionsol.ts': {
    1: ["Ahri's E can interrupt Aurelion Sol's Q and W"],
    2: ["Aurelion Sol's E and R cannot interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_aurora.ts': {
    1: [
      "Ahri's E can interrupt Aurora's W",
      "Ahri's E can interrupt Aurora's E depending on conditions",
    ],
  },
  'app/data/matchups/ahri/ahri_azir.ts': {
    1: ["Ahri's E can interrupt Azir's E"],
    2: ["Azir's R can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_bard.ts': {
    1: ["Ahri's E can interrupt Bard's wall-travel via E"],
    2: ["Bard's Q [[STUN]] can interrupt Ahri's R. However, the [[STUN]] still applies.\nBard's R can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_belveth.ts': {
    1: ["Ahri's E can interrupt Bel'Veth's Q and W (channeling)"],
    2: ["Bel'Veth's W can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_blitzcrank.ts': {
    2: ["Blitzcrank's Q and E can interrupt Ahri's R\nBlitzcrank's R [[SILENCE]] cannot interrupt Ahri's R. However, the [[SILENCE]] still applies."],
  },
  'app/data/matchups/ahri/ahri_brand.ts': {
    2: ["Brand's Q [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies."],
  },
  'app/data/matchups/ahri/ahri_braum.ts': {
    1: ["Ahri's E can interrupt Braum's W"],
    2: [
      "Braum's E can [[DAMAGE_NULLIFY]] Ahri's basic attacks, Q, W, E, and R.\nHowever, only the first projectile hit is blocked for W.",
      "Braum's E can [[INTERCEPT_PROJECTILE]] Ahri's basic attacks, Q, W, E, and R\nHowever, the [[CHARM]] from E still applies.",
      "Braum's P [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies.",
      "Braum's R [[AIRBORNE]] can interrupt Ahri's R",
    ],
  },
  'app/data/matchups/ahri/ahri_briar.ts': {
    1: ["Ahri's E can interrupt Briar's Q"],
    2: ["Briar's Q [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies."],
  },
  'app/data/matchups/ahri/ahri_caitlyn.ts': {
    1: ["Ahri's E can interrupt Caitlyn's E and R"],
    2: ["Caitlyn's W [[ROOT]] cannot interrupt Ahri's R. However, the [[ROOT]] still applies."],
  },
  'app/data/matchups/ahri/ahri_camille.ts': {
    1: ["Ahri's E can interrupt Camille's E (grapple/dash phase)"],
    2: ["Camille's R can dodge Ahri's Q, W, E, and R"],
  },
  'app/data/matchups/ahri/ahri_cassiopeia.ts': {
    2: ["Cassiopeia's W [[GROUNDED]] can prevent Ahri from casting R\nHowever, it cannot interrupt Ahri's R once already activated"],
  },
  'app/data/matchups/ahri/ahri_chogath.ts': {
    2: ["Cho'Gath's Q can interrupt Ahri's R\nCho'Gath's W [[SILENCE]] cannot interrupt Ahri's R. However, the [[SILENCE]] still applies."],
  },
  'app/data/matchups/ahri/ahri_corki.ts': {
    1: ["Ahri's E can interrupt Corki's W"],
  },
  'app/data/matchups/ahri/ahri_darius.ts': {
    1: ["Ahri's E [[CHARM]] cannot interrupt Darius's Q or R. However, the [[CHARM]] still applies."],
    2: ["Darius's E can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_diana.ts': {
    1: ["Ahri's E can interrupt Diana's E"],
    2: ["Diana's R can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_draven.ts': {
    2: ["Draven's E can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_drmundo.ts': {
    2: ["Dr. Mundo's P can ignore Ahri's E [[CHARM]]"],
  },
  'app/data/matchups/ahri/ahri_ekko.ts': {
    1: ["Ahri's E can interrupt Ekko's E (roll)"],
    2: [
      "Ekko's W [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies.",
      "Ekko's E can follow Ahri's R depending on conditions. The exact conditions are unclear — please report if you know.",
    ],
  },
  'app/data/matchups/ahri/ahri_elise.ts': {
    1: ["Ahri's E can interrupt Elise's spider form Q"],
    2: ["The spiderlings summoned by Elise's spider form transformation can block Ahri's E"],
  },
  'app/data/matchups/ahri/ahri_evelynn.ts': {
    1: ["Ahri's E can interrupt Evelynn's E"],
    2: ["Evelynn's W [[CHARM]] can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_ezreal.ts': {
    1: ["Ahri's E cannot interrupt Ezreal's E. However, the [[CHARM]] still applies."],
  },
  'app/data/matchups/ahri/ahri_fiddlesticks.ts': {
    1: ["Ahri's E can interrupt Fiddlesticks's W (channeling) and R (channeling)"],
    2: ["Fiddlesticks's [[FEAR]] cannot interrupt Ahri's R. However, the [[FEAR]] still applies."],
  },
  'app/data/matchups/ahri/ahri_fiora.ts': {
    1: ["Ahri's E can interrupt Fiora's Q"],
    2: ["Fiora's W can ignore Ahri's E and apply a [[STUN]]"],
  },
  'app/data/matchups/ahri/ahri_fizz.ts': {
    1: ["Ahri's E can interrupt Fizz's Q"],
    2: [
      "Fizz's E can dodge Ahri's Q, W, E, and R",
      "Fizz's R [[AIRBORNE]] can interrupt Ahri's R",
    ],
  },
  'app/data/matchups/ahri/ahri_galio.ts': {
    1: ["Ahri's E can interrupt Galio's E (dash phase) and R (channeling)"],
    2: [
      "If Ahri's E hits Galio during his E (backstep phase), Galio can ignore the [[CHARM]] and continue moving. However, the [[CHARM]] still applies.",
      "Galio's W [[TAUNT]] cannot interrupt Ahri's R. However, the [[TAUNT]] still applies.",
      "Galio's E and R [[AIRBORNE]] can interrupt Ahri's R",
    ],
  },
  'app/data/matchups/ahri/ahri_gangplank.ts': {
    2: ["Gangplank's W [[CC_CLEANSE]] can cleanse Ahri's E [[CHARM]]"],
  },
  'app/data/matchups/ahri/ahri_garen.ts': {
    2: ["Garen's Q [[SILENCE]] cannot interrupt Ahri's R. However, the [[SILENCE]] still applies."],
  },
  'app/data/matchups/ahri/ahri_gnar.ts': {
    1: ["Ahri's E can interrupt Gnar's mini E and mega E"],
    2: [
      "Gnar's mega W [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies.",
      "Gnar's R can interrupt Ahri's R",
    ],
  },
  'app/data/matchups/ahri/ahri_gragas.ts': {
    1: ["Ahri's E can interrupt Gragas's E"],
    2: ["Gragas's E and R can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_graves.ts': {
    1: [
      "Ahri's E can interrupt Graves's E",
      "Ahri's E cannot interrupt Graves's R. However, the [[CHARM]] still applies.",
    ],
  },
  'app/data/matchups/ahri/ahri_gwen.ts': {
    1: ["Ahri's E can interrupt Gwen's E"],
    2: ["Gwen's W prevents Ahri's Q, W, E, and R from hitting her when cast from outside the range\nBasic attacks, W, and R aimed at Gwen disappear when they enter the range mid-flight"],
  },
  'app/data/matchups/ahri/ahri_hecarim.ts': {
    1: ["Ahri's E can interrupt Hecarim's E.\nHowever, if Hecarim has already started his attack animation, his movement stops but the ability still takes effect."],
    2: [
      "Hecarim's E can interrupt Ahri's R",
      "Hecarim's R [[FEAR]] cannot interrupt Ahri's R. However, the [[FEAR]] still applies.",
    ],
  },
  'app/data/matchups/ahri/ahri_heimerdinger.ts': {
    2: ["Heimerdinger's Q (turret) can block Ahri's E"],
  },
  'app/data/matchups/ahri/ahri_hwei.ts': {
    2: ["Hwei's EQ and EE can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_illaoi.ts': {
    1: ["Ahri's E can interrupt Illaoi's W"],
  },
  'app/data/matchups/ahri/ahri_irelia.ts': {
    1: ["Ahri's E can interrupt Irelia's Q"],
    2: ["Irelia's E [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies."],
  },
  'app/data/matchups/ahri/ahri_ivern.ts': {
    2: [
      "Ivern's Q [[ROOT]] cannot interrupt Ahri's R. However, the [[ROOT]] still applies.",
      "Ivern's R [[AIRBORNE]] can interrupt Ahri's R",
      "Ivern's R summon can block Ahri's E",
    ],
  },
  'app/data/matchups/ahri/ahri_janna.ts': {
    1: ["Ahri's E can interrupt Janna's R"],
    2: ["Janna's Q and R can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_jarvaniv.ts': {
    1: ["Ahri's E can interrupt Jarvan IV's EQ combo"],
  },
  'app/data/matchups/ahri/ahri_jax.ts': {
    1: ["Ahri's E can interrupt Jax's Q"],
    2: ["Jax's E [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies."],
  },
  'app/data/matchups/ahri/ahri_jayce.ts': {
    1: ["Ahri's E can interrupt Jayce's hammer form Q"],
    2: ["Jayce's hammer form E can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_jhin.ts': {
    1: ["Ahri's E can interrupt Jhin's R (channeling)"],
    2: ["Jhin's W [[ROOT]] cannot interrupt Ahri's R. However, the [[ROOT]] still applies."],
  },
  'app/data/matchups/ahri/ahri_jinx.ts': {
    2: ["Jinx's E [[ROOT]] can interrupt Ahri's R. (uncommon interaction)"],
  },
  'app/data/matchups/ahri/ahri_kennen.ts': {
    2: ["Kennen's P [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies."],
  },
  'app/data/matchups/ahri/ahri_khazix.ts': {
    1: ["Ahri's E can interrupt Kha'Zix's E"],
  },
  'app/data/matchups/ahri/ahri_kindred.ts': {
    1: [
      "Ahri's E can interrupt Kindred's Q",
      "Ahri's E [[CHARM]] can pull enemies outside Kindred's R zone",
    ],
  },
  'app/data/matchups/ahri/ahri_kled.ts': {
    1: ["Ahri's E can interrupt Kled's mounted E"],
    2: ["Kled's Q [[GRAB]] can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_ksante.ts': {
    1: ["Ahri's E can interrupt K'Sante's E"],
    2: ["K'Sante's Q3 and R can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_leblanc.ts': {
    1: ["Ahri's E can interrupt LeBlanc's W"],
    2: ["LeBlanc's E [[ROOT]] cannot interrupt Ahri's R. However, the [[ROOT]] still applies."],
  },
  'app/data/matchups/ahri/ahri_leesin.ts': {
    1: ["Ahri's E can interrupt Lee Sin's Q2 and W"],
    2: ["Lee Sin's R can interrupt Ahri's R. The direction depends on the situation."],
  },
  'app/data/matchups/ahri/ahri_leona.ts': {
    1: ["Ahri's E can interrupt Leona's E (dash phase)"],
    2: [
      "Leona's Q and R [[STUN]] and E [[ROOT]] cannot interrupt Ahri's R. However, the [[ROOT]] and [[STUN]] still apply.",
      "If Leona's E hits Ahri during her R, Leona dashes to Ahri's destination",
    ],
  },
  'app/data/matchups/ahri/ahri_lillia.ts': {
    1: ["Ahri's E can interrupt Lillia's W under certain conditions"],
    2: ["Lillia's R [[SLEEP]] cannot interrupt Ahri's R. However, the [[SLEEP]] still applies."],
  },
  'app/data/matchups/ahri/ahri_lissandra.ts': {
    2: ["Lissandra's W [[ROOT]] and R [[STUN]] cannot interrupt Ahri's R. However, the [[ROOT]] and [[STUN]] still apply."],
  },
  'app/data/matchups/ahri/ahri_lucian.ts': {
    1: ["Ahri's E can interrupt Lucian's E"],
  },
  'app/data/matchups/ahri/ahri_lulu.ts': {
    2: [
      "Lulu's W [[POLYMORPH]] cannot interrupt Ahri's R. However, the [[POLYMORPH]] still applies.",
      "Lulu's R [[AIRBORNE]] can interrupt Ahri's R",
    ],
  },
  'app/data/matchups/ahri/ahri_lux.ts': {
    2: ["Lux's Q [[ROOT]] cannot interrupt Ahri's R. However, the [[ROOT]] still applies."],
  },
  'app/data/matchups/ahri/ahri_malzahar.ts': {
    2: ["Malzahar's P can ignore Ahri's E [[CHARM]]"],
  },
  'app/data/matchups/ahri/ahri_maokai.ts': {
    2: ["Maokai's W [[ROOT]] cannot interrupt Ahri's R. However, the [[ROOT]] still applies."],
  },
  'app/data/matchups/ahri/ahri_masteryi.ts': {
    1: ["Ahri's E can interrupt Master Yi's W (channeling)"],
    2: ["Master Yi's Q can dodge Ahri's Q, W, E, and R"],
  },
  'app/data/matchups/ahri/ahri_mel.ts': {
    1: ["Ahri's E [[CHARM]] cannot interrupt Mel's R. However, the [[CHARM]] still applies."],
  },
  'app/data/matchups/ahri/ahri_milio.ts': {
    2: ["Milio's Q can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_missfortune.ts': {
    1: ["Ahri's E can interrupt Miss Fortune's R (channeling)"],
  },
  'app/data/matchups/ahri/ahri_mordekaiser.ts': {
    2: ["Mordekaiser's E can interrupt Ahri's R"],
  },
  'app/data/matchups/ahri/ahri_naafiri.ts': {
    1: ["Ahri's E can interrupt Naafiri's E and R"],
  },
  'app/data/matchups/ahri/ahri_nautilus.ts': {
    1: ["Ahri's E can interrupt Nautilus's Q (grab phase)"],
  },
  'app/data/matchups/ahri/ahri_nidalee.ts': {
    1: ["Ahri's E can interrupt Nidalee's cougar form W"],
  },
  'app/data/matchups/ahri/ahri_nilah.ts': {
    1: ["Ahri's E can interrupt Nilah's E"],
  },
  'app/data/matchups/ahri/ahri_nunu.ts': {
    1: ["Ahri's E can interrupt Nunu's W and R (channeling)"],
  },
  'app/data/matchups/ahri/ahri_ornn.ts': {
    1: ["Ahri's E can interrupt Ornn's E and R2"],
  },
  'app/data/matchups/ahri/ahri_pantheon.ts': {
    1: ["Ahri's E can interrupt Pantheon's W"],
  },
  'app/data/matchups/ahri/ahri_poppy.ts': {
    1: ["Ahri's E can interrupt Poppy's E and R (channeling)"],
  },
  'app/data/matchups/ahri/ahri_pyke.ts': {
    1: ["Ahri's E can interrupt Pyke's E"],
  },
  'app/data/matchups/ahri/ahri_qiyana.ts': {
    1: ["Ahri's E can interrupt Qiyana's W and E"],
  },
  'app/data/matchups/ahri/ahri_quinn.ts': {
    1: ["Ahri's E can interrupt Quinn's E"],
  },
  'app/data/matchups/ahri/ahri_rakan.ts': {
    1: ["Ahri's E can interrupt Rakan's W and E"],
  },
  'app/data/matchups/ahri/ahri_rammus.ts': {
    1: ["Ahri's E can interrupt Rammus's Q"],
  },
  'app/data/matchups/ahri/ahri_reksai.ts': {
    1: ["Ahri's E can interrupt Rek'Sai's burrowed E"],
  },
  'app/data/matchups/ahri/ahri_rell.ts': {
    1: ["Ahri's E can interrupt Rell's mounted W"],
  },
  'app/data/matchups/ahri/ahri_renekton.ts': {
    1: ["Ahri's E can interrupt Renekton's E"],
  },
  'app/data/matchups/ahri/ahri_rengar.ts': {
    1: ["Ahri's E can interrupt Rengar's P"],
  },
  'app/data/matchups/ahri/ahri_riven.ts': {
    1: ["Ahri's E can interrupt Riven's Q and E"],
  },
  'app/data/matchups/ahri/ahri_ryze.ts': {
    1: ["Ahri's E can interrupt Ryze's R (channeling)"],
  },
  'app/data/matchups/ahri/ahri_samira.ts': {
    1: ["Ahri's E can interrupt Samira's E and R (channeling)"],
  },
  'app/data/matchups/ahri/ahri_sejuani.ts': {
    1: ["Ahri's E can interrupt Sejuani's Q"],
  },
  'app/data/matchups/ahri/ahri_shaco.ts': {
    1: ["If Ahri's E hits Shaco during his R (channeling), Shaco splits and the main body is affected by [[CHARM]]"],
  },
  'app/data/matchups/ahri/ahri_shen.ts': {
    1: ["Ahri's E can interrupt Shen's E and R (channeling)"],
  },
  'app/data/matchups/ahri/ahri_skarner.ts': {
    1: ["Ahri's E can interrupt Skarner's E"],
  },
  'app/data/matchups/ahri/ahri_smolder.ts': {
    1: ["Ahri's E can interrupt Smolder's E"],
  },
  'app/data/matchups/ahri/ahri_sylas.ts': {
    1: ["Ahri's E can interrupt Sylas's W, E1, and E2"],
    2: ["When Sylas uses Ahri's R and gets a kill assist, he grants an extra R stack.\nThe ability description says stacks are added when Ahri's P triggers — unclear why Sylas also benefits.\nEven if Sylas kills with Ahri's R, Ahri's P effect activates."],
  },
  'app/data/matchups/ahri/ahri_tahmkench.ts': {
    1: ["Ahri's E can interrupt Tahm Kench's W (channeling)"],
  },
  'app/data/matchups/ahri/ahri_taliyah.ts': {
    1: ["Ahri's E can interrupt Taliyah's R"],
    2: ["Taliyah's E [[STUN]] cannot interrupt Ahri's R.\nHowever, the [[STUN]] still applies."],
  },
  'app/data/matchups/ahri/ahri_talon.ts': {
    1: ["Ahri's E can interrupt Talon's Q and E"],
  },
  'app/data/matchups/ahri/ahri_tristana.ts': {
    1: ["Ahri's E can interrupt Tristana's W (jump phase)"],
  },
  'app/data/matchups/ahri/ahri_tryndamere.ts': {
    1: ["Ahri's E can interrupt Tryndamere's E"],
  },
  'app/data/matchups/ahri/ahri_twistedfate.ts': {
    1: ["Ahri's E can interrupt Twisted Fate's R (channeling)"],
  },
  'app/data/matchups/ahri/ahri_urgot.ts': {
    1: ["Ahri's E can interrupt Urgot's E (dash phase)"],
  },
  'app/data/matchups/ahri/ahri_vayne.ts': {
    1: ["Ahri's E can interrupt Vayne's Q"],
  },
  'app/data/matchups/ahri/ahri_velkoz.ts': {
    1: ["Ahri's E can interrupt Vel'Koz's R (channeling)"],
  },
  'app/data/matchups/ahri/ahri_vi.ts': {
    1: ["Ahri's E can interrupt Vi's Q"],
  },
  'app/data/matchups/ahri/ahri_viego.ts': {
    1: [
      "Ahri's E can interrupt Viego's W",
      "Ahri's E cannot interrupt Viego's R. However, the [[CHARM]] still applies.",
    ],
  },
  'app/data/matchups/ahri/ahri_volibear.ts': {
    1: ["Ahri's E can interrupt Volibear's Q"],
  },
  'app/data/matchups/ahri/ahri_wukong.ts': {
    1: ["Ahri's E can interrupt Wukong's E"],
  },
  'app/data/matchups/ahri/ahri_xerath.ts': {
    1: ["Ahri's E can interrupt Xerath's Q and R (channeling)"],
  },
  'app/data/matchups/ahri/ahri_xinzhao.ts': {
    1: ["Ahri's E can interrupt Xin Zhao's E"],
  },
  'app/data/matchups/ahri/ahri_yasuo.ts': {
    2: ["Yasuo's W can block Ahri's Q, W, E, and R."],
  },
  'app/data/matchups/ahri/ahri_yone.ts': {
    1: ["Ahri's E can interrupt Yone's Q3. However, the Q3 projectile continues flying."],
  },
  'app/data/matchups/ahri/ahri_yunara.ts': {
    1: ["Ahri's E can interrupt Yunara's E (during R state)"],
  },
  'app/data/matchups/ahri/ahri_yuumi.ts': {
    1: ["Ahri's E can interrupt Yuumi's W"],
  },
  'app/data/matchups/ahri/ahri_zaahen.ts': {
    1: ["Ahri's E can interrupt Zaahen's E. However, the E projectile remains."],
  },
  'app/data/matchups/ahri/ahri_zac.ts': {
    1: ["Ahri's E can interrupt Zac's E (jump/channeling)"],
  },
  'app/data/matchups/ahri/ahri_zeri.ts': {
    1: ["Ahri's E can interrupt Zeri's E"],
  },
  'app/data/matchups/ahri/ahri_ziggs.ts': {
    1: ["Ahri's E can interrupt Ziggs's W"],
  },
  'app/data/matchups/ahri/ahri_zyra.ts': {
    2: ["Zyra's plants can block Ahri's E"],
  },
};

// Helper to format a string array as TypeScript array literal
function formatArray(arr) {
  if (arr.length === 0) return '[]';
  const items = arr.map(s => {
    // Escape backslashes and quotes, preserve \n as literal \n in the string
    const escaped = s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
    return `"${escaped}"`;
  });
  if (items.length === 1) return `[${items[0]}]`;
  return `[${items.join(', ')}]`;
}

// Process each file
let totalFixed = 0;
let totalFiles = 0;

for (const [relPath, indexMap] of Object.entries(translations)) {
  const filePath = BASE_DIR + '/' + relPath;

  if (!fs.existsSync(filePath)) {
    console.log('SKIP (not found):', relPath);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  for (const [arrayIndexStr, enArray] of Object.entries(indexMap)) {
    const arrayIndex = parseInt(arrayIndexStr);

    // We need to find which section to update. arrayIndex tells us which array
    // in the file structure. The file has:
    // arrayIndex 0 = summary
    // arrayIndex 1 = highlightsByChamp first champ (ahri)
    // arrayIndex 2 = highlightsByChamp second champ

    // Strategy: find all en: [...] occurrences and replace the arrayIndex-th one
    // We need to replace en arrays that are empty or have empty strings

    // Find all en: array occurrences
    // Pattern: en: [""] or en: [] - we want to replace the arrayIndex-th en array

    // Count en: occurrences to find the right one
    // arrayIndex 0 = summary en
    // arrayIndex 1 = first highlightsByChamp entry en (ahri's)
    // arrayIndex 2 = second highlightsByChamp entry en (opponent's)

    // Find the arrayIndex-th occurrence of 'en:' in the file
    let searchFrom = 0;
    let occurrence = 0;
    let enPos = -1;

    while (true) {
      const pos = content.indexOf('      en:', searchFrom);
      if (pos === -1) break;
      if (occurrence === arrayIndex) {
        enPos = pos;
        break;
      }
      occurrence++;
      searchFrom = pos + 1;
    }

    if (enPos === -1) {
      console.log(`WARNING: Could not find en array at index ${arrayIndex} in ${relPath}`);
      continue;
    }

    // Find the end of the en: [...] value
    const afterEn = content.indexOf('[', enPos + 5);
    if (afterEn === -1) {
      console.log(`WARNING: Could not find [ after en: in ${relPath}`);
      continue;
    }

    const closeBracket = content.indexOf(']', afterEn);
    if (closeBracket === -1) {
      console.log(`WARNING: Could not find ] after en: [ in ${relPath}`);
      continue;
    }

    const oldEnValue = content.substring(afterEn, closeBracket + 1);
    const newEnValue = formatArray(enArray);

    // Replace just this occurrence
    const before = content.substring(0, afterEn);
    const after = content.substring(closeBracket + 1);
    content = before + newEnValue + after;

    console.log(`Updated ${relPath} arrayIndex=${arrayIndex}: ${oldEnValue} -> ${newEnValue}`);
    totalFixed++;
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFiles++;
  }
}

console.log(`\nDone! Fixed ${totalFixed} arrays in ${totalFiles} files.`);
