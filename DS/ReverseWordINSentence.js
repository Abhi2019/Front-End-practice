let str = "Hi, Sir!"
//op: "iH, riS!"

let rxgx = /[0-9a-zA-Z]/;
let arr = str.split(" ");
let newStr = "";
function reverseWord(words){
    let arrWord = words.split(""); let  j = arrWord.length - 1;
    if(!arrWord[j].match(rxgx)){
        j = j-1;
    }
    for(let i =0; i< Math.floor(arrWord.length/2);  i++){
        if(arrWord[i].match(rxgx)){
            let s = arrWord[i];
            arrWord[i] = arrWord[j];
            arrWord[j] = s;
        }
        j--;
    }
    return arrWord.join("");
}
for (let i =0; i< arr.length; i++) {
    newStr+= reverseWord(arr[i]);
    if(i !== arr.length-1) {
        newStr+= " ";
    }
}
console.log("New String", newStr);