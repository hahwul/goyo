+++
title = "설치하기"
description = "Goyo를 설치하고 시작하는 방법을 알아보세요."
weight = 1
sort_by = "weight"
taxonomies = { tags = ["goyo", "installation", "zola", "setup"], categories = ["guide"] }

[extra]
+++

## Zola 설치

```bash
# macOS
brew install zola
```

다른 OS는 [Zola 설치 문서](https://www.getzola.org/documentation/getting-started/installation/)를 참고하세요.

## 사이트 생성

```bash
zola init your-docs
cd your-docs
zola serve  # http://localhost:1111 에서 확인
```

## Goyo 테마 설치

**Clone 방식:**
```bash
git clone https://github.com/hahwul/goyo themes/goyo
```

**Submodule 방식:**
```bash
git submodule add https://github.com/hahwul/goyo themes/goyo
```

### Submodule 초기화 (Clone 시)

Goyo가 서브모듈로 설치된 저장소를 클론할 때는 서브모듈을 초기화하고 업데이트해야 합니다:

**방법 1: 서브모듈과 함께 Clone**
```bash
git clone --recursive https://github.com/your-repo/your-docs
```

**방법 2: Clone 후 초기화**
```bash
git clone https://github.com/your-repo/your-docs
cd your-docs
git submodule init
git submodule update
```

## 테마 업데이트

**Clone 방식:**
```bash
cd themes/goyo
git pull origin main
```

**Submodule 방식:**
```bash
git submodule update --remote themes/goyo
git add themes/goyo
git commit -m "Update Goyo theme"
```

### 자동 업데이트 (선택사항)

`.github/workflows/update-goyo-theme.yml` 파일을 생성합니다:

```yaml
name: Update Goyo Theme

on:
  schedule:
    # 매주 월요일 오전 9시(UTC)에 실행
    - cron: "0 9 * * 1"
  workflow_dispatch: # 수동 실행 허용

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

          # 현재 커밋 해시 가져오기
{% raw %}
          OLD_COMMIT=$(git rev-parse HEAD:${{ env.THEME_PATH }})
{% endraw %}

          # submodule을 최신 버전으로 업데이트
{% raw %}
          git submodule update --remote ${{ env.THEME_PATH }}
          git add ${{ env.THEME_PATH }}
{% endraw %}

          # 새 커밋 해시 가져오기
{% raw %}
          NEW_COMMIT=$(git --git-dir=${{ env.THEME_PATH }}/.git rev-parse HEAD)
{% endraw %}

          # 변경 사항 확인
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
          title: "Goyo 테마 업데이트"
          body: |
            이 PR은 Goyo 테마를 최신 버전으로 업데이트합니다.

{% raw %}
            **변경 사항:** ${{ steps.update.outputs.old_commit }} → ${{ steps.update.outputs.new_commit }}
{% endraw %}

            새로운 기능에 대한 자세한 내용은 [Goyo 변경 로그](https://github.com/hahwul/goyo/releases)를 참조하세요.

            ---
            *이 PR은 Update Goyo Theme 워크플로우에 의해 자동으로 생성되었습니다.*
          branch: update-goyo-theme
          delete-branch: true
          labels: dependencies, documentation
```

필요에 따라 스케줄, git 사용자, 테마 경로를 커스터마이징하세요.

## 테마 설정

`config.toml`에서 테마를 설정합니다:

```toml
theme = "goyo"
```

`zola serve`로 사이트를 확인하세요.
