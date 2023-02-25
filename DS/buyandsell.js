let prices =[7,1,5,3,6,4];
let buy_stock= prices[0], sell_stock=0, max_profit=0, start, end;
for(let i =1; i < prices.length; i++) {
    if(prices[i] < buy_stock){
        buy_stock =prices[i];
        start = i;
    }
    sell_stock = prices[i];
    if( buy_stock > sell_stock) {
        continue;
    }
    let d = sell_stock - buy_stock;
    if(max_profit < d){
        max_profit = d;
        end = i;
    }
}

console.log("max-profit: ", max_profit, start,end);