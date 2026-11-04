+++
title = "Image Diff"
weight = 3
taxonomies = { tags = ["shortcodes", "image-diff", "comparison"], categories = ["shortcodes"] }
+++

The `image_diff` shortcode allows you to visually compare two images side by side with a draggable slider.

## Usage

```
{% raw %}{{< image_diff src1="URL_TO_ORIGINAL_IMAGE" src2="URL_TO_CHANGED_IMAGE" alt="Description of image" />}}{% endraw %}
```

- `src1`: URL of the original image (required)
- `src2`: URL of the changed/compared image (required)
- `alt`: Alternative text for both images (optional, defaults to "Image diff original" and "Image diff changed")

## Example

{{< image_diff src1="/images/dark.jpg" src2="/images/light.jpg" alt="goyo" />}}

This will render a draggable image diff viewer for the two provided images.
