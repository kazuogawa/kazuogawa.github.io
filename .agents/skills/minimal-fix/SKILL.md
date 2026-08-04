---
name: minimal-fix
description: L2で人間が承認した項目、またはL3でauto-eligibleなHigh Priority項目を1件だけ隔離worktreeで最小修正し、マージせずドラフトPRとして提案する。LOOP.mdが明示的にL2以上になった場合のみ使用する。
---

# Minimal Fix

1. `LOOP.md`、`docs/autonomy-levels.md`、現在レベルの `docs/autonomy/` runbook、`loop-constraints.md`、`loop-budget.md`、`STATE.md`、`docs/safety.md` と関連ガイドラインを読む。
2. ループが明示的にL2以上で、現在レベルの対象決定ルールを満たす場合に限り続行する。L2では人間が承認した対象、L3ではauto-eligibleと機械判定できる対象だけを扱う。それ以外は停止する。
3. `$loop-constraints` と `$loop-budget` を実行する。
4. High Priorityから現在レベルの対象決定ルールを満たす1項目だけを選ぶ。
5. 専用worktreeと `codex/loop-<identifier>` ブランチで作業する。
6. 関連する最小差分だけを作る。禁止パスは変更せず、承認必須パスは明示的な人間承認なしに変更しない。
7. worktree内で `make check` と `make build` を実行する。
8. `loop-budget.md` の修正試行上限または無進捗条件に達したら停止してescalateする。
9. 設定済みの `verifier` checkerへ `$loop-verifier` を使用した独立検証を依頼する。maker自身で検証を完結させない。
10. APPROVE後のみ、変更概要・検証結果・残存リスクを含むドラフトPRを提案する。ready化、merge、closeは自動で行わない。
11. 最後に `$loop-budget` を実行し、`STATE.md` を更新する。
