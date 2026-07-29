---
name: loop-triage
description: >
  ポートフォリオサイト（kazuogawa-portfolio）の品質・レスポンシブ・問い合わせ導線を
  トリアージし、ループが対応を検討できる簡潔で実行可能な findings レポートを作る。
  結果は STATE.md に構造化して書き込む。
user_invocable: true
allowed-tools: [read, grep, glob, bash(git log:*), bash(npm run check), bash(npm run build), bash(npm audit:*), edit(STATE.md)]
---

# Loop Triage（ポートフォリオ品質トリアージ）

あなたはポートフォリオサイトの品質トリアージ担当。目的は「今日エンジニアが知っておくべきこと」を
優先度付きで簡潔にまとめること。**このスキルは信号の抽出であり、修正の実行ではない。**

実行前に `loop-constraints` と `loop-budget` スキルが動いている前提とする。
`loop-pause-all` が有効、または予算超過なら即終了する。

## 前提コンテキスト

- 技術構成: Astro + React + TypeScript + Tailwind CSS / GitHub Pages 公開。
- 品質基準は `.github/PORTFOLIO_REVIEW_GUIDELINES.md` に従う。
- コンテンツの単一ソースは `src/data/profile.ts`。

## 入力（ループが収集して渡す）

1. `npm run check`（typecheck → lint → format:check）の結果。
2. `npm run build` の成否とビルド警告。
3. 品質観点（`.github/PORTFOLIO_REVIEW_GUIDELINES.md`）:
   - PC 表示（1440x900 / 1280x720）: 横スクロール・重なり・文字切れ・余白バランス。
   - スマホ表示（390x844 / 320x568）: はみ出し・折り返し・ハンバーガーメニュー開閉・タップ領域。
   - ライト/ダーク両モードの可読性。
   - 問い合わせ導線: ファーストビューで専門性が伝わるか、ヘッダー→Contact 導線、CTA 文言、リンク切れ。
4. SEO 要件の保持状況（`<html lang="ja">` / meta description / canonical / OG・Twitter メタ / Schema.org JSON-LD / Google Analytics）。
5. 直近 24〜48h の commit（`git log`）と、既知の状態（`STATE.md`）。
6. （任意）`npm audit` による依存の脆弱性。

## 出力フォーマット（STATE.md へ反映する）

以下の Markdown セクションで出力し、`STATE.md` の対応セクションを更新する。

### 1. High Priority（今日対応すべき / 人間判断待ち）
- 一行で内容
- なぜ重要か（表示崩れ・導線欠落・SEO 破壊・ビルド失敗などの影響）
- ループへの推奨アクション（例: 「隔離した worktree で最小修正のドラフト PR を作る」）
- 対象ファイルと該当箇所（分かる範囲で）
- ざっくり工数見積り

### 2. Watch List（監視のみ・まだ動かない）
- 同じ形式でより低い緊急度

### 3. Noise / Ignore
- 確認したが対応不要と判断したものを簡潔に列挙

### 4. State Updates（次回 run へ引き継ぐ事実）
- 例: 「PR #12 はレビュー待ち」「ダーク時のコントラスト指摘は解消済み」

## ルール

- 徹底的に簡潔に。ループも人間も長文を読みたくない。
- 「まともなエンジニアが今日知りたい」ものだけを High Priority に入れる。迷ったら Watch か Noise へ。
- トリアージ中に大規模リファクタや設計変更を提案しない（信号の抽出に徹する）。
- 内容の修正が必要な場合の変更先は原則 `src/data/profile.ts`。SEO メタと GA は保持する。
- `.github/PORTFOLIO_REVIEW_GUIDELINES.md` の重要度順・報告フォーマット（再現ビューポート/影響/対象ファイル/推奨修正）に揃える。
- L1（report-only）では修正を提案するに留め、コードは変更しない。
