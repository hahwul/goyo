+++
title = "Members"
weight = 20
taxonomies = { tags = ["shortcodes", "members", "team", "people"], categories = ["shortcodes"] }

[[extra.members]]
name = "Alice Johnson"
role = "Lead Developer"
description = "Passionate about building elegant solutions with modern technologies. Loves open source and contributing to the community."

[extra.members.social]
github = "https://github.com"
twitter = "https://twitter.com"

[[extra.members]]
name = "Bob Smith"
role = "UI/UX Designer"
description = "Creating beautiful and intuitive user experiences. Focused on accessibility and user-centered design."

[extra.members.social]
linkedin = "https://linkedin.com"
website = "https://example.com"

[[extra.members]]
name = "Carol Williams"
role = "Product Manager"
description = "Bridging the gap between technology and business. Passionate about building products people love."

[extra.members.social]
email = "carol@example.com"
linkedin = "https://linkedin.com"
+++

The `members` shortcode creates a beautiful display of team members with their photos, descriptions, and social links. It supports both grid and horizontal layouts.

## Usage

Add member data to your page's front matter (the section between `+++` markers at the top of your markdown file), then use the shortcode:

```markdown
+++
title = "Our Team"

[[extra.members]]
name = "Alice Johnson"
role = "Lead Developer"
photo = "/images/alice.jpg"
description = "Passionate about building elegant solutions"

[extra.members.social]
github = "https://github.com/alice"
twitter = "https://twitter.com/alice"

[[extra.members]]
name = "Bob Smith"
role = "UI/UX Designer"
photo = "/images/bob.jpg"
description = "Creating beautiful user experiences"

[extra.members.social]
linkedin = "https://linkedin.com/in/bob"
website = "https://bob.design"
+++

# Our Team

{{/* members() */}}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `layout` | string | "grid" | Layout style: "grid" or "horizontal" |

## Member Data Structure

Members are defined in the page's front matter using TOML format:

```toml
[[extra.members]]
name = "Member Name"         # Required
role = "Job Title"           # Optional
photo = "/path/to/photo.jpg" # Optional
description = "Brief bio"    # Optional

[extra.members.social]       # Optional section
github = "https://github.com/username"
twitter = "https://twitter.com/username"
linkedin = "https://linkedin.com/in/username"
email = "email@example.com"
website = "https://website.com"
```

## Examples

### Grid Layout (Default)

The grid layout arranges members in a responsive grid that adapts to different screen sizes (1 column on mobile, 2 on tablet, 3 on desktop).

```markdown
{{/* members() */}}
```

{{ members() }}

### Horizontal Layout

The horizontal layout displays members in a scrollable row, perfect for team sections with many members.

```markdown
{{/* members(layout="horizontal") */}}
```

{{ members(layout="horizontal") }}

### Complete Example

Here's a complete example of a team page:

```markdown
+++
title = "Our Team"

[[extra.members]]
name = "Alice Johnson"
role = "Lead Developer"
photo = "/images/team/alice.jpg"
description = "10+ years of experience in full-stack development"

[extra.members.social]
github = "https://github.com/alice"
twitter = "https://twitter.com/alice"
linkedin = "https://linkedin.com/in/alice"

[[extra.members]]
name = "Bob Smith"
role = "UI/UX Designer"
photo = "/images/team/bob.jpg"
description = "Award-winning designer focused on user experience"

[extra.members.social]
linkedin = "https://linkedin.com/in/bob"
website = "https://bob.design"

[[extra.members]]
name = "Carol Williams"
role = "Product Manager"
description = "Leading products from concept to launch"

[extra.members.social]
email = "carol@company.com"
linkedin = "https://linkedin.com/in/carol"
+++

# Meet Our Team

We're a passionate team of professionals dedicated to building amazing products.

{{/* members() */}}
```

## Features

- **Responsive Grid**: Automatically adjusts to screen size (1/2/3 columns)
- **Horizontal Scroll**: Alternative layout for showcasing many members
- **Social Links**: Support for GitHub, Twitter, LinkedIn, Email, and Website
- **Hover Effects**: Smooth animations and scaling on hover
- **Theme Integration**: Adapts to dark/light themes and brightness variants
- **Glass Effect**: Modern glassmorphism design with backdrop blur
- **Gradient Borders**: Beautiful gradient borders on member photos
- **Placeholder Support**: Automatic fallback icon for members without photos

## Social Link Icons

The shortcode supports the following social platforms with Font Awesome icons:

- **GitHub**: `fab fa-github`
- **Twitter**: `fab fa-twitter`
- **LinkedIn**: `fab fa-linkedin`
- **Email**: `fas fa-envelope`
- **Website**: `fas fa-globe`

## Notes

- Font Awesome is required for social icons. Make sure it's included in your site.
- All social links open in a new tab (except email)
- The `photo` field is optional - members without photos get a placeholder icon
- Social links are optional - only provided social networks will be displayed
- The horizontal layout is scrollable on smaller screens
- Member cards automatically scale on hover for better interactivity
- Member data must be defined in the page's front matter (TOML section at the top)
