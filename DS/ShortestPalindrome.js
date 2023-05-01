let str ="aacecaaa";

let rev = str.split("").reverse().join("");
//aacecaaa#aaacecaa
let newPalindrome = str+'#'+rev;

let prefixArr = new Array(newPalindrome.length).fill(0);


for(let i =1; i < newPalindrome.length; i++){
    let j = prefixArr[i-1];
    //console.log("prefixArr", j, i,newPalindrome[i])
    while(j > 0 && newPalindrome[i]!==newPalindrome[j]) {
        j = prefixArr[j-1];
       // console.log("prefixArr[j-1] : ", j)
    }
    if(newPalindrome[i] === newPalindrome[j]) {
        prefixArr[i] = j+1
    }
   // console.log("newPalindrome : ", newPalindrome[i], newPalindrome[j],prefixArr)
}
let prefixLength = prefixArr[newPalindrome.length - 1];
let suffix = rev.substring(0, str.length - prefixLength);
const shortPalindrome = suffix +str;
console.log("prefixArr : ",prefixArr, prefixLength,suffix,shortPalindrome);