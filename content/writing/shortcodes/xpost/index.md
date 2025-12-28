+++
title = "X Post"
weight = 1
taxonomies = { tags = ["shortcodes", "x", "twitter", "social"], categories = ["shortcodes"] }
+++

`xpost`

- `xpost`: Embeds an X (Twitter) post. It takes `username` and `id` as required parameters, and optionally `theme` (defaults to `light`, can be `dark`).

```jinja
{{/* xpost(username="hahwul", id="2005269837267042570") */}}
```

{{ xpost(username="hahwul", id="2005269837267042570") }}

## With Dark Theme

```jinja
{{/* xpost(username="hahwul", id="2005269837267042570", theme="dark") */}}
```

{{ xpost(username="hahwul", id="2005269837267042570", theme="dark") }}
