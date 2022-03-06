//! 分而治之 思想
// 把一个大问题拆解成若干小问题， 然后递归解决小问题合并成原来的大问题
// !场景1: 归并排序
// 分：获取左右树、 解：递归左右树 、 合: 左右树集合 + 对应的根元素

// ! 374 猜数字大小
// 解法1： 二分搜索，但是必须是连续的数据 O(log n)
// 解法2: 分而治之、 分、 解 、 合 O(log n)

//! 226 反转二叉树
// 分：获取左右树、解：递归反转左右树、合：把左右树换位置放到对应的根节点上
// var invertTree = function(root) {
//   if(!root) return null
//       return {
//           val: root.val,
//           left: invertTree(root.right),
//           right: invertTree(root.left)
//       }
// };

// ! 100 相同的树
// 获取两棵树的左右，递归的判断左、右树是否相同、最后合在一起跟是否相同
// var isSameTree = function(p, q) {
//   if(!p && !q) return true
//   if(p && q && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
//       return true
//   }
//   return false
// };

// ! 101 对称二叉树
// 遍历 左 右

// var isSymmetric = function(root) {
//   if(!root) return true
//   const deep = (l1, l2) => {
//       if(!l1 && !l2) return true
//       if(l1 && l2 && (l1.val === l2.val) && deep(l1.left, l2.right) && deep(l1.right, l2.left)) {
//           return true
//       }
//       return false
//   }
//  return deep(root.left, root.right)
// };