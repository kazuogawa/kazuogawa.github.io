# Loop 安全方針（Safety） — kazuogawa-portfolio

ループの denylist・自動マージ方針・ツール/MCP スコープを1箇所に集約する。
`loop-constraints` スキルは `loop-constraints.md` を主に読み、本ファイルを補助方針として参照する。
ここに書かれた内容は **拘束力を持つ**。

## 1. Denylist（絶対に変更しないパス）

- `.env`, `.env.*`
- `auth/`, `payments/`, `secrets/`, `credentials/`
- インフラ / CI: `.github/workflows/`, `deploy.yml`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`
  （人間承認がある場合のみ変更可）

## 2. 保持必須（削除・破壊しない）

- SEO: `<html lang="ja">`, `<meta name="description">`, `<link rel="canonical">`,
  OG タグ一式, Twitter Card メタ, Schema.org JSON-LD（Person 型）
- 計測: Google Analytics `G-HR4K43KTKS`（Astro の `is:inline` 必須）

## 3. 変更してよい範囲

- コンテンツ更新は原則 `src/data/profile.ts` のみ。
- コンポーネントの表示崩れ修正は該当 `.astro` / `.tsx` に限定し、1 run 1 修正。

## 4. 自動マージ方針（Auto-merge policy）

- `master` への直接 push は禁止。
- 自動マージは禁止。修正は必ず **ドラフト PR** として提案し、人間レビュー後に ready 化・マージ。
- Issue / PR のクローズは人間の承認が必要。

## 5. ツール / MCP スコープ（最小権限）

- 各スキルは `SKILL.md` の `allowed-tools` で必要最小限のツールのみを宣言する。
  - `loop-triage`: 読み取り + `git log` / `npm run check` / `npm run build` / `npm audit` + `STATE.md` の編集のみ。
  - `minimal-fix`: 上記 + ファイル編集 + `git worktree` / `commit`（push・merge 権限は持たせない）。
  - `loop-verifier`: 読み取り + `git diff` / `npm run check` / `npm run build` のみ（編集不可）。
- **MCP / 外部コネクタは本パターンでは不要**。導入時は本節にサーバ名・スコープ・用途を明記してから使う。

## 6. エスカレーション / 停止

- 1項目あたりの修正試行は最大 3 回。超過または無進捗は escalate（`STATE.md` High Priority + 人間通知）。
- 予算 80% 到達で report-only、`loop-pause-all` 有効時は即終了（`loop-budget.md`）。

## 参照

- `loop-constraints.md` / `loop-budget.md` / `LOOP.md`
- `.github/CODEX_ISSUE_WORKFLOW.md` / `.github/PORTFOLIO_REVIEW_GUIDELINES.md`
