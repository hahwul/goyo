# Goyo - Zola Theme Development Instructions

**ALWAYS follow these instructions first and fallback to additional search and context gathering only when the information here is incomplete or found to be in error.**

Goyo is a Zola theme for static site generation that creates clean, minimalist documentation sites. This repository serves both as the theme itself and as a documentation/demo site showcasing the theme's capabilities. Inspired by the Korean word "Goyo" (고요), meaning calm or serene, the theme pursues minimalism and simplicity.

## Working Effectively

### Prerequisites Installation
Install required tools in this exact order:

```bash
# Install Zola (static site generator)
cd /tmp
wget https://github.com/getzola/zola/releases/download/v0.23.6/zola-v0.23.6-x86_64-unknown-linux-gnu.tar.gz
tar -xzf zola-v0.23.6-x86_64-unknown-linux-gnu.tar.gz
sudo mv zola /usr/local/bin/
zola --version  # Should show: zola 0.23.6

# Install Just (task runner)
wget https://github.com/casey/just/releases/download/1.42.4/just-1.42.4-x86_64-unknown-linux-musl.tar.gz
tar -xzf just-1.42.4-x86_64-unknown-linux-musl.tar.gz
sudo mv just /usr/local/bin/
just --version  # Should show: just 1.42.4
```

### Project Setup
Bootstrap the project dependencies:

```bash
# Setup dependencies for Linux (x86_64)
just setup-linux

# OR Setup dependencies for macOS (Apple Silicon)
# just setup-macos

# Verify TailwindCSS works
src/tailwindcss --help
```

**NOTE:** `just setup-macos` downloads the ARM64 version of TailwindCSS. For Intel Macs or other architectures, you may need to download the correct binary manually to `src/tailwindcss`.

### Build Process
Build the complete site:

```bash
just build
```

**TIMING:** Build completes in ~0.5 seconds. NEVER CANCEL builds - they complete quickly.

This command:
1. Compiles CSS with TailwindCSS (~190ms)
2. Builds the static site with Zola (~140ms)
3. Creates 32 pages and 14 sections
4. Generates multilingual content (English + Korean)

### Development Server
Start the development server:

```bash
just dev
```

This runs the build process then starts the Zola development server at `http://127.0.0.1:1111`. The server automatically rebuilds on file changes.

**TIMING:** Server startup takes ~0.5 seconds. NEVER CANCEL - it starts quickly.

### Validation Commands
Always run these validation steps after making changes:

```bash
# Check internal links and site structure (SKIP external link check due to network restrictions)
zola check --skip-external-links

# Clean build test
rm -rf public && just build

# Verify dev server works
just dev  # Then test http://127.0.0.1:1111 in another terminal
```

## Manual Validation Requirements

After making any changes to the theme or content:

1. **Build Validation**: Always run a clean build and verify it completes without errors
2. **Server Test**: Start the dev server and verify the homepage loads at `http://127.0.0.1:1111`
3. **Content Check**: Verify key pages render correctly:
   - Landing page: `http://127.0.0.1:1111` (should show "Welcome to Goyo!")
   - Documentation: `http://127.0.0.1:1111/introduction/`
   - Korean version: `http://127.0.0.1:1111/ko/`
4. **Theme Features**: Verify core theme functionality works:
   - Dark/light mode toggle
   - Navigation menu
   - Sidebar navigation
   - Search functionality

## Common Tasks and Navigation

### Repository Structure
```
/home/runner/work/goyo/goyo/
├── .github/
│   ├── workflows/           # GitHub Actions deployment (zola.yml, labeler.yml)
│   ├── labeler.yml          # GitHub labeler configuration
│   └── FUNDING.yml          # Sponsorship configuration
├── AGENTS.md                # Development instructions for AI assistants
├── content/                 # Markdown content files (multilingual: .md for EN, .ko.md for KR)
│   ├── _index.md            # Landing page configuration
│   ├── introduction/        # Introduction section
│   ├── get_started/         # Getting started guides (installation, configuration, creating_content, creating_landing)
│   ├── writing/             # Writing guides (markdown-syntax, shortcodes)
│   ├── references/          # Reference documentation
│   ├── deployments/         # Deployment guides (github_pages, Other)
│   └── contributing/        # Contribution guidelines
├── static/                  # Static assets served directly
│   ├── css/                 # Compiled CSS (main.css, font-awesome.min.css, katex.min.css)
│   ├── js/                  # JavaScript files (copy_code.js, copy_heading_link.js, katex.min.js, mermaid.min.js)
│   ├── fonts/               # Font files
│   ├── icons/               # Favicon and app icons
│   ├── images/              # Image assets (logo, landing images, thumbnails)
│   ├── resources/           # External resources (zola.svg, tailwindcss.svg, daisyui.svg)
│   ├── goyo.js              # Main theme JavaScript
│   └── fuse.min.js          # Search library
├── templates/               # Zola HTML templates (Tera templating engine)
│   ├── index.html           # Default index template
│   ├── page.html            # Page template
│   ├── section.html         # Section template
│   ├── landing.html         # Landing page template
│   ├── 404.html             # Error page template
│   ├── taxonomy_list.html   # Taxonomy list template
│   ├── taxonomy_single.html # Single taxonomy template
│   ├── components/          # Reusable template components (head, header, footer, sidebar, toc, search, comments)
│   └── shortcodes/          # Custom shortcodes (24 shortcodes: alert, badge, carousel, gallery, mermaid, youtube, etc.)
├── src/                     # Source files and build tools
│   ├── main.css             # TailwindCSS source (includes DaisyUI plugins)
│   ├── syntax-highlight.css # Code syntax highlighting styles
│   ├── tailwindcss          # TailwindCSS binary (downloaded, gitignored)
│   ├── daisyui.js           # DaisyUI plugin (downloaded)
│   ├── daisyui-theme.js     # DaisyUI theme customization (downloaded)
│   ├── goyo-themes.js       # Custom theme definitions
│   ├── goyo.css             # Goyo theme CSS overrides
│   └── tailwind.config.js   # TailwindCSS configuration
├── public/                  # Generated site (created by build, gitignored)
├── justfile                 # Build automation tasks (build, dev, setup-macos, setup-linux, update-dependencies)
├── config.toml             # Zola site configuration (base_url, languages, navigation, theme settings)
├── theme.toml              # Theme metadata
├── CONTRIBUTING.md         # Contribution guidelines
├── LICENSE                 # License file
└── README.md               # Project readme
```

### Key Commands Reference
```bash
# List all available tasks
just

# Setup dependencies
just setup-macos   # For macOS ARM64 systems
just setup-linux   # For Linux x86_64 systems

# Update DaisyUI dependencies only
just update-dependencies

# Build only
just build

# Build and serve with live reload
just dev

# Clean build
rm -rf public && just build

# Internal link checking
zola check --skip-external-links

# Check Zola help
zola --help
```

### Content Development
- Edit content in `content/` directory using Markdown
- Multilingual support: English files use `.md`, Korean files use `.ko.md`
- Landing page configuration is in `content/_index.md` (uses `template = "landing.html"`)
- Theme templates are in `templates/` directory
- Content sections: introduction, get_started, writing, references, deployments, contributing

### Theme Development
- CSS source files are in `src/main.css` (TailwindCSS with DaisyUI components)
- Syntax highlighting styles in `src/syntax-highlight.css`
- Templates use Zola's Tera templating engine
- Static assets go in `static/` directory
- Theme supports dark/light mode with brightness variants (darker, normal, lighter)

### Shortcodes (templates/shortcodes/)
Available shortcodes for rich content:
- **Alerts**: `alert_info`, `alert_success`, `alert_warning`, `alert_error`
- **Badges**: `badge_primary`, `badge_secondary`, `badge_accent`, `badge_info`, `badge_success`, `badge_warning`, `badge_error`
- **Media**: `gallery`, `carousel`, `image_diff`, `youtube`, `asciinema`, `codepen`, `gist`
- **Interactive**: `collapse`, `mermaid`, `math`, `browser`, `openstreetmap`
- **Links**: `pretty_link`

### Configuration (config.toml)
Key configuration sections:
- **Site settings**: `base_url`, `title`, `description`, `build_search_index`
- **Languages**: `default_language`, `[languages.ko]` for Korean support
- **Navigation**: `[extra.nav]` and `[extra.nav_ko]` for menu items
- **Theme**: `[extra.theme]` - colorset (dark/light), brightness (darker/normal/lighter), disable_toggle
- **Logo**: `[extra.logo]` - text, image_path, dark_image_path, light_image_path
- **Sidebar**: `[extra.sidebar]` - expand_depth, disable_root_hide
- **Font**: `[extra.font]` - enabled, name, path for custom fonts
- **Favicon**: `[extra.favicon]` - base_path and individual icon paths
- **Twitter/Social**: `[extra.twitter]` - site and creator handles
- **Share buttons**: `[extra.share]` - copy_url, x (Twitter/X sharing)

### GitHub Actions
- Automatic deployment configured in `.github/workflows/zola.yml`
- Uses `shalzz/zola-deploy-action@v0.23.6` for deployment (bundles Zola 0.23.6)
- Adds CNAME file for custom domain: goyo.hahwul.com
- Builds and deploys to GitHub Pages on push to main branch
- Target site: https://goyo.hahwul.com

## Known Issues and Workarounds

1. **External Link Checking**: Running `zola check` without `--skip-external-links` will fail due to network restrictions in most CI/build environments. Always use `zola check --skip-external-links`.

2. **Binary Dependencies**: The `src/tailwindcss` binary is excluded from git (in .gitignore) and must be downloaded after each fresh clone.

3. **macOS Setup**: Use `just setup-macos` for Apple Silicon Macs. For Intel Macs, use the manual x86_64 setup (download the binary to `src/tailwindcss` and make it executable).

## Time Expectations

- **NEVER CANCEL** any commands - all operations complete in under 1 second
- Bootstrap/Setup: ~30 seconds (downloading dependencies)
- Clean Build: ~0.5 seconds
- Development Server Startup: ~0.5 seconds  
- Link Checking: ~0.1 seconds

## Build Dependencies

The project requires these exact versions:
- **Zola**: v0.23.6+ (static site generator, Tera 2)
- **Just**: v1.42.4+ (task runner) 
- **TailwindCSS**: v4.x (downloaded binary, architecture-specific)
- **DaisyUI**: v5.x (JavaScript libraries)

All dependencies are downloaded and managed locally in the `src/` directory.

## Components (templates/components/)

Reusable template components:
- `head.html` - HTML head component with meta tags, favicon, fonts, theme bootstrap
- `header.html` - Site header with navigation and theme toggle
- `footer.html` - Site footer
- `sidebar.html` - Documentation sidebar navigation
- `toc.html` - Table of contents for pages
- `search.html` - Search modal and functionality
- `comments.html` - Comment system integration

## CSS Architecture

The theme uses TailwindCSS with DaisyUI components:
- **Base styles**: Custom typography, colors, and spacing in `src/main.css`
- **Theme variants**: Support for dark (night) and light (lofi) themes
- **Brightness levels**: darker, normal, lighter variants for each theme
- **Responsive design**: Mobile-first approach with breakpoints
- **Component classes**: Feature cards, navigation buttons, search modal, etc.
