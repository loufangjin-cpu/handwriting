const target = 55
const info = [
  {
    id: 100,
    name: 'xx',
    children: [{
      id: 50,
      name: 'xx',
      children: [{
        id: 40,
        name: 'xx',
        children: null
      }]
    },{
      id: 55,
      name: 'xx',
      children: [{
        id: 56,
        children: null
      }]
    },{
      id: 58,
      children: [{
        id: 1000,
        children: null
      }]
    }]
  }
]
const deep = (info) => {
  const a = info.map((item) => {
    if(item.id == target) {
      return
    }
    return {
      ...item,
      status: true,
      children: item.children &&  deep(item.children)
    }
  })
  return JSON.stringify(a)
}
console.log(deep(info))