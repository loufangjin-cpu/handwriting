// ! 树
// 根的位置来进行三种划分: 先序、 中序、后序
// 深度优先、 广度优先
// ! ○ 深度优先： 访问根节点、对根节点的children进行递归操作
// ! ○ 广度优先遍历：队列
//   ■ 新建一个队列，把根节点入队；
//   ■ 把对头出队并访问；
//   ■ 把对头的chaldren挨个入队；
//   ■ 重复第二、三步，直到队列为空。
// 递归: 寻找递归的终止条件
// ! leetCode: 104 二叉树的最大深度
// 深度遍历
// var maxDepth = function(root) {
//   let max = 0
//   function deep(params, length) {
//      if(!params) return
//       if(!params.left && !params.right) {
//           max = Math.max(max, length)
//       }
//       deep(params.left, length + 1)
//       deep(params.right, length + 1)
//  }
//   deep(root, 1)
//      return max
// };
// ! leedCode: 111 二叉树的最小深度
// 广度遍历
// var minDepth = function(root) {
//   if(!root) return 0
//   const que = [[root, 1]]
//   while(que.length) {
//       const [cur, len]= que.shift()
//       if(!cur.left && !cur.right) {
//           return len
//       }
//       if(cur.left) {
//           que.push([cur.left, len + 1])
//       }
//       if(cur.right) {
//           que.push([cur.right, len + 1])
//       }
//   }
// };

// ! leedCode: 94 二叉树的中序遍历
// 使用递归 和 使用栈
// const middle = (root) => {
//   let res = []
// const middleDeep  = (root) => {
//   if(!root) return
//   if(root.left) {
//     middleDeep(root.left)
//   }
//   res.push(root.val)
//   if(root.right) {
//     middleDeep(root.right)
//   }
// }
// middleDeep(root)
// }

// const middleDeep = (root) => {
//   let res = []
//   let stack = []
//   let p = root
//   while(stack.length || p) {
//     while(p) {
//       stack.push(p)
//       p = p.left
//     }
//     let left = stack.pop()
//     res.push(left.val)
//     p = left.right
//   }
// }

// ! leedCode: 112 路径总和 , 返回总和中是否等于目标值
// 深度优先遍历
// var hasPathSum = function(root, targetSum) {
//   if(!root) return false
//   let res = false
//   const sum = (l, n) => {
//       if(!l) return
//       if(!l.left && !l.right && n === targetSum) {
//           res =  true
//       }
//       if(l?.left)  {
//           sum(l.left, l.left.val + n)
//       }
//       if(l?.right) {
//           sum(l.right, l.right.val + n)
//       }
//   }
//   sum(root, root.val)
//   return res
// };
