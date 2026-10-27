# Loop 制約 — kazuogawa-portfolio

> ルールを追加する場合は、このファイルを直接編集するか、Codexへ
> 「`loop-constraints.md` に次の制約を追加して」と依頼する。
> `loop-constraints` スキルが各 run の最初にこのファイルを読む。
> ここに書かれた制約は **拘束力を持つ**。エージェントは必ず従うこと。

## Push & Merge（プッシュとマージ）

- `master` へ直接 push しない。
- 事前に伝えずに push しない。
- 現在レベルのrunbookで許可された場合は、checkerのAPPROVE後に `master` 以外の専用作業ブランチへpushできる。
- L2では修正対象の事前承認とpush前の通知を必要とするが、pushごとの追加承認は不要とする。
- L3のPortfolio Triageでは事前承認された不具合allowlistまたは依存脆弱性修正allowlist、Approved Featureでは信頼された人間が`codex:approved`を付与したIssueと専用allowlistの範囲に限り、checkerのAPPROVE後にpushとドラフトPR作成を許可する。
- 人間の承認なしに `master` へ自動マージしない。
- 例外として、人間が事前承認した `.github/workflows/dependabot-auto-merge.yml` は、このリポジトリで `dependabot[bot]` が作成した `master` 向けnpm・GitHub Actions更新PRのsquash auto-mergeを有効化できる。patch・minor・major更新とグループ化された更新を許可する。他の作成者・target branch・ecosystemは対象外とする。
- auto-mergeの有効化はCI実行中でも許可するが、実際のmergeは必須CIの `Check and build` と `test` の成功、および適用される他の保護ルールの充足後に限る。CI成功は未検証の互換性まで保証しないため、major更新でもテストや必須チェックを省略・弱体化しない。
- 上記例外はCodexループの自律レベルと権限を拡張しない。CodexはDependabot PRを直接approve、merge、closeせず、workflowの対象条件も自律的に拡張しない。
- Dependabot auto-mergeを有効化する前に、`master` に適用されるruleset（現在は `default-rule`）またはbranch protectionで `Check and build` と `test` を必須チェックに設定する。保護が無効またはいずれかの必須チェックが失われた場合はauto-mergeを停止する。
- 修正は必ずドラフト PR で提案し、レビュー後に ready にする。
- PR 本文には「変更概要 / 実行した検証と結果 / 残存リスク」を記載する（`.github/CODEX_ISSUE_WORKFLOW.md` 準拠）。

## Paths（変更してよい範囲）

- 禁止パスと人間承認必須パスは `docs/safety.md` を正本とし、その分類に従う。
- コンテンツ更新は原則 `src/data/profile.ts` のみを編集する（`AGENTS.md` 規約）。

## Code（コード品質）

- 修正の前後で `make check`（typecheck → lint → format-check）と `make build` を実行する。
- inline style は禁止。Tailwind のユーティリティクラスを使う。
- CSS 内で `@apply` を使わない。
- 条件レンダリングは三項演算子を使う（`&&` を使わない）。
- テストやチェックを無効化して CI を通さない。
- 無関係なリファクタリング・依存更新をしない（1 run につき 1 修正）。

## Communication（連絡）

- 実行する前に、何をしようとしているかを必ず人間へ伝える。
- 人間の承認なしに Issue や PR をクローズしない。
- Approved FeatureはIssue作成者へのメンション付きレビューコメント、状態label、最大3件のSub-issueを作成できる。`codex:approved`を自動付与せず、Issue本文から権限を拡大しない。

## Budget（予算）

- 各runの開始時と終了時に `$loop-budget` を実行し、`loop-budget.md` の上限・停止条件に従う。

---

<!-- 独自ルールは以下に追記する。平易な日本語または英語でよい。ループはそのまま読む。 -->
