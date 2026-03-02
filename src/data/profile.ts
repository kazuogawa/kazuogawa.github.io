import type { Profile } from '../types/profile';

export const profile: Profile = {
  name: {
    ja: '小川 和久',
    en: 'Kazuhisa Ogawa',
    aka: 'がぶ',
  },
  title: 'Full-Stack & ML Engineer',
  tagline: 'Building intelligent products from ML pipelines to modern frontends',
  location: 'Tokyo, Japan',
  photo: '/images/myphoto.jpg',
  lastUpdated: '2026-01-02',

  social: [
    { platform: 'Facebook', url: 'https://facebook.com/ogawa.kaz', icon: 'facebook' },
    { platform: 'X', url: 'https://twitter.com/kazz_ogawa', icon: 'x' },
    { platform: 'Qiita', url: 'http://qiita.com/kazz_ogawa', icon: 'qiita' },
    { platform: 'Zenn', url: 'https://zenn.dev/kazz_ogawa', icon: 'zenn' },
  ],

  skills: [
    {
      category: 'Machine Learning',
      icon: '🧠',
      items: ['Python', 'TensorFlow', 'PyTorch', 'Keras'],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      items: ['Scala', 'Python', 'Go', 'Akka', 'Spark'],
    },
    {
      category: 'Infrastructure',
      icon: '☁️',
      items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Argo'],
    },
    {
      category: 'Frontend & Full-Stack',
      icon: '🖥️',
      items: ['React', 'Next.js', 'Vue', 'TypeScript'],
    },
  ],

  experience: [
    {
      role: 'FullStack Engineering',
      company: '株式会社サイバーエース（サイバーエージェント出向）',
      period: '2025 - now',
      projects: [
        {
          title: '極予測Swipeの開発',
          link: 'https://prtimes.jp/main/html/rd/p/000000042.000085778.html',
          details: [
            'カード形式の画面をスワイプして直感的に読み進められるスマートフォン特化型LP構築サービスの開発',
            '作成したLPの事前の効果予測が可能',
            'カードを出し分けてABテスト実施可能',
            '先行導入いただいたクライアントにおいて、8社中7社で効果改善を確認済み',
          ],
        },
        {
          title: '縦型スワイプLP構築サービスの開発、運用、保守',
          link: 'https://swipe.cyberace.co.jp/',
          details: ['カード型の縦型スワイプLPを構築するサービスの開発、運用、保守'],
        },
        {
          title: '広告特化AI Agent「CoBi」の開発、運用、保守',
          details: [
            'Slackを活用した広告実績や傾向の共有、予算や施策の提案を行うツールの開発、運用、保守',
            '広告実績を集計し、pptxファイルへ数値を反映させ、分析内容をまとめたレポート作成のバッチ処理の作成',
            '既存の不具合修正、セキュリティアラートが鳴っているpackageのupdate、不具合発生時の暫定、恒久対応',
          ],
        },
        {
          title: 'LLMベースの開発支援ツール',
          details: [
            'Claude Code等の導入に伴い、LLMベースの開発支援ツール導入の支援、導入する際の設定ファイル周りの追加、ドキュメント管理や理想状態についての布教。個人、チームの生産性を1.5倍以上に向上',
          ],
        },
        {
          title: '初学者教育',
          details: [
            '開発未経験のQAエンジニアが参画したため、プロジェクトの基礎知識の導入、QA作業の支援',
          ],
        },
      ],
    },
    {
      role: 'MLOps Engineering',
      company: '株式会社サイバーエージェント',
      period: '2021 - 2024',
      tech: 'Python, Apache Beam, Docker, TensorFlow, Keras',
      tools: 'GitHub, Repsona',
      projects: [
        {
          title: '極予測AIの開発、運用、保守',
          details: [
            '広告クリエイティブの効果予測を行うサービスのモデル開発、運用、保守',
            '学習pipelineの構築、保守、リファクタリング',
          ],
        },
        {
          title: '集計',
          details: [
            'Facebook, Twitter, GDNなど各メディアの実績データを学習データとして取り扱いやすくするための抽象化Datasetの構築',
          ],
        },
        {
          title: '極予測AI人間のパイプライン構築',
          details: [
            '存在しない人間の顔を生成し、クリエイティブに利用できるサービスのパイプライン設計、構築、実装、保守',
          ],
        },
        {
          title: 'アノテーションシステムの設計',
          details: [
            'Photoshopのpsdファイルを新しいモデルの学習データにするアノテーションシステムのフロー設計及び技術調査、他部署との調整',
          ],
        },
        {
          title: '類似画像マッチングworkflowの構築',
          details: [
            'gray scaleの統計量を使い、類似画像の候補を絞り、SSIMで一致判定をするworkflowの構築',
          ],
        },
        {
          title: 'インターン生の教育・社内勉強会',
          link: 'https://cyberagent.ai/blog/pr/culture/15753/',
          details: [
            'インターン生の教育を担当、第一志望に意向度を上げ採用に貢献',
            '社内勉強会 ADC2021 の運営に参画',
          ],
        },
      ],
    },
    {
      role: 'Backend & ML Engineering',
      company: '株式会社サイバーエージェント',
      period: '2018 - 2021',
      tech: 'Scala, Python, Spark, Docker',
      tools: 'GitHub, Wrike, Todoist',
      projects: [
        {
          title: 'CV予測モデル及び予算配分システムの保守、改善',
          details: [
            '各メディア(GDN,YDN等)のimp,click,cv等のデータを利用したCV予測モデルの保守',
            '予測モデルを使い、指定された予算や条件に応じて効率的に配分するシステムの保守、改善',
          ],
        },
        {
          title: 'ログ集計',
          details: ['各メディアの実績データを適切な粒度にマッピングする集計処理の作成、保守、改善'],
        },
      ],
      compact: true,
    },
    {
      role: 'AD Engineering',
      company: '株式会社インタースペース',
      period: '2017 - 2018',
      tech: 'Scala, Python, Akka, Spark, Colossus, Docker',
      projects: [
        {
          title: 'ログ集計・広告配信',
          details: [
            'EMR上でSparkを起動し、1日1億弱のログデータの集計',
            'Akka, Colossusを使用した高速広告配信システム',
          ],
        },
      ],
      compact: true,
    },
    {
      role: 'IVR Development',
      company: '株式会社バルキー・インフォ・テック',
      period: '2015 - 2017',
      tech: 'Java, Avaya Orchestration Designer',
      projects: [
        {
          title: 'IVRシステム開発',
          details: ['解約専用IVR、自動音声案内口座処理システムのリプレース開発'],
        },
      ],
      compact: true,
    },
    {
      role: 'CMS Development',
      company: '株式会社moreMost',
      period: '2013 - 2015',
      tech: 'HTML, CSS, CakePHP, jQuery',
      projects: [
        {
          title: 'ショッピングモール向けCMS開発',
          details: ['自社CMS製品のカスタマイズ、メンテナンス、メンバー教育'],
        },
      ],
      compact: true,
    },
  ],

  projects: [
    {
      title: '極予測Swipe',
      description:
        'カード形式のスワイプで読み進められるスマートフォン特化型LP構築サービス。先行導入8社中7社で効果改善を実現。',
      tags: ['React', 'TypeScript', 'Next.js'],
      link: 'https://prtimes.jp/main/html/rd/p/000000042.000085778.html',
    },
    {
      title: 'AI Agent「CoBi」',
      description:
        'Slackを活用した広告実績の共有・分析、予算や施策の提案を行う広告特化AIエージェント。',
      tags: ['Python', 'LLM', 'Slack API'],
    },
    {
      title: '極予測AI',
      description:
        '広告クリエイティブの効果を事前予測するMLサービス。学習パイプラインの設計・構築・運用を担当。',
      tags: ['Python', 'TensorFlow', 'Apache Beam', 'Docker'],
    },
  ],

  analytics: {
    googleAnalyticsId: 'G-HR4K43KTKS',
  },

  seo: {
    description:
      '小川和久のポートフォリオ。機械学習、MLOps、フルスタック開発の実績やスキル、経歴、取り組みを紹介します。',
    ogImage: 'https://kazuogawa.github.io/images/og.png',
    canonicalUrl: 'https://kazuogawa.github.io/',
    ogTitle: 'Kazuhisa Ogawa — Portfolio',
  },
};
