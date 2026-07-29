---
name: minimal-fix
description: 人間が承認したL2のHigh Priority項目を1件だけ、隔離worktreeで最小修正し、マージせずドラフトPRとして提案する。LOOP.mdが明示的にL2以上になった場合のみ使用する。
---

# Minimal Fix

1. `LOOP.md`、`loop-constraints.md`、`loop-budget.md`、`STATE.md`、`docs/safety.md` と関連ガイドラインを読む。
2. ループが明示的にL2以上で、人間が承認した対象が明確な場合に限り続行する。それ以外は停止する。
3. `$loop-constraints` と `$loop-budget` を実行する。
4. High Priorityから1項目だけを選ぶ。
5. 専用worktreeと `codex/loop-<identifier>` ブランチで作業する。
6. 関連する最小差分だけを作る。denylistや承認必須パスは、明示的な人間承認なしに変更しない。
7. worktree内で `npm run check` と `npm run build` を実行する。
8. 3回失敗、または無進捗になったら停止してescalateする。
9. 設定済みの `verifier` checkerへ独立検証を依頼する。maker自身で検証を完結させない。
10. APPROVE後のみ、変更概要・テスト結果・残存リスクを含むドラフトPRを提案する。ready化、merge、closeは自動で行わない。
11. 最後に `$loop-budget` を実行し、`STATE.md` を更新する。
