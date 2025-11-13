+++
title = "Hover 3D"
weight = 7
+++

`hover_3d`

- `hover_3d`: 3D 호버 효과가 적용된 이미지를 표시합니다.  
  파라미터:  
  - `src`: 이미지 파일 경로.  
  - `alt`: (선택사항) 이미지의 대체 텍스트. 기본값은 "Hover 3D image"입니다.

```jinja
{{/* hover_3d(src="/images/example.png", alt="예시 이미지") */}}
```

{{ hover_3d(src="/screenshot.png", alt="예시 스크린샷") }}

