import { defineConfig } from 'vitepress'

// GitHub Pages 部署在自定义域名 https://docs.anotheru.cn/ 下，故 base 设为 '/'。
// 本地 dev 时 base 不影响预览。
export default defineConfig({
  lang: 'zh-CN',
  title: 'Anotheru',
  description: 'Anotheru 用户使用说明与更新日志',
  base: '/',
  lastUpdated: true,
  cleanUrls: true,
  srcExclude: ['README.md', '_notes/**', 'CHANGELOG.md'], // 维护者说明/运维笔记，不作为站点页面
  // 浏览器标签页图标（favicon）。
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
  ],
  themeConfig: {
    logo: '/logo.png', // 导航栏左上角 logo
    nav: [
      { text: '首页', link: '/' },
      { text: '下载', link: '/download/' },
      { text: '更新日志', link: '/changelog/' },
    ],
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '主题',
    returnToTopLabel: '回到顶部',
    lastUpdatedText: '最后更新',
  },
})
