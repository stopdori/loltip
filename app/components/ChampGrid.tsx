import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { CHAMPIONS } from "@/app/data/champions";
import { filterChampions } from "@/app/utils/champSearch";

// /champ 페이지의 "전체 챔피언" 링크 그리드.
// 서버 컴포넌트("use client" 없음)라서 173개 <a href="/{locale}/champ/{id}">가 항상 SSR HTML에
// 그대로 나간다 — 챔피언 선택 모달/검색창은 <button>+router.push라 크롤러가 따라갈 수 있는
// 링크가 없었기 때문에, 이 그리드가 개별 챔피언 페이지로 가는 유일한 크롤 가능 내부 링크다.
//
// 순서: 모달/검색과 동일하게 언어별 정렬(ko=가나다, en=알파벳)을 쓴다 — CHAMPIONS 배열 자체는
// 한글 가나다순이라 EN 페이지에 그대로 쓰면 Garen, Galio, Gangplank… 식으로 어긋난다.
// 카드 스타일은 ChampSelectModal의 챔피언 그리드와 맞춘다.
export default function ChampGrid({ lang }: { lang: "ko" | "en" }) {
  const champions = filterChampions(CHAMPIONS, "", lang);

  return (
    <section
      aria-labelledby="all-champions-heading"
      className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 px-2 sm:px-5 py-4"
    >
      {/* /champ(챔피언 목록) 페이지의 주제 제목이라 h1 — 로고(SiteHeader)가 h1에서 내려오면서 이 페이지엔
          다른 h1이 없다. ChampGrid는 /champ에서만 쓰인다. */}
      <h1
        id="all-champions-heading"
        className="text-base font-bold text-yellow-400 tracking-wide uppercase mb-4"
      >
        {lang === "ko" ? "전체 챔피언" : "All Champions"}
      </h1>

      <ul className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 sm:gap-3">
        {champions.map((c) => {
          const name = lang === "ko" ? c.ko : c.en;
          return (
            <li key={c.id}>
              {/* 173개가 한꺼번에 뷰포트에 들어오면 프리패치가 몰리므로 끈다(링크 자체는 그대로 크롤 가능) */}
              <Link
                href={`/champ/${c.id}`}
                prefetch={false}
                title={name}
                className="block rounded-xl bg-slate-800/50 hover:bg-slate-700/60 transition p-1.5 sm:p-2 border border-white/10 hover:border-white/20"
              >
                {/* aspect-square 래퍼가 이미지 로딩 전에 자리를 미리 잡아서 레이아웃 시프트가 없다 */}
                <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-white/10 bg-slate-950/30">
                  {/* alt="": 바로 아래 표시 텍스트가 같은 이름이라 스크린리더가 두 번 읽지 않도록 장식 이미지로 처리
                      (링크의 접근성 이름/크롤러가 읽는 텍스트는 아래 표시 텍스트와 title이 담당) */}
                  <Image
                    src={`/champs/${c.id}.webp`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 88px, (min-width: 768px) 100px, (min-width: 640px) 120px, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-center truncate">
                  {name}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
