//find all the subarray whose sum is equal to k 
let arr = [9, 4, 20, 3, 10, 5], k1 = 33;

let sum =0, total =0;
let hash = new Map();
hash.set(0,1);
for(nums of arr){
    sum = sum+nums;
    total+= (hash.get(sum-k1) || 0);
    hash.set(sum, (hash.get(sum)|| 0)+1);
}

console.log(hash, total);