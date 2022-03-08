// !贪心算法
// 力保每个阶段局部最优，从而达全局最优
// 当然结果不一定是最优

// ! 455 分饼干
// 优先满足胃口叫小者
// var findContentChildren = function(g, s) {
//   function funSort (a, b) {
//       return a - b
//   }
//   g.sort(funSort)
//   s.sort(funSort)
//   let sum = 0
//   for(let i = 0; i<s.length; i++) {
//       if(s[i] >= g[sum]) {
//           sum += 1
//       }
//   }
//   return sum
// };

// ! 122 买卖股票的最佳时机
// 知道昨天的价格比今天低，那就是昨天买，今天卖

// var maxProfit = function(prices) {
//   let print = 0
//   for(let i = 1; i< prices.length; i++) {
//       if(prices[i] > prices[i-1]) {
//           print = prices[i] - prices[i-1] + print
//       }
//   }
//   return print
// };

