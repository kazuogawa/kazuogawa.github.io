# Loop設定 — kazuogawa-portfolio（Codex）

Astroポートフォリオの品質、問い合わせ導線、運用文書の整合性、保守性を継続的に確認するCodex向けループ。

L1・L2・L3の意味と権限境界は `docs/autonomy-levels.md` を正本とし、本ファイルは現在のレベル、Scheduled Taskの実行内容、プロジェクト固有の昇格ゲートを管理する。

## 現在の自律レベル

```yaml
current_level: L3
```

自律レベルは人間だけが変更できる。変更時は `docs/autonomy-levels.md` の昇格・降格手順に従う。

## 有効なループ

| パターン         | 実行手順                                             |
| ---------------- | ---------------------------------------------------- |
| Portfolio Triage | `$loop-constraints` → 現在レベルのrunbookと必須Skill |

Portfolio Triageは既存のcheck、build、表示、問い合わせ導線、SEO、直近変更に加え、次をreport-onlyで確認する。

- ドキュメントドリフト: 文書内の構成、コマンド、権限境界、相互参照を実ファイル・設定と照合する。
- リファクタリング提案: 直近変更と静的な証拠から、重複、責務過多、不要な複雑性を抽出する。

両チェックは同じrunで文書やコードを修正しない。提案は原則Watch Listへ記録し、具体的な不具合・安全上の矛盾・人間判断が必要な項目だけHigh Priorityへ記録する。

Portfolio Triageは既存のcheck、build、表示、問い合わせ導線、SEO、直近変更に加え、次をreport-onlyで確認する。

- ドキュメントドリフト: 文書内の構成、コマンド、権限境界、相互参照を実ファイル・設定と照合する。
- リファクタリング提案: 直近変更と静的な証拠から、重複、責務過多、不要な複雑性を抽出する。

両チェックは同じrunで文書やコードを修正しない。提案は原則Watch Listへ記録し、具体的な不具合・安全上の矛盾・人間判断が必要な項目だけHigh Priorityへ記録する。

## Scheduled Task設定

ChatGPTデスクトップアプリのScheduled Tasksで次を設定する。

| 項目        | 設定値         |
| ----------- | -------------- |
| Project     | このリポジトリ |
| Environment | Local          |
| Prompt      | 下記           |

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

## L3昇格ゲート

次をすべて満たし、人間が `current_level` をL3へ変更するまで現在レベルを維持する。

- 人間が本節のallowlist、auto-eligible判定、通知、circuit breakerを承認した。
- GitHub認証が有効で、`master` のbranch protectionと必須チェック `Check and build` を読み取り確認できる。
- `STATE.md` のkill switchを人間がテストし、停止中にチェック、編集、push、PR作成を行わないことを確認した。
- `.agents/skills/minimal-fix/SKILL.md`、`.agents/skills/loop-verifier/SKILL.md`、`.codex/agents/verifier.toml` が読み取り可能である。
- `STATE.md` と `loop-run-log.md` の直近結果を人間がレビューし、昇格時点の差分をcommitしている。

L3への昇格指示は、本節のallowlistと判定ルール、およびcheckerのAPPROVE後に専用作業ブランチへpushしてドラフトPRを作成する権限の承認を含む。ready化、merge、deploy、Issue・PRのcloseは含まない。

## L3 allowlist / auto-eligible

L3が自動修正できるのは、次のallowlist内で全auto-eligible条件を満たす1項目だけとする。

Allowlist:

- 対象パスは `src/components/**/*.astro`、`src/components/**/*.tsx`、`src/pages/**/*.astro` のみ。
- 対象種別は、既存の自動検証で再現する表示崩れ、レスポンシブ不良、ナビゲーション操作不良、型・lint・buildエラーに限定する。
- 修正は既存のコンポーネント構造とTailwindユーティリティを使う局所的な変更に限定する。

Auto-eligible条件（すべて必須）:

- `STATE.md` のHigh Priorityに、再現手順、失敗した検証、対象ファイル、期待結果が記録されている。
- `make check`、`make build`、または既存の `make test-e2e` のいずれかで修正前の失敗を再現できる。
- 1つの原因に対する修正で、変更は最大2ファイルかつ追加・削除の合計100行以内に収まる。
- 依存関係、テスト、snapshot、設定、workflow、`src/data/profile.ts`、`src/layouts/`、`src/styles/`、`public/` を変更しない。
- SEO、構造化データ、Google Analytics、外部サービス、コンテンツ・仕様判断に影響しない。
- `make check` と `make build` に加え、修正前に失敗した検証で成功を証明できる。
- ドキュメントドリフトとリファクタリング提案ではない。これらは人間が別途修正対象として承認するまでreport-onlyとする。

条件を1つでも機械判定できない場合はauto-eligibleではなく、report-onlyで人間へescalateする。

## L3通知

- 修正開始時に、対象、再現証拠、予定パスをScheduled Taskの実行結果へ出力する。
- checkerのAPPROVE後、commit・push前に、ブランチ名、変更ファイル、検証結果を同じ実行結果へ出力する。
- 終了時に、verdict、PR URLまたは未作成理由、残存リスク、必要な人間操作を実行結果、`STATE.md`、`loop-run-log.md` に記録する。
- 通知を出力または記録できない場合はpushとPR作成を行わず、circuit breakerを作動させる。

## L3 circuit breaker / canary

- L3開始時は低頻度、同時実行数1、1 run 1項目のcanaryとする。実行頻度はSchedulerで管理する。
- open中のL3作成ドラフトPRが1件ある場合、新しい修正runはreport-onlyで終了する。
- allowlist外変更、未承認パス、checkerのREJECTまたはESCALATE_HUMAN、認証・branch protection確認失敗、通知失敗、監査ログ欠落、同じ失敗の反復を検出した場合はcommit・push・PR作成を行わない。
- 許可外変更、checker迂回、通知失敗、監査ログ欠落が発生した場合は `pause_all: true` にして停止し、人間がScheduled Taskを無効化する。
- token 80%到達時はreport-only、100%到達時は停止する。修正試行とサブエージェント上限は `loop-budget.md` に従う。

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
