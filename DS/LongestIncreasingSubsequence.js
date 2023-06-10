const arr = [10, 22, 9, 33, 21, 50, 41, 60];

let dp = Array(arr.length).fill(1);

for(let i =0; i < arr.length ; i++) {
    for (let j=0;  j<i; j++){
        if(arr[i] > arr[j]) {
            dp[i] = Math.max(dp[i], dp[j]+1);
        }
    }
}
let maxLen = 0;
for(let i =0; i < arr.length; i++) {
    if(dp[i] > maxLen) {
        maxLen = dp[i];
    }
}
console.log(maxLen);