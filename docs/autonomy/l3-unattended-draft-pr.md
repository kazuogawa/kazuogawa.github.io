# L3 — Unattended draft PR runbook

本ファイルはL3固有の実行手順を定義する。全レベル共通の原則と権限上限は `docs/autonomy-levels.md` に従う。

L3は自動mergeを意味しない。最大成果物は、検証済みドラフトPRと人間への通知である。

## 目的

事前承認されたallowlistの範囲で、低リスクかつ再現可能な1項目を自動選択し、検証済みドラフトPRとして人間へ提示する。

## 開始・継続条件

- L2で十分な成功実績があり、別途 `LOOP.md` に定義したL3昇格ゲートをすべて満たしている。
- 人間が `LOOP.md` の現在レベルをL3へ変更している。
- `STATE.md` の `pause_all` が `false` である。
- L3用の対象allowlist、auto-eligible判定、予算、同時実行数、通知、circuit breakerが定義されている。
- kill switchと降格手順を人間がテスト済みである。

上記のいずれかが未定義または未確認の場合、L3を開始しない。

## Auto-eligibleの最低条件

- High Priorityにあり、L3用ルールでauto-eligibleと機械判定できる。
- 影響範囲と対象ファイルが特定されている。
- 許可された低リスクパスだけで修正できる。
- 再現手順と成功条件を自動検証できる。
- workflow、依存関係、デプロイ、認証情報、SEO・計測の保持要件を変更しない。
- 仕様判断、コンテンツ判断、外部サービスへの書き込みを必要としない。

## 許可する操作

- auto-eligibleな1項目の自動選択
- L2と同じworktree、maker、checker、検証手順
- checkerのAPPROVE後のcommit、作業ブランチへのpush、ドラフトPR作成
- 結果と残存リスクの人間への通知
- `STATE.md` と `loop-run-log.md` の更新

## 実行フロー

1. `$loop-constraints` と `$loop-budget` を実行し、circuit breakerを確認する。
2. High Priorityからauto-eligibleな項目を最大1件選ぶ。0件なら早期終了する。
3. `$minimal-fix` が専用worktreeで最小修正と必要な検証を行う。
4. makerとは別のcheckerが `$loop-verifier` で差分と証拠を検証する。
5. REJECTまたはESCALATE_HUMANならcommit・push・PR作成を行わず、人間へ通知する。
6. APPROVE後だけcommitし、作業ブランチへpushしてドラフトPRを作成する。
7. `STATE.md` と `loop-run-log.md` に結果、残存リスク、次の人間操作を記録する。

## 禁止する操作

- allowlist外またはauto-eligibleと判定できない項目の修正
- checkerを省略したcommit、push、PR作成
- 複数項目を同じrunまたはPRで修正すること
- 自動ready化、merge、deploy、Issue・PRのclose
- 人間判断が必要な変更を推測して進めること

## 人間ゲート

- L3のallowlistと判定ルールを事前承認する。
- 承認必須パスはL3の自動対象に含めず、必要になった時点でescalateする。
- 作成されたドラフトPRのready化、merge、deploy、closeを人間が行う。

## Canaryと降格

L3開始直後は低頻度かつ同時実行数1のcanaryとして運用する。許可外変更、checker迂回、通知失敗、監査ログ欠落、予算超過、反復失敗が発生した場合は、直ちにL1へ降格するか `pause_all: true` で停止する。
