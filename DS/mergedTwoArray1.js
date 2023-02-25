let arr1 =[2,4,7,8,11]; let arr2 =[1,3,6,10];
let l1 = arr1.length;
let l2 = arr2.length;
let gap = Math.ceil((l1+l2)/2), i =0, j=0, isCheck= true;
function mergedSortedArray() {
    while(gap !==1 || isCheck){
        for(i=0; i+gap < l1; i++) {
            if(arr1[i] > arr1[i+gap]) {
                let n = arr1[i+gap];
                arr1[i+gap] = arr1[i];
                arr1[i] = n;
            }
        }
    
        for(j= gap>l1 ? gap-l1 : 0; j< l2 && i<l1; i++,j++){
            if(arr1[i] > arr2[j]) {
                let n = arr2[j];
                arr2[j] = arr1[i];
                arr1[i] = n;
            }
        }
        if(j < l2) {
            for(j=0; j+gap < l2; j++) {
                if(arr2[j] > arr2[j+gap]) {
                    let n = arr2[j+gap];
                    arr2[j+gap] = arr2[j];
                    arr2[j] = n;
                }
            } 
        }
        if (gap ===1) {
            isCheck = false;
        }
        gap = Math.ceil(gap/2);
    }
    arr1 =[...arr1, ...arr2];
    console.log(arr1);
}
mergedSortedArray();
