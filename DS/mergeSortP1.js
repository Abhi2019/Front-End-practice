let arr1 = [2, 3, 9, 4, 10, 8];

function merge(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  let l_arr = merge(arr.slice(0, mid));
  let r_arr = merge(arr.slice(mid, arr.length));
  return mergeSort(l_arr, r_arr);
}

function mergeSort(a, b) {
    let c =[];
    while(a && a.length && b && b.length) {
        if(a[0] > b[0]){
            c.push(b.shift());
        } else {
            c.push(a.shift());
        }
    }
    while(a && a.length) {
        c.push(a.shift());
    }
    while(b && b.length){
        c.push(b.shift());
    }
    return c;
}

console.log(merge(arr1));