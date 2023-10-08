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