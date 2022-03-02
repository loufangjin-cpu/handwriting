// 链表 vs 数组
// 链表 =》 js中的原型链就是链表， 增加删除只需要更改指向。但是查找数据必须从头开始查找（存在一个指针关系）
// ! 链表
// 数组是连续的，首位增加和删除元素，后面的所有元素都会跟着移动。
// 数组适用于查找， 链表适用于增加删除。
// 重复的元素在链表中是相邻的

// leedcode 237 删除链表中的节点
// 可以知道当前节点的下一个节点，但是不知道当前节点的上一个节点，
// 所以可以把删除的节点改成下一个节点，把指针指向下一个节点， 这样就删除了当前节点

// !206反转双指针
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表
// 递归
// null=>1=>2=>3=>4
// 4=>3=>2=>1=>null
var reverseList = function(head) {
  return reverse(null, head)
};
const reverse = (pre, cur) => {
  if(cur === null) return pre
  let tmp = cur.next
  cur.next = pre
  return reverse(cur, tmp)
}
// 1=>2=>3=>4
// 4=>3=>2=>1=>null
// function reverseListIterative(ListNode head) {
//   let  prev = null; //前指针
//   let curr = head; //当前指针
//  1、当前指针指向前指针， cur.next = pre
//  2、当前节点和前节点都后移 cur = tmp \ pre = cur
//   while (curr != null) {
//       let nextTemp = curr.next; // 暂存当前节点的下一节点，用于后移
//       curr.next = prev; // 当前指针指向前指针
//       prev = curr; // 前指针后移
//       curr = nextTemp; // 当前指针后移
//   }
//   return prev;
// }
// 第一次curr:1 nextTemp=>2 curr.next=>null prev:1 cur:2 =>
// 指向改变 =》 1.next => null  位置改变：2和1互换， 此时 cur 变成2
//第二次 curr:2 nextTemp=>3 curr.next=>1 prev:2 cur:3 => 2.next => 1

// ! 2: 两数相加

// !(3)leedcode 83  删除排序链表中的重复元素
// const delete = (head) => {
//   let p = head
//   while(p && p.next) {
//     if(p.val === p.next.val) {
//       p.next = p.next.next
//     } else {
//       p = p.next
//     }
//   }
//   return head
// }
// ! (4)141 ： 环形链表