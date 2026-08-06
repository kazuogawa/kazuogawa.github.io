# L3 — Unattended draft PR runbook

本ファイルはL3固有の実行手順を定義する。全レベル共通の原則と権限上限は `docs/autonomy-levels.md` に従う。

L3は自動mergeを意味しない。最大成果物は、検証済みドラフトPRと人間への通知である。

## 目的

事前承認されたallowlistの範囲で、低リスクかつ再現可能な不具合、または人間が承認したFeature Issueを1件選択し、検証済みドラフトPRとして人間へ提示する。

## 開始・継続条件

- `LOOP.md` に定義したL3昇格ゲートをすべて満たしている。
- 人間が `LOOP.md` の現在レベルをL3へ変更している。
- `STATE.md` の `pause_all` が `false` である。
- L3用の対象allowlist、auto-eligible判定、予算、同時実行数、通知、circuit breakerが定義されている。
- kill switchと降格手順を人間がテスト済みである。

上記のいずれかが未定義または未確認の場合、L3を開始しない。

## Portfolio TriageのAuto-eligible最低条件

- High Priorityにあり、L3用ルールでauto-eligibleと機械判定できる。
- 影響範囲と対象ファイルが特定されている。
- 許可された低リスクパスだけで修正できる。
- 再現手順と成功条件を自動検証できる。
- workflow、依存関係、デプロイ、認証情報、SEO・計測の保持要件を変更しない。
- 仕様判断、コンテンツ判断、外部サービスへの書き込みを必要としない。

## 許可する操作

- auto-eligibleな1項目の自動選択
- Feature Issueのレビューコメント、状態label、最大3件のSub-issue作成と、承認済み1件の選択
- L2と同じworktree、maker、checker、検証手順
- checkerのAPPROVE後のcommit、作業ブランチへのpush、ドラフトPR作成
- 結果と残存リスクの人間への通知
- `STATE.md` と `loop-run-log.md` の更新

## 実行フロー

### Portfolio Triage

1. `$loop-constraints` と `$loop-budget` を実行し、circuit breakerを確認する。
2. `$loop-triage` で品質信号、ドキュメントドリフト、リファクタリング候補をreport-onlyで収集し、`STATE.md` を更新する。
3. High Priorityからauto-eligibleな項目を最大1件選ぶ。0件なら早期終了する。ドキュメントドリフトとリファクタリング提案は選ばない。
4. `$minimal-fix` が専用worktreeで最小修正と必要な検証を行う。
5. makerとは別のcheckerが `$loop-verifier` で差分と証拠を検証する。
6. REJECTまたはESCALATE_HUMANならcommit・push・PR作成を行わず、人間へ通知する。
7. APPROVE後だけcommitし、push予定を通知してから作業ブランチへpushし、ドラフトPRを作成する。通知後の追加承認は待たない。
8. `STATE.md` と `loop-run-log.md` に結果、残存リスク、次の人間操作を記録する。

### Approved Feature

1. Portfolio Triageとは別のScheduled Taskで`$loop-constraints`と`$loop-budget`を実行する。
2. `$approved-feature-loop`で候補Issueを1件だけレビューし、作成者へのメンション付きコメントと状態labelを記録する。レビューrunでは実装しない。
3. レビュー済みで、信頼された人間が`codex:approved`を付与したIssueがある次回runだけ、Issue本文hash、承認actor、既存PR、branch、worktreeを検証する。
4. `LOOP.md`のApproved Feature allowlistを満たす1件を専用worktreeで実装する。
5. makerとは別のcheckerが`$loop-verifier`でIssueの受入条件、差分、検証結果を確認する。
6. APPROVE後だけcommitし、通知後に作業ブランチへpushしてdraft PRを作成する。
7. IssueへPR URLをコメントし、状態label、`STATE.md`、`loop-run-log.md`を更新する。ready化、merge、deploy、Issue closeは行わない。

大きなIssueは実装前レビューで最大3件のSub-issueへ分割できる。各Sub-issueは独立してレビューし、人間が個別承認する。親Issueの承認を継承しない。

## 禁止する操作

- Portfolio Triageではallowlist外またはauto-eligibleと判定できない項目、Approved Featureでは専用allowlist外または有効な人間承認がないIssueの修正
- checkerを省略したcommit、push、PR作成
- 複数項目を同じrunまたはPRで修正すること
- 自動ready化、merge、deploy、Issue・PRのclose
- 人間判断が必要な変更を推測して進めること

## 人間ゲート

- L3のallowlistと判定ルールを事前承認する。
- allowlistの事前承認には、checkerのAPPROVE後に `master` 以外の専用作業ブランチへpushし、ドラフトPRを作成する権限を含む。runごとの追加承認は不要とする。
- 承認必須パスはL3の自動対象に含めず、必要になった時点でescalateする。
- 作成されたドラフトPRのready化、merge、deploy、closeを人間が行う。

## Canaryと降格

L3開始直後は低頻度かつ同時実行数1のcanaryとして運用する。許可外変更、checker迂回、通知失敗、監査ログ欠落、予算超過、反復失敗が発生した場合は、直ちにL1へ降格するか `pause_all: true` で停止する。
