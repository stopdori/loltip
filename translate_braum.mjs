import fs from 'fs';
import path from 'path';

// ─── Champion name map ─────────────────────────────────────────────────────────
const CHAMP = {
  '트위스티드 페이트': 'Twisted Fate', '누누와윌럼프': 'Nunu & Willump',
  '아우렐리온솔': 'Aurelion Sol', '블리츠크랭크': 'Blitzcrank', '아우솔': 'Aurelion Sol',
  '하이머딩거': 'Heimerdinger', '트린다미어': 'Tryndamere', '마스터이': 'Master Yi',
  '아트록스': 'Aatrox', '아칼리': 'Akali', '아크샨': 'Akshan', '알리스타': 'Alistar',
  '암베사': 'Ambessa', '아무무': 'Amumu', '애니비아': 'Anivia', '아펠리오스': 'Aphelios',
  '카시오페아': 'Cassiopeia', '피들스틱': 'Fiddlesticks', '에즈리얼': 'Ezreal',
  '이즈리얼': 'Ezreal', '갱플랭크': 'Gangplank', '이렐리아': 'Irelia',
  '다이애나': 'Diana', '그라가스': 'Gragas', '그레이브즈': 'Graves',
  '헤카림': 'Hecarim', '일라오이': 'Illaoi', '자르반': 'Jarvan IV',
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
  '케인': 'Kayn', '말파이트': 'Malphite', '람머스': 'Rammus', '라이즈': 'Ryze',
  '세트': 'Sett', '신지드': 'Singed', '시온': 'Sion', '스몰더': 'Smolder',
  '바루스': 'Varus', '렐': 'Rell', '라칸': 'Rakan', '사미라': 'Samira', '소나': 'Sona',
  '퀸': 'Quinn', '빅스': 'Vex', '벡스': 'Vex', '모르가나': 'Morgana',
  '레나타': 'Renata Glasc', '네코': 'Neeko', '닐라': 'Nilah', '닐라': 'Nilah',
  '자헨': 'Zaaheen', '자아헨': 'Zaaheen', '자아': 'Zaaheen',
  '나피': 'Naafiri', '니달리': 'Nidalee', '나이달리': 'Nidalee',
  '스웨인': 'Swain', '케인': 'Kayn', '카사딘': 'Kassadin',
  '아우솔': 'Aurelion Sol', '신드라': 'Syndra', '룸블': 'Rumble',
  '럼블': 'Rumble', '세라핀': 'Seraphine', '뽀삐': 'Poppy',
  '칼마': 'Karma', '나르': 'Gnar', '흐웨이': 'Hwei', '카르마': 'Karma',
  '자르반 4세': 'Jarvan IV', '일라': 'Illaoi',
  '유나라': 'Yunara', '자아헨': 'Zaaheen',
};

const PARENS = {
  '추격단계': 'pursuit phase', '공격단계': 'attack phase', '채널링': 'channeling',
  '시전집중': 'channeling', '후진단계': 'backstep phase', '돌진단계': 'dash phase',
  '재간둥이': 'Trickster', '체인': 'chain', '재창조': 'Recast',
  '잠행폼': 'burrowed form', '승마폼': 'mounted form', '인간폼': 'human form',
  '거미폼': 'spider form', '해머폼': 'Hammer form', '메가폼': 'Mega form',
  '일반폼': 'non-ult form', '미니폼': 'mini form', '범위피해': 'AoE damage',
  '전이': 'chain', '관통': 'pierce', '천상강림': 'Astral Infusion',
  '평타': 'basic attacks', '방패': 'Shield',
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

function translateAbilityList(clause) {
  clause = clause.replace(/[를을의은는이가으]?\s*$/, '').trim();
  clause = clause.replace(/의\s*(\[\[)/g, "'s $1");
  // 콤마 → and (마지막)
  clause = clause.replace(/(\]\])\s*,\s*(\[\[)/g, '$1 and $2');
  clause = clause.replace(/([A-Z0-9]\d?)\s*,\s*([A-Z0-9]\d?\s*(?:\[\[|$|\())/g, (_, a, b) => `${a} and ${b}`);
  clause = clause.replace(/([A-Z0-9]\d?)\s*,\s*([A-Z0-9]\d?)\s*,\s*([A-Z0-9]\d?\s*(?:\[\[|$|\())/g, (_, a, b, c) => `${a}, ${b}, and ${c}`);
  clause = translateParens(clause);
  return clause.trim();
}

function translateTargetObject(text) {
  text = text.replace(/[를을의은는이가으로]$/, '').trim();
  const [champ, rest] = findChamp(text);
  if (!champ) return translateAbilityList(text);
  if (!rest) return champ;
  return `${champ}'s ${translateAbilityList(rest)}`;
}

function translateSuffix(extra) {
  if (!extra) return '';
  extra = extra.trim().replace(/^[.。]\s*/, '');
  if (!extra) return '';

  const m_tether = extra.match(/^단,?\s*\[\[TETHER\]\][은는]\s*남아있음\.?$/);
  if (m_tether) return ' However, the [[TETHER]] effect remains.';
  const m_stun = extra.match(/^단,?\s*\[\[STUN\]\][은는]\s*남아있음\.?$/);
  if (m_stun) return ' However, the [[STUN]] still applies.';
  const m_charm = extra.match(/^단,?\s*\[\[CHARM\]\][은는]\s*남아있음\.?$/);
  if (m_charm) return ' However, the [[CHARM]] still applies.';
  const m_airborne = extra.match(/^단,?\s*\[\[AIRBORNE\]\][은는]\s*남아있음\.?$/);
  if (m_airborne) return ' However, the [[AIRBORNE]] still applies.';
  const m_cc = extra.match(/^단,?\s*(.+?의\s*\[\[[A-Z_]+\]\])[은는]\s*남아있음\.?$/);
  if (m_cc) return ` However, ${m_cc[1].trim()} still applies.`;
  const m_but = extra.match(/^단,?\s*(.+)$/);
  if (m_but) return ` However, ${m_but[1].trim()}`;
  return ` ${extra}`;
}

function translateLine(line) {
  line = line.trim();
  if (!line) return '';
  let m;

  // ── GWEN W ─────────────────────────────────────────────────────────────────
  m = line.match(/^그웬 W로 (.+?)[를을] 범위 밖에서 맞지 않음\.?(.*)$/);
  if (m) {
    const obj = translateTargetObject(m[1]);
    const extra = m[2].trim();
    return `Gwen's W prevents ${obj} from hitting when outside the zone` + (extra ? '. ' + extra : '');
  }

  m = line.match(/^그웬에게 사용한 (.+?)[는은] 날아가던 중 범위 안에 들어올 때 사라짐\.?$/);
  if (m) return `${translateAbilityList(m[1])} aimed at Gwen disappear when they enter the zone mid-flight`;

  // ── BRAUM E: DAMAGE_NULLIFY / INTERCEPT_PROJECTILE ─────────────────────────
  // "브라움 E(방패)로 X 평타, Q, W를 막을([[DAMAGE_NULLIFY]]) 수 있음"
  m = line.match(/^브라움 E(?:\(방패\))?[로으로]+ (.+?)를\s*막을\(\[\[([A-Z_]+)\]\]\)\s*수 있음\.?(.*)$/);
  if (m) {
    const obj = translateTargetObject(m[1]);
    return `Braum's E(Shield) can [[${m[2]}]] against ${obj}` + translateSuffix(m[3]);
  }

  // "브라움 E(방패)로 X를 [[DAMAGE_NULLIFY]] 할 수 있음"
  m = line.match(/^브라움 E(?:\(방패\))?[로으로]+ (.+?)[를을] (\[\[[A-Z_]+\]\](?:,\s*\[\[[A-Z_]+\]\])*) 할 수 있음\.?(.*)$/);
  if (m) {
    const obj = translateTargetObject(m[1]);
    const tags = m[2].replace(/,\s*/g, ' and ');
    return `Braum's E(Shield) can ${tags} against ${obj}` + translateSuffix(m[3]);
  }

  // "브라움 E(방패)로 X를 [[INTERCEPT_PROJECTILE]] 할 수 있음"
  m = line.match(/^브라움 E(?:\(방패\))?[로으로]+ (.+?)[를을] \[\[INTERCEPT_PROJECTILE\]\] 할 수 있음\.?(.*)$/);
  if (m) {
    const obj = translateTargetObject(m[1]);
    return `Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] ${obj}` + translateSuffix(m[2]);
  }

  // "브라움 E로 X를 막을 수 있음"
  m = line.match(/^브라움 E(?:\(방패\))?[로으로]+ (.+?)[를을] 막을 수 있음\.?(.*)$/);
  if (m) {
    const obj = translateTargetObject(m[1]);
    return `Braum's E(Shield) can block ${obj}` + translateSuffix(m[2]);
  }

  // "브라움 E로 X를 막을 수 없음"
  m = line.match(/^브라움 E(?:\(방패\))?[로으로]+ (.+?)[를을] 막을 수 없음\.?(.*)$/);
  if (m) {
    const obj = translateTargetObject(m[1]);
    return `Braum's E(Shield) cannot block ${obj}` + translateSuffix(m[2]);
  }

  // ── BRAUM P ────────────────────────────────────────────────────────────────
  m = line.match(/^브라움 P의? \[\[STUN\]\][로으로]+ (.+?)[를을] 끊을 수 있음\.?(.*)$/);
  if (m) return `Braum's P [[STUN]] can interrupt ${translateTargetObject(m[1])}` + translateSuffix(m[2]);

  m = line.match(/^브라움 P의? \[\[STUN\]\][로으로]+ (.+?)[를을] 끊을 수 없음\.?(.*)$/);
  if (m) return `Braum's P [[STUN]] cannot interrupt ${translateTargetObject(m[1])}` + translateSuffix(m[2]);

  m = line.match(/^브라움 P의? \[\[STUN\]\][이가] (.+?)[에게를을] 적용됨\.?(.*)$/);
  if (m) return `Braum's P [[STUN]] applies to ${translateTargetObject(m[1])}` + translateSuffix(m[2]);

  // ── BRAUM Q ────────────────────────────────────────────────────────────────
  m = line.match(/^브라움 Q의? \[\[STUN\]\][로으로]+ (.+?)[를을] 끊을 수 있음\.?(.*)$/);
  if (m) return `Braum's Q [[STUN]] can interrupt ${translateTargetObject(m[1])}` + translateSuffix(m[2]);

  m = line.match(/^브라움 Q의? \[\[STUN\]\][로으로]+ (.+?)[를을] 끊을 수 없음\.?(.*)$/);
  if (m) return `Braum's Q [[STUN]] cannot interrupt ${translateTargetObject(m[1])}` + translateSuffix(m[2]);

  m = line.match(/^브라움 Q[로으로]+ (.+?)[를을] 끊을 수 있음\.?(.*)$/);
  if (m) return `Braum's Q can interrupt ${translateTargetObject(m[1])}` + translateSuffix(m[2]);

  m = line.match(/^브라움 Q[로으로]+ (.+?)[를을] 끊을 수 없음\.?(.*)$/);
  if (m) return `Braum's Q cannot interrupt ${translateTargetObject(m[1])}` + translateSuffix(m[2]);

  // ── BRAUM R ────────────────────────────────────────────────────────────────
  m = line.match(/^브라움 R의? \[\[AIRBORNE\]\][로으로]+ (.+?)[를을] 끊을 수 있음\.?(.*)$/);
  if (m) return `Braum's R [[AIRBORNE]] can interrupt ${translateTargetObject(m[1])}` + translateSuffix(m[2]);

  m = line.match(/^브라움 R의? \[\[AIRBORNE\]\][로으로]+ (.+?)[를을] 끊을 수 없음\.?(.*)$/);
  if (m) return `Braum's R [[AIRBORNE]] cannot interrupt ${translateTargetObject(m[1])}` + translateSuffix(m[2]);

  m = line.match(/^브라움 R[로으로]+ (.+?)[를을] 끊을 수 있음\.?(.*)$/);
  if (m) return `Braum's R can interrupt ${translateTargetObject(m[1])}` + translateSuffix(m[2]);

  m = line.match(/^브라움 R[로으로]+ (.+?)[를을] 끊을 수 없음\.?(.*)$/);
  if (m) return `Braum's R cannot interrupt ${translateTargetObject(m[1])}` + translateSuffix(m[2]);

  // ── BRAUM W ────────────────────────────────────────────────────────────────
  m = line.match(/^브라움 W[로으로]+ (.+?)[를을] 끊을 수 있음\.?(.*)$/);
  if (m) return `Braum's W can interrupt ${translateTargetObject(m[1])}` + translateSuffix(m[2]);

  m = line.match(/^브라움 W[로으로]+ (.+?)[를을] 끊을 수 없음\.?(.*)$/);
  if (m) return `Braum's W cannot interrupt ${translateTargetObject(m[1])}` + translateSuffix(m[2]);

  // ── GENERIC PATTERNS ──────────────────────────────────────────────────────
  // "X으로 Y를 끊을 수 있음"
  m = line.match(/^(.+?)[로으로]+ (.+?)[를을] 끊을 수 있음\.?(.*)$/);
  if (m) {
    return `${translateTargetObject(m[1])} can interrupt ${translateTargetObject(m[2])}` + translateSuffix(m[3]);
  }

  // "X으로 Y를 끊을 수 없음. 단, Z는 남아있음"
  m = line.match(/^(.+?)[로으로]+ (.+?)[를을] 끊을 수 없음\.?(.*)$/);
  if (m) {
    return `${translateTargetObject(m[1])} cannot interrupt ${translateTargetObject(m[2])}` + translateSuffix(m[3]);
  }

  // "X으로 Y를 막을 수 있음"
  m = line.match(/^(.+?)[로으로]+ (.+?)[를을] 막을 수 있음\.?(.*)$/);
  if (m) return `${translateTargetObject(m[1])} can block ${translateTargetObject(m[2])}` + translateSuffix(m[3]);

  // "X으로 Y를 막을 수 없음"
  m = line.match(/^(.+?)[로으로]+ (.+?)[를을] 막을 수 없음\.?(.*)$/);
  if (m) return `${translateTargetObject(m[1])} cannot block ${translateTargetObject(m[2])}` + translateSuffix(m[3]);

  // "X으로 Y를 피할 수 있음"
  m = line.match(/^(.+?)[로으로]+ (.+?)[를을] 피할 수 있음\.?(.*)$/);
  if (m) return `${translateTargetObject(m[1])} can dodge ${translateTargetObject(m[2])}` + translateSuffix(m[3]);

  // "X으로 Y를 따라갈 수 있음"
  m = line.match(/^(.+?)[로으로]+ (.+?)[를을] 따라 ?갈 수 있음\.?(.*)$/);
  if (m) return `${translateTargetObject(m[1])} can follow ${translateTargetObject(m[2])}` + translateSuffix(m[3]);

  // "X의 [[CC_CLEANSE]]로 Y를 해제할 수 있음"
  m = line.match(/^(.+?의 \[\[CC_CLEANSE\]\])[로으로]+ (.+?)[를을] 해제할 수 있음\.?(.*)$/);
  if (m) return `${translateTargetObject(m[1])} can cleanse ${translateTargetObject(m[2])}` + translateSuffix(m[3]);

  m = line.match(/^(.+?의 \[\[CC_CLEANSE\]\])[로으로]+ (.+?)[는은] 해제할 수 없음\.?(.*)$/);
  if (m) return `${translateTargetObject(m[1])} cannot cleanse ${translateTargetObject(m[2])}` + translateSuffix(m[3]);

  // "X의 Y로 Z를 해제할 수 있음"
  m = line.match(/^(.+?)[로으로]+ (.+?)[를을] 해제할 수 있음\.?(.*)$/);
  if (m) return `${translateTargetObject(m[1])} can cleanse ${translateTargetObject(m[2])}` + translateSuffix(m[3]);

  m = line.match(/^(.+?)[로으로]+ (.+?)[는은] 해제할 수 없음\.?(.*)$/);
  if (m) return `${translateTargetObject(m[1])} cannot cleanse ${translateTargetObject(m[2])}` + translateSuffix(m[3]);

  // "X으로 Y를 볼 수 있음"
  m = line.match(/^(.+?)[로으로]+ (.+?)[를을] 볼 수 있음\.?(.*)$/);
  if (m) return `${translateTargetObject(m[1])} can reveal ${translateTargetObject(m[2])}` + translateSuffix(m[3]);

  // "X으로 Y를 무시할 수 있음"
  m = line.match(/^(.+?)[로으로]+ (.+?)[를을] 무시할 수 있음\.?(.*)$/);
  if (m) return `${translateTargetObject(m[1])} can ignore ${translateTargetObject(m[2])}` + translateSuffix(m[3]);

  // Fallback
  return `[TODO: ${line}]`;
}

function translateKo(koStr) {
  return koStr.split('\\n').map(translateLine).join('\\n');
}

// ─── File processing ───────────────────────────────────────────────────────────
function extractArraysWithPositions(content, field) {
  const regex = new RegExp(field + ':\\s*\\[', 'g');
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
  const koArrays = extractArraysWithPositions(content, 'ko');
  const enArrays = extractArraysWithPositions(content, 'en');
  if (koArrays.length !== enArrays.length) return { changed: false, todos: 0 };

  const patches = [];
  for (let i = 0; i < koArrays.length; i++) {
    const ko = koArrays[i], en = enArrays[i];
    // en이 비어있거나 빈 문자열만 있고, ko에 실제 내용이 있는 경우만 번역
    const enIsEmpty = en.items.length === 0 || en.items.every(e => e.trim() === '');
    const koHasContent = ko.items.length > 0 && ko.items.some(k => k.trim() !== '');
    const needsTranslation = enIsEmpty && koHasContent;
    if (!needsTranslation) continue;
    const newItems = ko.items.map(k => k.trim() === '' ? '' : translateKo(k));
    patches.push({ en, newItems });
  }

  if (!patches.length) return { changed: false, todos: 0 };
  patches.sort((a, b) => b.en.startPos - a.en.startPos);

  let todos = 0;
  for (const { en, newItems } of patches) {
    todos += newItems.filter(s => s.startsWith('[TODO:')).length;
    const strs = newItems.map(s => `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`);
    const newArrayStr = 'en: [' + strs.join(', ') + ']';
    const beforeEnd = content.slice(0, en.endPos);
    const enStart = beforeEnd.lastIndexOf('en:');
    if (enStart === -1) continue;
    content = content.slice(0, enStart) + newArrayStr + content.slice(en.endPos);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  return { changed: true, todos };
}

// ─── Main ──────────────────────────────────────────────────────────────────────
const matchupDir = 'app/data/matchups';
const allFiles = [];

// braum/ 디렉토리 내 모든 파일
const braumDir = path.join(matchupDir, 'braum');
for (const f of fs.readdirSync(braumDir)) {
  if (f.endsWith('.ts')) allFiles.push(path.join(braumDir, f));
}

// 다른 챔피언 폴더의 *_braum.ts 파일
for (const dir of fs.readdirSync(matchupDir)) {
  const full = path.join(matchupDir, dir);
  if (dir === 'braum' || !fs.statSync(full).isDirectory()) continue;
  for (const f of fs.readdirSync(full)) {
    if (f.endsWith('_braum.ts')) allFiles.push(path.join(full, f));
  }
}

let changed = 0, totalTodos = 0;
const todoFiles = [];

for (const filePath of allFiles) {
  const result = processFile(filePath);
  if (result.changed) {
    changed++;
    totalTodos += result.todos;
    if (result.todos > 0) todoFiles.push({ filePath, todos: result.todos });
  }
}

console.log(`\n처리 완료: ${changed}개 파일 번역됨`);
console.log(`[TODO] 미번역 항목 수: ${totalTodos}`);
if (todoFiles.length > 0) {
  console.log('\n[TODO 남은 파일]:');
  todoFiles.forEach(({ filePath, todos }) => console.log(`  ${path.basename(filePath)} (${todos}개)`));
}
