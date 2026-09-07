---
name: loop-budget
description: Use when Portfolio Triage、Approved Feature、Codex Securityのrunを開始または終了し、token予算、self-throttle、kill switchの判定が必要な場合。
---

# Loop Budget

## Run開始時

1. `loop-budget.md`、`loop-run-log.md`、`STATE.md` を読む。
2. 実行中のpatternを`daily-triage`、`approved-feature`、`security-scan`のいずれかとして特定し、現在時刻から遡る24時間について同じpatternの`tokens_estimate`の合計を求める。
3. `loop-budget.md` の上限、self-throttle、kill switchを適用する。複数の上限がある場合は、最も厳しい制限を使う。
4. kill switchが有効なら、チェックや編集を行わず終了する。
5. tokens上限に達している場合は、対象loopを行わず、同文書の停止記録だけを行って終了する。`security-scan`は80%以上でも新しいスキャンを開始せず、停止理由だけを報告する。
6. L1では残予算にかかわらず、同文書に定めたサブエージェント上限を適用する。
7. 対応候補も監視候補もない場合は、同文書の早期終了目安に従う。

## Run終了時

1. `loop-run-log.md` から、現在時刻を基準に30日より古いrunエントリを削除する。
2. `## Recent Runs` に、実行したpatternを使って同ファイルのスキーマどおりJSONを1件だけ追記する。L1では `actions_taken` を必ず0にする。

self-throttleが発生した場合は、`loop-budget.md` の `## Alerts This Period` と `STATE.md` のHigh Priorityにも簡潔に記録する。
