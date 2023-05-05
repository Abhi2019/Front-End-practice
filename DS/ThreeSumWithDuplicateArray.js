let arr = [-1, 0, 1, 2, -1, -4];
let k = 0;
let arr1 = [];
arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length - 2; i++) {
  if (i == 0 || (i > 0 && arr[i] !== arr[i - 1])) {
    let low = i + 1,
      high = arr.length - 1,
      sum = 0 - arr[i];
    while (low < high) {
      if (arr[low] + arr[high] === sum) {
        arr1.push([arr[i], arr[low], arr[high]]);
        while (low < high && arr[low] === arr[low + 1]) {
          low++;
        }
        while (low < high && arr[high] === arr[high - 1]) {
          high--;
        }
        low++; high--;
      } else if (arr[low] + arr[high] < sum){
          low++
      } else {
          high--;
      }
    }
  }
}
console.log("arr : " , arr1);
