let str ="wpwkew";
let start =0;
let slidlingMap = {};
let longestStr = "";
let max =0;
for(let i=0 ; i< str.length; i++){
    let char = str[i];
    console.log("slidlingMap :", slidlingMap,char)
    if(slidlingMap[char] >= start){
        start = slidlingMap[char]+1;
    }
    slidlingMap[char] = i;
    const curStr = str.substring(start, i+1);
    console.log("result: ", start,curStr);
    if(curStr.length > max) {
        max = curStr.length;
        longestStr = curStr;
    }

}
console.log("longestStr :", longestStr)