let nums = [0,3,7,2,5,8,4,6,0,1]
let obj ={}
for(let i =0;i < nums.length; i++) {
    if(obj[nums[i]]== undefined){
        obj[nums[i]] = 1;
    }
}
let largestN =0;
let countC =0;
for(let i =0;i < nums.length; i++ ){
    let start = nums[i];
    if(!obj[start-1]){
        let currentC =0;
        let currentN= nums[i];
        while(obj[currentN]){
            currentN++;
            currentC++;
        }
        largestN = Math.max(largestN,currentC);
    }
}

console.log("largestConseq: ", largestN);