let arr = [2,3,1,1,4];
let r =0;
function jump () {
    for(let i =0; i < arr.length; i++) {
        if(r < i) {
            return false;
        }
        r = Math.max(r,i+arr[i]);
    }
    return true;
}

console.log(jump());
// console.log(isjumped);