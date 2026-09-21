import Image from "next/image";
import { Link } from "@/i18n/navigation";

// 매치업 페이지 하단(ChampClient의 extraSection 슬롯)에 들어가는 "이 매치업의 두 챔피언 페이지" 링크.
// 서버 컴포넌트("use client" 없음)라서 <a href="/{locale}/champ/{id}">가 항상 SSR HTML에 나간다.
// (매치업 화면의 챔피언 카드는 <div role="button">+모달이고, 판정 세부사항의 챔피언 이름은 클라이언트
//  fetch 후에만 생겨서, 매치업 페이지에는 챔피언 페이지로 가는 크롤 가능한 링크가 없었다.)
// 앵커 텍스트는 대상 페이지 title("{챔피언} 챔피언 공략 - …")과 맞춘 "{챔피언} 챔피언 공략".
// 카드 스타일은 /champ의 ChampGrid와 톤을 맞췄다.
export default function MatchupChampLinks({
  lang,
  champs,
}: {
  lang: "ko" | "en";
  champs: { id: string; name: string }[];
}) {
  return (
    <section
      aria-labelledby="matchup-champ-links-heading"
      className="rounded-2xl bg-slate-800/40 ring-1 ring-white/10 px-2 sm:px-5 py-4"
    >
      <h2
        id="matchup-champ-links-heading"
        className="text-base font-bold text-yellow-400 tracking-wide uppercase mb-3"
      >
        {lang === "ko" ? "챔피언 공략 보기" : "Champion Guides"}
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {champs.map((c) => (
          <li key={c.id}>
            <Link
              href={`/champ/${c.id}`}
              prefetch={false}
              className="flex items-center gap-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/60 transition p-2 border border-white/10 hover:border-white/20"
            >
              {/* alt="": 옆의 링크 텍스트가 같은 이름을 이미 담고 있어 장식 이미지로 처리 */}
              <div className="relative w-10 h-10 shrink-0 rounded-lg overflow-hidden border border-white/10 bg-slate-950/30">
                <Image
                  src={`/champs/${c.id}.webp`}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-semibold text-slate-200">
                {lang === "ko" ? `${c.name} 챔피언 공략` : `${c.name} Champion Guide`}
              </span>
              <span aria-hidden="true" className="ml-auto text-slate-400">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
