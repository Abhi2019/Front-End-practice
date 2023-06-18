let s = "applepenapple",
  wordDict = ["apple", "pen"];

let dp = Array(s.length + 1).fill(false);
dp[0] = true;

for (let i = 1; i <= s.length; i++) {
  for (let j = 0; j < i; j++) {
    console.log("dp[j] : ", j, dp[j], s.substring(j, i));
    if (dp[j] && wordDict.includes(s.substring(j, i))) {
      console.log("Inserted", dp[i]);
      dp[i] = true;
      break;
    }
  }
}

console.log("dp : ", dp);