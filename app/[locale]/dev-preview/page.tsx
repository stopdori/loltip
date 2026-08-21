// app/[locale]/dev-preview/page.tsx
//
// ⚠️ 스타일/레이아웃 테스트 전용 페이지. 실제 매치업 시스템(CHAMPIONS, matchup/[pair]/page.tsx,
// ChampClient.tsx, sitemap.ts)과 완전히 분리되어 있으며 어디에서도 서로 참조하지 않는다.
// MatchupSummaryBox에 previewResult(하드코딩 더미)를 직접 주입해 /api/matchup fetch 없이 렌더링한다.
// 실제 매치업 데이터 파일(app/data/matchups/**)에 테스트 문장을 임시로 넣었다 빼는 방식은
// 다른 작업 내용을 실수로 손상시킬 위험이 있으므로, 스타일/레이아웃 확인은 항상 이 페이지를 쓸 것.
import type { Metadata } from "next";
import MatchupSummaryBox from "@/app/components/MatchupSummaryBox";
import type { MatchupLoadResult } from "@/app/data/matchups/_index";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Dev Preview (noindex)",
    robots: { index: false, follow: false },
  };
}

// 이름 표시용으로만 실제 CHAMPIONS에 있는 id를 빌려 쓴다(아이콘/포트레이트는
// MatchupSummaryBox가 렌더링하지 않으므로 실제 이미지 자산은 필요 없음).
const MY_ID = "aatrox";
const ENEMY_ID = "ahri";

// 카테고리: 짧은 문장 / 자연 줄바꿈되는 긴 문장 / \n 강제 줄바꿈 / [[TAG]] 문법 / [[TIP]] 짧은 것 / [[TIP]] 긴 것 + \n
const myKo = [
  "짧은 문장 테스트.",
  "이것은 자연스럽게 줄바꿈되는 긴 문장입니다 레이아웃 테스트를 위해 일부러 아주 길게 작성한 예시 텍스트입니다 test test test test test.",
  "이 문장은 강제 줄바꿈을 포함합니다. \n 두 번째 줄은 여기서 시작합니다.",
  "Q의 [[STUN]]으로 상대 E의 [[DASH]]을 끊을 수 있음.",
  "[[TIP]] 짧은 팁 문장입니다.",
  "[[TIP]] 이것은 팁 배지와 줄바꿈을 함께 테스트하기 위한 아주 길고 긴 예시 문장입니다 test test test test. \n 이 줄은 전구나 배지가 아니라 문장 시작 위치에 맞춰 정렬되어야 합니다.",
];
const myEn = [
  "Short sentence test.",
  "This is a long sentence that wraps naturally, deliberately written this long for layout testing purposes test test test test test.",
  "This sentence contains a forced line break. \n The second line starts here.",
  "Q's [[STUN]] can interrupt the enemy's E [[DASH]].",
  "[[TIP]] Short tip sentence.",
  "[[TIP]] This is a very long example sentence for testing the tip badge together with line-wrap test test test test. \n This line should align with the sentence start, not the marker or badge.",
];

const enemyKo = [
  "짧은 문장 테스트 2.",
  "이것 역시 자연스럽게 줄바꿈되는 아주 길고 긴 예시 문장입니다 상대 챔피언 쪽 레이아웃도 동일하게 테스트하기 위한 텍스트입니다 test test test.",
  "이 문장도 강제 줄바꿈을 포함합니다. \n 두 번째 줄이 여기서 시작합니다.",
  "W의 [[ROOT]]으로 상대 E의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
  "[[TIP]] 상대 쪽 짧은 팁 문장.",
  "[[TIP]] 이것은 상대 챔피언 쪽에서 팁 배지와 줄바꿈을 함께 테스트하기 위한 예시 문장입니다 test test test. \n 이 줄도 문장 시작 위치에 맞춰 정렬되어야 합니다.",
];
const enemyEn = [
  "Short sentence test 2.",
  "This is also a long sentence that wraps naturally, testing the enemy-side layout the same way test test test.",
  "This sentence also contains a forced line break. \n The second line starts here.",
  "W's [[ROOT]] can interrupt the enemy's E [[SKILL_CHANNEL]].",
  "[[TIP]] Enemy-side short tip sentence.",
  "[[TIP]] This is an example sentence for testing the tip badge together with line-wrap on the enemy side test test test. \n This line should also align with the sentence start.",
];

const commonKo = [
  "공통 항목 짧은 문장.",
  "공통 항목에서도 자연스럽게 줄바꿈되는 긴 문장을 테스트하기 위한 아주 길고 긴 예시 텍스트입니다 test test test test.",
  "공통 항목도 강제 줄바꿈을 포함합니다. \n 두 번째 줄이 여기서 시작합니다.",
  "양쪽 모두 [[STUN]] 상태에서는 [[DASH]]류 스킬을 사용할 수 없음.",
  "[[TIP]] 공통 항목 짧은 팁 문장.",
  "[[TIP]] 이것은 공통 항목에서 팁 배지와 줄바꿈을 함께 테스트하기 위한 예시 문장입니다 test test test. \n 이 줄도 문장 시작 위치에 맞춰 정렬되어야 합니다.",
];
const commonEn = [
  "Common section short sentence.",
  "This is a long sentence in the common section that wraps naturally, for layout testing test test test test.",
  "The common section also contains a forced line break. \n The second line starts here.",
  "Neither side can use [[DASH]]-type skills while [[STUN]]ned.",
  "[[TIP]] Common section short tip sentence.",
  "[[TIP]] This is an example sentence for testing the tip badge together with line-wrap in the common section test test test. \n This line should also align with the sentence start.",
];

const previewResult: MatchupLoadResult = {
  status: "ok",
  data: {
    champs: [MY_ID, ENEMY_ID],
    summary: { ko: [], en: [] },
    highlightsByChamp: {
      [MY_ID]: { ko: myKo, en: myEn },
      [ENEMY_ID]: { ko: enemyKo, en: enemyEn },
    },
    common: { ko: commonKo, en: commonEn },
  },
};

export default function DevPreviewPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-200">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-1 text-xl font-bold text-yellow-400">
          Dev Preview — MatchupSummaryBox 레이아웃 테스트
        </h1>
        <p className="mb-6 text-sm text-slate-400">
          noindex. 실제 매치업 데이터와 무관한 하드코딩 더미(previewResult)를 렌더링합니다.
          짧은 문장 / 자연 줄바꿈되는 긴 문장 / <code>\n</code> 강제 줄바꿈 / <code>[[TAG]]</code> 문법 /{" "}
          <code>[[TIP]]</code> 짧은 것·긴 것을 각 챔피언 및 공통 항목에 모두 포함합니다.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <section>
            <h2 className="mb-2 text-sm font-semibold text-slate-400">KO</h2>
            <MatchupSummaryBox
              myChampId={MY_ID}
              enemyChampId={ENEMY_ID}
              lang="ko"
              previewResult={previewResult}
            />
          </section>
          <section>
            <h2 className="mb-2 text-sm font-semibold text-slate-400">EN</h2>
            <MatchupSummaryBox
              myChampId={MY_ID}
              enemyChampId={ENEMY_ID}
              lang="en"
              previewResult={previewResult}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
