# Loop 予算 — kazuogawa-portfolio

> 主ループ: **Portfolio Triage**（周期 1d / 現在 L1 report-only）

## 1日あたりの上限

| ループ           | 最大 run/日 | 最大 tokens/日 | 最大 サブエージェント spawn/run |
| ---------------- | ----------- | -------------- | ------------------------------- |
| Portfolio Triage | 2           | 100k           | 0（L1） / 2（L2）               |

## 予算超過時の対応

1. スケジューラを停止する（自動実行を無効化）。
2. `loop-run-log.md` にイベントを追記する。
3. 人間へ通知する（`STATE.md` の High Priority に記載）。

## kill switch

- `STATE.md` の `## Loop Control` にある `pause_all` を `true` にすると停止する。
- kill switch有効時は、Codex AppのAutomationも人間が無効化する。
- 再開は、人間が `pause_all: false` に戻してAutomationを再度有効化した後のみ。

## コスト見積り

```bash
npx @cobusgreyling/loop-cost --pattern daily-triage --level L1 --cadence 1d
```

## Alerts This Period

<!-- self-throttle（80%到達で report-only 化など）した際に loop-budget スキルが追記する -->
