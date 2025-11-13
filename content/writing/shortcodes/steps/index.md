+++
title = "Steps"
weight = 10
+++

The `steps` shortcode creates a horizontal step indicator using DaisyUI's steps component, perfect for showing progress through a multi-step process.

## Usage

```jinja
{{/* steps(steps=["Register", "Choose plan", "Purchase", "Receive Product"], completed=2) */}}
```

## Parameters

- `steps` (required): An array of strings, each representing a step label
- `completed` (optional): Number of steps completed (will be highlighted with primary color). Default is 0
- `data_content` (optional): An array of custom content strings to display in each step indicator (e.g., ["✓", "✓", "★", "4"])

## Examples

### Basic Horizontal Steps

{{ steps(steps=["Register", "Choose plan", "Purchase", "Receive Product"], completed=2) }}

```jinja
{{/* steps(steps=["Register", "Choose plan", "Purchase", "Receive Product"], completed=2) */}}
```

### Steps with Custom Data Content

{{ steps(steps=["Email Sent", "Email Opened", "Click on Link", "Purchase"], completed=2, data_content=["✓", "✓", "★", "4"]) }}

```jinja
{{/* steps(steps=["Email Sent", "Email Opened", "Click on Link", "Purchase"], completed=2, data_content=["✓", "✓", "★", "4"]) */}}
```

### All Steps Completed

{{ steps(steps=["Start", "Processing", "Complete"], completed=3) }}

```jinja
{{/* steps(steps=["Start", "Processing", "Complete"], completed=3) */}}
```

## Features

- **Horizontal Layout**: Steps are displayed in a horizontal row
- **Progress Indication**: Use `completed` parameter to highlight completed steps
- **Custom Icons**: Use `data_content` array to add custom icons or numbers to steps
- **Responsive**: Adapts to different screen sizes
- **Visual Feedback**: Clearly shows completed and remaining steps

## Notes

The steps component uses DaisyUI's built-in steps styling. Steps up to and including the `completed` number will be highlighted with the primary color, while remaining steps stay neutral.
