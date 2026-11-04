+++
title = "Configuration"
description = "Learn how to configure Goyo."
weight = 4
sort_by = "weight"
taxonomies = { tags = ["goyo", "configuration", "customization"], categories = ["guide"] }

[extra]
toc_expand = true
+++

Configure Goyo theme in `config.toml`.

## Taxonomies (Optional)

Goyo supports **categories** and **tags** taxonomies for organizing content. These are **optional** — the theme works without them. If you want to use feed subscriptions per category or tag-based navigation, add the following to your `config.toml`:

```toml
taxonomies = [
    { name = "tags", feed = false },
    { name = "categories", paginate_by = 10, feed = true },
]
```

For multilingual sites, repeat this under each language section:

```toml
[languages.ko]
taxonomies = [
    { name = "tags", feed = false },
    { name = "categories", paginate_by = 10, feed = true },
]
```

> **Note:** If you do not define taxonomies, features that depend on them (such as category feeds and the feeds page) will be automatically disabled. No build errors will occur.

## Design & Branding

### Logo

Configure your site's logo using the structured format:

```toml
[extra.logo]
text = "Goyo"                              # Text when no logo image
image_path = "images/goyo.png"             # Default logo image path
image_padding = "5px"                      # Optional padding
dark_image_path = "images/goyo-dark.png"   # Logo for dark theme (optional)
light_image_path = "images/goyo-light.png" # Logo for light theme (optional)
```

**Theme-specific logos:** When you specify `dark_image_path` and/or `light_image_path`, the logo will automatically switch when users toggle between dark and light themes. If not specified, the `image_path` will be used for both themes.

**Legacy format (still supported):**
```toml
[extra]
logo_text = "Goyo"                    # Text when no image
logo_image_path = "images/goyo.png"   # Logo image path
logo_image_padding = "5px"            # Optional padding
```

### Footer

```toml
[extra]
footer_html = "Powered by <a href='https://www.getzola.org'>Zola</a>"
```

### Favicon

Configure favicon settings using the structured format. Default path is `/icons/` for all favicon files:

```toml
[extra.favicon]
base_path = "/icons/"                              # Base path for all favicon files (default: /icons/)
favicon_96x96 = "/icons/favicon-96x96.png"         # Override path for 96x96 PNG favicon
favicon_svg = "/icons/favicon.svg"                 # Override path for SVG favicon
favicon_ico = "/icons/favicon.ico"                 # Override path for ICO favicon
apple_touch_icon = "/icons/apple-touch-icon.png"   # Override path for Apple touch icon
site_webmanifest = "/icons/site.webmanifest"       # Override path for site manifest
```

Place your favicon files in `static/icons/` directory:
- `favicon-96x96.png` - 96x96 PNG favicon
- `favicon.svg` - SVG favicon
- `favicon.ico` - ICO favicon
- `apple-touch-icon.png` - 180x180 Apple touch icon
- `site.webmanifest` - Web app manifest file

**Generated HTML:**
```html
<link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
<link rel="shortcut icon" href="/icons/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
<link rel="manifest" href="/icons/site.webmanifest" />
```

## SEO & Social

### Thumbnail

```toml
[extra]
default_thumbnail = "images/default_thumbnail.jpg"
```

### Twitter

Configure Twitter meta tags using the structured format:

```toml
[extra.twitter]
site = "@hahwul"
creator = "@hahwul"
```

**Legacy format (still supported):**
```toml
[extra]
twitter_site = "@hahwul"
twitter_creator = "@hahwul"
```

### Google Tag

```toml
[extra]
gtag = "G-XXXXXXXXXX"
```

## Navigation & UI

### Theme

Configure theme settings using the structured format:

```toml
[extra.theme]
colorset = "dark"           # Options: "dark" or "light"
brightness = "normal"       # Common brightness: "darker", "normal", "lighter"
dark_brightness = "darker"  # Override brightness for dark theme (optional)
light_brightness = "normal" # Override brightness for light theme (optional)
disable_toggle = false      # Hides dark/light mode toggle
default_theme_dark = "goyo-dark" # Default dark theme (e.g., "goyo-dark", "dracula", "abyss")
default_theme_light = "goyo-light" # Default light theme (e.g., "goyo-light", "cupcake", "retro")
```

**Per-theme brightness:** You can set `dark_brightness` and `light_brightness` to use different brightness levels for each theme. If not specified, the common `brightness` value will be used for both themes.

{{< image_diff src1="images/dark.png" src2="images/light.png" alt="Dark and Light" />}}

{{< carousel images={["images/darker.png", "images/normal.png", "images/lighter.png"]} />}}

**Legacy format (still supported):**
```toml
[extra]
default_colorset = "dark"
brightness = "normal"
disable_theme_toggle = false
```

### Font

Configure font settings using the structured format:

```toml
[extra.font]
enabled = true
name = "MyCustomFont"
path = "fonts/mycustomfont.woff"
```

Default: **Pretendard** (optimized for Korean and English)

**Google Fonts:**
```toml
[extra.font]
enabled = true
name = "Roboto"
path = "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
```

**Legacy format (still supported):**
```toml
[extra]
custom_font_enabled = true
custom_font_name = "MyCustomFont"
custom_font_path = "fonts/mycustomfont.woff"
```

### Sidebar

Configure sidebar settings using the structured format:

```toml
[extra.sidebar]
expand_depth = 2         # 1-5, default expansion depth
disable_root_hide = false # Show sidebar on landing page
enable_desktop_menu = false # integrate the navigation into the sidebar
```

{{< image_diff src1="/images/side-home.jpg" src2="/images/wide-home.jpg" alt="goyo" />}}

**Legacy format (still supported):**
```toml
[extra]
sidebar_expand_depth = 2
disable_root_sidebar_hide = false
```

### Navigation

```toml
[extra]
nav = [
    { name = "Documents", url = "/introduction", type = "url", icon = "book" },
    { name = "GitHub", url = "https://github.com/hahwul/goyo", type = "url" },
    { name = "Links", type = "dropdown", members = [
        { name = "Blog", url = "https://www.hahwul.com", type = "url" },
    ] },
]

# Language-specific (optional)
nav_ko = [
    { name = "문서", url = "/ko/introduction", type = "url" },
]
```

- **`icon`**: Name of the SVG icon file in `static/icons/` folder without the `.svg` extension (e.g., `book`)

### Language Aliases

Configure language display names using the structured format:

```toml
[extra.lang]
aliases = { en = "English", ko = "한국어", ja = "日本語" }
```

**Legacy format (still supported):**
```toml
[extra]
lang_aliases = { en = "English", ko = "한국어", ja = "日本語" }
```

### Language Configuration

Configure RTL (Right-to-Left) language support:

```toml
[extra.lang]
rtl = ["ar", "he"]  # List of RTL languages
```

## Content & Sharing

### Edit URL & Contribution Hub

Configure contribution links. You can set up a simple "Edit this page" link or a complete contribution hub.

#### Simple Mode (Edit Link only):
If only `edit_url` is set, a simple link appears at the bottom of the page.

```toml
[extra]
edit_url = "https://github.com/hahwul/goyo/edit/main"
```
Adds "Edit this page" link to each page.

#### Advanced Mode (Contribution Hub):
If both edit_url and issue_url are configured, a detailed section appears distinguishing between reporting issues (clarifications/errors) and fixing typos (fork & PR).

```toml
[extra]
edit_url = "https://github.com/hahwul/goyo/edit/main"
issue_url = "https://github.com/hahwul/goyo/issues"
```

#### Best Practice: Documenting Fixes

If you enable the Contribution Hub, it is highly recommended to use the **Errata System** alongside it.

When a user reports an issue or a typo:
1.  **Fix** the content in your Markdown file.
2.  **Document** the change in the same file using the `[[extra.errata]]` block.
3.  **Credit** the reporter to encourage future contributions.

This creates a transparent history of changes and rewards your community for their help.

#### Styling the Hub:

You can customize the appearance of the alert badges in the contribution hub using these optional settings:

```toml
[extra]
issue_and_typo_badge_light = "alert-soft alert-accent"
issue_and_typo_badge_dark = "alert-accent"
```

The above values are the default ones if nothing is specified.

### Share Buttons

Configure share button settings using the structured format:

```toml
[extra.share]
copy_url = true  # Copy URL button
x = true         # Share on X button
```

**Legacy format (still supported):**
```toml
[extra]
enable_copy_url = true
enable_share_x = true
```

### Comments

```toml
[extra.comments]
enabled = true
system = "giscus"  # or "utterances"
repo = "hahwul/goyo"
repo_id = "R_kgDOPHnqwg"
category = "General"
category_id = "DIC_kwDOPHnqws4CspmC"
```

## UI translations

Goyo uses Zola’s translation system for UI labels (sidebar entries, buttons, copy feedback, etc.).

Define strings in `config.toml`:

* Default language: **`[translations]`**
* Per language: **`[languages.<code>.translations]`**

```toml
[translations]
# errata system
errata_section = "Errata & Updates"
# translation for feeds/ page
sidebar_feeds = "Feeds"
global_feed = "Global Feed"
category_feeds = "Category Feeds"
all_posts = "All Posts"
# translation for copy/copied
copy = "Copy"
copied = "Copied!"
failed_to_copy = "Failed to copy!"
# Nav buttons (bottom of pages & sections)
next = "Next"
back_to = "Back to"
previous = "Previous"
# contribution (bottom of pages & sections)
edit_page = "Edit this page"
found_error_alert = "Found an error or it needs a clarification?"
open_issue = "Open an issue on GitHub."
attribution = "Substantiated corrections will be incorporated with attribution."
found_typo_alert = "Found a typo?"
fork_and_pr = "Fork, modify and open a PR."
# Share (bottom of pages & sections)
copy_url_msg = "Copy URL"
share_on_x = "Share on X"
# Title of the Table of Content (ToC)
toc_title = "ON THIS PAGE"

[languages.ko.translations]
# errata system
errata_section = "정오표 및 업데이트"
# translation for feeds/ page
sidebar_feeds = "Feeds"
global_feed = "전체 피드"
category_feeds = "카테고리별 피드"
all_posts = "전체 게시글"
# translation for copy/copied
copy = "복사"
copied = "복사 완료!"
failed_to_copy = "복사 실패"
# Nav buttons (botton of pages & sections)
next = "다음"
back_to = "돌아가기"
previous = "이전 단계"
# contribution (bottom of pages & sections)
edit_page = "이 페이지 수정하기"
found_error_alert = "오류를 발견하셨나요? 혹은 설명이 더 필요하신가요?"
open_issue = "GitHub에서 이슈를 제기해 주세요."
attribution = "반영된 수정 사항에 대해서는 기여자로 성함(ID)을 남겨드립니다."
found_typo_alert = "오타를 발견하셨나요?"
fork_and_pr = "Fork 후 수정하여 PR을 보내주세요."
# Share (bottom of pages & sections)
copy_url_msg = "URL 복사"
share_on_x = "X에 공유하기"
# Title of the Table of Content (ToC)
toc_title = "목차"
```

**Note:** Zola expects translation keys to exist for each enabled language; missing keys can cause the build to fail.
