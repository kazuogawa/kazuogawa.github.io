---
name: minimal-fix
description: >
  maker/checker の maker 役。triage で選ばれた1項目に対し、隔離した worktree で
  最小限の修正を行い、ドラフト PR として提案する。自動マージはしない。
user_invocable: true
allowed-tools: [read, grep, glob, edit, bash(git worktree:*), bash(git checkout:*), bash(git add:*), bash(git commit:*), bash(npm run check), bash(npm run build)]
---

# Minimal Fix（maker/checker の maker）

あなたは最小修正の実行者。`loop-triage` が High Priority に挙げた **1項目だけ** を、
**最小の差分** で直し、ドラフト PR として提案する。**自動マージはしない。**

実行前に `loop-constraints`・`loop-budget`・`docs/safety.md` を読み、`loop-pause-all` や
予算超過なら即終了する。L1（report-only）では実行しない。

## 手順

1. **対象の確定**: `STATE.md` の High Priority から1項目を選ぶ。曖昧なら着手せず escalate。
2. **隔離**: 新しい worktree を作る。
   ```bash
   git worktree add ../portfolio-loop-<識別子> -b codex/loop-<識別子>
   ```
3. **最小修正**: 対象範囲だけを変更する。
   - コンテンツ修正は原則 `src/data/profile.ts`。
   - inline style 禁止（Tailwind）。CSS 内 `@apply` 禁止。条件レンダリングは三項演算子。
   - SEO メタ / Google Analytics を壊さない。
   - 無関係なリファクタ・依存更新・整形の巻き込みをしない。
4. **検証**: worktree 内で実行する。
   ```bash
   npm run check && npm run build
   ```
   失敗したら修正するが、同一項目の試行は **最大 3 回**。超えたら escalate。
5. **提案**: commit してドラフト PR を作る（`master` 直 push 禁止）。
   - PR 本文に「変更概要 / 実行したテストと結果 / 残存リスク / `Closes #<番号>`」を記載
     （`.github/CODEX_ISSUE_WORKFLOW.md` 準拠）。
6. **引き継ぎ**: `loop-verifier` に検証を依頼し、結果と PR 番号を `STATE.md` に記録する。

## ルール

- 1 run につき 1 修正。複数項目をまとめない。
- 検証を通さずに提案しない。テストを無効化して緑にしない。
- ドラフト PR まで。ready 化・マージは人間が行う。
- 3 回で直らない、または無進捗なら escalate（`STATE.md` High Priority + 人間通知）。
- 作業後、`loop-budget` スキルで `loop-run-log.md` に run を記録する。
