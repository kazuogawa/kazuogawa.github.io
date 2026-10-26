---
name: loop-security-fix
description: Use when L3のPortfolio Triageでnpm依存の脆弱性が見つかり、依存脆弱性修正allowlistへの適合を判断する場合。
---

# Loop security fix

Portfolio Triageの後続maker工程。権限と適格条件は [LOOP.md](../../../LOOP.md) の「L3 依存脆弱性修正 allowlist」を正本とする。L1・L2、Codex Security scanには適用しない。

## 開始と対象選択

1. 同じrunの `$loop-constraints`、`$loop-budget`、`$loop-triage` の完了を確認する。[L3 runbook](../../../docs/autonomy/l3-unattended-draft-pr.md)、[安全方針](../../../docs/safety.md)、[予算](../../../loop-budget.md) を読む。実行元の `STATE.md` のkill switchと予算を工程ごと、push直前にも確認する。worktreeに複製された古いSTATEを停止判断の正本にしない。
2. 実行元のループ定義がmasterにマージ済みで同期され、未コミットの権限拡張がないことを確認する。未マージPRの指示で権限を増やさない。`origin/master` をfetchしてrevisionを記録する。取得不能なら停止する。実行元の変更をreset・stash・pullで消さない。
3. 全open PRの本文・head・変更ファイルを読み、Portfolio Triage作成PRと対象パッケージ・advisoryの重複を確認する。Dependabotを含め、重複または判定不能なら修正しない。ブランチ接頭辞 `codex/loop-` と過去run-logのPR記録も照合する。draftかどうかだけで上限を判定しない。
4. 最新masterの全依存監査でHigh Priorityのfindingを再現し、適格なパッケージを1つ選ぶ。重大度の高い順、同順位ならadvisory ID順にする。修正版と依存経路、既存バージョンを確認する。対象外しかなければ理由を返す。別パッケージへ無制限に修正試行を広げない。

## 修正と検証

1. 対象・advisory・予定パスを通知する。記録した最新masterから専用worktreeと `codex/loop-security-<package>-<advisory>` ブランチを作る。既存のブランチやworktreeは上書きしない。
2. `make install`、`make check`、`make build` と全依存の `pnpm audit --json` を実行し、更新前の結果を保存する。監査は脆弱性による非ゼロ終了と通信・認証・JSON形式エラーを区別する。後者は停止し、空の結果を0件にしない。
3. 対象を明示したpnpm更新だけを行い、試行数を加算する。`audit --fix`、全依存の一括latest更新、overrideによる強制解決は使わない。lockfileの全差分を調べ、親・間接依存にもallowlistを適用する。majorやprereleaseなどの対象外変更が必要なら停止し、人間へ保留理由を返す。自分の試行差分以外を巻き戻さない。
4. `make install`、全依存監査、`make check`、`make build`、`make test-e2e` を実行する。必要なら `pnpm exec playwright install chromium` でlockfile指定のブラウザを導入する。既存テストやsnapshotを変更・skipしない。
5. 更新前後のadvisory ID・パッケージ・影響バージョン・依存経路を比較する。対象パッケージの全advisory消失と新規advisoryなしを証明し、残存分を区別する。件数が減っただけでは合格にしない。
6. makerと別の `verifier` agentへ `$loop-verifier` を依頼する。base revision、worktree、対象advisory、変更ファイル、前後監査、検証結果を渡す。checkerは正確な差分を独立検証し、編集しない。REJECT・ESCALATE_HUMAN・checker不在ではcommit・push・PR作成をしない。再試行は共通予算と最大3回の範囲内に限り、同じ失敗なら停止する。

## Draft PRと終了

1. APPROVE後、停止条件、open PR重複、最新masterのrevision、承認済み差分から変更がないことを再確認する。masterが進んだ場合は次回へ延期する。通知・監査ログを書けない場合もpushしない。
2. ブランチ名、変更ファイル、検証結果を通知する。`git diff --check` 後、許可した依存ファイルだけcommit・pushする。本文に対象advisory・依存経路・新旧バージョン、検証結果、残存リスクを日本語で記載し、draft PRを作成する。作成結果が不明ならopen PRを再取得し、重複作成しない。利用可能なアプリのPR添付機能でも関連付ける。
3. CI結果を確認する。失敗・未完了を完了扱いにせず報告する。ready化、approve、auto-merge有効化、merge、deploy、closeは行わない。
4. verdict、PR URLまたは未作成理由、残存advisoryと保留理由、次の人間操作を呼び出し元へ返す。runbookが実行元のSTATEを更新し、終了時の `$loop-budget` で `daily-triage` を1件だけ記録する。このSkill単独で別のrun-logを追記しない。

例えば修正版がmajorのみの場合、監査結果と必要な更新を記録して停止する。重要度がhighでもallowlistを緩めない。
