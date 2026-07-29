# Loop設定 — kazuogawa-portfolio（Codex）

Astroポートフォリオの品質と問い合わせ導線を継続的に確認するCodex向けループ。

## 有効なループ

| パターン         | 周期 | ステータス     | 実行Skill                                             |
| ---------------- | ---- | -------------- | ----------------------------------------------------- |
| Portfolio Triage | 1日  | L1 report-only | `$loop-constraints` → `$loop-budget` → `$loop-triage` |

現在はL1（報告のみ）。1〜2週間安定させ、明示的にL2へ変更するまで自動修正しない。

## Scheduled Task設定

ChatGPTデスクトップアプリのScheduled Tasksで次を設定する。

| 項目        | 設定値                      |
| ----------- | --------------------------- |
| Project     | このリポジトリ              |
| Cadence     | Daily（任意のローカル時刻） |
| Environment | Local                       |
| Prompt      | 下記                        |

`STATE.md` と `loop-run-log.md` はgit管理対象だが、初期検証では現在の作業ツリーへ結果を残すためEnvironmentはLocalを使う。各run後は両ファイルに未コミット差分が生じるため、内容を確認してからcommitする。

```text
このプロジェクトで $loop-constraints、$loop-budget、$loop-triage の順に1回実行してください。
STATE.mdを読み、High Priority、Watch List、Recent Noise、Post-Run Critique、Last runを更新してください。
終了時に$loop-budgetでloop-run-log.mdへ記録してください。
現在はL1 report-onlyです。ソース修正、サブエージェント、worktree、push、Issue・PR操作は行わないでください。
```

手動実行では、同じプロンプトをCodexへ入力する。

## L2昇格ゲート

次をすべて満たし、人間が本ファイルのステータスをL2へ変更するまでL1を維持する。

- 1〜2週間、かつ5回以上のL1 runを確認した。
- Scheduled Taskが `STATE.md` と `loop-run-log.md` 以外を変更していない。
- `npm run check` と `npm run build` が継続して成功している。
- 予算超過、無進捗、想定外の権限要求が発生していない。
- 未確認のブラウザ操作、外部リンク、依存脆弱性を人間が把握している。
- L2で許可する変更範囲と人間ゲートをレビューした。

push、PR、mergeの拘束ルールは `loop-constraints.md`、保護パスと承認範囲は `docs/safety.md` を正本とする。

## Worktreeとmaker/checker

- L1ではworktreeもサブエージェントも使用しない。
- L2の修正は隔離worktreeと `codex/loop-<identifier>` ブランチを使う。
- `$minimal-fix` をmakerとする。checkerは `.codex/agents/verifier.toml` で定義した `verifier` agentが `$loop-verifier` の手順を使って実行する。
- 修正試行の上限とescalation条件は `loop-budget.md` を正本とする。

## 予算と停止

集計期間、token・修正試行・サブエージェントの上限、self-throttle、kill switchは `loop-budget.md` を正本とする。停止時はScheduled Taskも人間が無効化する。

## MCP

L1ではMCPや外部コネクタを使わない。導入条件と権限範囲は `docs/safety.md` を正本とする。

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
