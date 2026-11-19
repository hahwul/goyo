+++
title = "Feeds & Taxonomies"
description = "Setting up Atom feeds for categories and configuring the subscription page."
weight = 4
sort_by = "weight"
taxonomies = { tags = ["goyo", "feeds", "zola", "setup"], categories = ["guide"] }

[extra]
+++

This theme supports automatic Atom feed generation for global content and specific categories. This guide explains how to configure taxonomies to separate "subscriptions" (Feeds) from "search terms" (Tags), and how to enable the UI elements.

> **Note:** The feeds system requires the `categories` taxonomy to be configured. If your site does not define a `categories` taxonomy, the category-related feed features will be automatically skipped without causing build errors.

## 1. Taxonomy Configuration

In your `config.toml`, you can define which taxonomies should generate feeds. A common pattern is to use **Categories** for subscriptions (RSS, Atom) and **Tags** for internal search only.

**File:** `config.toml`
```toml
# switch for feed generation and UI elements
generate_feeds = true

# Tags: Used for internal search index, but no feed is generated
# Categories: Generates feeds (atom.xml) for subscribers
taxonomies = [
    { name = "tags", feed = false },
    { name = "categories", paginate_by = 10, feed = true },
]
```

For multilingual sites, repeat the taxonomy configuration under each language:

```toml
[languages.ko]
generate_feeds = true
taxonomies = [
    { name = "tags", feed = false },
    { name = "categories", paginate_by = 10, feed = true },
]
```

### Optimizing the Sitemap

When using tags purely for internal search, it is often best to exclude them from your `sitemap.xml`. Since every unique tag generates a new URL, a site with many tags can suffer from sitemap bloat. Excluding them prevents search engines from crawling redundant list pages, focusing their crawl budget on your actual content and main categories instead.

To implement this, create or override `templates/sitemap.xml` with the following logic:

**File:** `templates/sitemap.xml`

```xml
{% raw %}
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {%- for sitemap_entry in entries -%}
    {%- if sitemap_entry.permalink is not containing(pat="/tags/") -%}
    <url>
        <loc>{{ sitemap_entry.permalink | escape_xml | safe }}</loc>
        {%- if sitemap_entry.updated -%}
        <lastmod>{{ sitemap_entry.updated }}</lastmod>
        {%- endif -%}
    </url>
    {%- endif -%}

    {%- endfor -%}
</urlset>
{% endraw %}
```

## 2. Enabling UI Elements

The theme is designed to automatically toggle UI elements based on the `generate_feeds` setting in `config.toml`.

Setting `generate_feeds = true` automatically enables:

1. **Sidebar Link:** A "Feeds" link appears in the main sidebar navigation.
2. **Section Icons:** An RSS icon appears next to the title on Category pages (e.g., `/categories/rust/`), allowing users to copy the specific feed URL for that topic.

### Smart Display Logic

The theme includes a safeguard to ensure broken feed links are never displayed. The RSS icon will **only** appear next to a section title if:

1. **The Category is Active:** The category must be used in at least one page's front matter (e.g., `categories = ["My Topic"]`). If you create a section folder but haven't tagged any pages with it yet, the icon will remain hidden.
2. **Matching Rules:** The theme tries to match the Section Title to the Category Name.
* First, it checks for a case-insensitive match between the section title and the category name (both are normalized to lowercase).
* If no title match is found, it falls back to a slug match using the value defined under `[extra]` in the section file (slug comparison is case-sensitive).

Example `_index.md` configuration:

```toml
+++
title = "My Section"

[extra]
slug = "my-category-slug"
+++
```

To activate the icon, at least one content page must populate the category. Based on the configuration above, the icon will appear if a page contains either of the following:
* Match by section Title (case-insensitive)
```toml
taxonomies = { tags = ["goyo"], categories = ["My Section"] }
```

* Match by Custom Slug
```toml
# (Matches the 'slug' defined in the section's [extra])
taxonomies = { tags = ["goyo"], categories = ["my-category-slug"] }
```

### Project Structure Example

To make the feed icon appear on a Section page, the pages inside that section should be assigned to the matching category.

**File Structure:**

```text
content/
└── web-security/           <-- Section Folder
    ├── _index.md           <-- Defines Section Title: "Web Security"
    ├── xss-guide.md        <-- Content Page
    └── csrf-prevention.md  <-- Content Page
```

**1. The Section Configuration (`content/web-security/_index.md`)**
Defines the visual title for the folder.

```toml
+++
title = "Web Security"
sort_by = "date"
+++

```

**2. The Page Configuration (`content/web-security/xss-guide.md`)**
Assigns the page to the **Category** that matches the **Section Title**.

```toml
+++
title = "XSS Guide"
date = 2024-01-01
# The category "Web Security" matches the Section Title above
taxonomies = { categories = ["Web Security"] }
+++

```

**The Result:**

* The Theme sees the Section Title "Web Security".
* It looks for a generated feed for the category "Web Security".
* Since `xss-guide.md` populates that category, the feed exists.
* The RSS icon appears on the `/web-security/` page.

## 3. Creating the Feeds Page

While Zola generates the XML files automatically, you need to create a visual page where users can browse and copy these links. This page uses a custom template (`feeds.html`) to render a list of all available category feeds.

Create a file at `content/feeds.md` with the following Front Matter:

**File:** `content/feeds.md`

```toml
+++
title = "Subscribe to Atom Feeds"
template = "feeds.html"

[extra]
# Important: Set to false to prevent this utility page 
# from appearing as a standard document in the sidebar
in_sidebar = false
+++
```
If you have multiple languages enabled you must create one file per language `feeds.ko.md`, etc.  

*Note: You do not need to add body content to this file; the `feeds.html` template handles the layout automatically.*

## 4. From Atom to RSS

By default, Zola generates **Atom feeds** (`atom.xml`).
If you prefer **RSS 2.0**, you must explicitly change the feed filename.

```toml
# config.toml
generate_feeds = true
feed_filenames = ["rss.xml"] # optional for default language, but OK to keep

[languages.ko]
generate_feeds = true
feed_filenames = ["rss.xml"]
```

* Zola defaults to `atom.xml` if `feed_filenames` is not set.
* In a multilingual site, `feed_filenames` **must be repeated under each `[languages.<code>]`** where feeds are enabled.
* Although Zola supports multiple feed formats, Atom and RSS have **different expectations**, especially for authors.
  If you want strict RSS compliance, it is recommended to generate **only RSS**.

### Author requirements (RSS vs Atom)

* **Atom** expects a plain author name (e.g. `John Doe`)
* **RSS** expects an email address (optionally with a name), for example:

  ```
  lawyer@boyer.net (Lawyer Boyer)
  ```

Zola resolves the feed author in this order:

1. `authors = ["..."]` in the page front matter
2. `author = "..."` in `config.toml`
3. Fallback to `Unknown`

## 5. Translations

The feeds page and related UI elements rely on Zola’s translation system.  
Use:

* `[translations]` for the default language
* `[languages.<code>.translations]` for localized overrides

```toml
[translations]
sidebar_feeds = "Feeds"
global_feed = "Global Feed"
category_feeds = "Category Feeds"
all_posts = "All Posts"
copy = "Copy"
copied = "Copied!"
failed_to_copy = "Failed to copy!"

[languages.ko.translations]
sidebar_feeds = "Feeds"
global_feed = "전체 피드"
category_feeds = "카테고리별 피드"
all_posts = "전체 게시글"
copy = "복사"
copied = "복사 완료!"
failed_to_copy = "복사 실패"
```

These translations are used for:

* The sidebar “Feeds” entry
* The `/feeds/` page
* Copy-to-clipboard buttons and feedback messages

## 6. How it Works

Depending on your feed configuration:

* **Global Feed:**

    * Default: `/atom.xml`
    * RSS enabled: `/rss.xml`
    * Contains all posts for the current language

* **Category Feeds:**

    * Default: `/categories/<name>/atom.xml`
    * RSS enabled: `/categories/<name>/rss.xml`

* **Search:**
  Tags are indexed for the search bar (Cmd + K) but are intentionally excluded from the feed list to avoid clutter.
