import fs from 'fs';
import path from 'path';

// ─── Champion name map ────────────────────────────────────────────────────────
const CHAMP = {
  '트위스티드 페이트': 'Twisted Fate', '누누와윌럼프': 'Nunu & Willump',
  '아우렐리온솔': 'Aurelion Sol', '블리츠크랭크': 'Blitzcrank', '아우솔': 'Aurelion Sol',
  '하이머딩거': 'Heimerdinger', '트린다미어': 'Tryndamere', '마스터이': 'Master Yi',
  '아트록스': 'Aatrox', '아칼리': 'Akali', '아크샨': 'Akshan', '알리스타': 'Alistar',
  '암베사': 'Ambessa', '아무무': 'Amumu', '애니비아': 'Anivia', '아펠리오스': 'Aphelios',
  '카시오페아': 'Cassiopeia', '피들스틱': 'Fiddlesticks', '에즈리얼': 'Ezreal',
  '이즈리얼': 'Ezreal',
  '갱플랭크': 'Gangplank', '이렐리아': 'Irelia', '다이애나': 'Diana', '그라가스': 'Gragas',
  '그레이브즈': 'Graves', '헤카림': 'Hecarim', '일라오이': 'Illaoi', '자르반': 'Jarvan IV',
  '카이사': "Kai'Sa", '카르마': 'Karma', '카서스': 'Karthus', '케넨': 'Kennen',
  '킨드레드': 'Kindred', '카직스': "Kha'Zix", '크산테': "K'Sante", '르블랑': 'LeBlanc',
  '리산드라': 'Lissandra', '루시안': 'Lucian', '말자하': 'Malzahar', '마오카이': 'Maokai',
  '모데카이저': 'Mordekaiser', '나피리': 'Naafiri', '노틸러스': 'Nautilus', '나이달리': 'Nidalee',
  '오리아나': 'Orianna', '판테온': 'Pantheon', '키아나': 'Qiyana',
  '세라핀': 'Seraphine', '세주아니': 'Sejuani', '스카너': 'Skarner', '소라카': 'Soraka',
  '스웨인': 'Swain', '사일러스': 'Sylas', '탈리야': 'Taliyah', '탐켄치': 'Tahm Kench',
  '트리스타나': 'Tristana', '트런들': 'Trundle', '트위치': 'Twitch', '우르곳': 'Urgot',
  '베인': 'Vayne', '베이가': 'Veigar', '벨코즈': "Vel'Koz", '비에고': 'Viego',
  '빅토르': 'Viktor', '블라디미르': 'Vladimir', '볼리베어': 'Volibear', '워릭': 'Warwick',
  '제라스': 'Xerath', '신짜오': 'Xin Zhao', '요릭': 'Yorick', '질리언': 'Zilean',
  '아리': 'Ahri', '애니': 'Annie', '애쉬': 'Ashe', '오로라': 'Aurora', '아지르': 'Azir',
  '바드': 'Bard', '벨베스': "Bel'Veth", '브랜드': 'Brand', '브라움': 'Braum',
  '브라이어': 'Briar', '케이틀린': 'Caitlyn', '카밀': 'Camille', '초가스': "Cho'Gath",
  '코르키': 'Corki', '다리우스': 'Darius', '드레이븐': 'Draven', '문도': 'Dr. Mundo',
  '에코': 'Ekko', '엘리스': 'Elise', '이블린': 'Evelynn', '피오라': 'Fiora', '피즈': 'Fizz',
  '갈리오': 'Galio', '가렌': 'Garen', '나르': 'Gnar', '그웬': 'Gwen', '흐웨이': 'Hwei',
  '아이번': 'Ivern', '잔나': 'Janna', '잭스': 'Jax', '제이스': 'Jayce', '진': 'Jhin',
  '징크스': 'Jinx', '클레드': 'Kled', '리신': 'Lee Sin', '레오나': 'Leona', '릴리아': 'Lillia',
  '룰루': 'Lulu', '럭스': 'Lux', '멜': 'Mel', '밀리오': 'Milio', '나서스': 'Nasus',
  '닐라': 'Nilah', '오공': 'Wukong', '오라프': 'Olaf', '팝피': 'Poppy', '파이크': 'Pyke',
  '렝가': 'Rengar', '레넥톤': 'Renekton', '리벤': 'Riven', '세나': 'Senna', '샤코': 'Shaco',
  '쉔': 'Shen', '시비르': 'Sivir', '탈론': 'Talon', '타릭': 'Taric', '티모': 'Teemo',
  '쓰레쉬': 'Thresh', '바이': 'Vi', '자야': 'Xayah', '야스오': 'Yasuo',
  '요네': 'Yone', '자크': 'Zac', '자이라': 'Zyra', '제드': 'Zed', '조이': 'Zoe',
  '유미': 'Yuumi', '오른': 'Ornn', '미스포츈': 'Miss Fortune', '렉사이': "Rek'Sai",
  '카타리나': 'Katarina', '카사딘': 'Kassadin', '칼리스타': 'Kalista',
  '누누': 'Nunu & Willump', '노크턴': 'Nocturne', '녹턴': 'Nocturne',
  // Additional missing champions
  '케인': 'Kayn', '말파이트': 'Malphite', '람머스': 'Rammus', '라이즈': 'Ryze',
  '세트': 'Sett', '신지드': 'Singed', '시온': 'Sion', '스몰더': 'Smolder',
  '바루스': 'Varus', '렐': 'Rell', '라칸': 'Rakan', '사미라': 'Samira', '소나': 'Sona',
  '퀸': 'Quinn', '빅스': 'Vex', '벡스': 'Vex', '모르가나': 'Morgana', '렝가': 'Rengar',
  '레나타': 'Renata Glasc', '암': 'Amumu', '세나': 'Senna',
  '자헨': 'Zaaheen', // placeholder/custom
};

const PARENS = {
  '추격단계': 'pursuit phase', '공격단계': 'attack phase', '채널링': 'channeling',
  '시전집중': 'channeling', '후진단계': 'backstep phase', '돌진단계': 'dash phase',
  '재간둥이': 'Trickster', '체인': 'chain', '재창조': 'Recast',
  '잠행폼': 'burrowed form', '승마폼': 'mounted form', '인간폼': 'human form',
  '거미폼': 'spider form', '해머폼': 'Hammer form', '메가폼': 'Mega form',
  '일반폼': 'non-ult form', '미니폼': 'mini form', '범위피해': 'AoE damage',
  '전이': 'chain', '관통': 'pierce', '천상강림': 'Astral Infusion',
};

const CHAMP_KEYS = Object.keys(CHAMP).sort((a, b) => b.length - a.length);

function findChamp(text) {
  for (const kr of CHAMP_KEYS) {
    if (text.startsWith(kr + ' ') || text === kr) {
      return [CHAMP[kr], text.slice(kr.length).trim()];
    }
  }
  return [null, text];
}

function translateParens(text) {
  return text.replace(/\(([^)]+)\)/g, (_, inner) => '(' + (PARENS[inner] || inner) + ')');
}

function translateAbilityClause(clause) {
  clause = clause.replace(/[를을의은는이가으]?\s*$/, '').trim();
  clause = clause.replace(/의\s*(\[\[)/g, ' $1');
  clause = clause.replace(/(\]\])\s*,\s*(\[\[)/g, '$1 and $2');
  clause = clause.replace(/([A-Z0-9]\d?)\s*,\s*([A-Z0-9]\d?\s*(?:\[\[|$|\())/g, (_, a, b) => `${a} and ${b}`);
  clause = clause.replace(/([A-Z0-9]\d?)\s*,\s*([A-Z0-9]\d?)\s*,\s*([A-Z0-9]\d?\s*(?:\[\[|$|\())/g, (_, a, b, c) => `${a}, ${b}, and ${c}`);
  clause = translateParens(clause);
  return clause.trim();
}

function translateTargetObject(text) {
  text = text.replace(/[를을의은는이가으로]$/, '').trim();
  const [champ, rest] = findChamp(text);
  if (!champ) return translateAbilityClause(text);
  if (!rest) return champ;
  return `${champ}'s ${translateAbilityClause(rest)}`;
}

// Translate Gwen W "cannot be hit from outside range" pattern
// "그웬 W로 [X] [abilities]를 범위 밖에서 맞지 않음[\n...]"
function translateGwenWLine(line) {
  // Extract the abilities part
  // e.g. "그웬 W로 가렌 E를 범위 밖에서 맞지 않음" → "Gwen's W prevents Garen's E from hitting when outside the zone"
  const m = line.match(/^그웬 W로 (.+?)[를을] 범위 밖에서 맞지 않음\.?(.*)$/);
  if (!m) return null;
  const obj = translateTargetObject(m[1]);
  const extra = m[2].trim();
  let result = `Gwen's W prevents ${obj} from hitting when outside the zone`;
  if (extra) result += '. ' + extra;
  return result;
}

// Translate "날아가던 중 범위 안에 들어올 때 사라짐" lines
function translateProjectileDisappear(line) {
  // "그웬에게 사용한 평타, E는 날아가던 중 범위 안에 들어올 때 사라짐"
  const m = line.match(/^그웬에게 사용한 (.+?)[는은] 날아가던 중 범위 안에 들어올 때 사라짐\.?$/);
  if (m) {
    const abilities = translateAbilityClause(m[1]);
    return `${abilities} aimed at Gwen disappear when they enter the zone mid-flight`;
  }
  return null;
}

function translateLine(line) {
  line = line.trim();
  if (!line) return '';
  let m;

  // ── GWEN W PATTERNS ──────────────────────────────────────────────────────────
  const gwenResult = translateGwenWLine(line);
  if (gwenResult) return gwenResult;

  const projResult = translateProjectileDisappear(line);
  if (projResult) return projResult;

  // "그웬에게 사용한 평타, W, R은 날아가던 중..." pattern
  m = line.match(/^그웬에게 사용한 (.+?)[는은] 날아가던 중 범위 안에 들어올 때 사라짐\.?$/);
  if (m) return `${translateAbilityClause(m[1])} aimed at Gwen disappear when they enter the zone mid-flight`;

  // ── ALISTAR PATTERNS ──────────────────────────────────────────────────────────
  m = line.match(/^알리스타 Q, W로 (.+?)[를을] 끊을 수 있음\.?$/);
  if (m) return `Alistar's Q and W can interrupt ${translateTargetObject(m[1])}`;

  m = line.match(/^알리스타 Q, W, E로 (.+?)[를을] 끊을 수 있음\.?$/);
  if (m) return `Alistar's Q, W, and E can interrupt ${translateTargetObject(m[1])}`;

  m = line.match(/^알리스타 Q, W, E로 (.+?)[를을] 끊을 수 없음\.?$/);
  if (m) return `Alistar's Q, W, and E cannot interrupt ${translateTargetObject(m[1])}`;

  m = line.match(/^알리스타 E의 \[\[STUN\]\][로으로]+ (.+?)[를을] 끊을 수 없음\.?\s*(단, \[\[STUN\]\][은는] 남아있음\.?)?$/);
  if (m) return `Alistar's E [[STUN]] cannot interrupt ${translateTargetObject(m[1])}. However, the [[STUN]] still applies.`;

  m = line.match(/^알리스타 R의 \[\[CC_CLEANSE\]\][로으로]+ (.+?)[를을] 해제할 수 있음\.?$/);
  if (m) return `Alistar's R [[CC_CLEANSE]] can cleanse ${translateTargetObject(m[1])}`;

  m = line.match(/^알리스타 R의 \[\[CC_CLEANSE\]\][로으로]+ (.+?)[는은] 해제할 수 없음\.?$/);
  if (m) return `Alistar's R [[CC_CLEANSE]] cannot cleanse ${translateTargetObject(m[1])}`;

  // ── BRAUM PATTERNS ────────────────────────────────────────────────────────────
  m = line.match(/^브라움 Q의 \[\[STUN\]\][로으로]+ (.+?)[를을] 끊을 수 없음\.?\s*(단, \[\[STUN\]\][은는] 남아있음\.?)?$/);
  if (m) return `Braum's Q [[STUN]] cannot interrupt ${translateTargetObject(m[1])}. However, the [[STUN]] still applies.`;

  m = line.match(/^브라움 E[로으로]+ (.+?)[를을] 막을 수 있음\.?$/);
  if (m) return `Braum's E can block ${translateTargetObject(m[1])}`;

  m = line.match(/^브라움 R의 \[\[AIRBORNE\]\][로으로]+ (.+?)[를을] 끊을 수 있음\.?$/);
  if (m) return `Braum's R [[AIRBORNE]] can interrupt ${translateTargetObject(m[1])}`;

  m = line.match(/^브라움 R의 \[\[AIRBORNE\]\][로으로]+ (.+?)[를을] 끊을 수 없음\.?\s*(단, \[\[AIRBORNE\]\][은는] 남아있음\.?)?$/);
  if (m) return `Braum's R [[AIRBORNE]] cannot interrupt ${translateTargetObject(m[1])}. However, the [[AIRBORNE]] still applies.`;

  m = line.match(/^브라움 E[로으로]+ (.+?)[를을을] (\[\[DAMAGE_NULLIFY\]\](?:, \[\[INTERCEPT_PROJECTILE\]\])?) 할 수 있음\.?(.*)$/);
  if (m) return `Braum's E can ${m[2].replace(/\[\[DAMAGE_NULLIFY\]\]/, '[[DAMAGE_NULLIFY]]').replace(/\[\[INTERCEPT_PROJECTILE\]\]/, 'and [[INTERCEPT_PROJECTILE]]')} against ${translateTargetObject(m[1])}`;

  // ── GENERIC INTERRUPT ─────────────────────────────────────────────────────────
  m = line.match(/^(.+?)[으로로]+ (.+?)[를을] 끊을 수 있음\.?(.*)$/);
  if (m) {
    const subj = translateTargetObject(m[1]);
    const obj = translateTargetObject(m[2]);
    const extra = m[3].trim();
    return `${subj} can interrupt ${obj}` + (extra ? '. ' + extra : '');
  }

  m = line.match(/^(.+?)[으로로]+ (.+?)[를을] 끊을 수 없음\.?\s*단, (.+?)[은는] 남아있음\.?(.*)$/);
  if (m) {
    return `${translateTargetObject(m[1])} cannot interrupt ${translateTargetObject(m[2])}. However, ${m[3].trim()} still applies.`;
  }

  m = line.match(/^(.+?)[으로로]+ (.+?)[를을] 끊을 수 없음\.?(.*)$/);
  if (m) {
    return `${translateTargetObject(m[1])} cannot interrupt ${translateTargetObject(m[2])}` + (m[3].trim() ? '. ' + m[3].trim() : '');
  }

  // ── FOLLOW ────────────────────────────────────────────────────────────────────
  m = line.match(/^(.+?)[으로로]+ (.+?)[를을] 따라 ?갈 수 있음\.?(.*)$/);
  if (m) {
    const subj = translateTargetObject(m[1]);
    const obj = translateTargetObject(m[2]);
    const extra = m[3].trim();
    return `${subj} can follow ${obj}` + (extra ? '. ' + extra : '');
  }

  // ── BLOCK ─────────────────────────────────────────────────────────────────────
  m = line.match(/^(.+?)[으로로]+ (.+?)[를을] 막을 수 있음\.?$/);
  if (m) return `${translateTargetObject(m[1])} can block ${translateTargetObject(m[2])}`;

  // ── DODGE / AVOID ─────────────────────────────────────────────────────────────
  m = line.match(/^(.+?)[으로로]+ (.+?)[를을] 피할 수 있음\.?$/);
  if (m) return `${translateTargetObject(m[1])} can dodge ${translateTargetObject(m[2])}`;

  // ── REVEAL / SEE ──────────────────────────────────────────────────────────────
  m = line.match(/^(.+?)[으로로]+ (.+?)[를을] 볼 수 있음\.?(.*)$/);
  if (m) return `${translateTargetObject(m[1])} reveals ${translateTargetObject(m[2])}` + (m[3].trim() ? '. ' + m[3].trim() : '');

  // "X을/를 볼 수 있음" without 로
  m = line.match(/^(.+?)[가이] (.+?)[를을] 볼 수 있음\.?$/);
  if (m) return `${translateTargetObject(m[1])} can see ${translateTargetObject(m[2])}`;

  // ── IGNORE ────────────────────────────────────────────────────────────────────
  m = line.match(/^(.+?)[으로로]+ (.+?)[를을] 무시할 수 있음\.?(.*)$/);
  if (m) return `${translateTargetObject(m[1])} can ignore ${translateTargetObject(m[2])}` + (m[3].trim() ? '. ' + m[3].trim() : '');

  // ── CLEANSE ───────────────────────────────────────────────────────────────────
  m = line.match(/^(.+?의 \[\[CC_CLEANSE\]\])[로으로]+ (.+?)[를을] 해제할 수 있음\.?$/);
  if (m) return `${translateTargetObject(m[1])} can cleanse ${translateTargetObject(m[2])}`;

  m = line.match(/^(.+?의 \[\[CC_CLEANSE\]\])[로으로]+ (.+?)[는은] 해제할 수 없음\.?$/);
  if (m) return `${translateTargetObject(m[1])} cannot cleanse ${translateTargetObject(m[2])}`;

  // ── "E2를 사용하면 더이상 모습이 보이지 않음" suffix ─────────────────────────
  m = line.match(/^(.+?)\. 단, E2를 사용하면 더이상 모습이 보이지 않음\.?$/);
  if (m) return `${translateLine(m[1])}. However, using E2 will hide her again`;

  // ── PREVENT FROM CASTING ──────────────────────────────────────────────────────
  m = line.match(/^(.+?)[가이] (.+?)[을를] 사용하지 못하게 할 수 있음\.?(.*)$/);
  if (m) return `${translateTargetObject(m[1])} can prevent ${translateTargetObject(m[2])} from being cast` + (m[3].trim() ? '. ' + m[3].trim() : '');

  // Fallback
  return `[TODO: ${line}]`;
}

function translateKo(ko) {
  const lines = ko.split('\\n');
  return lines.map(l => translateLine(l)).join('\\n');
}

// ─── Array patching ────────────────────────────────────────────────────────────
function extractArraysWithPositions(content, field) {
  const pattern = field + ':\\s*\\[';
  const regex = new RegExp(pattern, 'g');
  const results = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    let depth = 1, i = match.index + match[0].length, inner = '';
    while (i < content.length && depth > 0) {
      if (content[i] === '[') depth++;
      else if (content[i] === ']') depth--;
      if (depth > 0) inner += content[i];
      i++;
    }
    const items = [];
    const itemRegex = /"((?:[^"\\]|\\.)*)"/g;
    let m2;
    while ((m2 = itemRegex.exec(inner)) !== null) items.push(m2[1]);
    results.push({ startPos: match.index, endPos: i, items });
  }
  return results;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('[TODO:')) return false; // only process TODO files

  const koArrays = extractArraysWithPositions(content, 'ko');
  const enArrays = extractArraysWithPositions(content, 'en');
  if (koArrays.length !== enArrays.length) return false;

  const patches = [];
  for (let i = 0; i < koArrays.length; i++) {
    const ko = koArrays[i], en = enArrays[i];
    let newEnItems = null;

    if (ko.items.length === 0 && en.items.length === 1 && en.items[0] === '') {
      newEnItems = [];
    } else if (ko.items.length > 0 && (en.items.length === 0 || (en.items.length === 1 && en.items[0] === '') || en.items.some(e => e.startsWith('[TODO:')))) {
      if (en.items.length === 0 || (en.items.length === 1 && en.items[0] === '')) {
        newEnItems = ko.items.map(k => translateKo(k));
      } else {
        newEnItems = en.items.map((e, j) => e.startsWith('[TODO:') ? translateKo(ko.items[j] || '') : e);
      }
    }

    if (newEnItems !== null) patches.push({ en, newItems: newEnItems });
  }

  if (!patches.length) return false;
  patches.sort((a, b) => b.en.startPos - a.en.startPos);

  for (const { en, newItems } of patches) {
    let newArrayStr;
    if (newItems.length === 0) {
      newArrayStr = 'en: []';
    } else {
      const strs = newItems.map(s => `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`);
      newArrayStr = 'en: [' + strs.join(', ') + ']';
    }
    const beforeEnd = content.slice(0, en.endPos);
    const enStart = beforeEnd.lastIndexOf('en:');
    if (enStart === -1) continue;
    content = content.slice(0, enStart) + newArrayStr + content.slice(en.endPos);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

// Also handle fresh mismatches (not yet processed at all)
function processFreshFile(filePath, mismatches) {
  let content = fs.readFileSync(filePath, 'utf8');
  const koArrays = extractArraysWithPositions(content, 'ko');
  const enArrays = extractArraysWithPositions(content, 'en');
  if (koArrays.length !== enArrays.length) return false;

  const patches = [];
  for (let i = 0; i < koArrays.length; i++) {
    const ko = koArrays[i], en = enArrays[i];
    let newEnItems = null;

    if (ko.items.length === 0 && en.items.length === 1 && en.items[0] === '') {
      newEnItems = [];
    } else if (ko.items.length > en.items.length || (ko.items.length === en.items.length && en.items.some((e, j) => e === '' && ko.items[j]))) {
      if (en.items.length === 0) {
        newEnItems = ko.items.map(k => translateKo(k));
      } else if (en.items.length === 1 && en.items[0] === '') {
        newEnItems = ko.items.map(k => translateKo(k));
      } else {
        newEnItems = [...en.items];
        for (let j = 0; j < newEnItems.length; j++) {
          if (newEnItems[j] === '' && ko.items[j]) newEnItems[j] = translateKo(ko.items[j]);
        }
        for (let j = newEnItems.length; j < ko.items.length; j++) {
          newEnItems.push(translateKo(ko.items[j]));
        }
      }
    }
    if (newEnItems !== null) patches.push({ en, newItems: newEnItems });
  }

  if (!patches.length) return false;
  patches.sort((a, b) => b.en.startPos - a.en.startPos);

  for (const { en, newItems } of patches) {
    let newArrayStr;
    if (newItems.length === 0) {
      newArrayStr = 'en: []';
    } else {
      const strs = newItems.map(s => `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`);
      newArrayStr = 'en: [' + strs.join(', ') + ']';
    }
    const beforeEnd = content.slice(0, en.endPos);
    const enStart = beforeEnd.lastIndexOf('en:');
    if (enStart === -1) continue;
    content = content.slice(0, enStart) + newArrayStr + content.slice(en.endPos);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

// ─── Main ──────────────────────────────────────────────────────────────────────
const data = JSON.parse(fs.readFileSync('mismatches.json', 'utf8'));
let fixed = 0, todoRemaining = 0;
const todoFiles = [];

// Pass 1: fix files with TODO markers
for (const filePath of Object.keys(data)) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('[TODO:')) {
      if (processFile(filePath)) fixed++;
    }
  } catch (e) {}
}

// Pass 2: fix remaining fresh mismatches
for (const [filePath, mismatches] of Object.entries(data)) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const hasKoEnMismatch = mismatches.some(m => m.ko.length !== m.en.length || m.en.some((e, j) => e === '' && m.ko[j]));
    if (hasKoEnMismatch && !content.includes('[TODO:')) {
      if (processFreshFile(filePath, mismatches)) fixed++;
    }
  } catch (e) {}
}

// Check remaining TODOs
for (const filePath of Object.keys(data)) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('[TODO:')) { todoFiles.push(filePath); todoRemaining++; }
  } catch (e) {}
}

console.log(`Fixed in this pass: ${fixed}`);
console.log(`Remaining TODO files: ${todoRemaining}`);
todoFiles.slice(0, 20).forEach(f => console.log(' ', f.split('/').slice(-1)[0]));
if (todoFiles.length > 20) console.log(`  ... and ${todoFiles.length - 20} more`);
