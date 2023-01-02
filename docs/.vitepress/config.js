import mathjax3 from 'markdown-it-mathjax3';

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
];

export default {
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },

  lang: 'zh-CN',
  title: 'Gennia 官方文档',
  description: 'Gennia Cyber Document.',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.png' }]
  ],

  // Theme related configurations.
  themeConfig: {
    siteTitle: '官方文档',
    logo: '/assets/img/logo.png',
    nav: [
      { text: '更新记录', link: 'https://github.com/GenniaApp/Gennia/releases' }
    ],
    sidebar: [
      {
        text: '基础玩法',
        items: [
          { text: '快速开始', link: '/quick-start' },
        ]
      },
      {
        text: '进阶教程',
        items: [
          { text: '服务器部署', link: '/server' },
          { text: '机器人开发', link: '/bot-api' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GenniaApp/Gennia' }
    ],
    editLink: {
      pattern: 'https://github.com/GenniaApp/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    docFooter: {
      prev: '上一篇',
      next: '接下来阅读'
    },
    footer: {
      message: 'Gennia 的技术还很稚嫩，她还在成长. . .',
      copyright: 'Copyright © 2012-present Reqwey'
    },
    algolia: {
      appId: 'QE7LMUJ22V',
      apiKey: '3e9460bbaac6905c7e1eda81762b52f2',
      indexName: 'genniaSearch'
    }
  }
}
