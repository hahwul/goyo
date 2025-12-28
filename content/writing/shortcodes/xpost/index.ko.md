+++
title = "X Post"
weight = 1
taxonomies = { tags = ["shortcodes", "x", "twitter", "social"], categories = ["shortcodes"] }
+++

`xpost`

- `xpost`: X (Twitter) 게시물을 임베드합니다. `username`과 `id`를 필수 매개변수로 받으며, 선택적으로 `theme`를 설정할 수 있습니다 (기본값 `light`, `dark` 가능).

```jinja
{{/* xpost(username="hahwul", id="2005269837267042570") */}}
```

{{ xpost(username="hahwul", id="2005269837267042570") }}

## 다크 테마 사용

```jinja
{{/* xpost(username="hahwul", id="2005269837267042570", theme="dark") */}}
```

{{ xpost(username="hahwul", id="2005269837267042570", theme="dark") }}
