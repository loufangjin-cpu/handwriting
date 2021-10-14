// ! 用法 func.bind(thisArg, ar, ar2)
// bind 方法可以绑定 this 指向
// bind 方法返回一个绑定后的函数
// 如果绑定的函数被 new，当前函数的 this 就是当前的实例
// new 出来的实例要保证原函数的原型对象上的属性不能丢失

Function.prototype.bind1 = function(context) {
  if(typeof this !== 'function'){
    throw new TypeError(this + 'must be a function');
  }
  const _this = this
  // 获取context之外的参数
  const args = [...arguments].slice(1)
  // 定义bind函数
  const bind = function() {
    // 可能返回了一个构造函数，我们可以 new F()，所以需要判断
    // ! 这了的arguments 是返回的函数的调用参数
    if(_this instanceof bind) {
      // 这了的 arguments 是什么
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, [...args, ...arguments])
  }
  // 返回bind 函数

  return bind
}

var foo = {
  value: 1
};

function bar(name, age, ...arg) {
  console.log(name)
  console.log(age)
  console.log(this.value);
  console.log('函数调用的参数=>', ...arg)
}
// 把bar函数的this指向foo, 返回绑定之后的函数
var bind2 = bar.bind1(foo,'name','age')
console.log(bind2('返回函数的调用参数'))
