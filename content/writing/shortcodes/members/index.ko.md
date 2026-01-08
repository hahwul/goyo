+++
title = "Members"
weight = 20
taxonomies = { tags = ["shortcodes", "members", "team", "people"], categories = ["shortcodes"] }

[[extra.members]]
name = "홍길동"
role = "수석 개발자"
description = "현대 기술을 사용한 우아한 솔루션 구축에 열정적입니다. 오픈소스와 커뮤니티 기여를 좋아합니다."

[extra.members.social]
github = "https://github.com"
twitter = "https://twitter.com"

[[extra.members]]
name = "김철수"
role = "UI/UX 디자이너"
description = "아름답고 직관적인 사용자 경험을 창조합니다. 접근성과 사용자 중심 디자인에 집중합니다."

[extra.members.social]
linkedin = "https://linkedin.com"
website = "https://example.com"

[[extra.members]]
name = "이영희"
role = "프로덕트 매니저"
description = "기술과 비즈니스 사이의 간극을 연결합니다. 사람들이 사랑하는 제품을 만드는 것에 열정적입니다."

[extra.members.social]
email = "lee@example.com"
linkedin = "https://linkedin.com"
+++

`members` 숏코드는 팀 멤버들의 사진, 설명, 소셜 링크를 포함한 아름다운 멤버 디스플레이를 생성합니다. 그리드 및 라인 레이아웃을 모두 지원합니다.

## 사용법

페이지 프론트 매터(마크다운 파일 상단의 `+++` 마커 사이 섹션)에 멤버 데이터를 추가한 다음 숏코드를 사용하세요:

```markdown
+++
title = "우리 팀"

[[extra.members]]
name = "홍길동"
role = "수석 개발자"
photo = "/images/hong.jpg"
description = "우아한 솔루션 구축에 열정적"

[extra.members.social]
github = "https://github.com/hong"
twitter = "https://twitter.com/hong"

[[extra.members]]
name = "김철수"
role = "UI/UX 디자이너"
photo = "/images/kim.jpg"
description = "아름다운 사용자 경험 창조"

[extra.members.social]
linkedin = "https://linkedin.com/in/kim"
website = "https://kim.design"
+++

# 우리 팀

{{/* members() */}}
```

## 파라미터

| 파라미터 | 타입 | 기본값 | 설명 |
|---------|------|--------|------|
| `layout` | string | "grid" | 레이아웃 스타일: "grid" 또는 "line" |

## 멤버 데이터 구조

멤버는 TOML 형식을 사용하여 페이지의 프론트 매터에 정의됩니다:

```toml
[[extra.members]]
name = "멤버 이름"             # 필수
role = "직책"                 # 선택사항
photo = "/path/to/photo.jpg"  # 선택사항
description = "간단한 소개"    # 선택사항

[extra.members.social]        # 선택사항 섹션
github = "https://github.com/username"
twitter = "https://twitter.com/username"
linkedin = "https://linkedin.com/in/username"
email = "email@example.com"
website = "https://website.com"
```

## 예제

### 그리드 레이아웃 (기본값)

그리드 레이아웃은 화면 크기에 따라 자동으로 조정되는 반응형 그리드로 멤버를 배치합니다 (모바일 1열, 태블릿 2열, 데스크톱 3열).

```markdown
{{/* members() */}}
```

{{ members() }}

### 라인 레이아웃

라인 레이아웃은 멤버를 스크롤 가능한 행으로 표시하며, 많은 멤버가 있는 팀 섹션에 완벽합니다.

```markdown
{{/* members(layout="line") */}}
```

{{ members(layout="line") }}

### 완전한 예제

다음은 팀 페이지의 완전한 예제입니다:

```markdown
+++
title = "우리 팀"

[[extra.members]]
name = "홍길동"
role = "수석 개발자"
photo = "/images/team/hong.jpg"
description = "10년 이상의 풀스택 개발 경험"

[extra.members.social]
github = "https://github.com/hong"
twitter = "https://twitter.com/hong"
linkedin = "https://linkedin.com/in/hong"

[[extra.members]]
name = "김철수"
role = "UI/UX 디자이너"
photo = "/images/team/kim.jpg"
description = "사용자 경험에 집중하는 수상 경력의 디자이너"

[extra.members.social]
linkedin = "https://linkedin.com/in/kim"
website = "https://kim.design"

[[extra.members]]
name = "이영희"
role = "프로덕트 매니저"
description = "컨셉부터 출시까지 제품을 이끄는"

[extra.members.social]
email = "lee@company.com"
linkedin = "https://linkedin.com/in/lee"
+++

# 우리 팀을 만나보세요

우리는 놀라운 제품을 만드는 데 헌신하는 열정적인 전문가 팀입니다.

{{/* members() */}}
```

## 기능

- **반응형 그리드**: 화면 크기에 따라 자동 조정 (1/2/3열)
- **라인 스크롤**: 많은 멤버를 보여주기 위한 대안 레이아웃
- **소셜 링크**: GitHub, Twitter, LinkedIn, Email, Website 지원
- **호버 효과**: 부드러운 애니메이션 및 호버 시 확대
- **숨겨진 소셜 아이콘**: 깔끔한 모습을 위해 카드 호버 시에만 아이콘 표시
- **테마 통합**: 다크/라이트 테마 및 밝기 변형에 적응
- **글래스 효과**: 백드롭 블러가 있는 현대적인 글래스모피즘 디자인
- **그라데이션 테두리**: 멤버 사진의 아름다운 그라데이션 테두리
- **플레이스홀더 지원**: 사진이 없는 멤버를 위한 자동 폴백 아이콘

## 소셜 링크 아이콘

숏코드는 Font Awesome 아이콘으로 다음 소셜 플랫폼을 지원합니다:

- **GitHub**: `fab fa-github`
- **Twitter**: `fab fa-twitter`
- **LinkedIn**: `fab fa-linkedin`
- **Email**: `fas fa-envelope`
- **Website**: `fas fa-globe`

## 참고사항

- 소셜 아이콘을 위해 Font Awesome이 필요합니다. 사이트에 포함되어 있는지 확인하세요.
- 모든 소셜 링크는 새 탭에서 열립니다 (이메일 제외)
- 소셜 아이콘은 기본적으로 숨겨져 있으며 카드 호버 시 나타납니다
- `photo` 필드는 선택사항입니다 - 사진이 없는 멤버는 플레이스홀더 아이콘을 받습니다
- 소셜 링크는 선택사항입니다 - 제공된 소셜 네트워크만 표시됩니다
- 라인 레이아웃은 작은 화면에서 스크롤 가능합니다
- 멤버 카드는 더 나은 상호작용을 위해 호버 시 자동으로 확대됩니다
- 멤버 데이터는 페이지의 프론트 매터(상단의 TOML 섹션)에 정의되어야 합니다
