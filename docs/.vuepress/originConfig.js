module.exports = {
  title: 'LeetCode算法题解',
  head: [['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `/favicon.ico` }]],
  description: 'Just playing around',
  base: '/blog/',
  plugins: [
    [
      'vuepress-plugin-code-copy',
      {
        color: '#f08d49',
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: 'https://henri.ren' },
      { text: 'GitHub', link: 'https://github.com/Henri-Zhang' },
    ],
    sidebar: ['/'],
  },
};
