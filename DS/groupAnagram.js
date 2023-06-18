let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let map = new Map();
for (let i = 0; i < strs.length; i++) {
  let a = strs[i].split("").sort().join("");
  console.log("a", a);
  if (map.has(a)) {
    let m = map.get(a);
    map.set(a, m.concat(strs[i]));
  } else {
    map.set(a, [strs[i]]);
  }
}
let keys = Array.from(map.values())
console.log(keys);
