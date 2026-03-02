# Repository Guidelines

## プロジェクト構成
- **フレームワーク**: Astro + React + TypeScript + Tailwind CSS
- `src/pages/index.astro`: メインページ（全セクション統合）
- `src/layouts/BaseLayout.astro`: HTML shell, meta, analytics, 構造化データ
- `src/components/`: UIコンポーネント（`.astro` は静的、`.tsx` はインタラクティブ）
- `src/data/profile.ts`: 全コンテンツの単一データソース（型付き）
- `src/types/profile.ts`: Profile型定義
- `src/styles/global.css`: Tailwind directives + カスタムベーススタイル
- `public/images/`: 画像アセット
- `.github/workflows/deploy.yml`: GitHub Pages自動デプロイ

## 開発コマンド
- `npm run dev` — 開発サーバー起動
- `npm run build` — プロダクションビルド
- `npm run preview` — ビルド結果のプレビュー

## エージェント向け指示
- 既定出力言語: 日本語。
- トーン: 簡潔・丁寧・具体的。
- コンテンツ更新は `src/data/profile.ts` のみ編集すればよい。
- `.astro` は静的HTML出力（JS 0）、`.tsx` は `client:visible` で遅延読み込み。
- inline style は禁止。Tailwind CSS のユーティリティクラスを使用すること。
- ダークモードは `dark:` プレフィックスで対応（`darkMode: 'media'`）。
