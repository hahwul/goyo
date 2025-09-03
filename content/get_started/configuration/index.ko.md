+++
title = "Configuration"
description = "Goyo의 설정 방법을 알아보세요."
weight = 4
sort_by = "weight"

[extra]
+++

이제 Goyo 테마의 설정을 알아봅니다. 테마를 커스텀하게 사용하기 위한 여러가지 설정을 제공합니다. `config.toml`에서 사용할 수 있습니다.

## 로고
`logo_text` / `logo_image_path` / `logo_image_padding`

- `logo_text`: 로고 이미지 없을 때 표시되는 텍스트
- `logo_image_path`: 로고 이미지 경로
- `logo_image_padding`: 로고 이미지에 적용할 padding 값 (예: "5px")

```toml
[extra]
logo_text = "Goyo"
logo_image_path = "images/goyo.png"
logo_image_padding = "5px"
```

## 푸터
`footer_html`

- `footer_html`: 푸터에 표시되는 HTML 코드

```toml
[extra]
footer_html = "Powered by <a href='https://www.getzola.org'>Zola</a> and <a href='https://github.com/hahwul/goyo'>Goyo</a>"
```

## 썸네일
`default_thumbnail`

- `default_thumbnail`: 기본 썸네일 이미지 경로

```toml
[extra]
default_thumbnail = "images/default_thumbnail.jpg"
```

## 트위터
`twitter_site` / `twitter_creator`

- `twitter_site`: 트위터 사이트 핸들
- `twitter_creator`: 트위터 생성자 핸들

```toml
[extra]
twitter_site = "@hahwul"
twitter_creator = "@hahwul"
```

## 컬러셋
`default_colorset`

- `default_colorset`: 기본 테마 (dark/light)

```toml
[extra]
default_colorset = "dark"
```

## 구글 태그
`gtag`

- `gtag`: 구글 태그 ID

```toml
[extra]
gtag = "G-XXXXXXXXXX"
```

## 사이드바 확장 깊이
`sidebar_expand_depth`

- `sidebar_expand_depth`: 사이드바 섹션이 기본적으로 확장되어야 하는 깊이(최대 5)를 지정합니다. 예를 들어, `1` 값은 최상위 섹션만 표시하고, `2`는 첫 번째 하위 섹션 수준을 확장합니다.

```toml
[extra]
sidebar_expand_depth = 2
```

## 네비게이션
`nav`

- `nav`: 상단 네비게이션 메뉴입니다. name과 icon 필드는 optional 입니다.

```toml
[extra]
nav = [
    { name = "Documents", url = "/introduction", type = "url", icon = "fa-solid fa-book" },
    { name = "GitHub", url = "https://github.com/hahwul/goyo", type = "url", icon = "fa-brands fa-github" },
    { name = "Links", type = "dropdown", icon = "fa-solid fa-link", members = [
        { name = "Creator Blog", url = "https://www.hahwul.com", type = "url", icon = "fa-solid fa-fire-flame-curved" },
    ] },
]
```

## 테마 토글 비활성화
`disable_theme_toggle`

- `disable_theme_toggle`: `true`로 설정하면 상단 네비게이션에서 테마(다크/라이트) 토글 버튼이 표시되지 않습니다.

```toml
[extra]
disable_theme_toggle = true
```

## 루트 사이드바 숨기기 비활성화
`disable_root_sidebar_hide`

- `disable_root_sidebar_hide`: `true`로 설정하면 루트 페이지 (`/` 또는 `/{lang}/`)에서 사이드바가 숨겨지지 않습니다. 이를 통해 메인 랜딩 페이지에서도 사이드바를 항상 볼 수 있습니다.

```toml
[extra]
disable_root_sidebar_hide = false
```

{{ image_diff(
    src1="/images/side-home.jpg",
    src2="/images/wide-home.jpg",
    alt="goyo"
) }}

## 다국어 설정
`languages`

- `languages`: 각 언어별 사용자 정의 표시 이름으로 다국어 지원을 구성합니다.

```toml
[languages.ko]
generate_feeds = true
build_search_index = false
title = "한국어"

[languages.ja]
generate_feeds = true
build_search_index = false
title = "日本語"

[languages.fr]
generate_feeds = true
build_search_index = false
title = "Français"
```

`title` 필드는 언어 전환 드롭다운에 표시되는 표시 이름을 지정합니다. `title`이 제공되지 않으면 테마는 원시 언어 코드(예: "ko", "ja")를 표시하는 것으로 대체됩니다.

## 댓글
`comments`

- `comments`: 댓글 기능 설정 (giscus/utterances)

```toml
[extra.comments]
enabled = true
system = "giscus"
repo = "hahwul/goyo"
repo_id = "R_kgDOPHnqwg"
category = "General"
category_id = "DIC_kwDOPHnqws4CspmC"
mapping = "pathname"
strict = "0"
reactions_enabled = "1"
emit_metadata = "0"
input_position = "bottom"
theme = "catppuccin_mocha"
lang = "en"
```
