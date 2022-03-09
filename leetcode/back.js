// !回溯算法
// 一条路走到底， 不同就回来继续走另外一条路
// ! 46. 全排列 时间复杂度o(n!) 
// 递归所有情况， 碰到重复的就回溯， 收集所有达到终点的情况，并返回
// var permute = function(nums) {
//   const res = []
//   const breakBack = (path) => {
//       if(path.length === nums.length) {
//           res.push(path)
//           return
//       }
//       nums.forEach((item) => {
//           if(path.includes(item)) return
//           breakBack(path.concat(item))
//       })
//   }
//   breakBack([])
//   return res
// };
// console.log([1,2,3])

// ! 78 子集

