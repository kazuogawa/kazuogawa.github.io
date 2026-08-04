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

## Lighthouse計測

Lighthouseはローカルのプロダクションビルドを対象に計測します。最初のターミナルでビルドしてからpreviewを起動します。

```bash
# ターミナル1
make build
make preview
```

previewを起動したまま、別のターミナルでLighthouseを実行します。完了後にHTMLレポートをブラウザで開き、`lighthouse-reports/latest.report.html` に保存します。このディレクトリはGitの追跡対象外です。

```bash
# ターミナル2
make lighthouse
```

標準の計測URLは `http://localhost:4321` です。previewが別のポートで起動した場合は、表示されたURLを指定します。

```bash
make lighthouse LIGHTHOUSE_URL=http://localhost:4322
```

### 低いスコアが出た場合

`make dev` で起動した開発サーバーは計測しないでください。ViteやAstro Dev Toolbarの開発用JavaScriptが含まれるため、実際の公開サイトよりPerformanceスコアが大きく低下します。

レポートのリクエストに `/@vite/client` や `dev-toolbar` が含まれている場合は、開発サーバーを計測しています。`make lighthouse` を実行し直し、計測URLが `http://127.0.0.1:4322` であることを確認してください。

LighthouseのPerformanceスコアは実行環境によって変動するため、必要に応じて複数回計測して中央値で評価します。

計測前の静的チェックは `make check` で別途実行できます。

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
