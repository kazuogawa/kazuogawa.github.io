# Loop設定 — kazuogawa-portfolio（Codex）

Astroポートフォリオの品質と問い合わせ導線を継続的に確認するCodex向けループ。

## 有効なループ

| パターン         | 周期 | ステータス     | 実行Skill                                             |
| ---------------- | ---- | -------------- | ----------------------------------------------------- |
| Portfolio Triage | 1日  | L1 report-only | `$loop-constraints` → `$loop-budget` → `$loop-triage` |

現在はL1（報告のみ）。1〜2週間安定させ、明示的にL2へ変更するまで自動修正しない。

## Codex Automations設定

Codex AppのAutomationsで次を設定する。

| 項目        | 設定値                      |
| ----------- | --------------------------- |
| Project     | このリポジトリ              |
| Cadence     | Daily（任意のローカル時刻） |
| Environment | Local                       |
| Prompt      | 下記                        |

`STATE.md` と `loop-run-log.md` はローカル管理でgit対象外のため、EnvironmentはLocalを使う。

```text
このプロジェクトで $loop-constraints、$loop-budget、$loop-triage の順に1回実行してください。
STATE.mdを読み、High Priority、Watch List、Recent Noise、Post-Run Critique、Last runを更新してください。
終了時に$loop-budgetでloop-run-log.mdへ記録してください。
現在はL1 report-onlyです。ソース修正、サブエージェント、worktree、push、Issue・PR操作は行わないでください。
```

手動実行では、同じプロンプトをCodexへ入力する。

## Human Gates

- L2チェックリストが完了するまで自動修正しない。
- `master` へ直接pushしない。
- 修正は必ずドラフトPRで提案し、人間レビュー後にready化する。
- SEOメタ、Google Analytics、`.github/workflows/` などのインフラ変更は人間承認必須。
- Issue・PRのcloseおよびmergeは人間が行う。

## Worktreeとmaker/checker

- L1ではworktreeもサブエージェントも使用しない。
- L2の修正は隔離worktreeと `codex/loop-<identifier>` ブランチを使う。
- `$minimal-fix` をmaker、`.codex/agents/verifier.toml` と `$loop-verifier` をcheckerとして分離する。
- 1項目の修正試行は最大3回。無進捗または超過時は `STATE.md` のHigh Priorityへescalateする。

## 停止と予算

- 上限は1日2 run、100k tokens。
- 80%到達でreport-only、100%到達で停止する。
- `STATE.md` の `pause_all: true` がkill switch。
- kill switchを有効にしたらCodex Automationも人間が無効化する。
- 詳細は `loop-budget.md` と `loop-run-log.md` に従う。

## MCP

L1ではMCPや外部コネクタを使わない。導入時は `docs/safety.md` に用途と権限範囲を追記し、人間承認を得る。

## 参照

- 制約: `loop-constraints.md`
- 安全方針: `docs/safety.md`
- 予算: `loop-budget.md`
- 状態: `STATE.md`
- 実行ログ: `loop-run-log.md`
- Skills: `.agents/skills/`
- checker設定: `.codex/agents/verifier.toml`
- 品質基準: `.github/PORTFOLIO_REVIEW_GUIDELINES.md`
- Issue起点タスク: `.github/CODEX_ISSUE_WORKFLOW.md`
