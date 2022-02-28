// ! 第一部分基本实现 1-6
// 第一次封装同步实现promise
// promise初试结构、
//resolve、reject搭建和实现，
//throw异常、
// 状态只能执行一次、then方法
// ! 第二部分实现异步情况 7-8
// 异步调用数据
// 异步中执行多个then回调 需要储存数组进行callback
// ! 第三部分then方法的返回结果 9-
// 同步修改then方法返回的结果
// 异步修改then方法返回的结果
function MyPromise (executor) {
  this.PromiseState = null
  this.PromiseStatus = 'pending'
  this.callBack = []
  const self = this
  function resolve(data) {
    if(self.PromiseStatus !== 'pending') return
    self.PromiseStatus = 'resolved'
    self.PromiseState = data
    self.callBack.forEach(item => {
      item.onSuccess(data)
    })
  }
  function rejected(data) {
    if(self.PromiseStatus !== 'pending') return
    self.PromiseStatus = 'rejected'
    self.PromiseState = data
    self.callBack.forEach(item => {
      item.onFail(data)
    })
  }
  try {
    executor(resolve, rejected)
  } catch (error) {
    rejected(error)
  }

}
MyPromise.prototype.then = function(onSuccess, onFail) {
  const self = this
  // 返回一个new MyPromise 就是防止then 方法里面返回then
  return new MyPromise((resolve, reject) => {
    const callBackPromise = function(type) {
      try {
        const result = type(self.PromiseState)
        if(result instanceof myPromise) {
          result.then((s) => {
            resolve(s)
          }, (f) => {
            reject(f)
          })
        } else {
          resolve(result)
        }
      } catch (error) {
        reject(error)
      }
    }
    if( self.PromiseStatus === 'resolved') {
      callBackPromise(onSuccess)
    }
    if( self.PromiseStatus === 'rejected') {
      onFail(self.PromiseState)
    }
    // 异步调用的时候储存状态
    if(self.PromiseStatus === 'pending') {
      self.callBack.push({
        onSuccess,
        onFail
      })
    }
  })
}

let myPromise = new MyPromise((resolve, rejected) => {
  // resolve('成功')
  // rejected('失败')
  // throw "error";
  setTimeout(() => {
    resolve('成功')
  }, 100)
})
myPromise.then((success) => {
  console.log('success1', success)
}, (fail) => {
  console.log('fail', fail)
})
myPromise.then((success) => {
  console.log('success2', success)
}, (fail) => {
  console.log('fail', fail)
})

myPromise.prototype.all = function(promises) {
  return new myPromise((resolve, reject) => {
    // 收集所欲promis返回的值，然后以数组的形式统一返回
    let arr = []
    let count = 0
    for(let i = 0; i<promises.length; i++) {
      promises[i].then(s => {
        count ++ 
        arr[i] = s
        if(count === promises.length) {
          resolve(arr)
        }
      }, r => {
        reject(r)
      })
    }
  })
}
