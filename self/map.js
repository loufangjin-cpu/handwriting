// ! 用ES5实现数组的map方法，
// ? 遍历arr向新数组中push每一个传入fn函数，并且带上对应的三个参数，并且执行函数, 然后返回执行之后的新数组
// 返回值是一个由原数组每个元素执行回调函数的结果组成的新数组
// array.map(callback, thisValue)
//callback 回调函数 内部 currentValue,index, arr
//thisValue 对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
// 如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象

Array.prototype.mapOwn = function(fn) {
  let arr = [];
  for(let i = 0; i < this.length; i++) {
    // ? 当传入 parseInt 的时候， fn其实就是parseInt,
    // arr.push(parseInt(this[i], i, this));
    // [parseInt(1,0,arr),parseInt(2,1,arr), parseInt(3,2,arr)]
    // 第三个参数被parseInt忽视了
    arr.push(fn(this[i], i, this));
  }
  return arr;
};
// 用法
// let array = [1, 2, 3].mapOwn((item, index, arr) => {
//   return item * 2;
// });

let array = [1, 2, 3].mapOwn(parseInt);
console.log('array', array)

// ! map 面试题 ["1","2","3"].map(parseInt)答案是多少？
// 答案是[1,NaN,NaN]
// parseInt("1",0)=1, //radix 0 忽略
//parseInt("2",1)= NAN, // radix 1 不在区间之内 返回NAN
// parseInt("3",2)= NAN // radix 2 在区间之内， 但是3不符合2进制规则 返回NAN
// ! 案例
// parseInt(‘99’,10); // 如果字符串为十进制内容，该参数可省略
// parseInt(‘1001’,10); // ‘1001’同样符合十进制, 转为十进制整数
// parseInt(‘1001’,2); // ‘1001’ 符合二进制规则, 转为十进制整数
// ! 特殊 parseInt(‘1022’,2); //‘10’部分属于二进制，但‘22’不是，将开头有效的部分提取并转成十进制
// ! parseInt 用法 parseInt(string, radix)
// radix可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。
// 当忽略参数 radix, 如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数
// 参数 radix 存在, 表示string是否符合radix制定的规则，符合就转成十进制，不符合就返回NAN
// !  十进制转二进制 parseInt(value).toString(2) => parseInt(7).toString(2) => '111'
// !  二进制转十进制 parseInt(value ,2) => parseInt(111,2) => 7


