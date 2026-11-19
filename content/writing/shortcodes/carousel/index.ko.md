+++
title = "Carousel"
weight = 5
taxonomies = { tags = ["shortcodes", "carousel", "gallery"], categories = ["shortcodes"] }
+++

`carousel` 숏코드는 여러 이미지를 탐색할 수 있는 대화형 이미지 캐러셀을 생성합니다.

## 사용법

```jinja
{% raw %}{{< carousel images={["image1.png", "image2.png", "image3.png"]} />}}{% endraw %}
```

- `images`: 캐러셀에 표시할 이미지 URL 배열 (필수)

## 예시

{{< carousel images={["images/darker.png", "images/normal.png", "images/lighter.png"]} />}}

```jinja
{% raw %}{{< carousel images={["images/darker.png", "images/normal.png", "images/lighter.png"]} />}}{% endraw %}
```

## 기능

- **탐색 컨트롤**: 이미지 사이를 이동할 수 있는 좌우 화살표 버튼
- **순환 탐색**: 마지막 이미지에서 자동으로 첫 번째 이미지로 돌아감
- **반응형**: 다양한 화면 크기에 맞게 조정됨
- **전체 너비**: 이미지가 컨테이너의 전체 너비를 차지함

## 파라미터

- `images` (필수): 이미지 URL 배열. 각 URL은 이미지 파일 경로를 나타내는 문자열이어야 합니다.

## 참고

이 캐러셀은 DaisyUI의 캐러셀 컴포넌트를 사용하며 순환 탐색 버튼이 있습니다. 이미지는 캐러셀 컨테이너 내에서 전체 너비로 표시됩니다.
