//Search an element  in a sorted array

let arr =[2,4,10,12,22,30];
let k =90;

let low =0; high = arr.length;

while(low< high) {
    let mid = Math.floor((low+high)/2);
    if(arr[mid] === k){
        return mid;
    }
    if(arr[mid]> k) {
        high = mid;
    } else {
        low = mid+1;
    }
}