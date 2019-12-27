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
          '/简单/1025. 除数博弈',
          '/简单/1290. 二进制链表转整数',
          '/简单/1281. 整数的各位积和之差',
          '/简单/746. 使用最小花费爬楼梯',
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
          '/中等/114. 二叉树展开为链表',
          '/中等/814. 二叉树剪枝',
          '/中等/1227. 飞机座位分配概率',
          '/中等/1008. 先序遍历构造二叉树',
          '/中等/513. 找树左下角的值',
          '/中等/207. 课程表',
          '/中等/17. 电话号码的字母组合',
          '/中等/1282. 用户分组',
          '/中等/797. 所有可能的路径',
          '/中等/48. 旋转图像',
          '/中等/921. 使括号有效的最少添加',
          '/中等/94. 二叉树的中序遍历',
          '/中等/39. 组合总和',
          '/中等/147. 对链表进行插入排序',
          '/中等/11. 盛最多水的容器',
          '/中等/338. 比特位计数',
          '/中等/238. 除自身以外数组的乘积',
          '/中等/701. 二叉搜索树中的插入操作',
        ],
      },
      {
        title: '困难',
        collapsable: true,
        children: [
          '/困难/51. N皇后',
          '/困难/145. 二叉树的后序遍历',
          '/困难/980. 不同路径 III',
          '/困难/1172. 餐盘栈',
          '/困难/57. 插入区间',
        ],
      },
    ],
  },
};
