// ! 堆
// 记住三个特殊位置
// 节点 [1,3,6,5,9,8]
// 索引  0,1,2,3,4,5
//! 左侧子节点位置 (index * 2) +1
//! 右侧子节点位置 (index * 2) +2
//! 父节点位置 (index - 1) / 2
// 插入：数组中push操作， 然后上移(和父级交换，直到父的值小于等于当前插入值)
// 删除堆顶: 用数组最后一位元素替换数组中第一位元素，为什么不直接删除第一位元素?
  // - 替换之后开始下移 (左右节点进行交换，直到节点大于等于当前堆顶值)
// 获取堆顶：数组的头部
// 获取堆的大小；数组长度
// ! 215 数组中的第K个最大元素
 // 第k个最大， 考虑最小堆， 逐步的把节点插入到堆里面，如果堆的长度大于k, 删除堆定元素，
 // 以此类推， 所有节点遍历完成之后，留下的堆顶就是第K个最大节点
// ! 347 前K个高频元素
// 1、对所有元素储存进入字典， 这样得到了所有元素的次数（大小）
// 2、对所有元素的大小进行最小堆处理， 这样在插入的过程中，
// 第k个之后的栈顶大小的所对应的key ， 就是对应的K个高频的元素


class MinHeap {
  constructor() {
    this.heap = []
  }
  swap(index, parentIndex) {
    const temp = this.heap[parentIndex]
    this.heap[parentIndex] = this.heap[index]
    this.heap[index] = temp
  }
  getParaentIndex(index) {
    // 获取父节点的位置
    // return index - 1 >> 1
    return Math.floor((index - 1) / 2)
  }
  getLeftIndex(index) {
    return index * 2 + 1
  }
  getRightIndex(index) {
    return index * 2 + 2
  }
  shiftUp(index) {
    if (index === 0) return
    const parentIndex = this.getParaentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(index, parentIndex)
      this.shiftUp(parentIndex)
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    // 最小堆，当前节点一定小于子节点
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  pop() {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  pick() {
    return this.heap[0]
  }
  size() {
    return this.heap.length
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
const h = new MinHeap()
nums.forEach(item => {
    h.insert(item)
    if(h.size() > k) {
        h.pop()
    }
})
  return h.pick()
};