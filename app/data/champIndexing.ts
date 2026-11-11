// 챔피언 개별 페이지(/[locale]/champ/[id]) 색인 기준.
// 챔피언 파일 작업은 id 알파벳순으로 진행 중이며, 작업이 끝난 챔피언까지만 색인한다.
// 이후 챔피언은 noindex,follow + sitemap 제외. 작업이 진행되면 이 값만 갱신하면 된다.
export const LAST_INDEXED_CHAMP_ID = "malphite";

export function isChampIndexable(id: string): boolean {
  return id.toLowerCase() <= LAST_INDEXED_CHAMP_ID;
}
