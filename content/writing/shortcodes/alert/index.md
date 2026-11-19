+++
title = "Alert"
weight = 1
taxonomies = { tags = ["shortcodes", "alert", "ui"], categories = ["shortcodes"] }
+++

Display different types of alert messages to highlight important information, statuses, or warnings.

## Info

{% <alert_info> %}
  Info alert
{% </alert_info> %}

```jinja2
{% raw %}{% <alert_info> %}{% endraw %}
  Info alert
{% raw %}{% </alert_info> %}{% endraw %}
```

## Success

{% <alert_success> %}
  Success alert
{% </alert_success> %}

```jinja2
{% raw %}{% <alert_success> %}{% endraw %}
  Success alert
{% raw %}{% </alert_success> %}{% endraw %}
```

## Warning

{% <alert_warning> %}
  Warning alert
{% </alert_warning> %}

```jinja2
{% raw %}{% <alert_warning> %}{% endraw %}
  Warning alert
{% raw %}{% </alert_warning> %}{% endraw %}
```

## Error

{% <alert_error> %}
  Error alert
{% </alert_error> %}

```jinja2
{% raw %}{% <alert_error> %}{% endraw %}
  Error alert
{% raw %}{% </alert_error> %}{% endraw %}
```

## Styles

You can customize the alert style using the `style` parameter. Available styles are:
- `soft` (default)
- `outline`
- `dash`

### Soft (default)

{% <alert_info style="soft"> %}
  Info alert with soft style
{% </alert_info> %}

```jinja2
{% raw %}{% <alert_info style="soft"> %}{% endraw %}
  Info alert with soft style
{% raw %}{% </alert_info> %}{% endraw %}
```

### Outline

{% <alert_info style="outline"> %}
  Info alert with outline style
{% </alert_info> %}

{% <alert_success style="outline"> %}
  Success alert with outline style
{% </alert_success> %}

{% <alert_warning style="outline"> %}
  Warning alert with outline style
{% </alert_warning> %}

{% <alert_error style="outline"> %}
  Error alert with outline style
{% </alert_error> %}

```jinja2
{% raw %}{% <alert_info style="outline"> %}{% endraw %}
  Info alert with outline style
{% raw %}{% </alert_info> %}{% endraw %}
```

### Dash

{% <alert_info style="dash"> %}
  Info alert with dash style
{% </alert_info> %}

{% <alert_success style="dash"> %}
  Success alert with dash style
{% </alert_success> %}

{% <alert_warning style="dash"> %}
  Warning alert with dash style
{% </alert_warning> %}

{% <alert_error style="dash"> %}
  Error alert with dash style
{% </alert_error> %}

```jinja2
{% raw %}{% <alert_info style="dash"> %}{% endraw %}
  Info alert with dash style
{% raw %}{% </alert_info> %}{% endraw %}
```