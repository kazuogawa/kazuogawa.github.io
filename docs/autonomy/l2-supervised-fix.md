# L2 — Supervised fix runbook

本ファイルはL2固有の実行手順を定義する。全レベル共通の原則と権限上限は `docs/autonomy-levels.md` に従う。

## 目的

人間が承認した低リスクな1項目を、隔離環境と独立checkerを使って修正案にする。

## 開始・継続条件

- `LOOP.md` のL2昇格ゲートをすべて満たしている。
- 人間が `LOOP.md` の現在レベルをL2へ変更している。
- 対象のHigh Priority項目が1件だけ明示的に承認されている。
- `STATE.md` の `pause_all` が `false` である。
- L2用の予算、修正試行上限、checker、worktree手順が利用できる。

## 対象決定

run開始前に人間が承認したHigh Priority項目を1件だけ扱う。承認対象、期待結果、対象外、検証方法のいずれかが曖昧な場合は開始しない。

## 許可する操作

- 承認済み1項目のための隔離worktreeと `codex/loop-<identifier>` ブランチの作成
- 許可されたパスに限定した最小修正
- `$minimal-fix` によるmaker作業
- `$loop-verifier` を使用する独立checkerによる検証
- checkerのAPPROVE後、事前通知したうえでのcommit、push、ドラフトPR作成
- `STATE.md` と `loop-run-log.md` の更新

## 実行フロー

1. `$loop-constraints` と `$loop-budget` を実行する。
2. 人間が承認した1項目と受入条件を確認する。
3. `$minimal-fix` が専用worktreeで最小修正と必要な検証を行う。
4. makerとは別のcheckerが `$loop-verifier` で差分と証拠を検証する。
5. REJECTまたはESCALATE_HUMANなら修正案を採用せず、停止条件に従う。
6. APPROVE後だけcommitし、事前通知後に作業ブランチへpushしてドラフトPRを作成する。
7. `STATE.md` と `loop-run-log.md` に結果、残存リスク、次の人間操作を記録する。

## 人間ゲート

- 修正対象をrun開始前に承認する。
- 承認必須パスを変更する場合は、対象パスと変更内容を個別に承認する。
- PRのready化、merge、deploy、closeを人間が行う。

## 停止・escalation

次の場合は停止し、High Priorityへ記録する。

- checkerがREJECTまたはESCALATE_HUMANを返した。
- 予算、修正試行上限、無進捗条件に達した。
- 許可外パスまたは未承認の承認必須パスが必要になった。
- 仕様、コンテンツ、影響範囲を確定できない。
- 複数項目の修正が必要になった。

L3への昇格可否は本runbookで判断せず、別途 `LOOP.md` に定義するL3昇格ゲートを人間がレビューする。
