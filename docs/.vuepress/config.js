module.exports = {
  title: 'LeetCode算法题解',
  head: [['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `/favicon.ico` }]],
  description: 'Just playing around',
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: 'Home', link: 'https://henri.ren' },
      { text: 'GitHub', link: 'https://github.com/Henri-Zhang' },
    ],
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
          '/简单/938. 二叉搜索树的范围和',
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
          '/中等/807. 保持城市天际线',
          '/中等/654. 最大二叉树',
          '/中等/950. 按递增顺序显示卡牌',
          '/中等/46. 全排列',
          '/中等/22. 括号生成',
          '/中等/3. 无重复字符的最长子串',
          '/中等/59. 螺旋矩阵 II',
          '/中等/877. 石子游戏',
          '/中等/77. 组合',
        ],
      },
      {
        title: '困难',
        collapsable: true,
        children: ['/困难/51. N皇后', '/困难/145. 二叉树的后序遍历', '/困难/980. 不同路径 III'],
      },
    ],
  },
};
