module.exports = {
  title: 'LeetCode算法题解',
  head: [['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `/favicon.ico` }]],
  description: 'Just playing around',
  base: '/blog/',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }, { text: 'GitHub', link: 'https://github.com/Henri-Zhang' }],
    sidebar: [
      '/',
      {
        title: '简单',
        collapsable: true,
        children: [
          '/简单/LCP 1.猜数字',
          '/简单/1108. IP 地址无效化',
          '/简单/1221. 分割平衡字符串',
          '/简单/237. 删除链表中的节点',
          '/简单/78. 子集',
        ],
      },
      {
        title: '中等',
        collapsable: true,
        children: [
          '/中等/535.TinyURL 的加密与解密',
          '/中等/109. 有序链表转换二叉搜索树',
          '/中等/400. 第N个数字',
          '/中等/319. 灯泡开关',
        ],
      },
      {
        title: '困难',
        collapsable: true,
        children: ['/困难/51. N皇后'],
      },
    ],
  },
};
