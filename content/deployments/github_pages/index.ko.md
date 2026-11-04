+++
title = "Github"
description = "GitHub Pages에 배포하기"
weight = 1
template = "page.html"
taxonomies = { tags = ["deployment", "github-pages", "github-actions"], categories = ["deployment"] }
+++

GitHub Pages에 Zola 사이트를 무료로 배포하세요.

## Github Action

`.github/workflows/deploy.yml`을 생성합니다:

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

PAT가 필요한 경우 **설정 > 개발자 설정 > 개인 액세스 토큰**에서 발급 후 저장소 Secret에 `TOKEN`으로 추가합니다.

## 수동 배포

1. 빌드: `zola build`
2. `public/` 내용을 `gh-pages` 브랜치에 푸시
3. **설정 > Pages**에서 `gh-pages` 브랜치로 배포 활성화
