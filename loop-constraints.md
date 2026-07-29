# Loop 制約 — kazuogawa-portfolio

> ルールを追加する場合は、このファイルを直接編集するか、Codexへ
> 「`loop-constraints.md` に次の制約を追加して」と依頼する。
> `loop-constraints` スキルが各 run の最初にこのファイルを読む。
> ここに書かれた制約は **拘束力を持つ**。エージェントは必ず従うこと。

## Push & Merge（プッシュとマージ）

- `master` へ直接 push しない。
- 事前に伝えずに push しない。
- 人間の承認なしに `master` へ自動マージしない。
- 修正は必ずドラフト PR で提案し、レビュー後に ready にする。
- PR 本文には「変更概要 / 実行したテストと結果 / 残存リスク」を記載する（`.github/CODEX_ISSUE_WORKFLOW.md` 準拠）。

## Paths（変更してよい範囲）

- `.env`, `.env.*`, `auth/`, `payments/`, `secrets/`, `credentials/` は編集しない。
- インフラ / CI 設定（`.github/workflows/`, `astro.config.mjs`, `deploy.yml` 等）は人間承認なしに編集しない。
- コンテンツ更新は原則 `src/data/profile.ts` のみを編集する（`AGENTS.md` 規約）。
- SEO 要件（`<html lang="ja">` / meta description / canonical / OG・Twitter メタ / Schema.org JSON-LD / Google Analytics `G-HR4K43KTKS`）を削除・破壊しない。

## Code（コード品質）

- 修正の前後で `npm run check`（typecheck → lint → format:check）と `npm run build` を実行する。
- inline style は禁止。Tailwind のユーティリティクラスを使う。
- CSS 内で `@apply` を使わない。
- 条件レンダリングは三項演算子を使う（`&&` を使わない）。
- テストやチェックを無効化して CI を通さない。
- 無関係なリファクタリング・依存更新をしない（1 run につき 1 修正）。
- 1項目あたりの修正試行は最大 3 回。超えたら escalate する。

## Communication（連絡）

- 実行する前に、何をしようとしているかを必ず人間へ伝える。
- 人間の承認なしに Issue や PR をクローズしない。

## Budget（予算）

- トークン消費が 1日上限の 80% に達したら report-only モードへ切り替える。
- `STATE.md` の `pause_all: true` が有効なら即座に終了する。

---

<!-- 独自ルールは以下に追記する。平易な日本語または英語でよい。ループはそのまま読む。 -->
