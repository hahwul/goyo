+++
title = "Gallery"
weight = 7
taxonomies = { tags = ["shortcodes", "gallery", "images"], categories = ["shortcodes"] }
+++

The `gallery` shortcode creates a responsive image gallery from all image assets in the current page directory. It automatically detects and displays JPG, JPEG, PNG, GIF, and WebP images.

{{< gallery />}}

## Usage

Place image files (`.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`) in the same directory as your page's `index.md` file, then use the shortcode:

```jinja
{% raw %}{{< gallery />}}{% endraw %}
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `cols` | number | 3 | Number of columns on large screens |
| `show_name` | boolean | true | Whether to show the image filename below each image |

## Examples

### Basic Usage

```jinja
{% raw %}{{< gallery />}}{% endraw %}
```

{{< gallery />}}

### Custom Columns

```jinja
{% raw %}{{< gallery cols={4} />}}{% endraw %}
```

{{< gallery cols={4} />}}

### Hide Image Names

```jinja
{% raw %}{{< gallery show_name={false} />}}{% endraw %}
```

{{< gallery show_name={false} />}}

### Combine Options

```jinja
{% raw %}{{< gallery cols={2} show_name={false} />}}{% endraw %}
```

{{< gallery cols={2} show_name={false} />}}

## Features

- **Responsive Grid**: Automatically adjusts columns for different screen sizes (2 columns on mobile, 3 on tablet, configurable on desktop)
- **Auto-detection**: Automatically finds all images in the page directory
- **Image Optimization**: Images are resized for optimal loading performance
- **Lightbox Support**: Click on any image to view the full-size version in a new tab
- **Hover Effects**: Smooth scale animation on hover
- **Theme Integration**: Follows the Goyo theme's styling with shadows and rounded corners

## Directory Structure

To use the gallery, organize your content like this:

```
content/
└── your-page/
    ├── index.md       # Your page content with the gallery shortcode
    ├── photo1.jpg     # Image files
    ├── photo2.png
    └── photo3.webp
```

## Notes

- Images are resized to 480x360 pixels for thumbnails
- The original full-size images are available when clicking on thumbnails
- Image filenames (without extension) are used as captions
- Only image files are processed; other file types are ignored
