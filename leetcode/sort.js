// 搜索排序 重点
// 排序
// ● 冒泡排序、选择排序 、插入排序、归并排序、快速排序
// ● 分析各种算法时间复杂和空间复杂度
// 搜索： 二分搜索、顺序搜索

// ! 冒泡排序 - 冒气泡相邻交换 O(n^2)
// 冒气泡、每一次循环完成之后，顶部始终是本轮的最大值或者是最小值
//  const Bubbling= (arr) => {
//   for(let i = 0; i< arr.length - 1; i++) {
//     for(let j = i+1; j <= arr.length - 1; j++) {
//       if(arr[i] <  arr[j]) {
//         const tmp = arr[j]
//         arr[j] = arr[i]
//         arr[i] = tmp
//       }
//     }
//   }
//   return arr
//  }
//  console.log(Bubbling([1,22,3,4,5,5,8,18,9]))
// ! 选择排序 - 选美女后位置交换 O(n^2)
// 选择一位元素，去找数组中的最小值和最大值，每一次执行完成之后， 第一位始终是最大值或者是最小值
// ! 选择最美人位置，把它放在第一位，交换第一位和最美人之间的位置
// ! 注意选择排序的最后一项 j<= arr.length - 1
// const select = (arr) => {
//   for(let i = 0; i < arr.length -1; i++) {
//     let index = i
//     // debugger
//     for(let j = i + 1; j<= arr.length - 1; j++) {
//       if(arr[j] < arr[index]) {
//         index = j
//       }
//     }
//     if(index !== i) {
//         const temp = arr[i]
//         arr[i] = arr[index]
//         arr[index] = temp
//     }
//   }
//   return arr
// }
// console.log(select([1,22,3,4,5,5,8,18,9]))
// let arr = [1,22,3,4,5,5,8,18,9]
// for(let i = 0; i <= arr.length - 1; i++ ) {
//   console.log(arr[i])
// }

// ! 插入排序 O(n^2)
// 从第二个开始往前比较、寻找完的部分是排序好的，比他大的往后排
// ! 先有序， 再插入到对应的位置 => 把插入的值插入到排好序的数组中的对应的位置
// const insert = (arr) => {
//   for(let i = 1; i<= arr.length - 1; i++) {
//     let j = i
//     const tmp = arr[i]
//     while(j) {
//       if(arr[j-1] < tmp) {
//         arr[j] = arr[j-1]
//       } else {
//         break
//       }
//       j--
//     }
//     arr[j] = tmp
//   }
//   return arr
// }

// console.log(insert([1,22,3,4]))

// !归并排序 o(n log n)  => 二分操作就联想到log n
// 先一分为二、分到最小,然后再进合并
// 合并的时候：进行左右对比， 每次合并可以保证左面 ， 右面的数组是一个有序的数组
// 对有序的左右数组分别比较大小，然后进行推送 ，输出最后的值
function merge1(arr) {
  debugger
  if (arr.length <= 1) return arr
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle, arr.length)
  // 分解得足够的小, 同时每一次的返回都是有序的
  const orderLeft = merge1(left)
  const orderRight = merge1(right)
  const res = []
  while (orderLeft.length || orderRight.length) {
    if (orderLeft.length && orderRight.length) {
      res.push(
        orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
      )
    } else if (orderLeft.length) {
      res.push(orderLeft.shift())
    } else if (orderRight.length) {
      res.push(orderRight.shift())
    }
  }
  return res
}

console.log(merge1([1, 2, 3, 1, 4, 5, 6, 6, 7]))
