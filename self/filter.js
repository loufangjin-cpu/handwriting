// ! 返回过滤之后的新数组
// ! 用ES5实现数组的filter方法
// ? 满足条件的情况下才push到新数组

let array = [1, 2, 3].filter((item, index, arr) => {
  return item >= 2;
});

console.log(array); // [3]


Array.prototype.filterOwn = function(fn) {
  let newArr = []
  for(let i = 0; i<this.length; i++) {
    fn(this[i], i, this) && newArr.push(this[i])
  }
  return newArr
}
