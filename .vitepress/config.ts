import { defineConfig } from 'vitepress'

// GitHub Pages 部署在 https://<user>.github.io/au-docs/ ，故 base 设为仓库名。
// 本地 dev 时 base 不影响预览。
export default defineConfig({
  lang: 'zh-CN',
  title: 'AnotherU',
  description: 'AnotherU 用户使用说明与更新日志',
  base: '/au-docs/',
  lastUpdated: true,
  cleanUrls: true,
  srcExclude: ['README.md', '_notes/**', 'CHANGELOG.md'], // 维护者说明/运维笔记，不作为站点页面
  // 浏览器标签页图标（favicon）。public/ 下资源在站点根，故带 base 前缀。
  head: [
    ['link', { rel: 'icon', href: '/au-docs/favicon.ico' }],
  ],
  themeConfig: {
    logo: '/logo.png', // 导航栏左上角 logo
    nav: [
      { text: '首页', link: '/' },
      { text: '使用说明', link: '/guide/' },
      { text: '更新日志', link: '/changelog/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '使用说明',
          items: [
            { text: '概览', link: '/guide/' },
            { text: 'Au 触摸条', link: '/guide/au-touch-bar' },
          ],
        },
      ],
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '主题',
    returnToTopLabel: '回到顶部',
    lastUpdatedText: '最后更新',
  },
})
