module.exports = {
  title: 'LeetCode算法题解',
  description: 'Just playing around',
  base: 'blog',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }],
    // sidebar: ['/简单/', '/中等/', '/困难/'],
    sidebar: [
      {
        title: '中等',
        collapsable: true,
        children: ['/中等/']
      }
    ],
    sidebarDepth: 2
  }
};
