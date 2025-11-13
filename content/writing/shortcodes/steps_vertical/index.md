+++
title = "Steps Vertical"
weight = 11
+++

The `steps_vertical` shortcode creates a vertical step indicator using DaisyUI's steps component, ideal for displaying sequential processes in a vertical layout.

## Usage

```jinja
{{/* steps_vertical(steps=["Register", "Choose plan", "Purchase", "Receive Product"], completed=2) */}}
```

## Parameters

- `steps` (required): An array of strings, each representing a step label
- `completed` (optional): Number of steps completed (will be highlighted with primary color). Default is 0
- `data_content` (optional): An array of custom content strings to display in each step indicator (e.g., ["✓", "✓", "★", "4"])

## Examples

### Basic Vertical Steps

{{ steps_vertical(steps=["Register", "Choose plan", "Purchase", "Receive Product"], completed=2) }}

```jinja
{{/* steps_vertical(steps=["Register", "Choose plan", "Purchase", "Receive Product"], completed=2) */}}
```

### Vertical Steps with Custom Data Content

{{ steps_vertical(steps=["Email Sent", "Email Opened", "Click on Link", "Purchase"], completed=2, data_content=["✓", "✓", "★", "4"]) }}

```jinja
{{/* steps_vertical(steps=["Email Sent", "Email Opened", "Click on Link", "Purchase"], completed=2, data_content=["✓", "✓", "★", "4"]) */}}
```

### All Vertical Steps Completed

{{ steps_vertical(steps=["Start", "Processing", "Complete"], completed=3) }}

```jinja
{{/* steps_vertical(steps=["Start", "Processing", "Complete"], completed=3) */}}
```

## Features

- **Vertical Layout**: Steps are displayed in a vertical column
- **Progress Indication**: Use `completed` parameter to highlight completed steps
- **Custom Icons**: Use `data_content` array to add custom icons or numbers to steps
- **Responsive**: Adapts to different screen sizes
- **Visual Feedback**: Clearly shows completed and remaining steps

## Notes

The steps_vertical component uses DaisyUI's built-in steps styling with vertical orientation. This is particularly useful for sidebar navigation or mobile-optimized layouts where vertical space is more abundant than horizontal space. Steps up to and including the `completed` number will be highlighted with the primary color.
