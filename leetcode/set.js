// ! 集合 无序唯一
// new Set() 、detete、 has、 size , forEach
// 交集、并集、差集、去重
// key ， value 都是所对应的某一项，是相同的

// ! 1\ 添加基本类型
// let mySet = new Set()
// mySet.add(1)
// mySet.add(5)
// mySet.add(5)
// mySet.add('some text')

//! 2\ 添加引用类型
// let mySet = new Set()

// let o = { a: 1, b: 2 }
// mySet.add(o)
// mySet.add({ a: 1, b: 2 })

// console.log(mySet.has(o))
// mySet.delete(5)

// 迭代
// let mySet = new Set()
// mySet.add(1)
// mySet.add({ a: 1, b: 2 })
// for (let [key, value] of mySet.entries()) console.log(key, value)
// array 和 set 互转
// const myArr = [...mySet]
// const myArr = Array.from(mySet)

const mySet2 = [1, 2, 3, 4, 4]
const mySet3 = new Set([1,2,2,45])
//! 交集 两个都有的值
const intersection = [...new Set(mySet2)].filter((x) => mySet3.has(x))

//! 差集 一个有一个没有
const difference = [...new Set(mySet2)].filter((x) => !mySet3.has(x))

//! 并集 (差集 + 某一个集合)
const coll = [...new Set(mySet3), ...new Set(difference)]

console.log(intersection)
console.log(difference)
console.log(coll)