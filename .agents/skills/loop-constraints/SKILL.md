---
name: loop-constraints
description: このリポジトリの拘束制約、安全方針、人間ゲート、kill switchを読み込んで適用する。ポートフォリオループの実行・設定・レビュー・改善を始める際に必ず最初に使用する。
---

# Loop Constraints

1. `LOOP.md` と `docs/autonomy-levels.md` を最後まで読み、現在の自律レベルを確認する。
2. 現在レベルに対応するrunbookを最後まで読む。
   - L1: `docs/autonomy/l1-report-only.md`
   - L2: `docs/autonomy/l2-supervised-fix.md`
   - L3: `docs/autonomy/l3-unattended-draft-pr.md`
3. `loop-constraints.md` と `docs/safety.md` を最後まで読む。
4. `STATE.md` の `## Loop Control` を確認する。
5. `pause_all: true` なら、チェックや編集を行わず即時終了する。Scheduled Taskも人間が無効化する必要があると報告する。
6. 制約ファイル、安全方針、現在レベルのrunbookを拘束条件として扱う。
7. L1ではソース修正、サブエージェント、worktree、push、PR作成を行わない。
8. 続行前に次を出力する。

```text
Constraints loaded: LOOP.md, docs/autonomy-levels.md, <current-level-runbook>, loop-constraints.md, docs/safety.md.
```

必須ファイルが存在しない、または読み取れない場合は停止し、対象パスを報告する。
