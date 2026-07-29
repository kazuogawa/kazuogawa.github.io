# Loop 実行ログ — kazuogawa-portfolio

runごとに1エントリを追記する。`$loop-budget` はrun終了時に30日より古いエントリを削除する。
JSON のキー名は機械可読のため英語のまま維持すること。

## フォーマット

```json
{
  "run_id": "2026-07-29T08:15:00Z",
  "pattern": "daily-triage",
  "duration_s": 45,
  "items_found": 4,
  "actions_taken": 0,
  "escalations": 0,
  "tokens_estimate": 52000,
  "outcome": "no-op | report-only | fix-proposed | escalated"
}
```

## Recent Runs

<!-- ループはこの行の下に追記する -->

```json
{
  "run_id": "2026-07-29T16:32:00+09:00",
  "pattern": "daily-triage",
  "duration_s": 20,
  "items_found": 3,
  "actions_taken": 0,
  "escalations": 0,
  "tokens_estimate": 12000,
  "outcome": "report-only"
}
```

```json
{
  "run_id": "2026-07-29T18:19:00+09:00",
  "pattern": "daily-triage",
  "duration_s": 110,
  "items_found": 4,
  "actions_taken": 0,
  "escalations": 1,
  "tokens_estimate": 16000,
  "outcome": "report-only"
}
```
