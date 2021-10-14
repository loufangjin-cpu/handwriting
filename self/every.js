// ! 用ES5实现数组的every方法
// 1、一个数组中的元素是否都能符合条件，都符合条件返回true，有一个不符合则返回 false
// ! 2、收到一个空数组，此方法在任何情况下都会返回 true

Array.prototype.everyOwn = function(fn) {
  for(let i = 0; i<this.length; i++) {
    const status = fn(this[i], i, this)
    if(!status) {
      return false
    }
  }
  return true
}
// let flag = [].everyOwn((item) => {
//   return item > 1;
// });

let flag = [1,2,3].everyOwn((item) => {
  return item > 1;
});

console.log(flag); // false