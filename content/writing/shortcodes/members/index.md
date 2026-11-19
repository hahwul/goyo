+++
title = "Members"
weight = 20
taxonomies = { tags = ["shortcodes", "members", "team"], categories = ["shortcodes"] }
+++

The `members` shortcode displays team members or contributors in a visually appealing card layout. Each member can have a name, photo, role, and description with markdown support. The shortcode supports both grid (card view) and line (horizontal card) layouts.

## Usage

```jinja
{% raw %}{% <members> %}{% endraw %}
Name | Role | Image Path | Description
Alice Johnson | Frontend Developer | ./member1.svg | Passionate about **responsive** web apps
Bob Wilson | Backend Engineer | ./member2.svg | Expert in *scalable* architecture
{% raw %}{% </members> %}{% endraw %}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `layout` | string | `"grid"` | Layout type: `"grid"` for card view or `"line"` for horizontal cards |
| `cols` | number | 3 | Number of columns in grid layout (1-6) |

### Member Data Format

Each member is defined on a single line with pipe (`|`) separators:

```
Name | Role | Image Path | Description
```

- **Name** (required): Member's name
- **Role** (optional): Member's role or title  
- **Image Path** (optional): Path to member's photo (relative or absolute URL)
- **Description** (optional): Brief description (supports markdown)

## Examples

### Basic Grid Layout (Default)

Display members in a 3-column grid with cards:

```jinja
{% raw %}{% <members> %}{% endraw %}
Alice Johnson | Frontend Developer | ./member1.svg | Passionate about creating **responsive** and accessible web applications.
Bob Wilson | Backend Engineer | ./member2.svg | Specializes in *scalable* microservices architecture.
Carol Davis | DevOps Lead | ./member3.svg | Automates everything with CI/CD pipelines.
{% raw %}{% </members> %}{% endraw %}
```

{% <members> %}
Alice Johnson | Frontend Developer | ./member1.svg | Passionate about creating **responsive** and accessible web applications.
Bob Wilson | Backend Engineer | ./member2.svg | Specializes in *scalable* microservices architecture.
Carol Davis | DevOps Lead | ./member3.svg | Automates everything with CI/CD pipelines.
{% </members> %}

### Two Column Grid

Display members in a 2-column layout:

```jinja
{% raw %}{% <members cols={2}> %}{% endraw %}
Alice Johnson | Frontend Developer | ./member1.svg | Passionate about creating **responsive** and accessible web applications.
Bob Wilson | Backend Engineer | ./member2.svg | Specializes in *scalable* microservices architecture.
{% raw %}{% </members> %}{% endraw %}
```

{% <members cols={2}> %}
Alice Johnson | Frontend Developer | ./member1.svg | Passionate about creating **responsive** and accessible web applications.
Bob Wilson | Backend Engineer | ./member2.svg | Specializes in *scalable* microservices architecture.
{% </members> %}

### Line Layout

Display members as horizontal cards (one per row):

```jinja
{% raw %}{% <members layout="line"> %}{% endraw %}
Alice Johnson | Frontend Developer | ./member1.svg | Passionate about creating **responsive** and accessible web applications. With over 5 years of experience, Alice has worked on numerous projects ranging from small startups to large enterprises.
Bob Wilson | Backend Engineer | ./member2.svg | Specializes in *scalable* microservices architecture. Bob has deep expertise in distributed systems and has built high-performance APIs handling millions of requests.
Carol Davis | DevOps Lead | ./member3.svg | Automates everything with CI/CD pipelines. Carol ensures smooth deployments and maintains infrastructure across multiple cloud providers.
{% raw %}{% </members> %}{% endraw %}
```

{% <members layout="line"> %}
Alice Johnson | Frontend Developer | ./member1.svg | Passionate about creating **responsive** and accessible web applications. With over 5 years of experience, Alice has worked on numerous projects ranging from small startups to large enterprises.
Bob Wilson | Backend Engineer | ./member2.svg | Specializes in *scalable* microservices architecture. Bob has deep expertise in distributed systems and has built high-performance APIs handling millions of requests.
Carol Davis | DevOps Lead | ./member3.svg | Automates everything with CI/CD pipelines. Carol ensures smooth deployments and maintains infrastructure across multiple cloud providers.
{% </members> %}

### Without Images

Members without an image path will display a default avatar placeholder:

```jinja
{% raw %}{% <members> %}{% endraw %}
David Lee | Security Specialist | | Ensures application security and compliance.
Emma Brown | Technical Writer | | Creates clear and comprehensive documentation.
{% raw %}{% </members> %}{% endraw %}
```

{% <members> %}
David Lee | Security Specialist | | Ensures application security and compliance.
Emma Brown | Technical Writer | | Creates clear and comprehensive documentation.
{% </members> %}

### Minimal Information

You can display members with just names:

```jinja
{% raw %}{% <members cols={4}> %}{% endraw %}
Alex Thompson
Sarah Miller
Michael Chen
Jessica Garcia
{% raw %}{% </members> %}{% endraw %}
```

{% <members cols={4}> %}
Alex Thompson
Sarah Miller
Michael Chen
Jessica Garcia
{% </members> %}

## Design Features

- **Responsive**: Automatically adjusts from single column on mobile to multi-column on larger screens
- **Theme Support**: Seamlessly integrates with dark and light themes
- **Hover Effects**: Cards lift and change appearance on hover for better interactivity
- **Markdown Support**: Member descriptions support markdown formatting (bold, italic, links, etc.)
- **Flexible Layout**: Choose between grid or line layout based on your needs
- **Default Avatar**: Displays a clean placeholder icon when no image is provided
