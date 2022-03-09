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
// 两种方案： n房间选择偷还是不偷， n偷那么n-1就不偷，两者取最大值
// 1:偷 n -1 房间的最大金额数
// 2: 偷 n - 2 房间的最大金额数 加上 当前房间的金额数
// 去两个的最大值
// Si 代表偷i间房屋的金额数
// Hi 表示 第i间房屋的金额数
// 偷第一个房间的最大金额数 S0 = H0
// 偷第二个房间的最大金额数 S1 = max(S0, H1)
// 偷第三个房间的最大金额数 S2 = max(S1, H2 + S0)
// 偷第四个房间的最大金额数 S3 = max(S2, H3 + S1)
// 偷取第N个房间的最大金额数 Sn = max(Sn-1, Hn-1 + Sn-2)
// var rob = function(nums) {
//   if(nums.length === 0 ) return 0
//   let Sn2 = 0
//   let Sn1 = nums[0]
//   for(let i = 2; i<= nums.length; i++) {
//       let sum = Math.max(Sn1, (nums[i-1] + Sn2))
//       Sn2 = Sn1
//       Sn1 = sum
//   }
//   return Sn1
// };

// ! 188 714 股票买卖 （难理解）
// 当天卖出（ +prices[i]收益） 和 买入（ -prices[i]收益）

// 当天交易完成有股票：前一天没有股票(需要买入、并减少prices[i] 的收益)，前一天有股票
// dp[i][1]=max{dp[i−1][1], dp[i−1][0] − prices[i]}
// 当天交易完没有股票：（前一天没有股票， 前一天有股票 + prices[i]收益 - fee手续费 ）
// dp[i][0]=max{dp[i−1][0],  dp[i−1][1]+ prices[i]− fee}
// 由此推算 可以知道第 0 天交易结束的时候有 dp[0][0]= 0 以及 dp[0][1]= −prices[0] 两种可能

// var maxProfit = function(prices, fee) {
//   const n = prices.length;
//   const dp = new Array(n).fill(0).map(v => new Array(2).fill(0));
//   dp[0][0] = 0, dp[0][1] = -prices[0];
//   for (let i = 1; i < n; ++i) {
//       dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
//       dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
//   }
//   return dp[n - 1][0];
// };