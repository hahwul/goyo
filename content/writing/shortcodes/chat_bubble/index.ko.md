+++
title = "채팅 버블"
weight = 7
taxonomies = { tags = ["shortcodes", "chat", "ui"], categories = ["shortcodes"] }
+++

`chat_bubble` 숏코드는 아바타 이미지와 메시지 텍스트가 포함된 캐릭터 채팅 버블 컴포넌트를 생성합니다.

## 사용법

```jinja
{% raw %}{{< chat_bubble img="path/to/avatar.png" msg="메시지 텍스트" />}}{% endraw %}
```

## 매개변수

- `img` (필수): 캐릭터 아바타 이미지 경로
- `msg` (필수): 메시지 텍스트 내용 (Markdown 형식 지원)
- `author` (선택): 아바타 이미지 아래에 표시할 작성자 이름

## 예제

{{< chat_bubble img="/writing/shortcodes/gallery/images/image1.jpeg" author="앨리스" msg="카드의 모든 섹터를 읽지 못한 경우 어떻게 하나요? 카드나 리더에서 nonce를 추출하여 읽지 못한 섹터의 키를 검색한 다음 누락된 키를 계산할 수 있습니다. [더 알아보기](#)." />}}

```jinja
#{ chat_bubble(
  img="/writing/shortcodes/gallery/images/image1.jpeg",
  author="앨리스",
  msg="카드의 모든 섹터를 읽지 못한 경우 어떻게 하나요? 카드나 리더에서 nonce를 추출하여..."
) }#
```

## 기능

- **아바타 표시**: 왼쪽에 둥근 아바타 이미지 표시
- **작성자 이름**: 아바타 아래에 작성자 이름 표시 (선택 사항)
- **Markdown 지원**: 메시지 내용에서 Markdown 형식 지원
- **테마 통합**: 다크/라이트 테마 설정에 자동으로 적응
- **반응형**: 모든 화면 크기에서 작동

## 참고사항

채팅 버블은 DaisyUI의 채팅 컴포넌트를 기본 왼쪽 정렬로 사용합니다. 메시지 내용은 Markdown을 지원하므로 메시지 내에 **굵은 텍스트**, *기울임꼴 텍스트*, 링크 및 기타 형식을 포함할 수 있습니다.
