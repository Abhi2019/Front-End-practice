// Input: s = "babad"
// Output: "bab"

let str ="forgeeksskeegfor";
let len = str.length;
let dp = Array(len).fill(0).map(()=>{return Array(len).fill(0)});
let maxLength = 1;

for(let i =0 ; i < len; i++) {
    dp[i][i] = true;
}

for(let i =0; i < len; i++) {
    if(str[i] === str[i+1]){
        dp[i][i+1]= true;
    }
    maxLength =2;
}

for(let m =2 ; m < len; m++) {

}


console.log(dp);