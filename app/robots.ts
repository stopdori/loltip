import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        // 아래 두 allow는 일반 disallow(?side=, ?first=)보다 더 구체적인 패턴이라
        // Google의 "가장 구체적인 패턴이 우선(longest match wins)" 규칙에 따라
        // 이 경로들에서는 disallow보다 우선 적용됨 (순서와 무관).
        // /champ/[id], /matchup/[pair]는 side/first 값과 무관하게 canonical이
        // 정확한 base URL을 가리키므로 파라미터가 붙어도 중복 콘텐츠 위험이 없고,
        // 제3자 공유 링크(예: 유튜브 쇼츠 고정댓글의 ?side=/?first= 링크)의 신호가
        // 크롤링을 통해 canonical로 전달되도록 허용한다.
        allow: [
          '/',
          '/*/champ/*?side=',
          '/*/matchup/*?first=',
        ],
        // 주의: /*/champ/*?side= 패턴은 /champ/[id]가 단일 동적 세그먼트인
        // 현재 라우트 구조를 전제로 함. 나중에 /champ 하위에 다른 동적
        // 세그먼트(예: /champ/[id]/[subpage])가 추가되면 이 패턴이 의도보다
        // 넓게 열릴 수 있으니 라우트 구조 변경 시 재검토 필요.
        //
        // /champ-embed/{id}?side=는 canonical이 없고 noindex 메타만 있어
        // 계속 차단해야 함 - "/champ-embed/"에는 "/champ/"(슬래시로 끝나는)
        // 리터럴이 없어 위 allow 패턴에 매치되지 않고, 아래 일반 disallow만
        // 적용되어 자동으로 차단 상태가 유지됨 (별도 조치 불필요).
        //
        // 아래 disallow는 절대 제거하지 말 것 - 안전망 역할.
        // 위 allow로 명시적으로 열어주지 않은 모든 ?side=/?first= 경로
        // (champ-embed 포함, 향후 새로 생길 경로 포함)를 기본적으로 차단한다.
        disallow: ['/*?side=', '/*?first='],
      },
    ],
    sitemap: 'https://loltip.com/sitemap.xml',
    host: 'https://loltip.com',
  }
}