# Loop 自律レベル定義 — kazuogawa-portfolio

本ファイルは、このリポジトリにおけるL1・L2・L3の意味と権限境界の正本とする。

- 現在のレベル、Scheduled Taskの実行内容、プロジェクト固有の昇格ゲートは `LOOP.md` を正本とする。実行頻度はSchedulerで管理し、リポジトリ内では重複定義しない。
- 全レベル共通の拘束ルールは `loop-constraints.md`、禁止・承認必須パスとツール権限は `docs/safety.md` を正本とする。
- token、修正試行、サブエージェント、停止条件の具体値は `loop-budget.md` を正本とする。
- 文書間で解釈が競合する場合は、より権限が小さく、人間ゲートが厳しいルールを適用する。

## 共通原則

次のルールは自律レベルにかかわらず維持する。

- `master` へ直接pushしない。
- 現在レベルのrunbookで許可された場合に限り、`master` 以外の専用作業ブランチへpushできる。
- Codexループはready化、merge、deploy、Issue・PRのcloseを自動で行わない。人間が事前承認したGitHubネイティブのDependabot自動化はCodexループの権限外とし、`loop-constraints.md` の限定条件に従う。
- 禁止パスを変更しない。承認必須パスは対象ごとの明示的な人間承認なしに変更しない。
- ソースを修正するrunでは1項目だけを対象にし、隔離worktreeと専用ブランチを使う。
- makerとcheckerを分離し、checkerがAPPROVEするまで修正案を採用しない。
- check、build、その他の必要な検証を無効化・弱体化しない。
- 各runの開始時と終了時に予算と停止条件を確認する。
- `STATE.md` の `pause_all: true` を最優先のkill switchとして扱う。
- SEO、構造化データ、Google Analyticsなど、`docs/safety.md` の保持必須要件を破壊しない。

## レベル概要

| Level | 名称                | 対象の決定                        | 最大成果物               | 人間ゲート                         |
| ----- | ------------------- | --------------------------------- | ------------------------ | ---------------------------------- |
| L1    | Report-only         | エージェントが信号を抽出          | `STATE.md`と実行ログ     | ソース変更へ進まない               |
| L2    | Supervised fix      | 人間が承認した1項目               | 検証済みドラフトPR       | 対象承認、保護パス承認、merge      |
| L3    | Unattended draft PR | allowlist内のauto-eligibleな1項目 | 検証済みドラフトPRと通知 | allowlist承認、保護パス承認、merge |

L3は自動mergeを意味しない。このリポジトリにおけるL3の上限は、検証済みドラフトPRの自動作成までとする。

## レベル別runbook

- [L1 — Report-only](autonomy/l1-report-only.md)
- [L2 — Supervised fix](autonomy/l2-supervised-fix.md)
- [L3 — Unattended draft PR](autonomy/l3-unattended-draft-pr.md)

各runでは、最初に `LOOP.md` で現在レベルを確認し、本ファイルと現在レベルのrunbookだけを読む。L1でL2・L3の実行権限を先読みして適用してはならない。

## 昇格・降格手順

自律レベルはエージェントが自分で変更しない。人間が次の手順を完了した場合のみ変更する。

1. `LOOP.md` の昇格ゲートと直近のrun実績をレビューする。
2. `loop-budget.md`、`docs/safety.md`、対象Skillsを新しいレベルに合わせる。
3. `LOOP.md` の現在レベルを変更する。
4. 文書間のdriftと必須ファイルを検査する。
5. 低頻度のpilotまたはcanary runから開始し、結果を人間がレビューする。

次のいずれかが発生した場合は、直ちにL1へ降格するか `pause_all: true` で停止する。

- 許可外パス、対象外項目、想定外の外部システムを変更した。
- checker、検証、人間ゲートを迂回した。
- 予算超過、無進捗、同じ失敗の反復が発生した。
- 自動作成されたPRの品質や範囲を信頼できない。
- kill switch、通知、監査ログが機能しない。

降格または停止の理由、影響、再開条件を `STATE.md` のHigh Priorityと `loop-run-log.md` に記録する。
