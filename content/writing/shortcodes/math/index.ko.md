+++
title = "수식"
weight = 4
taxonomies = { tags = ["shortcodes", "math", "katex"], categories = ["shortcodes"] }
+++

[KaTeX](https://katex.org/)를 사용하여 수학 공식과 방정식을 렌더링하려면 `math` 숏코드를 사용하세요.

## 기본 사용법

math 숏코드는 LaTeX 수식을 담은 `content` 매개변수를 받습니다:

{{< math content="E=mc^2" />}}

```jinja2
{% raw %}{{< math content="E=mc^2" />}}{% endraw %}
```

## 인라인 수식

인라인 수식을 추가하려면 math 숏코드를 사용하세요:

{{< math content="a \\ne 0" />}}일 때, {{< math content="ax^2 + bx + c = 0" />}}의 해는 두 개입니다.

```jinja2
{# math(content="a \\ne 0") #}일 때, {# math(content="ax^2 + bx + c = 0") #}의 해는 두 개입니다.
```

## 복잡한 수식

복잡한 LaTeX 수식도 지원합니다:

{{< math content="\\displaystyle\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}" />}}

```jinja2
{% raw %}{{< math content="\\displaystyle\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}" />}}{% endraw %}
```

## 그리스 문자

{{< math content="\\alpha, \\beta, \\gamma, \\delta, \\epsilon" />}}

```jinja2
{% raw %}{{< math content="\\alpha, \\beta, \\gamma, \\delta, \\epsilon" />}}{% endraw %}
```

## 분수와 제곱근

{{< math content="\\frac{a}{b}, \\sqrt{x}, \\sqrt[n]{x}" />}}

```jinja2
{% raw %}{{< math content="\\frac{a}{b}, \\sqrt{x}, \\sqrt[n]{x}" />}}{% endraw %}
```

## 행렬

{{< math content="\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}" />}}

```jinja2
{% raw %}{{< math content="\\begin{pmatrix} a & b \\ c & d \\end{pmatrix}" />}}{% endraw %}
```
