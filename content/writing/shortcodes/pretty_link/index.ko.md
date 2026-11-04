+++
title = "Pretty Link"
weight = 4
taxonomies = { tags = ["shortcodes", "link", "card"], categories = ["shortcodes"] }
+++

아름다운 링크 카드를 생성하여 URL을 제목, 설명, 선택적 이미지와 함께 표시합니다. 외부 리소스, 참조 또는 관련 링크를 매력적인 카드 형식으로 보여주는 데 완벽합니다.

## 기본 사용법

{{< pretty_link url="https://github.com/hahwul/goyo" />}}

```jinja2
{% raw %}{{< pretty_link url="https://github.com/hahwul/goyo" />}}{% endraw %}
```

## 제목 포함

{{< pretty_link url="https://github.com/hahwul/goyo" title="Goyo 테마" />}}

```jinja2
{% raw %}{{< pretty_link url="https://github.com/hahwul/goyo" title="Goyo 테마" />}}{% endraw %}
```

## 제목과 설명 포함

{{< pretty_link url="https://github.com/hahwul/goyo" title="Goyo 테마" description="고요함과 평온함을 의미하는 한국어에서 영감을 받은 깔끔하고 미니멀한 Zola 테마입니다." />}}

```jinja2
{% raw %}{{< pretty_link url="https://github.com/hahwul/goyo" title="Goyo 테마" description="고요함과 평온함을 의미하는 한국어에서 영감을 받은 깔끔하고 미니멀한 Zola 테마입니다." />}}{% endraw %}
```

## 이미지 포함

{{< pretty_link url="https://github.com/hahwul/goyo" title="Goyo 테마" description="고요함과 평온함을 의미하는 한국어에서 영감을 받은 깔끔하고 미니멀한 Zola 테마입니다." image="/images/goyo.png" />}}

```jinja2
{% raw %}{{< pretty_link url="https://github.com/hahwul/goyo" title="Goyo 테마" description="고요함과 평온함을 의미하는 한국어에서 영감을 받은 깔끔하고 미니멀한 Zola 테마입니다." image="/images/goyo.png" />}}{% endraw %}
```

## 매개변수

- `url` (필수): 링크할 URL
- `title` (선택적): 링크의 제목. 제공되지 않으면 URL이 제목으로 사용됩니다
- `description` (선택적): 링크에 대한 설명
- `image` (선택적): 링크와 함께 표시할 이미지 URL
