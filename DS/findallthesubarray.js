//find all the subarray whose sum is equal to k 
let arr = [9, 4, 20, 10, 5,3], k1 = 33;

function findAll(arr1,k){
    let sum=0, total =0;
    let hashMap = new Map();
    hashMap.set(0,1);
    for(let num of arr1) {
        sum = sum+num;
        console.log(sum,sum-k, hashMap.get(sum-k),hashMap);
        total+= (hashMap.get(sum-k) || 0);
        hashMap.set(sum, (hashMap.get(sum)|| 0)+1 );
    }
    return total;
}

console.log(findAll(arr,k1));