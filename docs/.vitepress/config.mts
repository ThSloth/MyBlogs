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
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "无聊学习",
    logo: "/yao.jpg",
    search: {
      provider: 'local'
    },
    outline: { label: '目录导航' },
    docFooter: { prev: '上一页', next: '下一页' },
    footer: {
      message: '本站收录内容源自互联网，不对其网站内容或交易负责。如有内容侵犯权益，请联系站长删除相关内容！',
      copyright: 'Copyright © 2024 也可以叫我陈同学',
    },
    nav: [
      { text: '爬虫工具库', 
        items: [
          {text:"JSON格式化",link: '/spiderTools/JSONfomat/'},
          { //分割线
            items: [
              {text:"API",link: '/api-examples'},
            ]
          }
        ]
      },
      { text: 'Python', 
        items: [
          {text:"爬虫",link: '/python/spider/index'},
          {text:"PyQt6",link: '/python/pyQt6/index'},
          { //分割线
            items: [
              {text:"test",link: '/api-examples'},
            ]
          }
        ]
      },
      { text: '国学', 
        items: [
          {text:"六爻",link: '/ChineseCulture/hexagram/index'},
          {text:"大六壬",link: '/ChineseCulture/bigSix/index'},
          { //分割线
            items: [
              {text:"test",link: '/api-examples'},
            ]
          }
        ]
      },
      { text: '自媒体', 
        items: [
          {text:"VitePress",link: '/selfMedia/vitepress/11'},
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
          text: 'VitePress开始',
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
          text: '经验积累',
          collapsed: false,
          items: [
            { text: '本地搭建', link: '/selfMedia/vitepress/11' },
            { text: 'GitHub部署', link: '/selfMedia/vitepress/12' }
          ]
        },
      ]
    },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
