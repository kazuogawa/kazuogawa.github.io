---
name: loop-constraints
description: このリポジトリの拘束制約、安全方針、人間ゲート、kill switchを読み込んで適用する。ポートフォリオループの実行・設定・レビュー・改善を始める際に必ず最初に使用する。
---

# Loop Constraints

1. `LOOP.md`、`loop-constraints.md`、`docs/safety.md` を最後まで読む。
2. `STATE.md` の `## Loop Control` を確認する。
3. `pause_all: true` なら、チェックや編集を行わず即時終了する。Scheduled Taskも人間が無効化する必要があると報告する。
4. 制約ファイルと安全方針の全ルールを拘束条件として扱う。
5. `LOOP.md` の自律レベルを確認する。L1ではソース修正、サブエージェント、worktree、push、PR作成を行わない。
6. 続行前に次を出力する。

```text
Constraints loaded: LOOP.md, loop-constraints.md, docs/safety.md.
```

必須ファイルが存在しない、または読み取れない場合は停止し、対象パスを報告する。
