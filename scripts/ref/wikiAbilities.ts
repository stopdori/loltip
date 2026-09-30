// scripts/ref/wikiAbilities.ts
// LoL 위키 Dash / Channel 문서의 능력 목록(참조 데이터). 챔피언 파일 gimmick 태그
// 대조용(scripts/wikiChecklist.ts). 영문 이름은 위키 표기 그대로, qualifier는 괄호 안 조건.

export type WikiList = "DASH" | "CHANNEL" | "CHANNEL_MOVEMENT" | "CHANNEL_OBJECTIVE" | "CHANNEL_UNINTERRUPTIBLE" | "CHARGED" | "LUNGE";
export type WikiAbility = { champion: string; ability: string; qualifier?: string; list: WikiList };

const rows = (list: WikiList, text: string): WikiAbility[] =>
  text.trim().split("\n").map((line) => {
    const [champion, ability, qualifier] = line.split("|").map((s) => s.trim());
    return { champion, ability, ...(qualifier ? { qualifier } : {}), list };
  });

export const WIKI_ABILITIES: WikiAbility[] = [
  ...rows("DASH", `
Akali | Shuriken Flip | second cast
Akali | Shuriken Flip | first cast, reverse
Akali | Perfect Execution | first cast
Akali | Perfect Execution | second cast
Amumu | Bandage Toss | when hitting a unit
Aurora | Between Worlds | initial cast / when colliding with the border
Aurora | Across the Veil |
Aurora | The Weirding | reverse
Bard | Magical Journey | when clicked
Briar | Certain Death | second cast
Briar | Blood Frenzy |
Briar | Head Rush |
Ekko | Chronobreak |
Ekko | Phase Dive |
Ivern | Rootcaller | when clicking a rooted target
Jarvan IV | Dragon Strike | when colliding with Demacian Standard
Jarvan IV | Cataclysm |
Kalista | Fate's Call | Oathsworn pull-in / selected dash
Kalista | Martial Poise |
Kled | Jousting | first and second cast
Kled | Chaaaaaaaarge!!! |
Kled | Pocket Pistol | reverse
Lee Sin | Resonating Strike |
Lee Sin | Safeguard |
Leona | Zenith Blade |
Nautilus | Dredge Line | when hitting a unit / terrain
Rek'Sai | Tunnel | creating / clicking an existing tunnel
Rek'Sai | Void Rush |
Sylas | Abduct | when hitting a unit
Sylas | Abscond |
Sylas | Kingslayer |
Thresh | Deathly Leap |
Thresh | Dark Passage | when clicked
Vex | Shadow Surge | second cast
Warwick | Jaws of the Beast | when held
Warwick | Infinite Duress |
Yone | Soul Unbound | first and second cast
Yone | Mortal Steel |
Ziggs | Satchel Charge |
Aatrox | Umbral Dash |
Akshan | Heroic Swing | second and third cast
Aurelion Sol | Astral Flight |
Bel'Veth | Void Surge |
Bel'Veth | Endless Banquet |
Camille | Hookshot |
Camille | Wall Dive |
Camille | The Hextech Ultimatum |
Caitlyn | 90 Caliber Net | reverse
Fiora | Lunge |
Gragas | Body Slam |
Graves | Collateral Damage | reverse
Graves | Quickdraw |
Kayn | Reaping Slash |
Kayn | Umbral Trespass | first cast / recast
K'Sante | Path Maker |
K'Sante | Footwork | incl. ally cast
Lucian | Relentless Pursuit |
Naafiri | Eviscerate |
Naafiri | Hounds' Pursuit |
Ornn | Searing Charge |
Ornn | Call of the Forge God | recast
Pyke | Phantom Undertow |
Renekton | Slice and Dice |
Riven | Broken Wings |
Riven | Valor |
Urgot | Disdain |
Vayne | Tumble |
Vi | Vault Breaker |
Vi | Cease and Desist |
Viego | Spectral Maw |
Wukong | Warrior Trickster |
Wukong | Nimbus Strike |
Yunara | Untouchable Shadow |
Zeri | Spark Surge |
Ahri | Spirit Rush |
Ambessa | Drakehound's Step |
Corki | Valkyrie |
Fizz | Playful |
Fizz | Trickster |
Fizz | Urchin Strike |
Galio | Justice Punch |
Galio | Hero's Entrance |
Gnar | Hop |
Gnar | Crunch | Mega Gnar
Gwen | Skip 'n Slash |
Hecarim | Onslaught of Shadows |
Hecarim | Devastating Charge |
Kai'Sa | Killer Instinct |
Kindred | Dance of Arrows |
Kha'Zix | Leap |
LeBlanc | Distortion |
LeBlanc | Mimic Distortion |
Lillia | Watch Out! Eep! |
Malphite | Unstoppable Force |
Nidalee | Pounce |
Qiyana | Terrashape |
Qiyana | Audacity |
Rammus | Soaring Slam |
Sejuani | Arctic Assault |
Shen | Shadow Dash |
Shyvana | Dragon's Descent |
Taliyah | Weaver's Wall | second cast while channeling
Tristana | Rocket Jump |
Tryndamere | Spinning Slash |
Rakan | Grand Entrance |
Rakan | Battle Dance |
Rell | Ferromancy: Crash Down |
Rell | Ferromancy: Mount Up |
Volibear | Stormbringer |
Volibear | Thundering Smash |
Zaahen | Aureate Rush |
Zaahen | Grim Deliverance |
Zac | Elastic Slingshot |
Alistar | Headbutt |
Azir | Shifting Sands | only after using Arise!
Braum | Stand Behind Me |
Diana | Lunar Rush |
Elise | Venomous Bite |
Evelynn | Empowered Whiplash |
Illaoi | Harsh Lesson |
Irelia | Bladesurge |
Jax | Leap Strike |
Jayce | To the Skies! |
Locke | Ashen Pursuit |
Maokai | Twisted Advance |
Nilah | Slipstream |
Nocturne | Paranoia |
Pantheon | Shield Vault |
Poppy | Heroic Charge |
Quinn | Vault |
Rengar | Unseen Predator |
Samira | Daredevil Impulse |
Samira | Wild Rush |
Sett | The Show Stopper |
Talon | Noxian Diplomacy |
Talon | Assassin's Path |
Udyr | Blazing Stampede |
Xin Zhao | Audacious Charge |
Yasuo | Sweeping Blade |
Yuumi | You and Me! |
Zed | Death Mark |
`),
  ...rows("CHANNEL", `
Akshan | Comeuppance |
Caitlyn | Ace in the Hole |
Fiddlesticks | Bountiful Harvest |
Gragas | Drunken Rage |
Ivern | Friend of the Forest |
Janna | Monsoon |
Jhin | Curtain Call |
Karthus | Requiem |
Katarina | Death Lotus |
Lucian | The Culling |
Malzahar | Nether Grasp |
Master Yi | Meditate |
Miss Fortune | Bullet Time |
Nunu | Absolute Zero |
Quinn | Behind Enemy Lines |
Rammus | Powerball |
Vel'Koz | Life Form Disintegration Ray |
Warwick | Infinite Duress |
Xerath | Rite of the Arcane |
Yuumi | Prowling Projectile |
Yuumi | Final Chapter |
`),
  ...rows("CHANNEL_MOVEMENT", `
Fiddlesticks | Crowstorm |
Galio | Hero's Entrance |
Kayn | Umbral Trespass |
Naafiri | Hounds' Pursuit |
Nunu | Biggest Snowball Ever! |
Pantheon | Grand Starfall |
Shen | Stand United |
Sion | Unstoppable Onslaught |
Tahm Kench | Abyssal Dive |
Taliyah | Weaver's Wall |
Twisted Fate | Gate |
Ryze | Realm Warp |
Vi | Vault Breaker |
Warwick | Jaws of the Beast |
Yuumi | You and Me! |
Zac | Elastic Slingshot |
`),
  ...rows("CHANNEL_OBJECTIVE", `
Ornn | Living Forge |
Zilean | Time in a Bottle |
`),
  ...rows("CHANNEL_UNINTERRUPTIBLE", `
Briar | Chilling Scream |
Irelia | Defiant Dance |
K'Sante | Path Maker |
Pantheon | Aegis Assault | incl. empowered
Urgot | Fear Beyond Death | Mercy (recast)
`),
  ...rows("CHARGED", `
Aurelion Sol | Breath of Light |
Briar | Chilling Scream |
Galio | Shield of Durand |
Irelia | Defiant Dance |
K'Sante | Path Maker |
Pantheon | Comet Spear |
Poppy | Keeper's Verdict |
Pyke | Bone Skewer |
Sion | Decimating Smash |
Varus | Piercing Arrow |
Vi | Vault Breaker |
Viego | Spectral Maw |
Vladimir | Tides of Blood |
Warwick | Jaws of the Beast |
Xerath | Arcanopulse |
Zac | Elastic Slingshot |
`),
  // 런지: 돌진처럼 보이지만 돌진 판정이 아닌 이동
  ...rows("LUNGE", `
Darius | Noxian Guillotine |
Galio | Justice Punch | backwards windup
Garen | Decisive Strike |
Kalista | Fate's Call | Oathsworn when landing at max range from the impact
Kled | Dismount |
Neeko | Inherent Glamour | when transforming into a trap, ward, jungle plant or monster
Ornn | Bellows Breath |
Rell | Shattering Strike |
Sion | Unstoppable Onslaught | recast
Warwick | Jaws of the Beast | before holding down the key
`),
];
