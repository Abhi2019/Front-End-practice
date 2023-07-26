let intervals = [[0,2],[2,3],[4,4],[0,1],[5,7],[4,5],[0,0]];

intervals = intervals.sort(function(a, b) {
    return  a[0] -b [0];
  });
let arr = [intervals[0]];
for (let i = 1; i < intervals.length; i++) {
  let inter = intervals[i];
  const n = arr.length;
  const n1 = inter[0];
  const n2 = inter[1];
  const a1 = arr[n - 1][0];
  const a2 = arr[n - 1][1];
  if (n1 <= arr[n - 1][1] && ((n1!==0 || n2!==0 || intervals.length >2 )) && (a1!==0 || a2!==0 || intervals.length >2)) {
    if (n1 <= a1 && n2 <= a2) {
      arr[n - 1] = [n1, a2];
    } else if (n1 <= a1 && n2 >= a2) {
      arr[n - 1] = [n1, n2];
    } else if (n1 >= a1 && n2 <= a2) {
      arr[n - 1] = [a1, a2];
    } else if (n1 >= a1 && n2 >= a2) {
      arr[n - 1] = [a1, n2];
    } else {
      arr[n - 1] = [arr[n - 1][0], inter[1]];
    }
  } else {
    arr[n] = intervals[i];
  }
}
console.log(arr);
