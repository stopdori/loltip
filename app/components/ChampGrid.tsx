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

      <ul className="grid grid-cols-[repeat(auto-fill,minmax(32px,1fr))] gap-1">
        {champions.map((c) => {
          const name = lang === "ko" ? c.ko : c.en;
          return (
            <li key={c.id} className="flex justify-center">
              {/* 173개가 한꺼번에 뷰포트에 들어오면 프리패치가 몰리므로 끈다(링크 자체는 그대로 크롤 가능) */}
              <Link
                href={`/champ/${c.id}`}
                prefetch={false}
                title={name}
                className="relative block w-8 h-8 rounded overflow-hidden hover:ring-2 hover:ring-yellow-400/70 transition"
              >
                {/* 표시 텍스트가 없으므로 alt가 링크의 접근성 이름/크롤러가 읽는 앵커 텍스트 역할을 한다 */}
                <Image
                  src={`/champs/${c.id}.webp`}
                  alt={name}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
