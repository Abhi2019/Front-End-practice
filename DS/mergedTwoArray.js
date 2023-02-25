let arr =[2,4,7,8,11]; let arr1 =[1,3,6,10];

function mergedSortedArray(arr1, arr2){
    const len1= arr1.length;
    const len2= arr2.length;
    let gap = Math.ceil((len1+len2)/2), i,j, isChecked= true;
    while(gap!==1 || isChecked){
        for(i=0; i+gap < len1;i++){
            if(arr1[i]> arr1[i+gap]) {
                let p = arr1[i];
                arr1[i] = arr1[i+gap];
                arr1[i+gap] = p;
            }
        }
        for(j =  gap> len1? gap-len1 : 0; j<len2 && i< len1; i++,j++){
            if(arr1[i] > arr2[j]){
                let p = arr2[j];
                arr2[j] = arr1[i];
                arr1[i] = p;
            }
        }
        if(j < len2){
            for(j = 0; j + gap < len2; j++ ){
                if(arr2[j] > arr2[j+gap]){
                let p = arr2[j+gap];
                arr2[j+gap] =arr2[j];
                arr2[j] = p;
                }
            }
        }
        if(gap ===1){
            isChecked = false;
          }
        gap = Math.ceil(gap/2);
    }
    arr1=[...arr1,...arr2];
    console.log("Array: ", arr1);
}

mergedSortedArray(arr, arr1);