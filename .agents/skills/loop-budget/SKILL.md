---
name: loop-budget
description: ポートフォリオループの実行回数、推定トークン、self-throttle閾値、kill switchを各runの開始時と終了時に確認する。loop-constraintsの後、loop-triageの前に使用する。
---

# Loop Budget

## Run開始時

1. `loop-budget.md`、`loop-run-log.md`、`STATE.md` を読む。
2. 過去24時間の `daily-triage` のrun数と `tokens_estimate` の合計を求める。
3. 複数の上限がある場合は、最も厳しい制限を適用する。
4. `pause_all: true` または使用量100%以上なら即時終了する。
5. 使用量80%以上ならreport-onlyを強制する。
6. L1では残予算にかかわらずサブエージェントを0に制限する。
7. 対応候補も監視候補もなければ、5k tokens未満を目安に早期終了する。

## Run終了時

`loop-run-log.md` の `## Recent Runs` に、同ファイルのスキーマどおりJSONを1件だけ追記する。L1では `actions_taken` を必ず0にする。

self-throttleが発生した場合は、`loop-budget.md` の `## Alerts This Period` と `STATE.md` のHigh Priorityにも簡潔に記録する。
