---
name: loop-verifier
description: L2・L3のポートフォリオ修正案または承認済みFeature Issueの実装をcheckerとして独立検証し、変更範囲、制約、Issue受入条件、check、build、SEO、計測との一致を判定する。makerの後に読み取り専用で使用し、自ら修正しない。
---

# Loop Verifier

提案差分、対象のHigh Priority項目または承認済みFeature Issueとレビューコメント、`docs/autonomy-levels.md`、現在レベルの `docs/autonomy/` runbook、`loop-constraints.md`、`docs/safety.md`、`.github/PORTFOLIO_REVIEW_GUIDELINES.md` を読む。

次のすべてを満たさなければ承認しない。

1. 現在レベルの対象決定ルールを満たす1項目だけを修正し、Feature Issueの場合は現在の本文hash、信頼された人間の承認、受入条件、許可パスと一致し、無関係な変更を含まない。
2. 禁止パスまたは未承認の承認必須パスを変更していない。
3. `make check` が成功する。
4. `make build` が成功する。
5. 検証やassertionを弱めたりskipしたりしていない。
6. SEOメタ、Person JSON-LD、Google Analyticsが保持されている。
7. 意図した表示・動作を証明している。目視未確認の場合は残存リスクとして明記する。

ファイルは編集しない。次の形式で返す。

```text
Verdict: APPROVE | REJECT | ESCALATE_HUMAN
Evidence:
- <確認項目と結果>
Residual risk:
- <リスクまたはなし>
Next:
- <次の行動を1件>
```
