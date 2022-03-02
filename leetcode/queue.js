// ! 队列
// 【t-3000, t】 时间范围都被计算在内， 这样计算出最近请求次数？
// 言外之意就是给定一个数组、满足这个条件区间的最大个数是多少
const queueList = [1, 100, 3001, 3002]
//【1-3000， 1】=》 1在内
//【100-3000， 100】=》 1、100 在内
//【3001 -3000， 3001】=》【1， 3001】=》1，100，3001 在内
//【3002 - 3000， 3002】 =》 【2，3002】此时1不满足条件了，需要剔除1 =》 【100，3001， 3002】
// 以此类推满足的最大个数就是3个
const queFun = (arr) => {
  let queue = []
  const targetFun = (t) => {
    queue.push(t)
    while(queue[0] < t-3000) {
      queue.shift()
    }
  }
  arr.map(item => {
    targetFun(item)
  })
  return queue.length
}
console.log(queFun(queueList))