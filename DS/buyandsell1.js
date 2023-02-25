let prices =[7,1,5,3,6,4];
let buy_stock=prices[0],sell_stock, max =0;
for(let i =1; i < prices.length; i++) {
    if( prices[i] < buy_stock) {
        buy_stock = prices[i];
    }
    sell_stock = prices[i];
    console.log("dd",buy_stock,sell_stock );
    if(buy_stock > sell_stock){
        continue;
    }
    let profit = sell_stock-buy_stock;
   
    if(max < profit) {
        max = profit;
    }
}
console.log("Profit", max);