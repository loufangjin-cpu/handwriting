// !字典
// 键值对的形式存储： 一种储存唯一的值的数据结构
// 增删改查: set , delete, get , has

// ! code 1 两数之和 => 找对象
// 给定目标值 target 的那 两个整数
// nums = [2,7,11,15], target = 9  =》输出 [0,1]
// let nums = [2,7,1,8]
// let target = 9
// const targetFun = (nums, target) => {
//   let map = new Map()
//   let result = []
//   nums.forEach((item, index) => {
//     let res = target - item
//     if(map.has(res)) {
//       result.push([map.get(res), index])
//     } else {
//       map.set(item, index)
//     }
//   })
//   return result
// }
// console.log(targetFun(nums, 9))

// ! 3 无重复 字符的 最长子串
// 假设初始化都为0 不重复
// let s = "pwwkew"
// let s = "abba"
// let s = "ababababac"
// const maxChild = (s) => {
//   let start = 0 // 滑动窗口移动
//   let res = 0 // 最后的结果
//   let map = new Map()
//   for(let i=0; i< s.length; i++) {
//     if(map.has(s[i])  && map.get(s[i]) >= start) {
 // 滑动窗口移动到重复位置的下一位
//       start = map.get(s[i]) + 1
//     }
//    利用字典的特性， 重复的数据存入会覆盖原有的数据
//     map.set(s[i], i)
//     res = Math.max(res, i - start + 1)
//   }
//   return res
// }
// console.log(maxChild(s))


//! code - 76 最小覆盖子串 （困难）