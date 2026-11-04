+++
title = "OpenStreetMap"
weight = 1
taxonomies = { tags = ["shortcodes", "map", "openstreetmap"], categories = ["shortcodes"] }
+++

`openstreetmap`

- `openstreetmap`: OpenStreetMap 지도를 삽입합니다. `bbox`는 필수 파라미터이며, `layer`와 `marker`는 선택적으로 사용할 수 있습니다.
  - `bbox`: 경계 상자 좌표 (서,남,동,북)
  - `layer`: 지도 레이어 유형 (예: "mapnik")
  - `marker`: 마커 위치 (위도,경도)

```jinja
{% raw %}{{< openstreetmap bbox="-122.613,37.431,-122.382,37.559" layer="mapnik" marker="37.495,-122.497" />}}{% endraw %}
```

{{< openstreetmap bbox="-122.613,37.431,-122.382,37.559" layer="mapnik" marker="37.495,-122.497" />}}
