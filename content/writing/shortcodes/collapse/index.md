+++
title = "Collapse"
weight = 1
taxonomies = { tags = ["shortcodes", "collapse", "ui"], categories = ["shortcodes"] }
+++

`collapse`

- `collapse`: Shows a collapsible section.  
  Parameters:  
  - `title`: The title of the collapsible section.  
  - `body`: The content inside the collapsible section.

```jinja
{% raw %}{% <collapse title="How do I create an account?"> %}{% endraw %}
Click the **'Sign Up'** button in the top right corner and follow the registration process.
\
You can also use `markdown` syntax.
{% raw %}{% </collapse> %}{% endraw %}
```

{% <collapse title="How do I create an account?"> %}
Click the **'Sign Up'** button in the top right corner and follow the registration process.
\
You can also use `markdown` syntax.
{% </collapse> %}
