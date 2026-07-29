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

## GitHub IssueからのCodex実行

GitHub Issueを起点とするタスクでは、作業開始前に
`.github/CODEX_ISSUE_WORKFLOW.md` を読み、その手順に従うこと。

参照先が存在しない、または読み取れない場合は実装を開始せず、その旨を報告すること。

## ポートフォリオレビュー

表示品質、レスポンシブ対応、問い合わせ導線をレビューする場合は、
`.github/PORTFOLIO_REVIEW_GUIDELINES.md` を読み、その基準に従うこと。

## ループエンジニアリング運用

ループ（定期トリアージ・自動修正提案）を実行・改善する場合は、作業開始前に
以下を読み、その設計と制約に従うこと。

- `LOOP.md`: ループ設定（有効なループ、人間ゲート、予算、停止・無進捗検知）。
- `loop-constraints.md` / `docs/safety.md`: 拘束制約と安全方針（denylist、自動マージ禁止、最小権限）。
- `loop-budget.md` / `loop-run-log.md`: トークン予算と実行ログ。
- `STATE.md`: ループの状態（High Priority / Watch / Noise）。各 run で更新する。
- `.agents/skills/`: Codexが自動検出するリポジトリ固有スキル群。
  - `loop-constraints`（ガードレール）→ `loop-budget`（予算確認）→ `loop-triage`（信号抽出）の順で実行。
  - L2 以降の修正は `minimal-fix`（maker）→ `loop-verifier`（checker）で maker/checker を分離する。

運用ルール:

- 現在は **L1（report-only）**。1〜2週間安定させるまで自動修正は行わない。
- `master` へ直接 push しない。修正は必ずドラフト PR で提案し、人間レビュー後に ready にする。
- 1項目の修正試行は最大 3 回。無進捗・超過時は `STATE.md` の High Priority に記録し escalate する。
- 参照先が存在しない、または読み取れない場合は実行を開始せず、その旨を報告すること。
