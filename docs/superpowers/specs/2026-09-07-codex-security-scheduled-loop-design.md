# Codex Security 定期スキャンループ設計

## 目的

このリポジトリを Codex Security の標準スキャンで定期レビューし、検証可能なセキュリティ所見を人間へ提示する。スキャンrunはソースを修正せず、修正、Issue作成、push、PR作成、merge、deployは別の明示的な人間判断に委ねる。

## 採用方式

ChatGPTデスクトップアプリの独立したScheduled Taskから、Codex Securityプラグインの`$codex-security:security-scan`を呼び出す。

この方式を採用する理由は、Security Workbenchにスキャン履歴、findings、coverage、成果物を保存でき、既存のCodexループと同じScheduled Task運用へ統合できるためである。

比較した代替案:

1. `@openai/codex-security` CLIをScheduled Taskから実行する。コマンドは明示的だが、認証、成果物の外部保存先、sandbox許可を別途管理する必要がある。
2. GitHub Actionsから実行する。マシン常時起動は不要だが、workflowとsecretの追加が必要で、現在の人間承認必須パスを変更する。

CLIとGitHub Actionsは今回の対象外とする。既に存在する`package.json`と`pnpm-lock.yaml`の未コミット変更は本タスクでは変更しない。

## スケジュール

- 頻度: 毎月第1月曜日
- 時刻: 09:00
- タイムゾーン: Asia/Tokyo
- 形式: 各runが独立するStandalone Scheduled Task
- Project: このリポジトリ
- Environment: Local

静的なAstroポートフォリオで変更頻度と外部露出が比較的小さいため、毎日の全体スキャンは行わない。セキュリティ境界や外部連携が増えた場合は、人間が週次への変更を検討する。

## 実行フロー

1. `LOOP.md`から現在の自律レベルを確認する。
2. `$loop-constraints`を実行し、必須文書と`STATE.md`の`pause_all`を確認する。
3. `$loop-budget`を`security-scan` patternとして実行し、24時間予算と停止条件を確認する。
4. 停止条件に該当しない場合だけ、リポジトリ全体を対象に`$codex-security:security-scan`のstandard modeを実行する。
5. スキャンのtarget、revision、plugin version、model、reasoning effort、findings件数、deferred/follow-up、成果物参照先を結果として報告する。
6. `STATE.md`と`loop-run-log.md`を許可された範囲だけ更新する。
7. run終了時に再度`$loop-budget`の停止条件を確認する。

## 権限と安全境界

- 対象リポジトリは読み取り専用として扱う。
- Codex Securityの成果物はSecurity Workbenchが管理するリポジトリ外の保存先へ出力する。
- `.env`、credential、secretを表示、収集、成果物へ転記しない。
- ソース、依存関係、workflow、設定を自動変更しない。
- Issue・PRなど外部システムへの書き込みを行わない。
- `pause_all: true`、予算100%到達、認証失敗、成果物保存失敗、対象revision不明の場合はスキャンを開始または継続しない。
- セキュリティ所見は自動修正せず、人間が根拠と影響を確認した後に別タスクとして扱う。

## 予算

`security-scan`を独立patternとして`loop-budget.md`へ追加する。初期上限は100k tokens/24h、サブエージェント最大2/run、同時実行数1とする。開始時に80%以上なら新しいスキャンを開始せず停止結果だけを報告し、100%以上なら既存ループと同じ停止記録を行う。実行中に80%へ到達した場合は進行中の標準スキャンを安全に完了または中断できる境界で停止し、追加調査へ進まない。初回手動runの実測値を確認し、人間が必要に応じて上限を調整する。

## 変更対象

- `LOOP.md`: 有効なループ、Scheduled Task設定、circuit breakerを追加する。
- `loop-budget.md`: `security-scan` patternの予算と停止動作を追加する。
- `.agents/skills/loop-budget/SKILL.md`: 新patternの集計方法を追加する。
- `docs/safety.md`: Codex Securityの読み取り範囲、成果物保存先、禁止操作を追加する。

`loop-run-log.md`の既存スキーマはpatternを文字列として保持できるため、スキーマや既存runエントリは変更しない。

## 検証

1. 文書間でpattern名、停止条件、許可範囲、Scheduled Task promptが一致することを検索で確認する。
2. `node node_modules/@openai/codex-security/bin/codex-security.mjs scan . --dry-run`でインストール済みCLIのローカル前提を検証する。ネットワークアクセスや実スキャンは行わない。
3. `make check`と`make build`を実行し、既存プロジェクトへの影響がないことを確認する。
4. Scheduled Task作成後、最初のrunは手動実行し、Security Workbenchへの保存、通知、kill switch、ログ記録を人間が確認してから定期実行を有効にする。

## 成功条件

- 毎月第1月曜日09:00に、同時実行数1で標準スキャンが開始される。
- kill switchと予算停止がスキャン開始より先に評価される。
- スキャンがリポジトリのソースを変更しない。
- 結果からtarget、revision、coverage、findings、deferred項目、成果物を確認できる。
- 所見から修正や外部書き込みへ自動的に進まない。
