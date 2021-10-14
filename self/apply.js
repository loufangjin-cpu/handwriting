// ! apply 手写实现
//! fn.apply(obj, [a1, a2, a3, ....])
// 和call原理类似， 就是通过函数原型，把函数fn绑定在传入的对象或者window上，并且执行绑定之后的函数。执行结束后删除绑定的fn

Function.prototype.applyOwn = function(context, args) {
  if(typeof this !== 'function')  throw new TypeError('Error')
  // ! 如果 context 是普通类型，转成对象
  context = Object(context) || window
  context.fn = this
  const result = args ? context.fn(...args) : context.fn()
  delete context.fn
  return result
}

let foo = {
  value: 1
};
function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value);
}



bar.applyOwn (foo, ['kevin', 18]);
