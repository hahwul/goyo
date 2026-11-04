+++
title = "Browser"
weight = 1
taxonomies = { tags = ["shortcodes", "browser", "ui"], categories = ["shortcodes"] }
+++

`browser`

- `browser`: 브라우저 모형을 보여줍니다.  
  파라미터:  
  - `url`: 브라우저 툴바에 표시될 주소  
  - `content`: 브라우저 내부에 표시될 내용

```jinja
{% raw %}{{< browser url="https://example.com" content="예제로 오신 것을 환영합니다!" />}}{% endraw %}
```

{{< browser url="https://example.com" content="예제로 오신 것을 환영합니다!" />}}


