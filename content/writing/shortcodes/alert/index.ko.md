+++
title = "Alert Box"
weight = 1
taxonomies = { tags = ["shortcodes", "alert", "ui"], categories = ["shortcodes"] }
+++

다양한 유형의 알림 메시지를 표시하여 중요한 정보, 상태, 경고 등을 효과적으로 전달합니다.

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

## 스타일

`style` 파라미터를 사용하여 알림 스타일을 지정할 수 있습니다. 사용 가능한 스타일:
- `soft` (기본값)
- `outline`
- `dash`

### Soft (기본값)

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