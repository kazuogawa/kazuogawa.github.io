# Loop 予算 — kazuogawa-portfolio

> 主ループ: **Portfolio Triage**（周期 1d / 現在 L1 report-only）

## 集計期間

tokensは、現在時刻から過去24時間に含まれる `run_id` を対象に集計する。

## 過去24時間の上限

| ループ           | 最大 tokens/24h | 最大 サブエージェント spawn/run |
| ---------------- | --------------- | ------------------------------- |
| Portfolio Triage | 100k            | 0（L1） / 2（L2）               |

L2の1項目あたりの修正試行は最大3回。3回失敗、または同じエラー・差分を繰り返す無進捗時は停止してescalateする。

## 閾値と超過時の対応

- 対応候補も監視候補もないrun: 5k tokens未満を目安に早期終了する。
- tokensが80%以上: report-onlyへ切り替える。
- tokensが100%以上、またはkill switch有効: runを開始せず停止する。

停止時は次を行う。

1. Scheduled Taskを無効化する。
2. `loop-run-log.md` にイベントを追記する。
3. 人間へ通知する（`STATE.md` の High Priority に記載）。

## kill switch

- `STATE.md` の `## Loop Control` にある `pause_all` を `true` にすると停止する。
- kill switch有効時は、Scheduled Taskも人間が無効化する。
- 再開は、人間が `pause_all: false` に戻してScheduled Taskを再度有効化した後のみ。

## コスト見積り

```bash
npx @cobusgreyling/loop-cost --pattern daily-triage --level L1 --cadence 1d
```

## Alerts This Period

<!-- self-throttle（80%到達で report-only 化など）した際に loop-budget スキルが追記する -->
