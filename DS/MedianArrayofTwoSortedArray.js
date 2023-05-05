let a1 = [4];
let a2 = [1,2,3,5,6];
// let arr = [2, 3, 5, 8, 9, 10, 12, 14, 16, 18, 19, 20]; o/p: 11
// console.log("Length : ", arr.length);
//2, 3, 5 |8,9,19 , 20
// 10,12,14 | 16,18


//2, 3, 5, 8,9 | 19 , 20
// 10 | 12,14, 16,18

function findMedian(arr1, arr2){
    let n1 = arr1.length;
    let n2 = arr2.length;
    console.log("Length : ", n1,n2);
    if(n1 < n2) {
         [arr1, arr2] =[arr2, arr1];
         [n1,n2] =[n2,n1];
    }

    let low =0, high = n1;
    while(low <= high){
        const partX = Math.floor((low+high)/2);
        const partY = Math.floor((n1+n2+1)/2) - partX;
        const left1 = partX ===0 ? -Infinity : arr1[partX -1];
        const left2= partY ===0 ? -Infinity : arr2[partY -1];
        const right1 =  partX ===n1 ? Infinity : arr1[partX];
        const right2 = partY ===n2 ? Infinity : arr2[partY];
        console.log("test: ",low, high, partX, partY,left1, left2,right1,right2);
        if(left1 <= right2 && left2 <= right1){
            if((n1+n2)%2 ==0) {
                return ((Math.max(left1,left2) + Math.min(right1,right2))/2);
            } else{
                return Math.max(left1,left2);
            }
        } else if(left1>  right2) {
            high = partX-1
            console.log("high: ", high);
        } else {
            low = partX+1; 
             console.log("low: ", high);
        }

    }

}

console.log(findMedian(a1, a2));