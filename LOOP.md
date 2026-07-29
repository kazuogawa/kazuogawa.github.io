# Loop 設定 — kazuogawa-portfolio

個人ポートフォリオ（Astro + React + TypeScript + Tailwind, GitHub Pages 公開）の
品質・問い合わせ導線を継続的にトリアージするための最小構成。

## 有効なループ

| パターン | 周期 | ステータス | 内容 |
|---------|------|-----------|------|
| Portfolio Triage | 1d | L1 report-only | `skills/loop-triage` を実行し、`STATE.md` を更新するだけ（自動修正なし） |

> 現在は **L1（報告のみ）**。1〜2週間安定させてから L2（ドラフトPRでの小修正）へ引き上げる。

## 人間ゲート（Human Gates）

- L2 チェックリストが完了するまで自動修正は行わない。
- `master` への直接 push は禁止。修正は必ずドラフト PR で提案し、人間レビュー後に ready にする。
- SEO メタ / Google Analytics / インフラ設定（`.github/workflows/` 等）の変更は人間承認必須。

## 実行の隔離（Worktree Isolation）

- L2 の修正は必ず隔離した git worktree（例: `git worktree add ../portfolio-loop-<issue>`）で行い、
  作業ブランチは `codex/loop-<短い識別子>` とする。`master` の作業ツリーは汚さない。
- 検証（`npm run check` / `npm run build`）は worktree 内で実行する。

## 停止・無進捗の検知（Stall / No-Progress）

- 1項目あたりの修正試行は **最大 3 回**。同じエラー・同じ差分を繰り返したら「無進捗」とみなす。
- 無進捗、または3回超過時は、自動でループを続けず **escalate**（`STATE.md` の High Priority に記録し人間へ通知）する。
- 各試行は `loop-run-log.md` に記録し、`loop-budget` / `loop-constraints` スキルの上限を尊重する。
- 予算 80% 到達で report-only、`loop-pause-all` 有効時は即終了。

## MCP / コネクタ

- このパターン（Portfolio Triage）では **MCP は不要**。外部コネクタは使わない。
  将来 Linear / Slack 連携などが必要になった場合のみ `docs/safety.md` にスコープを追記して導入する。

## 予算（Budget）

- 1 run あたりサブエージェント spawn 上限: 0（L1） / 2（L2）
- 1日あたりトークン上限: 100k（詳細は `loop-budget.md`）
- 各 run の結果は `loop-run-log.md` に追記。run の開始/終了時に `loop-budget` スキルを実行する。
- kill switch: `loop-pause-all` — スケジューラを停止し人間へ通知する。
- コスト見積り: `npx @cobusgreyling/loop-cost --pattern daily-triage --level L1 --cadence 1d`

## 参照

- 安全方針: `docs/safety.md`
- 制約: `loop-constraints.md`
- 状態: `STATE.md`
- 予算: `loop-budget.md` / 実行ログ: `loop-run-log.md`
- スキル: `skills/loop-triage`, `skills/loop-verifier`, `skills/minimal-fix`, `skills/loop-budget`, `skills/loop-constraints`
- 品質基準: `.github/PORTFOLIO_REVIEW_GUIDELINES.md`
- Issue 起点タスク: `.github/CODEX_ISSUE_WORKFLOW.md`

## First loop（grok）

```
/loop 1d Run loop-triage. Update STATE.md. No auto-fix in week one.
```
