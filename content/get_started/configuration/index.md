+++
title = "Configuration"
description = "Learn how to configure Goyo."
weight = 4
sort_by = "weight"

[extra]
+++

Now let's look at the settings for the Goyo theme. It provides various settings to customize the theme. You can use them in `config.toml`.

## Logo
`logo_text` / `logo_image_path` / `logo_image_padding`

- `logo_text`: Text displayed when no logo image is present.
- `logo_image_path`: Path to the logo image.
- `logo_image_padding`: Padding applied to the logo image (optional, e.g. `"5px"`).

```toml
[extra]
logo_text = "Goyo"
logo_image_path = "images/goyo.png"
logo_image_padding = "5px"
```

## Footer
`footer_html`

- `footer_html`: HTML code displayed in the footer.

```toml
[extra]
footer_html = "Powered by <a href='https://www.getzola.org'>Zola</a> and <a href='https://github.com/hahwul/goyo'>Goyo</a>"
```

## Thumbnail
`default_thumbnail`

- `default_thumbnail`: Path to the default thumbnail image.

```toml
[extra]
default_thumbnail = "images/default_thumbnail.jpg"
```

## Twitter
`twitter_site` / `twitter_creator`

- `twitter_site`: Twitter site handle.
- `twitter_creator`: Twitter creator handle.

```toml
[extra]
twitter_site = "@hahwul"
twitter_creator = "@hahwul"
```

## Color
`default_colorset` / `colorset`

- `default_colorset`: Default theme (dark/light).
- `colorset`: Color scheme palette (blue/red/green/purple/orange). Controls the overall color tone while maintaining the misty aesthetic.

```toml
[extra]
default_colorset = "dark"
colorset = "blue"
```

Available colorsets:
- `blue` (default): Cool blue-gray tones
- `red`: Warm red-gray tones  
- `green`: Natural green-gray tones
- `purple`: Elegant purple-gray tones
- `orange`: Warm orange-gray tones

## Google Tag
`gtag`

- `gtag`: Google Tag ID.

```toml
[extra]
gtag = "G-XXXXXXXXXX"
```

## Sidebar Expand Depth
`sidebar_expand_depth`

- `sidebar_expand_depth`: Specifies the depth (up to 5) to which sidebar sections should be expanded by default. For example, a value of `1` will only show top-level sections, while `2` will expand the first level of subsections.

```toml
[extra]
sidebar_expand_depth = 2
```

## Navigations
`nav`

- `nav`: Top navigation menu. name and icon fields is optional.

```toml
[extra]
nav = [
    { name = "Documents", url = "/introduction", type = "url", icon = "fa-solid fa-book" },
    { name = "GitHub", url = "https://github.com/hahwul/goyo", type = "url", icon = "fa-brands fa-github" },
    { name = "Links", type = "dropdown", icon = "fa-solid fa-link", members = [
        { name = "Creator Blog", url = "https://www.hahwul.com", type = "url", icon = "fa-solid fa-fire-flame-curved" },
    ] },
]
```

## Disable Theme Toggle
`disable_theme_toggle`

- `disable_theme_toggle`: If set to `true`, the theme toggle button (for switching between dark and light mode) will be hidden from the header.

```toml
[extra]
disable_theme_toggle = true
```

## Disable Root Sidebar Hide
`disable_root_sidebar_hide`

- `disable_root_sidebar_hide`: If set to `true`, the sidebar will not be hidden on the root page (`/` or `/{lang}/`). This allows the sidebar to always be visible, even on the main landing page.

```toml
[extra]
disable_root_sidebar_hide = false
```

{{ image_diff(
    src1="/images/side-home.jpg",
    src2="/images/wide-home.jpg",
    alt="goyo"
) }}

## Comments
`comments`

- `comments`: Comment feature settings (giscus/utterances).

```toml
[extra.comments]
enabled = true
system = "giscus"
repo = "hahwul/goyo"
repo_id = "R_kgDOPHnqwg"
category = "General"
category_id = "DIC_kwDOPHnqws4CspmC"
mapping = "pathname"
strict = "0"
reactions_enabled = "1"
emit_metadata = "0"
input_position = "bottom"
theme = "catppuccin_mocha"
lang = "en"
```
