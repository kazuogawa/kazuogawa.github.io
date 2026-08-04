---
name: loop-triage
description: Astroポートフォリオのcheck、build、レスポンシブ表示、問い合わせ導線、SEO、直近変更をL1のreport-onlyでトリアージする。loop-constraintsとloop-budgetの後に使用し、ソースを修正せずSTATE.mdを更新する。
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

## STATE更新

`STATE.md` の `Loop Control` は変更せず、次のフィールドとセクションだけを更新する。

- `Last run` フィールド: 日時、パターン、レベル、結果
- `High Priority`: 今日対応すべき失敗、または人間判断
- `Watch List`: 低優先度または未確認項目
- `Recent Noise`: 問題なしと確認できた項目
- `Post-Run Critique`: 検証上の不足と次回の具体的な改善

各findingには影響、証拠または再現条件、判明している対象ファイル、推奨する次の行動を含め、簡潔に記述する。

L1ではソース、依存関係、CI、Issue、PR、外部システムを変更しない。最後に `$loop-budget` を再実行してrun-logへ記録する。
