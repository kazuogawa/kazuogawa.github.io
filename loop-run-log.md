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

```json
{
  "run_id": "2026-07-29T18:39:26+09:00",
  "pattern": "daily-triage",
  "duration_s": 106,
  "items_found": 4,
  "actions_taken": 0,
  "escalations": 1,
  "tokens_estimate": 16000,
  "outcome": "report-only"
}
```

```json
{
  "run_id": "2026-08-04T09:03:53+09:00",
  "pattern": "daily-triage",
  "duration_s": 176,
  "items_found": 4,
  "actions_taken": 0,
  "escalations": 0,
  "tokens_estimate": 18000,
  "outcome": "report-only"
}
```

```json
{
  "run_id": "2026-08-05T09:08:29+09:00",
  "pattern": "daily-triage",
  "duration_s": 381,
  "items_found": 2,
  "actions_taken": 0,
  "escalations": 0,
  "tokens_estimate": 22000,
  "outcome": "report-only"
}
```

```json
{
  "run_id": "2026-08-06T09:07:53+09:00",
  "pattern": "daily-triage",
  "duration_s": 310,
  "items_found": 2,
  "actions_taken": 0,
  "escalations": 0,
  "tokens_estimate": 22000,
  "outcome": "report-only"
}
```

```json
{
  "run_id": "2026-08-06T11:35:51+09:00",
  "pattern": "daily-triage",
  "duration_s": 262,
  "items_found": 4,
  "actions_taken": 0,
  "escalations": 1,
  "tokens_estimate": 24000,
  "outcome": "escalated"
}
```
