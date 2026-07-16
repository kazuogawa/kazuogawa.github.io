import type { Profile } from '../types/profile';

export const profile: Profile = {
  name: {
    ja: '小川 和久',
    en: 'Kazuhisa Ogawa',
    aka: '',
  },
  title: 'Software Engineer / AI-Enabled Development',
  tagline:
    'Web開発、データ基盤、機械学習、AI/LLM活用を横断し、プロダクト開発とチームの開発生産性向上を支援するエンジニア',
  location: 'Tokyo, Japan',
  photo: '/images/myphoto.jpg',
  lastUpdated: '2026-07-13',

  social: [
    { platform: 'Zenn', url: 'https://zenn.dev/kazz_ogawa', icon: 'zenn' },
    { platform: 'X', url: 'https://twitter.com/kazz_ogawa', icon: 'x' },
  ],

  skills: [
    {
      category: 'AI開発・開発プロセス改善',
      icon: '🤖',
      items: ['Claude Code', 'Kiro', 'Cursor', 'GitHub Copilot', 'MCP', 'DeepEval'],
    },
    {
      category: 'Webアプリケーション開発',
      icon: '🖥️',
      items: ['Go', 'Python', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'GraphQL'],
    },
    {
      category: 'データ基盤・クラウド',
      icon: '☁️',
      items: ['GCP', 'AWS', 'BigQuery', 'Dataflow', 'Apache Beam', 'Spark'],
    },
    {
      category: '機械学習・MLOps',
      icon: '🧠',
      items: ['Python', 'TensorFlow', '学習パイプライン', 'モデルAPI', '評価・運用'],
    },
  ],

  experience: [
    {
      role: 'Software Engineer / AI-Enabled Development',
      company: '株式会社サイバーエース（株式会社サイバーエージェントから出向）',
      period: '2025.01 - 2026.07',
      tech: 'React, TypeScript, Next.js, Go, Python, FastAPI, GCP, Claude Code, Kiro',
      tools: 'GitHub, GitHub Actions, Repsona',
      projects: [
        {
          title: 'プロダクト横断でのAI開発生産性向上',
          details: [
            '複数プロダクトを横断し、Claude Code、Kiro、Claude Code GitHub Action等の生成AIベースの開発支援ツールの導入を支援',
            '暗黙知化していたドメイン知識、仕様、設計方針、実装規約、レビュー観点を、AIが参照しやすいMarkdownとして整備',
            'プロジェクトごとの設定ファイル、利用ルール、ドキュメント管理方針、MCPサーバーの設定を支援',
            'Spec-Driven Developmentを取り入れ、設計、実装、レビュー、ドキュメント整備へ生成AI活用を定着',
            '社内勉強会、会社ブログ、技術記事を通じて活用事例と知見を共有',
            'デプロイ頻度を約6倍に向上し、社内アンケートで平均60%以上の生産性向上を確認',
          ],
        },
        {
          title: 'アカウントカルテのWebUI・LLM評価基盤開発',
          link: 'https://prtimes.jp/main/html/rd/p/000000031.000085778.html',
          details: [
            '広告設定改善を支援する社内向けWebアプリケーションを開発',
            'React、TypeScript、Next.jsによるフロントエンドと、Python、FastAPIによるバックエンドを開発',
            'Firestore、Cloud Run、GCS等を用いたインフラ構築から、設計、実装、テスト、リリース、運用改善まで一貫して担当',
            'DeepEvalを用いてAIによる広告設定改善提案を定量評価し、モデル、プロンプト、処理フローを継続改善できる環境を構築',
            'フロントエンド、バックエンド両面での開発速度を評価され、社内表彰を受賞',
          ],
        },
        {
          title: '極予測Swipeの開発',
          link: 'https://prtimes.jp/main/html/rd/p/000000042.000085778.html',
          details: [
            '縦型スワイプLPを作成・管理できる「極予測Swipe」の主要機能を開発',
            'Reactによる管理画面、Next.jsとGraphQLによるAPI、スワイプ型LPをビルドする機能を実装',
            '他部署と連携しながら仕様と技術要件を短期間で整理し、主要機能の設計・実装を主担当として推進',
            '先行導入8社中7社で広告効果改善を確認',
            '領域横断での開発と貢献を評価され、社内表彰を受賞',
          ],
        },
        {
          title: '縦型スワイプLP構築サービスの開発・運用・保守',
          link: 'https://swipe.cyberace.co.jp/',
          details: [
            'React、TypeScriptによる管理画面と、GoによるバックエンドAPIを開発',
            'Firestore、Cloud Run、GCS、Cloud Load Balancing等を用いたインフラを構築',
            'ドメイン設定、証明書取得、デプロイ環境整備を含め、開発からリリース、運用保守まで一貫して担当',
            '開発速度とリリース速度への貢献を評価され、社内表彰を受賞',
          ],
        },
        {
          title: '広告特化AI Agent「CoBi」の開発・運用・保守',
          details: [
            'Slackを活用し、広告実績や傾向の共有、予算や施策の提案を支援するAI Agentを開発',
            '広告実績を集計し、PowerPointファイルへ数値を反映するレポート作成バッチを設計・実装',
            '不具合修正、セキュリティ対応、依存パッケージのアップデート、暫定対応と恒久対応を実施',
            'AI開発支援ツールの導入により、個人・チームの生産性を1.5倍以上に向上',
            'QAエンジニアへプロジェクトの基礎知識を共有し、オンボーディングとQA業務を支援',
          ],
        },
      ],
    },
    {
      role: 'ML / MLOps / Backend Engineering',
      company: '株式会社サイバーエージェント',
      period: '2018.11 - 2024.12',
      tech: 'Python, Scala, TensorFlow, BigQuery, Dataflow, Apache Beam, Docker, GCP, AWS',
      tools: 'GitHub, CircleCI, Repsona',
      projects: [
        {
          title: '極予測AIの開発・運用・保守',
          link: 'https://www.ca-kiwami.ai/',
          details: [
            '広告クリエイティブの効果予測モデル、学習パイプライン、モデルAPI、データ処理基盤を開発・運用',
            'マルチモーダルデータを用いた機械学習モデルの開発とリリースを担当',
            'BigQuery、Dataflowを用いたバッチ処理と、複数広告媒体の実績データを扱う抽象化Datasetを構築',
            '類似画像・動画の候補抽出とSSIMによる一致判定ワークフローを構築し、学習データ拡充を支援',
          ],
        },
        {
          title: '極予測AI人間のパイプライン構築',
          details: [
            'StyleGAN2を用いた人物画像生成プロジェクトで、学習データ作成、生成処理、データ処理基盤を開発',
            'BigQuery、Dataflowを用いて、モデル開発、データ作成、サービス実装をつなぐパイプラインを整備',
          ],
        },
        {
          title: 'CA DashBoardの開発・運用・保守',
          details: [
            'Scala、Python、http4s、Digdag、EMRを用いて、広告主向けBIツールの集計基盤、API、予測機能を改善',
            '集計処理のチューニングにより、バッチ処理時間を約1時間から約30分へ短縮',
            'Aurora Databaseへの負荷削減とインフラリソースの最適化に貢献',
            '改善実績を評価され、社内表彰を受賞',
          ],
        },
        {
          title: 'インターン・新入社員のオンボーディング支援',
          details: [
            'ドメイン知識、開発環境、実装方針、設計・レビュー観点を共有し、実務への早期参加を支援',
            '技術支援とプロジェクト理解の促進を通じて意向度向上に貢献し、結果として自社への内定承諾につながった',
          ],
        },
        {
          title: '社内技術カンファレンスの運営',
          link: 'https://cyberagent.ai/blog/pr/culture/15753/',
          details: [
            'AItech Developer Conferenceの運営に参画し、技術知見の共有とエンジニア同士のつながりを支援',
          ],
        },
      ],
    },
    {
      role: 'Backend Engineering',
      company: '株式会社インタースペース',
      period: '2017.07 - 2018.10',
      tech: 'Scala, Akka, Spark, Colossus, Python, AWS, EMR, Athena, MySQL, Redis',
      projects: [
        {
          title: 'X-liftの集計・配信基盤の開発・運用・保守',
          details: [
            'EMR、Sparkを用いて、1日2億件以上の広告配信ログを集計する基盤を開発・運用',
            '集計バッチのリファクタリングと起動設定のチューニングにより、月額約150万円のインフラコストを削減',
            'Akka Scheduler、Colossusを用いて、100ms以内の応答が求められる広告配信処理を改善',
          ],
        },
      ],
      compact: true,
    },
    {
      role: 'Application Engineering',
      company: '株式会社バルキー・インフォ・テック',
      period: '2015.04 - 2017.01',
      tech: 'Java, Oracle Database, Avaya Aura Orchestration Designer',
      projects: [
        {
          title: 'IVRシステムの開発・リプレース',
          details: [
            '金融系IVRシステムの設計、実装、単体・結合テスト、顧客環境での検証とリリースを担当',
          ],
        },
      ],
      compact: true,
    },
    {
      role: 'Web Engineering',
      company: '株式会社moreMost',
      period: '2013.08 - 2015.03',
      tech: 'PHP, CakePHP2, HTML, CSS, jQuery, MySQL',
      projects: [
        {
          title: '大手ショッピングモール向けCMSの開発・保守',
          details: [
            'CMSのカスタマイズ、機能追加、画面実装、保守を担当',
            'コード規約と作業・保守手順をWikiへ集約し、属人化の低減とメンバーへの引き継ぎを支援',
          ],
        },
      ],
      compact: true,
    },
  ],

  contact: {
    title: 'お問い合わせ',
    description:
      'AI活用、Webアプリケーション開発、データ基盤、開発プロセス改善などのご相談を受け付けています。内容が固まっていない段階でもお気軽にご連絡ください。',
    primaryAction: {
      label: '問い合わせフォームを開く',
      url: 'https://form.run/@kazuogawa-consultation',
    },
    responseNote:
      'フォーム送信後、内容を確認のうえ返信します。相談内容が固まっていない段階でも歓迎です。',
  },

  services: {
    eyebrow: 'Services',
    title: 'AI活用・Web・データ基盤の技術支援',
    description:
      '副業・業務委託として、課題の整理や技術レビューなどのスポット支援から、設計・実装・運用改善を含む継続支援まで対応します。',
    offerings: [
      {
        title: '生成AIを活用した開発プロセス改善',
        summary:
          'AI開発支援ツールをプロダクト固有の開発フローへ組み込み、チームで継続的に活用できる環境を整備します。',
        challenges: [
          'AIの出力品質が安定せず、レビューや手戻りが増えている',
          'ドメイン知識や実装規約が暗黙知化している',
          'ツールを導入したものの、チームでの活用が定着していない',
        ],
        support: [
          'AIが参照する開発コンテキストとルールの整備',
          'Spec-Driven Developmentを用いた開発フローの設計',
          'Claude Code、Kiro、MCP、GitHub Actions等の導入とチーム展開',
          'LLM評価基盤の設計・実装と評価プロセスの整備',
        ],
        evidence: [
          'プロダクト固有の開発コンテキストとフローを整備し、デプロイ頻度を約6倍に向上',
          '生成AI開発支援ツールの導入後、社内アンケートで平均60%以上の生産性向上を確認',
        ],
      },
      {
        title: 'Webプロダクト開発',
        summary:
          'フロントエンド、バックエンド、クラウドを横断し、要件整理からリリース後の改善まで支援します。',
        challenges: [
          'フロントエンドからインフラまで、複数領域にまたがる開発を一貫して進めたい',
          '要件や仕様を整理しながら短期間で形にしたい',
          'リリース後の運用や改善まで見据えて設計したい',
        ],
        support: [
          'Go、Python、TypeScript、Reactを用いた設計・実装',
          '管理画面、API、クラウドインフラを横断した設計・実装',
          'テスト、リリース、運用保守、継続的な改善',
          '既存システムの技術レビューと改善方針の整理',
        ],
        evidence: [
          '社内向けWebアプリケーションのWebUI、API、インフラを一貫して開発し、開発速度への貢献を評価され社内表彰を受賞',
          '縦型スワイプLP生成サービスを開発し、先行導入8社中7社で広告効果改善を確認',
        ],
      },
      {
        title: '機械学習・データ基盤',
        summary:
          '機械学習をプロダクトで継続運用するためのパイプライン、モデルAPI、データ処理基盤の設計・開発・運用改善を支援します。',
        challenges: [
          'モデル開発からサービス提供までの流れが分断されている',
          '集計処理に時間がかかり、クラウドコストも増大している',
          'データ処理やモデルAPIを安定して運用したい',
        ],
        support: [
          '学習・評価パイプラインとモデルAPIの設計・実装',
          'BigQuery、Dataflow、Apache Beam等を用いたデータ処理基盤の構築',
          'バッチ処理の性能改善とクラウドコストの最適化',
          'モデルの評価・運用と継続的な改善',
        ],
        evidence: [
          '広告主向けBIツールの集計バッチを改善し、処理時間を約1時間から約30分へ短縮',
          '1日2億件以上の広告配信ログを扱う集計基盤を最適化し、月額約150万円のインフラコストを削減',
        ],
      },
    ],
    process: [
      {
        title: 'お問い合わせ',
        description: '現在の課題、相談したい内容、希望時期を分かる範囲でお知らせください。',
      },
      {
        title: 'ヒアリング',
        description: '背景と期待する成果を確認し、対応可能な範囲と進め方を整理します。',
      },
      {
        title: 'ご提案・合意',
        description: '支援範囲、成果物、進行方法、契約条件を相談のうえ決定します。',
      },
      {
        title: '実装・改善',
        description: '合意した範囲の実装や改善を進め、結果と継続運用に必要な知識を共有します。',
      },
    ],
    engagementOptions: [
      {
        title: 'スポット支援',
        description: '課題を絞り、短期間で現状整理や改善方針を提示します。',
        examples: ['技術レビュー', '導入方針・アーキテクチャ設計', '検証・プロトタイプ開発'],
      },
      {
        title: '継続支援',
        description: 'チームの一員として、設計・実装・運用改善を継続的に支援します。',
        examples: ['プロダクト開発', 'AI活用の定着支援', 'データ・ML基盤の改善'],
      },
    ],
    termsNote:
      '副業・業務委託として対応します。料金、稼働時間、契約期間は、支援範囲と期待する成果を確認したうえで個別に調整します。',
    overviewAction: {
      label: '詳しい支援内容を見る',
      url: '/services/',
    },
    seo: {
      description:
        'AI開発プロセス改善、Webプロダクト開発、機械学習・データ基盤について、スポット・継続の技術支援を提供します。',
      ogImage: 'https://kazuogawa.github.io/images/og.png',
      canonicalUrl: 'https://kazuogawa.github.io/services/',
      ogTitle: 'Services | 小川 和久',
    },
  },

  projects: [
    {
      title: 'AI開発生産性向上',
      description:
        'Claude Code向けの開発コンテキスト、ルール、開発フローを複数プロダクトで整備。デプロイ頻度を約6倍に向上し、社内アンケートで平均60%以上の生産性向上を確認。',
      tags: ['Claude Code', 'Kiro', 'MCP', 'Spec-Driven Development'],
    },
    {
      title: 'アカウントカルテ / LLM評価基盤',
      description:
        '広告設定改善を支援するWebアプリケーションと、DeepEvalを用いてAIの改善提案を定量評価する基盤を開発。開発速度を評価され社内表彰を受賞。',
      tags: ['React', 'Next.js', 'FastAPI', 'DeepEval', 'GCP'],
      link: 'https://prtimes.jp/main/html/rd/p/000000031.000085778.html',
    },
    {
      title: '広告特化AI Agent「CoBi」',
      description:
        'Slack上で広告実績の共有、分析、施策提案を支援するAI Agent。レポート生成、安定運用、AI開発支援ツールの導入を担当。',
      tags: ['Python', 'Slack API', 'PowerPoint', 'Claude Code'],
    },
    {
      title: '極予測Swipe / 縦型スワイプLP',
      description:
        '縦型スワイプLPの管理画面、API、公開基盤を横断して開発。先行導入8社中7社で広告効果改善を確認し、領域横断での貢献により社内表彰を受賞。',
      tags: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Go', 'GCP'],
      link: 'https://prtimes.jp/main/html/rd/p/000000042.000085778.html',
    },
    {
      title: '極予測AI',
      description:
        '広告クリエイティブの効果予測モデル、学習パイプライン、モデルAPI、データ処理基盤を開発・運用。学習データ拡充と継続的なモデル改善を支援。',
      tags: ['Python', 'TensorFlow', 'BigQuery', 'Dataflow', 'Docker'],
      link: 'https://www.ca-kiwami.ai/',
    },
  ],

  analytics: {
    googleAnalyticsId: 'G-HR4K43KTKS',
  },

  seo: {
    description:
      '小川和久のポートフォリオ。Web開発、広告・データ基盤、機械学習、AI/LLMを活用した開発プロセス改善の実績を紹介します。',
    ogImage: 'https://kazuogawa.github.io/images/og.png',
    canonicalUrl: 'https://kazuogawa.github.io/',
    ogTitle: '小川 和久 | Software Engineer / AI-Enabled Development',
  },
};
