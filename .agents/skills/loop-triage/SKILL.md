---
name: loop-triage
description: Astroポートフォリオのcheck、build、レスポンシブ表示、問い合わせ導線、SEO、直近変更、ドキュメントドリフト、リファクタリング候補をreport-onlyでトリアージする。loop-constraintsとloop-budgetの後に使用し、ソースを修正せずSTATE.mdを更新する。
---

# Portfolio Loop Triage

## 前提確認

1. 同じrun内で `$loop-constraints` と `$loop-budget` が完了していることを確認する。
2. `.github/PORTFOLIO_REVIEW_GUIDELINES.md` を最後まで読む。
3. `STATE.md` と直近24〜48時間のgit履歴を確認する。
4. 必須ファイル不足、kill switch有効、または予算ガードによる停止時は終了する。

## 証拠収集

1. `make check` を実行する。
2. `make build` を実行する。
3. ビルド警告を確認し、次の要件が保持されていることを確認する。
   - `<html lang="ja">`
   - description、canonical、OG、Twitter Card、Person JSON-LD
   - Google Analytics `G-HR4K43KTKS` とAstroの `is:inline`
   - `public/images/` の参照画像
4. ブラウザを利用できる場合は、レビュー基準に指定されたPC・スマホviewport、ライト・ダーク、ナビゲーション、メニュー操作、問い合わせ導線を確認する。
5. ネットワークを利用できる場合のみ `make audit` と外部リンクの死活確認を行う。実行できない項目は成功扱いにせず、未確認として記録する。
6. ドキュメントドリフトを確認する。
   - `AGENTS.md`、`README.md`、`LOOP.md`、`docs/`、`.agents/skills/` に記載された構成、開発コマンド、権限境界、参照パスを実ファイル、`package.json`、`Makefile`、関連設定と照合する。
   - 不存在の参照、実装と異なるコマンド、重複・矛盾する拘束ルールを証拠付きで記録する。
   - 全文書の言い換えや表記統一は行わず、実行結果または権限判断に影響するdriftを優先する。
7. リファクタリング候補を確認する。
   - 直近24〜48時間の変更を起点に、重複、責務過多、不要な分岐・状態・変換、既存規約からの逸脱を静的な証拠で確認する。直近変更がない場合は週1回だけリポジトリ全体を確認する。
   - 提案には影響、具体的な根拠、対象ファイル、最小変更方針、検証方法を含める。
   - 好みだけの提案、全面的な書き換え、計測できない抽象的な「クリーンアップ」はfindingにしない。

## STATE更新

`STATE.md` の `Loop Control` は変更せず、次のフィールドとセクションだけを更新する。

- `Last run` フィールド: 日時、パターン、レベル、結果
- `High Priority`: 今日対応すべき失敗、または人間判断
- `Watch List`: 低優先度または未確認項目
- `Recent Noise`: 問題なしと確認できた項目
- `Post-Run Critique`: 検証上の不足と次回の具体的な改善

各findingには影響、証拠または再現条件、判明している対象ファイル、推奨する次の行動を含め、簡潔に記述する。

ドキュメントドリフトとリファクタリング提案は原則Watch Listへ記録する。実行不能、安全性、拘束ルールの矛盾、または具体的な不具合に直結し、人間判断が必要な場合だけHigh Priorityへ記録する。問題がなければ確認範囲をRecent Noiseへ記録する。

このトリアージでは自律レベルにかかわらず、ソース、文書、依存関係、CI、Issue、PR、外部システムを変更しない。ドキュメントドリフトとリファクタリング提案はL3のauto-eligible対象にせず、人間が別途修正対象として承認するまでreport-onlyとする。

現在レベルのrunbookに後続フェーズがない場合だけ、最後に `$loop-budget` を再実行してrun-logへ記録する。後続フェーズがある場合は、そのrunbookの終了時に1件だけ記録する。
