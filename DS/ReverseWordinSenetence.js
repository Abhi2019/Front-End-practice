let str = "Hi, Sir!"
//o/p => iH, irS!
//school => 
let obj = {
  ",": ",",
  "!": "!"
}

function reverseWord(word) {
    let j;
    if(obj[word[word.length-1]]){
        j = word.length-2;
    } else {
        j = word.length-1;
    }
    word = splitWord(word);
    for(let i =0; i < Math.floor(word.length/2); i++){
       
        if(obj[word[i]]) {
            j--;
            continue;
        }
        let w = word[i];
        word[i] = word[j];
        word[j] = w;
        j--;
    }
    return word.join("");
}
function splitWord(str){
    let arr= [];
    for(let i =0; i< str.length; i++) {
            arr.push(str[i]);
    }
    return arr;
}

function splitWordOnSpace(str){
    let arr= [], str1="";
    for(let i =0; i< str.length; i++) {
       
        if(str[i]!== " "){
            //console.log("strings: ", str[i]);
            str1+=str[i]
        } else {
            arr.push(str1);
            str1="";
        }
    }
    arr.push(str1);
    return arr;
}

function reverse(str){
    let str1="";
    let strWords = splitWordOnSpace(str);
    for(let i =0; i < strWords.length; i++){

        str1+= reverseWord(strWords[i]);
        if(i!==strWords.length-1){
            str1+=" ";
        }
    }
    console.log("str", str1);
}

reverse(str);