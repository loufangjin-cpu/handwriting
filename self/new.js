// ! 手写new 函数
// 特性：
  // ? 创建一个新对象， 
  // ? 将新对象的内置属性proto 指向构造函数的原型对象(prototype), 
  // ? 修改this指向(将构造函数的this执行新对象)， 
  // ? 返回这个新对象
// ! 优化点
  // [].shift.call(arguments)
  // 返回值为object类型的值还是全新的obj值

function New() {
  // 创建新对象
    const obj = {}
  // 将新对象的内置属性proto指向构造函数的原型对象(prototype)
  const constructor = [...arguments][0]
  // const constructor = [].shift.call(arguments)
  obj.__proto__ = constructor.prototype
  // 修改this指向
  let res = constructor.apply(obj, [...arguments].slice(1))

  // 将构造函数的this指向obj，这样obj就可以访问到构造函数中的属性
  // let res = constructor.apply(obj, arguments)
  // 返回值为object类型的值， 或者是返回全新对象
  return res instanceof Object ? res : obj
}
function Animal (name,age) {
   this.name = name
   this.age = age
}
Animal.prototype.say = function() {
  console.log('say')
}
let objNew = New(Animal, 'name', 'age');
// 等价 var objNew = new A(1, 2);
console.log(objNew)
objNew.say()