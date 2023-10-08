/*You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
 
// Input: prices = [7,1,5,3,6,4]
// Output: 5

// Input: prices = [7,6,4,3,1]
// Output: 0

var maxProfit = function(prices) {
    let minProfit = prices[0];
 let maxProfit = 0;

 for(let i=0; i<prices.length; i++){
     
     minProfit = Math.min(minProfit,prices[i]);
     let profit = prices[i] - minProfit;
     maxProfit = Math.max(profit,maxProfit)
 }
return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))