+++
title = "Carousel"
weight = 5
taxonomies = { tags = ["shortcodes", "carousel", "gallery"], categories = ["shortcodes"] }
+++

The `carousel` shortcode creates an interactive image carousel with navigation controls, allowing users to browse through multiple images.

## Usage

```jinja
{% raw %}{{< carousel images={["image1.png", "image2.png", "image3.png"]} />}}{% endraw %}
```

- `images`: Array of image URLs to display in the carousel (required)

## Example

{{< carousel images={["images/darker.png", "images/normal.png", "images/lighter.png"]} />}}

```jinja
{% raw %}{{< carousel images={["images/darker.png", "images/normal.png", "images/lighter.png"]} />}}{% endraw %}
```

## Features

- **Navigation Controls**: Left and right arrow buttons to navigate between images
- **Circular Navigation**: Automatically loops back to the first image when reaching the end
- **Responsive**: Adapts to different screen sizes
- **Full Width**: Images span the full width of the container

## Parameters

- `images` (required): An array of image URLs. Each URL should be a string path to an image file.

## Notes

The carousel uses DaisyUI's carousel component with circular navigation buttons. Images are displayed at full width within the carousel container.
