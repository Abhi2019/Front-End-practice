/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    let arr1 = [];
    nums.sort((a,b)=> a-b);
    let n = nums.length;
    for(let i =0; i< n -3; i++){
        for(let j =i+1; j < n-2; j++){
            if(j==1 || (j>1 && nums[j]!==nums[j-1])){
            let low = j+1, high = nums.length-1;
            let sum = target - nums[j] -nums[i];
            while(low< high){
                 if(nums[low]+ nums[high] === sum) {
                    arr1.push([nums[i], nums[j], nums[low], nums[high]]);
                    while(low< high && nums[low]===nums[low+1]){
                        low++;
                    }
                     while(low< high && nums[high]===nums[high-1]){
                        high--;
                    }
                     low++;
                    high--;
                 } else if (nums[low]+ nums[high]< sum){
                     low++;
                 } else {
                     high--;
                 }
                   
                }
               
            }
        }
        }
        return arr1;
};