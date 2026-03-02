# CLAUDE.md

このファイルはClaude Codeにプロジェクトのコンテキストを提供します。

## プロジェクト概要

Astro + React + TypeScript + Tailwind CSS で構築されたポートフォリオサイト。
GitHub Pages（https://kazuogawa.github.io/）で公開。

## 開発コマンド

- `npm run dev` — 開発サーバー起動
- `npm run build` — プロダクションビルド
- `npm run preview` — ビルド結果プレビュー

## コード品質コマンド

コードを修正したら以下を実行して品質を確認すること。

- `npm run typecheck` — TypeScript型チェック（`tsc --noEmit`）
- `npm run lint` — ESLint実行
- `npm run format` — Prettierでフォーマット適用
- `npm run format:check` — フォーマットの差分チェック（CI用）
- `npm run check` — 上記3つを一括実行（typecheck → lint → format:check）

## アーキテクチャ

- `.astro` コンポーネント: 静的HTML出力（JS 0）。Header, Hero, Experience, Footer等
- `.tsx` コンポーネント: `client:visible` で遅延ハイドレーション。Skills, ProjectCard, SocialIcons
- `src/data/profile.ts`: 全コンテンツの単一データソース。コンテンツ更新はこのファイルのみ
- `src/types/profile.ts`: Profile型定義

## コーディング規約

Vercel React Best Practices（`/vercel-react-best-practices`）に準拠する。特に以下を重視：

- inline style 禁止。Tailwind CSS のユーティリティクラスを使用
- CSSファイル内で `@apply` を使わない。通常のCSSプロパティで記述すること
- ダークモードは `dark:` プレフィックス（`darkMode: 'media'` でOS設定連動）
- barrel file（index.ts）を使わず直接インポート（`bundle-barrel-imports`）
- 条件レンダリングは `&&` ではなく三項演算子を使用（`rendering-conditional-render`）
- SVG等の静的JSXはモジュールスコープに定義（`rendering-hoist-jsx`）
- 独立した非同期処理は `Promise.all()` で並列実行（`async-parallel`）

## SEO要件（変更時は必ず保持）

- `<html lang="ja">`
- `<meta name="description">`, `<link rel="canonical">`
- OGタグ一式, Twitter Card メタ
- Schema.org JSON-LD（Person型）
- Google Analytics（`G-HR4K43KTKS`）— Astroの `is:inline` 必須

## 言語

- コード内コメント・コミットメッセージ: 日本語 or 英語
- ユーザー対応: 日本語
