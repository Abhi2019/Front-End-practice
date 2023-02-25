let arr1 = [2,3,9,4,10,8];

function merge(arr){
    if(arr.length <2){
        return arr;
    }
    const mid = Math.floor((arr.length)/2);
    const lSort = merge(arr.slice(0,mid));
    const RSort = merge(arr.slice(mid,arr.length));
    return mergeSort(lSort, RSort);
}

function mergeSort(a,b) {
    if(a && b) {
        let c =[];
        while( a.length && b.length) {
            if(a[0] > b [0]){
                c.push(b.shift());
            } else {
                c.push(a.shift());
            }
        }
        while(a.length){
            c.push(a.shift()); 
        }
    
        while(b.length){
            c.push(b.shift());
        }
        return c;
    }
   
}

console.log(merge(arr1));