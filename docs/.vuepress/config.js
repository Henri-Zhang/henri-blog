module.exports = {
  title: 'LeetCode算法题解',
  head: [['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `/favicon.ico` }]],
  description: 'Just playing around',
  base: '/blog/',
  themeConfig: {
    nav: [{ text: 'GitHub', link: 'https://github.com/Henri-Zhang' }],
    sidebar: [
      '/',
      {
        title: '简单',
        collapsable: true,
        children: []
      },
      {
        title: '中等',
        collapsable: true,
        children: ['/中等/535.TinyURL 的加密与解密']
      },
      {
        title: '困难',
        collapsable: true,
        children: []
      }
    ]
  }
};
