// ! 动态规划
// 思考1: 局部最优值 => 通过动态方程,去推算所有最优解
// 思考2: 逆向思维，从下而上进行递推

// ! 509. 斐波那契数
// 寻找动态方程
// Fn(0) = 0
// Fn(1) = 1
// n >= 2 满足 => Fn(n) = Fn(n-1) + Fn(n-2)

// 解1
// var fib1 = function(n) {
//   let fn1 = 0
//   let fn2 = 1
//   function fib (n) {
//       return n <= 1 ? n : (fib(n - 1) + fib(n-2))
//   }
//   return fib(n)
// };
// 解2
// var fib = function(n) {
//   if(n <= 1) return n
//   let fn0 = 0
//   let fn1 = 1
//   for(let i = 2; i<= n; i++) {
//       let sum = fn0 + fn1
//       fn0 = fn1
//       fn1 = sum
//   }
//   return fn1
// };

// ! 1137. 第 N 个泰波那契数
// 第一种使用递归会出现递归超时 =》 递归深度太大
// var fib1 = function(n) {
//     let info = {
//       0: 0,
//       1: 1,
//       2: 1
//   }
//   function tribonacci1(n) {
//       return (info[n] !== undefined) ? info[n] : (tribonacci1(n-3) + tribonacci1(n-2) + tribonacci1(n-1))
//   }
//   return tribonacci1(n)
// };
// console.log(fib1(25))

// 解2: 用尾递归 或把中间结果做一下缓存

// var tribonacci = function(n) {
//   if(n == 0) return 0;
//       if(n == 1 || n == 2) return 1;
//       let first = 0;
//       let second = 1;
//       let third = 1;
//       for(let i = 3; i <= n; i ++) {
//           tmp = first + second + third;
//           first = second;
//           second = third;
//           third = tmp;

//       }
//       return third
// };

//! 动态规划-2 小人二位走路
// 逆向思维 => 从自下而上的方式进行递归（动态规划思想）

// ! 70 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 很典型的动态规划， 寻找动态方程进行递归求解

// !120 三角形最小路径和 (中等)

// ! 152 乘积最大子数组

// ! 198 打家劫舍 （思路有点难理解）

// var rob = function(nums) {
//   if(nums.length === 0 ) return 0
//   let dp0 = 0
//   let dp1 = nums[0]
//   for(let i = 2; i<= nums.length; i++) {
//       let sum = Math.max((nums[i-1] + dp0), dp1)
//       dp0 = dp1
//       dp1 = sum
//   }
//   return dp1
// };

// 188 714 股票买卖
