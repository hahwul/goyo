+++
title = "Mermaid Chart"
weight = 3
taxonomies = { tags = ["shortcodes", "mermaid", "diagram"], categories = ["shortcodes"] }
+++

[Mermaid](https://mermaid-js.github.io/) Shortcode를 사용하여 복잡한 구조나 프로세스를 시각적으로 표현할 수 있습니다.

## Example

{% <mermaid> %}
quadrantChart
    title Reach and engagement of campaigns
    x-axis Low Reach --> High Reach
    y-axis Low Engagement --> High Engagement
    quadrant-1 We should expand
    quadrant-2 Need to promote
    quadrant-3 Re-evaluate
    quadrant-4 May be improved
    Campaign A: [0.3, 0.6]
    Campaign B: [0.45, 0.23]
    Campaign C: [0.57, 0.69]
    Campaign D: [0.78, 0.34]
    Campaign E: [0.40, 0.34]
    Campaign F: [0.35, 0.78]
{% </mermaid> %}

```jinja2
{% raw %}{% <mermaid> %}{% endraw %}
quadrantChart
    title Reach and engagement of campaigns
    x-axis Low Reach --> High Reach
    y-axis Low Engagement --> High Engagement
    quadrant-1 We should expand
    quadrant-2 Need to promote
    quadrant-3 Re-evaluate
    quadrant-4 May be improved
    Campaign A: [0.3, 0.6]
    Campaign B: [0.45, 0.23]
    Campaign C: [0.57, 0.69]
    Campaign D: [0.78, 0.34]
    Campaign E: [0.40, 0.34]
    Campaign F: [0.35, 0.78]
{% raw %}{% </mermaid> %}{% endraw %}
```