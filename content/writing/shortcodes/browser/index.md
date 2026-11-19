+++
title = "Browser"
weight = 1
taxonomies = { tags = ["shortcodes", "browser", "ui"], categories = ["shortcodes"] }
+++

`browser`

- `browser`: Shows a browser mockup with custom URL and content.  
  Parameters:  
  - `url`: The URL to display in the browser toolbar.  
  - `content`: The content to display inside the browser window.

```jinja
{% raw %}{{< browser url="https://example.com" content="Welcome to Example!" />}}{% endraw %}
```

{{< browser url="https://example.com" content="Welcome to Example!" />}}

