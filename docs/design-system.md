# Design System

## Brand color

基準色は Tailwind CSS の `blue-600`（`#2563EB`）。実装では `brand-600` として使用する。
実際のカラーパレットは `tailwind.config.mjs` の `theme.extend.colors.brand` を正本とする。

## Usage

- Primary action: `bg-brand-600 hover:bg-brand-700`
- Text link: `text-brand-600 dark:text-brand-400`
- Focus ring: `focus-visible:ring-brand-500`
- Neutral colors: Tailwind CSS の `slate-*`
- Background: `#FAFAFA` / `#0F172A`
- Card: `card-dark`
- Tag background: `tag-light` / `tag-dark`

## Rules

- `blue-*` や任意のHEX値をコンポーネントへ直接追加しない。
- 新しい色を増やす前に、既存の色トークンで表現できないか確認する。
- ライトモードとダークモードの双方で可読性とコントラストを確認する。
