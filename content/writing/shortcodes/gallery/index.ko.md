+++
title = "Gallery"
weight = 7
taxonomies = { tags = ["shortcodes", "gallery", "images"], categories = ["shortcodes"] }
+++

`gallery` 숏코드는 현재 페이지 디렉토리의 모든 이미지 자산으로부터 반응형 이미지 갤러리를 생성합니다. JPG, JPEG, PNG, GIF, WebP 이미지를 자동으로 감지하고 표시합니다.

{{< gallery />}}

## 사용법

페이지의 `index.md` 파일과 같은 디렉토리에 이미지 파일(`.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`)을 배치한 후 숏코드를 사용합니다:

```jinja
{% raw %}{{< gallery />}}{% endraw %}
```

## 파라미터

| 파라미터 | 타입 | 기본값 | 설명 |
|----------|------|--------|------|
| `cols` | number | 3 | 큰 화면에서의 열 수 |
| `show_name` | boolean | true | 각 이미지 아래에 파일명을 표시할지 여부 |

## 예시

### 기본 사용법

```jinja
{% raw %}{{< gallery />}}{% endraw %}
```

{{< gallery />}}

### 커스텀 열 수

```jinja
{% raw %}{{< gallery cols={4} />}}{% endraw %}
```

{{< gallery cols={4} />}}

### 이미지 이름 숨기기

```jinja
{% raw %}{{< gallery show_name={false} />}}{% endraw %}
```

{{< gallery show_name={false} />}}

### 옵션 조합

```jinja
{% raw %}{{< gallery cols={2} show_name={false} />}}{% endraw %}
```

{{< gallery cols={2} show_name={false} />}}

## 기능

- **반응형 그리드**: 화면 크기에 따라 열 수를 자동으로 조정합니다 (모바일 2열, 태블릿 3열, 데스크톱은 설정 가능)
- **자동 감지**: 페이지 디렉토리의 모든 이미지를 자동으로 찾습니다
- **이미지 최적화**: 최적의 로딩 성능을 위해 이미지 크기가 조정됩니다
- **라이트박스 지원**: 이미지를 클릭하면 새 탭에서 전체 크기 버전을 볼 수 있습니다
- **호버 효과**: 마우스를 올리면 부드러운 확대 애니메이션이 적용됩니다
- **테마 통합**: 그림자와 둥근 모서리가 있는 Goyo 테마 스타일링을 따릅니다

## 디렉토리 구조

갤러리를 사용하려면 다음과 같이 콘텐츠를 구성하세요:

```
content/
└── your-page/
    ├── index.md       # gallery 숏코드가 포함된 페이지 콘텐츠
    ├── photo1.jpg     # 이미지 파일들
    ├── photo2.png
    └── photo3.webp
```

## 참고

- 이미지는 썸네일용으로 480x360 픽셀로 크기가 조정됩니다
- 썸네일을 클릭하면 원본 전체 크기 이미지를 볼 수 있습니다
- 이미지 파일명(확장자 제외)이 캡션으로 사용됩니다
- 이미지 파일만 처리되며 다른 파일 유형은 무시됩니다
