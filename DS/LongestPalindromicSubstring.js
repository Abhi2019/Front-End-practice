let str ="forgeeksskeegfor";
let len = str.length;
let max = 1;
let dp = Array(len).fill(0).map(()=>{
    return Array(len).fill(0);
});

for(let i =0; i < len ; i++) {
    dp[i][i] =true;
}

for(let i =0; i < len ; i++) {
   if(str[i] === str[i+1]){
    dp[i][i+1] =true;
    max =2;
   }
}

for(let k =2; k < len; k++){
    for(let i =0; i < len-k; i++){
        let j = i+k;
        if(str[i]===str[j] && dp[i+1][j-1]){
            dp[i][j] = true;
            max = Math.max(max, j-i+1);
        }
    }
}

console.log("max: ",max, len);