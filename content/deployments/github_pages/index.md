+++
title = "Github"
description = "Deploying to GitHub Pages"
weight = 1
template = "page.html"
taxonomies = { tags = ["deployment", "github-pages", "github-actions"], categories = ["deployment"] }
+++

Deploy your Zola site to GitHub Pages for free.

## GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
on: push
name: Build and deploy GH Pages
jobs:
  build:
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: checkout
        uses: actions/checkout@v4
      - name: build_and_deploy
        uses: shalzz/zola-deploy-action@master
        env:
          # Target branch
          PAGES_BRANCH: gh-pages
          # Provide personal access token
{% raw %}
          TOKEN: ${{ secrets.TOKEN }}
{% endraw %}
          # Or if publishing to the same repo, use the automatic token
{% raw %}
          #TOKEN: ${{ secrets.GITHUB_TOKEN }}
{% endraw %}
```

Generate a PAT at **Settings > Developer settings > Personal access tokens** if needed, then add it as a repository secret named `TOKEN`.

## Manual Deployment

1. Build: `zola build`
2. Push `public/` contents to `gh-pages` branch
3. Enable in **Settings > Pages**: Deploy from `gh-pages` branch
