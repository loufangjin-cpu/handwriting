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
// 广度优先搜索的性质保证了最先搜索到的叶子节点的深度一定最小。
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
// 使用递归: 挨个从顶节点开始递归，根节点放在左右递归的中间
// 迭代版: 栈从根开始全部入栈左节点，然后挨个栈顶出栈推到数组,再挨个寻找右节点。
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

// ! 589. N 叉树的前序遍历
// 二叉树只有左右， N 叉树那就用children来表示
// 时间复杂和空间复杂都是o(n)
// 第一种方式是递归、 第二种方式是迭代(栈)
// 思路：递归: push节点， 然后遍历所有的子节点，以此递归处理
// 栈: 先进后出原则，根先入，然后取出根对其遍历，
// 让子节点依次从右到左进行入栈，保证出栈的时候左先出。


// var preorder = function(root) {
//   const res = [];
//   if (root == null) {
//       return res;
//   }

//   const stack = [];
//   stack.push(root);
//   while (stack.length) {
//       const node = stack.pop();
//       res.push(node.val);
//       for (let i = node.children.length - 1; i >= 0; --i) {
//           stack.push(node.children[i]);
//       }
//   }
//   return res;
// };

// ! 101. 对称二叉树
// 递归: 拿出根的左右节点依次递归做对比
// 左右对比 考虑到广度遍历使用队列，先进先出原则进一一对比，造成两棵树进行对比
// 进入: 一棵树节点的左 和 一颗树节点 右分别进入， 一棵树节点的右 和 一颗树节点左分别进入
// 出队: 拿出队投的两个值进行比较， 最后队列长度没有就true， 否则任何一个地方放不想等返回false

// ! 108. 将有序数组转换为二叉搜索树
// 有序数组 => 满足中序排序
// 将有序数组每次都以中间的节点作为根节点，进行左右依次递归处理

