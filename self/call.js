// ! 手写call 函数步骤
// ! func.call(obj, arg1, arg2, ...)  // call 用法 
/**
 * better comments 自带的五种高亮注释
  // ! 红色的高亮注释
  // ? 蓝色的高亮注释
  // * 绿色的高亮注释
  // todo 橙色的高亮注释
  // // 带删除线的注释
*/
// 可以改变当前函数 this 的指向
// 模拟步骤 挂载函数原型
// ! 将函数设为对象的属性、并且执行该函数
// 然后删除该函数避免污染空间
// 实现原理： 改变函数fn的this执行，并且执行函数fn
// ! f1.call(f2) => 把f1的this绑定在f2上， 并且执行f1 , 注意f1一定是一个函数

Function.prototype.callOwn = function(conetxt, ...args) {
  // this指向调用callOwn 的对象
  if (typeof this !== 'function') {
    // 调用callOwn 的若不是函数则报错
    throw new TypeError('Error')
  }
  // 如果 context 是普通类型，转成对象
  conetxt = Object(conetxt) || window
  conetxt.fn = this
  // 执行绑定之后的函数fn
  const result = conetxt.fn(...args)
  delete conetxt.fn   // 删除该属性
  return result
}




let foo1 = 1
let foo = {
  value: '0000'
}

function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value);
}

bar.callOwn (foo, 'hello', 'world');
