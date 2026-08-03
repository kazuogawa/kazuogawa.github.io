# L1 — Report-only runbook

本ファイルはL1固有の実行手順を定義する。全レベル共通の原則と権限上限は `docs/autonomy-levels.md` に従う。

## 目的

修正を行わず、品質上の信号、未確認事項、人間判断が必要な項目を継続的に収集する。

## 開始・継続条件

- `LOOP.md` の現在レベルがL1である。
- `STATE.md` の `pause_all` が `false` である。
- `loop-budget.md` の停止条件に達していない。

## 許可する操作

- リポジトリと直近履歴の読み取り
- `npm run check`、`npm run build` などの非破壊的な検証
- 利用可能かつ許可された環境での表示・リンク・依存関係の読み取り検査
- `STATE.md` と `loop-run-log.md` の更新

## 禁止する操作

- ソース、依存関係、CI、設定ファイルの変更
- worktree、修正ブランチ、commit、push、Issue・PR操作
- サブエージェント、MCP、外部コネクタの使用
- findingに対する自動修正

## 実行フロー

1. `$loop-constraints` で共通制約とL1 runbookを読み込む。
2. `$loop-budget` で予算とkill switchを確認する。
3. `$loop-triage` で証拠を収集し、ソースを変更せずfindingを分類する。
4. `STATE.md` の許可されたフィールドとセクションだけを更新する。
5. `$loop-budget` でrunを `loop-run-log.md` へ記録する。

## 成果物

- `STATE.md` のHigh Priority、Watch List、Recent Noise、Post-Run Critique、Last run
- `loop-run-log.md` のrunエントリ

## 停止・escalation

必須ファイル不足、kill switch、予算超過、想定外の権限要求がある場合は停止する。修正が必要なfindingはHigh Priorityへ記録するが、L1のrun内では対応しない。

L2への昇格可否は本runbookで判断せず、`LOOP.md` のL2昇格ゲートを人間がレビューする。
