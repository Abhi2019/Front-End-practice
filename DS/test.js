let arr =[1,2,3,4,5,6,7];
const target=8;
// let sum;
// //0/p [1,5,2];

// //function twoSum()
// // let obj ={};
// // for(let i =0; i< arr.length; i++) {
// //     if(obj[arr[i]] === undefined){
// //         obj[arr[i]]=1;
// //     }
// // }
// // for(let i =0; i< arr.length; i++) {
// //    sum = target - arr[i];
// // //    console.log(obj);
// //    if(obj[sum]) {
// //     console.log(arr[i], sum);
// //     obj[sum]=0;
// //     obj[arr[i]]=0;
// //    }
// // }

for(let i =0; i < arr.length; i++){
    let map = new Map();
    let c_sum = target - arr[i];
    for(let j =i+1; j < arr.length; j++){
        if(map.get(c_sum- arr[j])){
            console.log(arr[i], arr[j], c_sum-arr[j]);
        }
        map.set(arr[j],1);
    }
    // if(map.get(c_sum)){
    //     console.log(arr[i], target-arr[i]);
    // }
}
