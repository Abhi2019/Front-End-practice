let nums = [100,4,200,1,3,2];

let obj = {};
for(let i =0; i < nums.length; i++) {
    if(!obj[nums[i]]){
        obj[nums[i]] = 1;
    }
}

let largestCS =0;

for(let i =0; i < nums.length; i++){
    let start = nums[i];
    console.log("start: ", start);
    if(!obj[start-1]) {
        let currentC = 0;
        let currentN = nums[i];
        console.log("currentN",currentN);
        while(obj[currentN]) {
           console.log("currentN1",currentN);
            currentC++;
            currentN++;
        }
        largestCS = Math.max(largestCS,currentC);
    }
   
}

console.log(largestCS);
