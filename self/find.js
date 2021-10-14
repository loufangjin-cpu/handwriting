// 用ES5实现数组的find方法
// ! 在数组中查找元素，如果找到符合条件的元素就返回这个元素，如果没有符合条件的元素就返回 undefined
// ! 且找到后不会继续查找

Array.prototype.findOwn = function(fn) {
  for(let i = 0; i< this.length; i++) {
    const status = fn(this[i], i, this)
    if(status) {
      return this[i]
    }
  }
}

let item = [1, 2, 3].findOwn((item) => {
  return item > 5;
});

console.log(item); // 2