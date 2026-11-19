+++
title = "Image Diff"
weight = 3
taxonomies = { tags = ["shortcodes", "image-diff", "comparison"], categories = ["shortcodes"] }
+++

두 이미지를 시각적으로 비교할 수 있는 이미지 Diff 숏코드입니다.

## 사용법

```
{% raw %}{{< image_diff src1="URL_TO_ORIGINAL_IMAGE" src2="URL_TO_CHANGED_IMAGE" alt="Description of image" />}}{% endraw %}
```

- `src1`: 첫 번째(왼쪽) 이미지의 URL (필수)
- `src2`: 두 번째(오른쪽) 이미지의 URL (필수)
- `alt`: 이미지의 대체 텍스트 (선택, 기본값: "Image diff original" / "Image diff changed")

## 예시

{{< image_diff src1="/images/dark.jpg" src2="/images/light.jpg" alt="goyo" />}}

위와 같이 사용하면 두 이미지를 드래그로 비교할 수 있는 UI가 생성됩니다.