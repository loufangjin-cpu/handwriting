// 用ES5实现数组的reduce方法
// 1、初始值不传时的特殊处理：会默认用数组中的第一个元素
// 2、函数的返回结果会作为下一次循环的 prev
// 3、回调函数一共接收4个参数
// 上一次调用回调时返回的值、正在处理的元素、正在处理的元素的索引，正在遍历的集合对象


Array.prototype.reduceOwn = function(fn, prev) {

  for(let i = 0; i< this.length; i++) {
    if(prev === undefined) {
      prev = fn(this[i], this[i + 1], i + 1, this)
      // 第一次 i = 0 ， prev没有值第一次进入 prev = 3 ， 
      // 第二次 i =1 , prev = 3 => 3 + 2 = 5
      // 第三次 i = 2 , prev = 5 => 5 + 3 = 8
      //! i ++ 此处尤为重要， 否则会出现第一次i的值会叠加
      i++
    } else {
      prev = fn(prev, this[i], i, this)
    }
  }

  // 函数的返回结果会作为下一次循环的 prev

  return prev
}

let total = [1, 2, 3].reduceOwn((prev, next, currentIndex, array) => {
  return prev + next;
});

console.log(total); // 6