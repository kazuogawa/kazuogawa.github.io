# Loop設定 — kazuogawa-portfolio（Codex）

Astroポートフォリオの品質、問い合わせ導線、運用文書の整合性、保守性を継続的に確認するCodex向けループ。

L1・L2・L3の意味と権限境界は `docs/autonomy-levels.md` を正本とし、本ファイルは現在のレベル、Scheduled Task、プロジェクト固有の昇格ゲートを管理する。

## 現在の自律レベル

```yaml
current_level: L1
```

自律レベルは人間だけが変更できる。変更時は `docs/autonomy-levels.md` の昇格・降格手順に従う。

## 有効なループ

| パターン         | 周期 | 実行手順                                             |
| ---------------- | ---- | ---------------------------------------------------- |
| Portfolio Triage | 1日  | `$loop-constraints` → 現在レベルのrunbookと必須Skill |

Portfolio Triageは既存のcheck、build、表示、問い合わせ導線、SEO、直近変更に加え、次をreport-onlyで確認する。

- ドキュメントドリフト: 文書内の構成、コマンド、権限境界、相互参照を実ファイル・設定と照合する。
- リファクタリング提案: 直近変更と静的な証拠から、重複、責務過多、不要な複雑性を抽出する。

両チェックは同じrunで文書やコードを修正しない。提案は原則Watch Listへ記録し、具体的な不具合・安全上の矛盾・人間判断が必要な項目だけHigh Priorityへ記録する。

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
LOOP.mdのcurrent_levelを確認し、$loop-constraintsを最初に実行してください。
続いて、現在レベルのrunbookとそこに記載された必須Skillに従い、ループを1回実行してください。
STATE.mdとloop-run-log.mdをrunbookで許可された範囲だけ更新してください。
```

手動実行では、同じプロンプトをCodexへ入力する。

## L2昇格ゲート

次をすべて満たし、人間が `current_level` をL2へ変更するまでL1を維持する。

- 1〜2週間、かつ5回以上のL1 runを確認した。
- Scheduled Taskが `STATE.md` と `loop-run-log.md` 以外を変更していない。
- `make check` と `make build` が継続して成功している。
- 予算超過、無進捗、想定外の権限要求が発生していない。
- 未確認のブラウザ操作、外部リンク、依存脆弱性を人間が把握している。
- L2で許可する変更範囲と人間ゲートをレビューした。

push、PR、mergeの拘束ルールは `loop-constraints.md`、保護パスと承認範囲は `docs/safety.md` を正本とする。

## Maker / checker

- 修正を行うrunのworktree、ブランチ、push権限は、現在レベルのrunbookに従う。
- `$minimal-fix` をmakerとする。checkerは `.codex/agents/verifier.toml` で定義した `verifier` agentが `$loop-verifier` の手順を使って実行する。
- 修正試行の上限とescalation条件は `loop-budget.md` を正本とする。

## 予算と停止

集計期間、token・修正試行・サブエージェントの上限、self-throttle、kill switchは `loop-budget.md` を正本とする。停止時はScheduled Taskも人間が無効化する。

## 外部接続 / MCP

品質確認に必要なネットワーク、MCP、外部コネクタを利用できる。読み取り・書き込みの範囲は現在レベルのrunbookと `docs/safety.md` に従う。

## 参照

- 制約: `loop-constraints.md`
- 安全方針: `docs/safety.md`
- 自律レベル定義: `docs/autonomy-levels.md`
- レベル別runbook: `docs/autonomy/`
- 予算: `loop-budget.md`
- 状態: `STATE.md`
- 実行ログ: `loop-run-log.md`
- Skills: `.agents/skills/`
- checker設定: `.codex/agents/verifier.toml`
- 品質基準: `.github/PORTFOLIO_REVIEW_GUIDELINES.md`
- Issue起点タスク: `.github/CODEX_ISSUE_WORKFLOW.md`
