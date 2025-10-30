# Build configuration
css_input := "src/main.css"
css_output := "static/css/main.css"
tailwind_bin := "src/tailwindcss"

# Default task - list all available tasks
default:
    @echo "Available tasks:"
    @just --list

# Build CSS and site
build:
    {{ tailwind_bin }} -i {{ css_input }} -o {{ css_output }} --minify
    zola build

# Build CSS and start development server with live reload
dev:
    {{ tailwind_bin }} -i {{ css_input }} -o {{ css_output }} --minify
    zola serve

# Check internal links and site structure
check:
    zola check --skip-external-links

# Clean build artifacts
clean:
    rm -rf public
    rm -f {{ css_output }}

# Setup for macOS ARM64
setup-macos:
    curl -sLo {{ tailwind_bin }} https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
    chmod +x {{ tailwind_bin }}
    curl -sLo src/daisyui.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui.js
    curl -sLo src/daisyui-theme.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui-theme.js

# Setup for Linux ARM64
setup-linux:
    curl -sLo {{ tailwind_bin }} https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64
    chmod +x {{ tailwind_bin }}
    curl -sLo src/daisyui.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui.js
    curl -sLo src/daisyui-theme.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui-theme.js

# Setup for Linux x86_64 (most common for CI/development)
setup-linux-x64:
    curl -sLo {{ tailwind_bin }} https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64
    chmod +x {{ tailwind_bin }}
    curl -sLo src/daisyui.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui.js
    curl -sLo src/daisyui-theme.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui-theme.js

# Update DaisyUI dependencies only
update-dependencies:
    curl -sLo src/daisyui.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui.js
    curl -sLo src/daisyui-theme.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui-theme.js
