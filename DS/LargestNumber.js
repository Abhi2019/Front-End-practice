let nums = [0,0,0];
 let reg = /^0*$/;
let n1 = "1200";
console.log((reg.test(n1)));
for(let i =0; i< nums.length; i++) {
    for(let j=i+1; j < nums.length;j++){
        let m = nums[i].toString();
        let n = nums[j].toString();
        if(m+n < n+m) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
}
console.log(nums.join("").toString())

// for()