+++
title = "Collapse"
weight = 1
taxonomies = { tags = ["shortcodes", "collapse", "ui"], categories = ["shortcodes"] }
+++

`collapse`

- `collapse`: 접을 수 있는 섹션을 보여줍니다.  
  파라미터:  
  - `title`: 섹션의 제목  
  - `body`: 섹션 내부의 내용

```jinja
{% raw %}{% <collapse title="계정을 어떻게 만들 수 있나요?"> %}{% endraw %}
오른쪽 상단의 **'회원가입'** 버튼을 클릭하고 안내에 따라 등록하세요.
\
`마크다운` 문법도 사용할 수 있습니다.
{% raw %}{% </collapse> %}{% endraw %}
```

{% <collapse title="계정을 어떻게 만들 수 있나요?"> %}
오른쪽 상단의 **'회원가입'** 버튼을 클릭하고 안내에 따라 등록하세요.
\
`마크다운` 문법도 사용할 수 있습니다.
{% </collapse> %}

