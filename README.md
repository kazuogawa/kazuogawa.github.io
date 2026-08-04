# kazuogawa.github.io

小川和久のポートフォリオサイトです。

**https://kazuogawa.github.io/**

## 技術スタック

- Astro — 静的サイトジェネレーター
- React + TypeScript — インタラクティブコンポーネント
- Tailwind CSS — ユーティリティファーストCSS
- GitHub Actions — 自動デプロイ

## 開発

```bash
# 依存関係インストール
make install

# 開発サーバー起動（http://localhost:4321）
make dev

# プロダクションビルド
make build

# ビルド結果プレビュー
make preview
```

## CodexによるIssue並列対応

Codex CLIとGitHub CLIへログインした状態で、PRがリンクされていないopen Issueを古い順に並列対応できます。

```bash
# 既定では最大3件
make codex-issues

# 対象件数を指定
make codex-issues LIMIT=5
```

リポジトリ固有Skill `$parallel-issue-prs` がIssueごとに `.worktrees/issue-<番号>` を作成し、実装、検証、push、draft PR作成まで行います。作成したworktree、draft PR、branchは自動削除・ready化・mergeされません。

## プロジェクト構成

```
src/
├── layouts/BaseLayout.astro    # HTML shell, meta, OG, GA
├── pages/index.astro           # メインページ
├── components/                 # UIコンポーネント
│   ├── *.astro                 # 静的コンポーネント（JS 0）
│   └── *.tsx                   # Reactコンポーネント（client:visible）
├── data/profile.ts             # コンテンツデータ（単一データソース）
├── types/profile.ts            # 型定義
└── styles/global.css           # Tailwind directives
```

## コンテンツ更新

`src/data/profile.ts` を編集するだけで、全セクション（Skills, Experience, Projects等）に反映されます。

## デプロイ

`master` ブランチへbuild対象の変更をpushするとGitHub Actionsが自動実行され、GitHub Pagesにデプロイされます。Markdownやエージェント運用設定だけの変更はデプロイ対象外です。
