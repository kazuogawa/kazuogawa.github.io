# Codex Security Scheduled Loop Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Codex Securityの標準スキャンを毎月第1月曜日09:00（Asia/Tokyo）に安全に実行できる、report-onlyのScheduled Task設定をリポジトリへ追加する。

**Architecture:** 既存のループ制約とkill switchを入口にし、`security-scan`を独立した予算patternとして扱った後、Codex Securityプラグインの標準スキャンを呼び出す。スキャン成果物はSecurity Workbench側へ保存し、リポジトリ内では運用文書と予算Skillだけを変更する。

**Tech Stack:** Markdown運用文書、Codex repository skills、ChatGPT Scheduled Tasks、`@openai/codex-security` 0.1.25

**Spec:** `docs/superpowers/specs/2026-09-07-codex-security-scheduled-loop-design.md`

## Global Constraints

- 作業は`codex/loop-security-scan`ブランチの隔離worktree内だけで行う。
- 頻度は毎月第1月曜日09:00、タイムゾーンはAsia/Tokyoとする。
- Codex Securityはstandard mode、リポジトリ全体を対象とする。
- ソース、依存関係、workflow、設定、Issue、PRをスキャンrunから変更しない。
- スキャン成果物をGit worktree内へ保存しない。
- `pause_all: true`、予算停止、認証失敗、対象revision不明ではスキャンしない。
- 所見の自動修正、ready化、merge、deployを行わない。
- 既存の`STATE.md`と`loop-run-log.md`のrun内容をこの実装で変更しない。

---

### Task 1: Security Scan予算契約

**Files:**

- Modify: `loop-budget.md:1-29`
- Modify: `.agents/skills/loop-budget/SKILL.md:1-23`

**Interfaces:**

- Consumes: `loop-run-log.md`の`pattern`と`tokens_estimate`
- Produces: `security-scan` pattern、100k tokens/24h、最大2 subagents/run、80%開始停止、100%停止

- [ ] **Step 1: 現在の文書が新patternを未定義であることを確認する**

Run: `test "$(rg -l 'security-scan' loop-budget.md .agents/skills/loop-budget/SKILL.md | wc -l | tr -d ' ')" = 0`

Expected: PASS。新patternはまだ存在しない。

- [ ] **Step 2: 予算表と閾値へ新patternを追加する**

`loop-budget.md`の対象ループと表へCodex Securityを追加し、次を明記する。

```text
pattern: security-scan
max tokens/24h: 100k
max subagents/run: 2
concurrency: 1
80%以上: 新しいscanを開始しない
100%以上: 停止記録のみ
```

- [ ] **Step 3: loop-budget Skillへ集計・停止手順を追加する**

`.agents/skills/loop-budget/SKILL.md`でpattern候補を`daily-triage`、`approved-feature`、`security-scan`とし、security-scanの80%到達時は新規スキャンを開始しないと明記する。

- [ ] **Step 4: 予算契約を検証する**

Run: `rg -n 'security-scan|100k|新しいスキャン' loop-budget.md .agents/skills/loop-budget/SKILL.md`

Expected: 両ファイルに同じpattern名と80%開始停止が表示される。

### Task 2: Scheduled Taskと安全境界

**Files:**

- Modify: `LOOP.md:1-65,126-153`
- Modify: `docs/safety.md:30-38,44-50`

**Interfaces:**

- Consumes: `$loop-constraints`、`$loop-budget`、`$codex-security:security-scan`
- Produces: Scheduled Task設定値、durable prompt、Codex Securityのread-only権限境界

- [ ] **Step 1: 現在のLOOP.mdがCodex Securityを未定義であることを確認する**

Run: `test "$(rg -l 'Codex Security' LOOP.md docs/safety.md | wc -l | tr -d ' ')" = 0`

Expected: PASS。専用設定はまだ存在しない。

- [ ] **Step 2: LOOP.mdへ第3のloopとScheduled Taskを追加する**

設定値は次の内容に固定する。

```text
Name: Codex Security Monthly Scan
Project: このリポジトリ
Environment: Local
Mode: standard
Scope: repository
```

promptは`$loop-constraints`、`$loop-budget`、`$codex-security:security-scan`の順序、read-only、停止条件、結果項目、ログ更新を明記する。実行頻度はSchedulerだけを正本とし、RRULE`FREQ=MONTHLY;BYDAY=1MO;BYHOUR=9;BYMINUTE=0`とAsia/Tokyoはリポジトリ内の運用設定へ重複記録しない。

- [ ] **Step 3: docs/safety.mdへ最小権限を追加する**

Codex Securityはリポジトリ読み取り、必要最小限のネットワーク、Security Workbenchのリポジトリ外成果物保存だけを許可し、ソース変更と外部書き込みを禁止する。

- [ ] **Step 4: 文書間の整合性を検証する**

Run: `rg -n 'security-scan|Codex Security|standard|Security Workbench' LOOP.md loop-budget.md .agents/skills/loop-budget/SKILL.md docs/safety.md`

Expected: pattern、schedule、mode、保存先、安全境界が設計書と一致する。

### Task 3: ローカルpreflightとプロジェクト検証

**Files:**

- Verify: `package.json`
- Verify: `pnpm-lock.yaml`
- Verify: repository documentation changes

**Interfaces:**

- Consumes: `@openai/codex-security` CLIの`--dry-run`
- Produces: ネットワークや実スキャンを使わないpreflight証拠

- [ ] **Step 1: Codex Securityのversionを確認する**

Run: `node node_modules/@openai/codex-security/bin/codex-security.mjs --version`

Expected: `0.1.25`

- [ ] **Step 2: standard repository scanのdry-runを実行する**

Run: `node node_modules/@openai/codex-security/bin/codex-security.mjs scan . --dry-run`

Expected: exit 0。repository target、standard mode、有効設定が表示され、実スキャンは開始されない。

- [ ] **Step 3: 静的検証を実行する**

Run: `make check`

Expected: typecheck、lint、format-checkがすべて成功する。

- [ ] **Step 4: buildを実行する**

Run: `make build`

Expected: Astro buildが成功し、2ページが生成される。

- [ ] **Step 5: 差分のscopeを検証する**

Run: `git diff --check && git status --short && git diff --stat`

Expected: whitespace errorなし。設計、計画、`LOOP.md`、`loop-budget.md`、`.agents/skills/loop-budget/SKILL.md`、`docs/safety.md`以外の変更なし。

### Task 4: 独立検証とDraft PR

**Files:**

- Verify: 全変更ファイル

**Interfaces:**

- Consumes: Task 1-3の未コミット差分と検証結果
- Produces: checker verdict、専用ブランチのcommit、draft PR

- [ ] **Step 1: loop-verifierで独立検証する**

別checkerが`$loop-verifier`を使い、制約、設計、予算、prompt、安全境界、dry-run、`make check`、`make build`を読み取り専用で確認する。

Expected: `APPROVE`。`REJECT`または`ESCALATE_HUMAN`ならcommit、push、PR作成を行わない。

- [ ] **Step 2: APPROVE後に変更だけをcommitする**

```bash
git add LOOP.md loop-budget.md .agents/skills/loop-budget/SKILL.md docs/safety.md docs/superpowers/specs/2026-09-07-codex-security-scheduled-loop-design.md docs/superpowers/plans/2026-09-07-codex-security-scheduled-loop.md
git commit -m "chore: schedule monthly Codex Security scan"
```

- [ ] **Step 3: 専用ブランチをpushする**

Run: `git push -u origin codex/loop-security-scan`

Expected: `origin/codex/loop-security-scan`が作成される。

- [ ] **Step 4: draft PRを作成する**

PR本文へ変更概要、実行した検証と結果、残存リスク、Scheduled Taskの人間操作を記載する。

Run: `gh pr create --draft --base master --head codex/loop-security-scan --title "chore: schedule monthly Codex Security scan" --body-file /tmp/codex-security-scan-pr-body.md`

Expected: draft PR URLが返る。ready化、merge、deployは行わない。
