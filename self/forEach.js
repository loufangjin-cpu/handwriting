// 用ES5实现数组的forEach方法
// ! 循环遍历数组，该方法没有返回值
// 回调函数一共接收3个参数


Array.prototype.forEachOwn = function(fn) {
  for(let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};
[1, 2, 3].forEachOwn((item, index, array) => {
  // 1 0 [1, 2, 3]
  // 2 1 [1, 2, 3]
  // 3 2 [1, 2, 3]
  console.log(item, index, array)
});