# Loop 安全方針（Safety） — kazuogawa-portfolio

ループの禁止パス・承認必須パス・保持要件・ツール/MCPスコープを1箇所に集約する。
`loop-constraints` スキルは `loop-constraints.md` を主に読み、本ファイルを補助方針として参照する。
ここに書かれた内容は **拘束力を持つ**。

## 1. 禁止パス（人間承認があっても変更しない）

- `.env`, `.env.*`
- `auth/`, `payments/`, `secrets/`, `credentials/`

## 2. 人間承認必須パス

- `.github/workflows/`
- `astro.config.mjs`
- `tailwind.config.mjs`
- `tsconfig.json`

## 3. 保持必須（削除・破壊しない）

- SEO: `<html lang="ja">`, `<meta name="description">`, `<link rel="canonical">`,
  OG タグ一式, Twitter Card メタ, Schema.org JSON-LD（Person 型）
- 計測: Google Analytics `G-HR4K43KTKS`（Astro の `is:inline` 必須）

## 4. 変更してよい範囲

- コンテンツ更新は原則 `src/data/profile.ts` のみ。
- コンポーネントの表示崩れ修正は該当 `.astro` / `.tsx` に限定し、1 run 1 修正。

## 5. ツール / MCPスコープ（最小権限）

- 各スキルの手順とCodexのsandbox／approval設定で必要最小限の権限に制限する。
  - `loop-triage`: 読み取り + `git log` / `npm run check` / `npm run build` / `npm audit` + `STATE.md` / `loop-run-log.md` の編集のみ。
  - `minimal-fix`: L2移行後のみ。上記 + ファイル編集 + `git worktree` / `commit`。push・mergeは人間承認必須。
  - `loop-verifier`: 読み取り + `git diff` / `npm run check` / `npm run build` のみ。編集不可。
- **MCP / 外部コネクタはL1では使用しない**。導入時は本節にサーバ名・スコープ・用途を明記し、人間承認を得てから使う。

## 6. Push / Merge

push、PR、merge、closeの拘束ルールは `loop-constraints.md` を正本とする。

## 7. エスカレーション / 停止

予算、修正試行、self-throttle、kill switchは `loop-budget.md` を正本とする。

## 参照

- `loop-constraints.md` / `loop-budget.md` / `LOOP.md` / `docs/autonomy-levels.md`
- `.github/CODEX_ISSUE_WORKFLOW.md` / `.github/PORTFOLIO_REVIEW_GUIDELINES.md`
