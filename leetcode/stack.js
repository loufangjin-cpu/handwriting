// ! 栈
//! 有效括号 - 栈
const arrHeckBrackets = ["(", ")","{", "}", "[", "]", "}"]
const heckBrackets = (arr) => {
  let mapInfo = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  let stack = []
  const length = arr.length
  if(length % 2 === 1) {
    return false
  }
  for(let i = 0; i < length; i++) {
    let item = arr[i]
    if(mapInfo[item]) {
      stack.push(item)
    } else {
      let first = stack.pop()
      if(mapInfo[first] !== item) return false
    }
  }
  return !stack.length
}
heckBrackets(arrHeckBrackets)