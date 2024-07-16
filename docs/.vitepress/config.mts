import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "无聊学习",
  description: "take down (in writing)",
  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    },
    lineNumbers: true
  },
  head: [
    // 在这里添加你的 CSS 文件链接
    // ['link', { rel: 'stylesheet', href: './theme/style/iconfont-weapp-icon.css' }]
    ["link", { rel: "icon", href: "/yao.jpg" }],
    ['script', { src: 'https://vxxvxxv.github.io/fireworks.js'}],
    ['script', { src: 'https://vxxvxxv.github.io/anime.min.js'}],
  ],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "无聊学习",
    logo: "/yao.jpg",
    search: {
      provider: 'local'
    },
    outline: { label: '目录导航',level: [0,4] },
    docFooter: { prev: '上一页', next: '下一页' },
    footer: {
      message: '本站收录内容源自互联网，不对其网站内容或交易负责。如有内容侵犯权益，请联系站长删除相关内容！',
      copyright: 'Copyright © 2024 也可以叫我陈同学',
    },
    nav: [
      { text: '爬虫工具库', 
        items: [
          {text:"爬虫工具库",link: 'https://spidertools.cn/'},
          {text:"快速构建爬虫",link: 'https://curlconverter.com/'},
        ]
      },
      { text: 'Python', 
        items: [
          {text:"爬虫",link: '/python/spider/11'},
          {text:"PyQt6",link: '/python/PyQt6/11'},
          {text:"SQLite数据库",link: '/python/SQLite/11'},
        ]
      },
      { text: '国学', 
        items: [
          {text:"六爻",link: '/ChineseCulture/hexagram/index'},
          {text:"大六壬",link: '/ChineseCulture/bigSix/index'},
          { //分割线
            items: [
              {text:"案例分析",link: '/ChineseCulture/case/index'},
            ]
          }
        ]
      },
      { text: '自媒体', 
        items: [
          { //分割线
            items: [
              {text:"VitePress",link: '/selfMedia/vitepress/11'},
            ]
          },
          {text:"公众号",link: '/selfMedia/wechat/index'},
          {text:"小红书",link: '/selfMedia/redBook/index'},
          {text:"抖音",link: '/selfMedia/tiktok/index'},
          {text:"bilibili",link: '/selfMedia/bilibili/index'},
        ]
      },
      { text: '碎碎念', 
        items: [
          {text:"我是谁？",link: '/gossip/me/index'},
          {text:"不知所云",link: '/gossip/daily/index'},
          {text:"捐赠支持",link: '/gossip/donate/index'},
          {text:"交流群",link: '/gossip/group/index'},
        ]
      }
    ],

    sidebar: {
      '/selfMedia/vitepress/': [
        {
          text: 'VitePress入门',
          collapsed: false,
          items: [
            { text: '本地搭建', link: '/selfMedia/vitepress/11' },
            { text: 'GitHub部署', link: '/selfMedia/vitepress/12' }
          ]
        },
        {
          text: '写作相关',
          collapsed: false,
          items: [
            { text: 'Markdown 相关语法', link: '/selfMedia/vitepress/21' },
            { 
              text: 'VitePress默认主题配置',
              items: [
                { text: '概览', link: '/selfMedia/vitepress/221' },
                { text: '导航栏', link: '/selfMedia/vitepress/222' },
                { text: '侧边栏', link: '/selfMedia/vitepress/223' },
                { text: '主页', link: '/selfMedia/vitepress/224' },
                { text: '页脚', link: '/selfMedia/vitepress/225' },
                { text: '徽标', link: '/selfMedia/vitepress/226' },
                { text: '团队页', link: '/selfMedia/vitepress/227' },
                { text: '搜索', link: '/selfMedia/vitepress/228' }
              ]
            }
          ]
        },
        {
          text: '经验学习',
          collapsed: false,
          items: [
            { text: '首页美化', link: '/selfMedia/vitepress/31' },
            { text: '文档美化', link: '/selfMedia/vitepress/32' }
          ]
        },
      ],
      '/python/PyQt6/': [
        {
          text: 'PyQt6入门',
          collapsed: false,
          items: [
            { text: 'PyQt6安装与配置', link: '/python/PyQt6/11' },
            { text: 'PyQt6入门实例', link: '/python/PyQt6/12' },
          ]
        },
        {
          text: 'PyQt6基本控件和使用',
          collapsed: true,
          items: [
            { text: '文本类控件', 
              items: [
                { text: 'QLabel标签', link: '/python/PyQt6/211' },
                { text: 'QLineEdit单行文本框', link: '/python/PyQt6/212' },
                { text: 'QTextEdit多行富文本框', link: '/python/PyQt6/213' },
                { text: 'QPlainTextEdit纯文本', link: '/python/PyQt6/214' },
                { text: 'QSpinBox整数，QDoubleSpinBox小数选择', link: '/python/PyQt6/215' },
                { text: 'QLCDNumber液晶数字显示', link: '/python/PyQt6/216' },
              ]
            },
            { text: '按钮类控件', 
              items: [
                { text: 'QPushButton按钮', link: '/python/PyQt6/221' },
                { text: 'QToolButton工具按钮', link: '/python/PyQt6/222' },
                { text: 'QRadioButton单选以及QCheckBox复选框', link: '/python/PyQt6/223' },
              ]
            },
            { text: '选择列表类控件', 
              items: [
                { text: 'QComboBox下拉组合框', link: '/python/PyQt6/231' },
                { text: 'QFontComboBox字体组合框', link: '/python/PyQt6/232' },
                { text: 'QListWidget列表', link: '/python/PyQt6/233' },
              ]
            },
            { text: '容器控件', 
              items: [
                { text: 'QGroupBox分组框', link: '/python/PyQt6/241' },
                { text: 'QTabWidget选项卡', link: '/python/PyQt6/242' },
                { text: 'QToolBox工具盒', link: '/python/PyQt6/243' },
              ]
            },
            { text: '日期时间类控件', 
              items: [
                { text: 'QDateTimeEdit日期时间', link: '/python/PyQt6/251' },
                { text: 'QCalendarWidget日历', link: '/python/PyQt6/252' },
              ]
            },
            { text: '布局管理', 
              items: [
                { text: '垂直布局和水平布局', link: '/python/PyQt6/261' },
                { text: '网格布局和表单布局', link: '/python/PyQt6/262' },
                { text: '表单布局', link: '/python/PyQt6/263' },
              ]
            },
            { text: '高级控件', 
              items: [
                { text: 'QMenuBar菜单栏', link: '/python/PyQt6/271' },
                { text: '主窗体/工具栏/状态栏', link: '/python/PyQt6/272' },
              ]
            },
            { text: '进度条类控件', 
              items: [
                { text: 'QProgressBar进度条', link: '/python/PyQt6/281' },
              ]
            },
            { text: '树类控件', 
              items: [
                { text: 'QTreeView树视图', link: '/python/PyQt6/291' },
                { text: 'QTreeWidget树控件', link: '/python/PyQt6/292' },
              ]
            },
            { text: '分割类控件', 
              items: [
                { text: '分割线/弹簧/滚动条', link: '/python/PyQt6/2101' },
              ]
            },
            { text: '对话框类控件', 
              items: [
                { text: '对话框', link: '/python/PyQt6/2111' },
                { text: '表格', link: '/python/PyQt6/2112' },
              ]
            },
            { text: 'PyQt6高级应用', 
              items: [
                { text: '基类QObject类介绍以及应用', link: '/python/PyQt6/2121' },
                { text: 'Pyinstaller打包', link: '/python/PyQt6/2122' },
              ]
            }
          ]
        },
        {
          text: 'PyQt6案例应用',
          collapsed: false,
          items: [
            { text: '公用模块', 
              items: [
                { text: '登陆', link: '/python/PyQt6/311' },
              ]
            },
            { text: '国学', 
              items: [
                { text: '六爻', link: '/python/PyQt6/321' },
                { text: '大六壬', link: '/python/PyQt6/322' },
              ]
            }
          ]
        },
      ],
      '/python/SQLite/': [
        {
          text: 'SQLite数据库',
          collapsed: false,
          items: [
            { text: '入门', link: '/python/SQLite/11' },

          ]
        },
      ],
    },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
