//ABC => ABC, ACB, BAC, BCA, CAB, CBA;
let str ="ABC";
function perm(str){
    if(str.length===1){
        return [str]
    }
    let arr =[];
    for(let i =0; i < str.length; i++){
        let start =str[i];
        let remain = str.slice(0,i)+ str.slice(i+1, str.length);
        let datas = perm(remain);
        datas.forEach((item)=>{
            //console.log(item);
            arr.push(start+item);
        });
    }
    
    return arr;
}
console.log(perm(str));