let nums = [-1,-100,3,99], k=2;
function rotate(nums,k) {
    let len = nums.length;
    k = k%len;
   // nums = nums.reverse();
    for(let i =0; i < Math.floor(len/2); i++){
        [nums[i], nums[len-i-1]] =[nums[len-i-1], nums[i]]
    }

    for(let i=0; i < Math.floor(k/2); i++) {
        [nums[i], nums[k-i-1]] =[nums[k-i-1], nums[i]];
    }
    console.log("nums", nums);
    // 4-2+2
    //7-3+1 //5
    //2+4 -2
    //
    for(let i=k; i < Math.floor((len+k)/2); i++) {
        [nums[i], nums[len-i+1]] =[nums[len-i+1], nums[i]];
        console.log("result: ",nums);
    }

}

console.log(rotate(nums,k));
