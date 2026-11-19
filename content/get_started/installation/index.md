+++
title = "Installation"
description = "How to install Goyo and get started."
weight = 1
sort_by = "weight"
taxonomies = { tags = ["goyo", "installation", "zola", "setup"], categories = ["guide"] }

[extra]
+++

## Install Zola

```bash
# macOS
brew install zola
```

See [Zola installation guide](https://www.getzola.org/documentation/getting-started/installation/) for other systems.

## Create Site

```bash
zola init your-docs
cd your-docs
zola serve  # View at http://localhost:1111
```

## Install Goyo Theme

**Clone:**
```bash
git clone https://github.com/hahwul/goyo themes/goyo
```

**Submodule:**
```bash
git submodule add https://github.com/hahwul/goyo themes/goyo
```

### Initialize Submodule (When Cloning)

If you clone a repository that already has Goyo installed as a submodule, you need to initialize and update the submodule:

**Option 1: Clone with submodules**
```bash
git clone --recursive https://github.com/your-repo/your-docs
```

**Option 2: Initialize after cloning**
```bash
git clone https://github.com/your-repo/your-docs
cd your-docs
git submodule init
git submodule update
```

## Update Theme

**Clone method:**
```bash
cd themes/goyo
git pull origin main
```

**Submodule method:**
```bash
git submodule update --remote themes/goyo
git add themes/goyo
git commit -m "Update Goyo theme"
```

### Automated Updates (Optional)

Create `.github/workflows/update-goyo-theme.yml`:

```yaml
name: Update Goyo Theme

on:
  schedule:
    # Run every Monday at 9:00 AM UTC
    - cron: "0 9 * * 1"
  workflow_dispatch: # Allow manual trigger

env:
  GIT_USER_NAME: "github-actions[bot]"
  GIT_USER_EMAIL: "github-actions[bot]@users.noreply.github.com"
  THEME_PATH: "themes/goyo"

jobs:
  update-theme:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          submodules: true
{% raw %}
          token: ${{ secrets.GITHUB_TOKEN }}
{% endraw %}

      - name: Update Goyo submodule
        id: update
        run: |
{% raw %}
          git config user.name "${{ env.GIT_USER_NAME }}"
          git config user.email "${{ env.GIT_USER_EMAIL }}"
{% endraw %}

          # Get current commit hash
{% raw %}
          OLD_COMMIT=$(git rev-parse HEAD:${{ env.THEME_PATH }})
{% endraw %}

          # Update submodule to latest
{% raw %}
          git submodule update --remote ${{ env.THEME_PATH }}
          git add ${{ env.THEME_PATH }}
{% endraw %}

          # Get new commit hash
{% raw %}
          NEW_COMMIT=$(git --git-dir=${{ env.THEME_PATH }}/.git rev-parse HEAD)
{% endraw %}

          # Check if there are changes
          if [ "$OLD_COMMIT" != "$NEW_COMMIT" ]; then
            echo "updated=true" >> $GITHUB_OUTPUT
            echo "old_commit=$OLD_COMMIT" >> $GITHUB_OUTPUT
            echo "new_commit=$NEW_COMMIT" >> $GITHUB_OUTPUT
          else
            echo "updated=false" >> $GITHUB_OUTPUT
          fi

      - name: Create Pull Request
        if: steps.update.outputs.updated == 'true'
        uses: peter-evans/create-pull-request@v6
        with:
{% raw %}
          token: ${{ secrets.GITHUB_TOKEN }}
{% endraw %}
          commit-message: "Update Goyo theme to latest version"
          title: "Update Goyo theme"
          body: |
            This PR updates the Goyo theme to the latest version.

{% raw %}
            **Changes:** ${{ steps.update.outputs.old_commit }} → ${{ steps.update.outputs.new_commit }}
{% endraw %}

            Please review the [Goyo changelog](https://github.com/hahwul/goyo/releases) for details on what's new.

            ---
            *This PR was automatically created by the Update Goyo Theme workflow.*
          branch: update-goyo-theme
          delete-branch: true
          labels: dependencies, documentation
```

Customize as needed: schedule, git user, theme path.

## Configure Theme

Set theme in `config.toml`:

```toml
theme = "goyo"
```

Run `zola serve` to view your site.
