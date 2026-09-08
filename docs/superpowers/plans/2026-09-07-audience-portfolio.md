# Audience-specific Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** 共通トップから4つの目的別ページへ進め、相談者と技術選考者が必要な情報と問い合わせ先を迷わず確認できるポートフォリオを構築する。

**Architecture:** 公開文面とページ設定を `src/data/profile.ts` に集約し、3つの支援詳細は共通のAstroコンポーネントで描画する。既存トップの技術・職歴コンポーネントは `/portfolio/` で再利用し、トップは4入口に特化する。

**Tech Stack:** Astro 7、React 19、TypeScript、Tailwind CSS、Playwright

**Spec:** `docs/superpowers/specs/2026-09-07-audience-portfolio-design.md`

## Global Constraints

- 公開文面は `src/data/profile.ts` に集約する。
- `.astro` は静的HTML、ReactのHeaderだけを `client:visible` で読み込む。
- inline styleを使わずTailwind CSSを使う。
- `dark:`でダークモードへ対応する。
- CARU、体感アンケート、非公開情報、稼働目安は設計書の表現制約に従う。
- 問い合わせ先は `https://form.run/@kazuogawa-consultation` とする。
- 既存のユーザー変更 `STATE.md`、`loop-budget.md`、`loop-run-log.md`、`pnpm-lock.yaml` を変更・取り消ししない。

---

### Task 1: 目的別ルートの受け入れテスト

**Files:**
- Modify: `tests/e2e/portfolio.spec.ts`

**Interfaces:**
- Consumes: `profile.contact.primaryAction.url`
- Produces: 5ルート、トップの4入口、共通ナビゲーション、固有見出しを検証するE2E契約

- [x] **Step 1: 新ルートと入口の失敗するE2Eテストを書く**

`/`、トップ直下の3支援詳細、`/portfolio/`の固有見出しを配列化する。トップで4つの予定リンクが見えること、ヘッダーにトップ・経歴と技術実績・問い合わせがあることを実ブラウザで検証する。

- [x] **Step 2: テストを実行し、未実装ルートで失敗することを確認する**

Run: `pnpm test:e2e --project=desktop-1280x720-light`
Expected: `/ai-development/`等が404、または予定見出し・リンクが存在せずFAIL

- [x] **Step 3: REDの結果を記録し、実装前にテストを変更しない**

失敗が新ルート・新導線の欠如に起因することを確認する。環境起因のエラーなら修正して再実行する。

### Task 2: 型付きコンテンツと共通表示コンポーネント

**Files:**
- Modify: `src/types/profile.ts`
- Modify: `src/data/profile.ts`
- Create: `src/components/AudienceCards.astro`
- Create: `src/components/ServiceDetail.astro`

**Interfaces:**
- Consumes: `Profile`の既存name、skills、experience、projects、contact、seo
- Produces: `profile.landing`、`profile.servicePages`、`profile.portfolio`、`AudienceCards`、`ServiceDetail`

- [x] **Step 1: 必要最小限のデータ型を追加する**

入口カード、共通セクション、支援詳細、設計判断、ページSEOの型を追加し、`Profile`から参照する。3支援ページが同じ型を使える形にする。

- [x] **Step 2: `portfolio-copy.md`の確定情報をデータへ移す**

トップ、3支援ページ、選考ページ固有の文面を `profile.ts` に追加する。設計書の表現制約に反する「約6倍」、不明なFindy Team指標、非公開の特徴量詳細を入れない。

- [x] **Step 3: 4入口のカードを静的HTMLで描画する**

`AudienceCards.astro`は `profile.landing.audiences` をリンクカードとして出力し、キーボードフォーカスを可視化する。

- [x] **Step 4: 3支援ページの共通本文を静的HTMLで描画する**

`ServiceDetail.astro`は支援概要、相談例、手順、実績、稼働目安、問い合わせ、`/portfolio/`への補助リンクを描画する。問い合わせだけ新しいタブで開く。

- [x] **Step 5: 型検査を実行する**

Run: `pnpm run typecheck`
Expected: exit 0

### Task 3: 5ルートと共通ナビゲーション

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/pages/index.astro`
- Delete: `src/pages/services.astro`
- Create: `src/pages/ai-development.astro`
- Create: `src/pages/product-development.astro`
- Create: `src/pages/business-improvement.astro`
- Create: `src/pages/portfolio.astro`

**Interfaces:**
- Consumes: `profile.landing`、`profile.servicePages`、`profile.portfolio`、`AudienceCards`、`ServiceDetail`、既存Skills/Experience/Projects/Contact/Footer
- Produces: 設計書で定義した6つのURLと全ページ共通ナビゲーション

- [x] **Step 1: Headerを共通URLナビゲーションへ変更する**

リンクは「トップ `/`」「AI開発支援 `/ai-development/`」「プロダクト開発 `/product-development/`」「業務改善 `/business-improvement/`」「経歴・技術実績 `/portfolio/`」「お問い合わせ 外部フォーム」とする。モバイル開閉の既存挙動を保つ。

- [x] **Step 2: トップを4入口中心に変更する**

氏名・短い説明、`AudienceCards`、短い経歴、共通問い合わせを表示する。既存の長いSkills、Experience、Projectsは外す。

- [x] **Step 3: 3つの支援詳細ルートを追加する**

各ルートは `profile.servicePages` の対応データを `ServiceDetail`へ渡し、固有titleとSEOを設定する。

- [x] **Step 4: 重複する`/services/`と未使用データを削除する**

`/services/`ページ、headerの支援内容リンク、未使用になった`profile.services`と型定義を削除する。3つの支援詳細はトップ直下のURLへ配置する。

- [x] **Step 5: 既存ポートフォリオを `/portfolio/`へ移す**

「経歴・技術実績」をページH1とし、Skills、Experience、Projectsを再利用する。稼働目安と問い合わせ導線を追加し、トップと重複するプロフィールHeroは表示しない。

- [x] **Step 6: E2Eを再実行してGREENを確認する**

Run: `pnpm test:e2e --project=desktop-1280x720-light`
Expected: all tests pass

### Task 4: 全体検証とpreview

**Files:**
- Modify when needed: `src/data/profile.ts`、対象コンポーネント、対象ページ、`tests/e2e/portfolio.spec.ts`

**Interfaces:**
- Consumes: Task 1〜3の実装
- Produces: レビュー基準を満たすproduction buildと確認可能なpreview URL

- [x] **Step 1: 静的検査とbuildを実行する**

Run: `make check && make build`
Expected: typecheck、lint、format、buildがexit 0

- [x] **Step 2: 全8表示条件でE2Eを実行する**

Run: `CI=true pnpm test:e2e`
Expected: 全テストpass

- [x] **Step 3: previewサーバーを起動する**

Run: `pnpm run preview --host 127.0.0.1 --port 4321`
Expected: `http://127.0.0.1:4321/` で待受

- [x] **Step 4: ブラウザで主要画面と導線を目視確認する**

トップ、AI開発支援、業務改善、選考ページをPCと320px幅で確認する。横スクロール、重なり、見出し、4入口、問い合わせ、トップ・選考ページへの導線を確認する。

- [x] **Step 5: 完了監査を行う**

設計書の各要件を、該当ファイル、E2E結果、build結果、ブラウザ表示で照合する。未確認事項があれば完了としない。
