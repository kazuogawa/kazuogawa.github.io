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
  photo: '/images/myphoto-384.webp',
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
            'CARUでは、参画前と環境構築後を週あたりで比較し、人数が変わらない条件で、デプロイ頻度が週1回から1日1回以上へ向上',
            '横断支援した複数プロダクトのメンバーへのGoogleフォームでは、体感の生産性が平均60%以上向上したという自己評価を確認',
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

  landing: {
    eyebrow: 'Portfolio & Services',
    title: 'プロダクト開発と、現場の業務改善を支援します。',
    description:
      'Webアプリケーション、機械学習、データ基盤の開発から、チームへのAI開発ツールの導入まで。現場の課題を整理し、設計・実装・運用改善まで一貫して対応します。',
    audiences: [
      {
        title: 'チームにAI開発を導入したい',
        description:
          'AI開発ツールの導入から、プロジェクトに合ったルールづくり、実務での活用・定着まで伴走します。',
        href: '/services/ai-development/',
      },
      {
        title: 'プロダクト開発を任せたい',
        description:
          '新規サービスの立ち上げと、既存プロダクトの機能追加・改善に対応。Web・AI・データ基盤を横断して開発します。',
        href: '/services/product-development/',
      },
      {
        title: 'IT活用・業務改善を相談したい',
        description:
          '手作業を減らしたい、業務のアイデアを形にしたい。課題の整理からツールの設定・実装、使い方の説明まで支援します。',
        href: '/services/business-improvement/',
      },
      {
        title: '経歴・技術実績を確認したい',
        description:
          '業務委託の選考・案件紹介に向けて、職歴、担当範囲、技術スタック、設計判断と成果をまとめています。',
        href: '/portfolio/',
      },
    ],
    historyTitle: 'これまでの経験',
    history: [
      '2013年からソフトウェア開発に従事。CMS、広告配信・集計基盤、機械学習プロダクト、Webサービスの開発を経験してきました。サイバーエージェントおよび出向先のサイバーエースでは、プロダクト開発とAIを活用した開発プロセス改善を担当しました。',
      'フロントエンドからバックエンド、クラウド、データ処理まで、必要な領域をつないで開発を進められることが強みです。',
    ],
    seo: {
      description:
        'ソフトウェアエンジニア小川和久のプロフィール。チームへのAI開発導入、Web・AI・データ基盤の開発、IT活用・業務改善を支援します。',
      ogImage: 'https://kazuogawa.github.io/images/og.png',
      canonicalUrl: 'https://kazuogawa.github.io/',
      ogTitle: '小川 和久 | AI開発支援・Web開発・IT活用相談',
    },
  },

  servicePages: {
    aiDevelopment: {
      eyebrow: 'AI Development',
      title: 'AI開発の導入から、チームで使い続けられる仕組みづくりまで。',
      description:
        'これからAI開発ツールを導入するチームに入り、実際の開発を進めながら、プロジェクトに合う環境と運用を整えます。仕様や設計方針を整理し、設計・実装・レビューでAIを活用できる状態をつくります。',
      availability:
        '週2〜3日程度を目安に対応します。支援内容・稼働日数・開始時期はご相談ください。',
      challenges: [
        'AI開発ツールを導入したいが、何から整えればよいか分からない',
        '自社の仕様や実装規約に沿ってAIを使えるようにしたい',
        'チームで共有する利用ルールやレビューの進め方を決めたい',
        '導入後も実際の開発を見ながら、使い方を改善していきたい',
      ],
      processTitle: '現場の開発に入り、導入と定着を支援します',
      process: [
        {
          title: '現状を把握する',
          description:
            'チームの開発フローや困りごとを確認し、AIを活用する場面と、導入前に整える情報を整理します。',
        },
        {
          title: 'AIが参照できる情報と環境を整える',
          description:
            'メンバーにヒアリングし、ドメイン知識、仕様、設計方針、実装規約、レビュー観点を文書化。設定ファイルや利用ルール、必要なツール連携を整備します。',
        },
        {
          title: '実際の開発で使い、チームに共有する',
          description:
            '設計・実装・レビューでの活用を支援します。使い方や判断基準を共有し、特定の人だけに依存しない運用を目指します。',
        },
        {
          title: '変化を確認し、運用を改善する',
          description:
            '開発の状況とメンバーの使い心地を確認し、ドキュメントやルールを見直します。計測する指標はチームの課題に合わせて整理します。',
        },
      ],
      casesTitle: '支援実績',
      cases: [
        {
          title: 'CARU：週1回から、1日1回以上のデプロイへ',
          paragraphs: [
            'AI開発ツールを導入しても開発効率が変わらない状況に対し、開発コンテキストと環境の整備に取り組みました。',
            '参画前と環境構築後を週あたりのデプロイ頻度で比較したところ、チーム人数が変わらない条件で、週1回から1日1回以上デプロイする状態へ変化しました。',
          ],
        },
        {
          title: '複数プロダクト：暗黙知を整理し、チームへ展開',
          paragraphs: [
            '各プロダクトのメンバーから開発に必要な知識を聞き取り、AIが参照できるMarkdown、設定ファイル、利用ルールを整備。MCPの設定支援や社内勉強会も行い、開発フローへの組み込みを支援しました。',
            '横断支援した複数プロダクトのメンバーへのGoogleフォームによるアンケートでは、体感の生産性について平均60%以上の向上という回答結果が得られました。これはメンバーの自己評価による結果です。',
          ],
        },
      ],
      ctaTitle: '導入の進め方からご相談ください',
      ctaDescription:
        '現在の開発体制、導入したいツール、困っていることを、分かる範囲でお知らせください。チームの状況に合わせて支援範囲を整理します。',
      ctaLabel: 'AI開発の導入を相談する',
      seo: {
        description:
          'AI開発ツールをこれから導入するチーム向けに、環境構築、開発コンテキスト・ルール整備、実務での活用と定着を支援します。',
        ogImage: 'https://kazuogawa.github.io/images/og.png',
        canonicalUrl: 'https://kazuogawa.github.io/services/ai-development/',
        ogTitle: 'チームへのAI開発導入・定着支援 | 小川 和久',
      },
    },
    productDevelopment: {
      eyebrow: 'Product Development',
      title: '新規サービスの立ち上げも、既存プロダクトの改善も。',
      description:
        'フロントエンド、バックエンド、クラウド、機械学習・データ基盤を横断して開発します。要件整理・設計からのご相談に加え、仕様が決まっている機能の実装もお任せいただけます。',
      availability:
        '週2〜3日程度を目安に対応します。支援内容・稼働日数・開始時期はご相談ください。',
      challenges: [
        '新規サービスを、要件整理からリリースまで進めたい',
        '既存プロダクトへ機能を追加し、運用も改善したい',
        'Web、API、クラウドをまたぐ開発を一貫して任せたい',
        'AI・機械学習機能やデータ処理をプロダクトへ組み込みたい',
      ],
      processTitle: '必要な段階から参加します',
      process: [
        {
          title: '新規サービスの立ち上げ',
          description:
            '要件と技術的な課題を整理し、画面・API・公開基盤の設計から実装、テスト、リリースまで対応します。',
        },
        {
          title: '既存プロダクトの機能追加・改善',
          description:
            '既存の仕様と構成を把握し、機能追加、不具合対応、性能改善、運用保守を進めます。',
        },
        {
          title: 'AI・機械学習機能の組み込み',
          description:
            'モデルをサービスから利用するAPI、学習・評価パイプライン、LLMの出力を評価する環境を設計・実装します。',
        },
        {
          title: 'データ処理基盤の構築・改善',
          description:
            'データの集計・連携処理を構築し、処理時間やクラウドコスト、保守性を改善します。',
        },
      ],
      casesTitle: '開発実績',
      cases: [
        {
          title: '極予測Swipe・縦型スワイプLP構築サービス',
          paragraphs: [
            '管理画面、API、LPをビルドする主要機能を開発。他部署と仕様・技術要件を整理し、リリースに貢献しました。',
            '別の縦型スワイプLP構築サービスでは、React・TypeScriptによる管理画面、GoのAPI、クラウドインフラを担当。ドメイン・証明書・デプロイ環境の整備から運用保守まで対応しました。',
          ],
        },
        {
          title: 'アカウントカルテ：WebアプリケーションとLLM評価基盤',
          paragraphs: [
            '広告設定改善を支援するWebアプリケーションのフロントエンド、バックエンド、インフラを開発。DeepEvalを用いた評価基盤も構築し、AIの改善提案を継続的に見直せる環境を整えました。',
          ],
        },
        {
          title: '機械学習・データ基盤の開発と運用改善',
          paragraphs: [
            '極予測AIでは、効果予測モデル、学習パイプライン、モデルAPI、データ処理基盤を開発・運用しました。',
            'CA DashBoardでは集計バッチを約1時間から約30分へ短縮。X-liftでは1日2億件以上の広告配信ログを扱う集計基盤を改善し、月額約150万円のインフラコストを削減しました。',
          ],
        },
      ],
      ctaTitle: '開発したい内容をお聞かせください',
      ctaDescription:
        'プロダクトの概要、依頼したい範囲、現在の技術構成、希望時期をお知らせください。要件が固まっていない段階でもご相談いただけます。',
      ctaLabel: '開発支援を相談する',
      seo: {
        description:
          '新規サービスの立ち上げから既存プロダクトの改善まで、Web・AI・データ基盤の設計・実装・運用を支援します。',
        ogImage: 'https://kazuogawa.github.io/images/og.png',
        canonicalUrl: 'https://kazuogawa.github.io/services/product-development/',
        ogTitle: 'Web・AI・データ基盤の開発支援 | 小川 和久',
      },
    },
    businessImprovement: {
      eyebrow: 'Business Improvement',
      title: '業務の「こうしたい」を、使える仕組みに。',
      description:
        '毎回の集計や資料づくりを楽にしたい。ITやAIで実現できるか相談したい。使う技術やツールが決まっていなくても、現在の仕事の進め方からお話を伺います。課題の整理から、設定・実装、使い方の説明まで対応します。',
      availability:
        '月1〜4日程度を目安に支援します。支援内容・稼働日数・開始時期はご相談ください。',
      challenges: [
        '毎回手作業で行っている集計やレポート作成を減らしたい',
        '業務のアイデアがあるので、ITで実現できるか知りたい',
        '情報が散らばっていて、確認や引き継ぎに時間がかかる',
        'ツールの導入から、担当者が使えるようになるまで支援してほしい',
      ],
      processTitle: 'ご相談から利用開始まで',
      process: [
        {
          title: '困っていることを伺う',
          description:
            '現在の作業、使っている資料・ツール、実現したいことを確認します。専門的な言葉で説明する必要はありません。',
        },
        {
          title: '改善する範囲を決める',
          description:
            '効果が期待できることと必要な作業を整理し、優先順位、費用、期間をご相談します。既存ツールの活用も含めて進め方を検討します。',
        },
        {
          title: '設定・実装し、業務で確認する',
          description: '合意した範囲で仕組みをつくり、業務で使えるか一緒に確認します。',
        },
        {
          title: '使い方を共有する',
          description:
            '担当者へ使い方や運用方法を説明します。導入後の変更・保守は、必要な範囲をご相談のうえ決めます。',
        },
      ],
      casesTitle: '業務上の要望を形にした経験',
      cases: [
        {
          title: '広告レポートの作成処理を開発',
          paragraphs: [
            '広告特化AI Agent「CoBi」で、広告実績を集計し、PowerPointのレポートへ数値を反映する処理を設計・実装。集計から資料作成までの業務効率化に取り組みました。',
          ],
        },
        {
          title: 'クリエイティブに起用する人物の選定を支援',
          paragraphs: [
            'ビジネス側からの相談を受け、人物情報をクリエイティブ制作支援プロダクトに組み込みました。人物選定の判断材料として利用できるようになり、予測精度も向上。AI人間やタレントの活用に対応できるサービスとして訴求できるようになりました。',
            'これは過去のプロダクト開発での事例です。ご相談の規模に合わせて、取り組む範囲と進め方を整理します。',
          ],
        },
      ],
      ctaTitle: 'まずは、困っている作業を教えてください',
      ctaDescription:
        'どんな作業に手間がかかるか、どうなれば助かるかをお知らせください。相談内容がまとまっていなくても構いません。',
      ctaLabel: '業務改善を相談する',
      seo: {
        description:
          '手作業の削減や業務のアイデアの実現を、課題整理、ツール設定、自動化の実装、使い方の説明まで支援します。',
        ogImage: 'https://kazuogawa.github.io/images/og.png',
        canonicalUrl: 'https://kazuogawa.github.io/services/business-improvement/',
        ogTitle: 'IT活用・業務改善の相談 | 小川 和久',
      },
    },
  },

  portfolio: {
    eyebrow: 'For Selection',
    description:
      '業務委託の選考・案件紹介に向けて、担当経験、技術スタック、設計判断と成果をまとめています。',
    highlights: [
      {
        title: 'CARU・プロダクト横断支援',
        description:
          '開発コンテキストと運用ルールを整備。CARUでは人数不変で週1回から1日1回以上のデプロイへ。複数プロダクトへのGoogleフォームでは、体感の生産性が平均60%以上向上したという自己評価を確認しました。',
      },
      {
        title: 'アカウントカルテ',
        description:
          'WebUI・API・クラウドインフラと、DeepEvalによるLLM評価基盤を開発。開発速度を評価され社内表彰を受賞しました。',
      },
      {
        title: 'CA DashBoard',
        description:
          '集計バッチを約1時間から約30分へ短縮。Aurora Databaseの負荷削減と運用品質の改善に取り組みました。',
      },
      {
        title: 'X-lift',
        description:
          '1日2億件以上の広告配信ログを扱う集計基盤を開発・運用。バッチ改善により月額約150万円のインフラコストを削減しました。',
      },
    ],
    decision: {
      title: '設計判断：リリース速度を優先したモデル拡張',
      request:
        'クリエイティブに活用する人物の選定に向け、ビジネス側から既存の制作支援モデルへ人物情報を加えたいという相談を受けました。特徴量の抽出と、既存のマルチモーダルモデルへの結合を担当しました。',
      constraint:
        'リリース速度が最優先でした。人物を判別し、タレントを特徴量として分類する方式も検討しましたが、データ収集と分類に時間がかかるため採用せず、人物情報を特徴量として既存モデルへ結合する方式を選びました。',
      result: '人物選定の判断材料としてプロダクトを活用できるようになり、予測精度も向上しました。',
    },
    availability:
      'プロダクト開発・AI開発プロセス改善は週2〜3日程度、IT活用・業務改善は月1〜4日程度を目安に対応します。支援内容・稼働日数・開始時期はご相談ください。',
    seo: {
      description:
        '小川和久の職務経歴、担当範囲、技術スタック、設計判断を紹介。Web開発、データ基盤、機械学習、AI開発プロセス改善を経験しています。',
      ogImage: 'https://kazuogawa.github.io/images/og.png',
      canonicalUrl: 'https://kazuogawa.github.io/portfolio/',
      ogTitle: '小川 和久の経歴・技術実績 | 業務委託の選考・案件紹介向け',
    },
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
          'CARUでは、人数が変わらない条件で、週あたりのデプロイ頻度が週1回から1日1回以上へ向上',
          '横断支援した複数プロダクトのメンバーへのGoogleフォームでは、体感の生産性が平均60%以上向上したという自己評価を確認',
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
        '複数プロダクトで開発コンテキスト、ルール、開発フローを整備。CARUでは人数不変でデプロイ頻度が週1回から1日1回以上へ向上。横断支援先へのGoogleフォームでは、体感の生産性が平均60%以上向上したという自己評価を確認。',
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
