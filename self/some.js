// ! 用ES5实现数组的some方法
// 在数组中查找、如果找到一个符合条件的元素就返回true，如果所有元素都不符合条件就返回 false；
// 一共接收3个参数，同 map 方法一样



Array.prototype.someOwn = function(fn) {
  for(let i = 0; i<this.length; i++) {
    const status = fn(this[i], i, this)
    if(status) {
      return true
    }
  }
  return false
}
let flag = [1, 2, 3].someOwn((item) => {
  return item > 1;
});
console.log('flag', flag)