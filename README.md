# kazuogawa.github.io

小川和久のポートフォリオサイトです。

**https://kazuogawa.github.io/**

## 技術スタック

- Astro — 静的サイトジェネレーター
- React + TypeScript — インタラクティブコンポーネント
- Tailwind CSS — ユーティリティファーストCSS
- GitHub Actions — 自動デプロイ

## 開発

```bash
# 依存関係インストール
npm install

# 開発サーバー起動（http://localhost:4321）
npm run dev

# プロダクションビルド
npm run build

# ビルド結果プレビュー
npm run preview
```

## プロジェクト構成

```
src/
├── layouts/BaseLayout.astro    # HTML shell, meta, OG, GA
├── pages/index.astro           # メインページ
├── components/                 # UIコンポーネント
│   ├── *.astro                 # 静的コンポーネント（JS 0）
│   └── *.tsx                   # Reactコンポーネント（client:visible）
├── data/profile.ts             # コンテンツデータ（単一データソース）
├── types/profile.ts            # 型定義
└── styles/global.css           # Tailwind directives
```

## コンテンツ更新

`src/data/profile.ts` を編集するだけで、全セクション（Skills, Experience, Projects等）に反映されます。

## デプロイ

`master` ブランチへのpushで GitHub Actions が自動実行され、GitHub Pages にデプロイされます。
