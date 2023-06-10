let arr  = ['USER_FOLLOW','USER_FOLLOW','TRENDING_TOPIC',
'TRENDING_TOPIC','TRENDING_TOPIC','TRENDING_TOPIC',
'TRENDING_TOPIC','TRENDING_TOPIC','TRENDING_TOPIC','USER_FOLLOW',
 'DIRECT_MESSAGE','DIRECT_MESSAGE','DIRECT_MESSAGE',
 'DIRECT_MESSAGE',
 'TRENDING_TOPIC']
//  'DIRECT_MESSAGE','DIRECT_MESSAGE','DIRECT_MESSAGE',
//  'DIRECT_MESSAGE','DIRECT_MESSAGE','DIRECT_MESSAGE',
// Output (partial):
// * USER_FOLLOW
// * USER_FOLLOW
// * TRENDING_TOPIC (+ 6 more)
// * DIRECT_MESSAGE (+ 5 more)
// * TRENDING_TOPIC
let arrEvents = [], tCount = 0, d_count=0, tArr = [], dArr =[];
const tEvents = ()=>{
    tCount =0;
    if(tArr.length> 1) {
        arrEvents.push({"TRENDING_TOPIC" : tArr});
    } else if (tArr.length ===1){
        arrEvents.push(...tArr);
    }
    tArr = [];
}

const dEvents = ()=>{
    d_count =0;
    if(dArr.length> 4) {
        arrEvents.push({"DIRECT_MESSAGE" : dArr});
    }  else if (dArr.length > 0){
        arrEvents.push(...dArr);
    }
    dArr = [];
}

for(let i =0; i < arr.length; i++){
    console.log("Test",arr[i]);
    if(arr[i]==="USER_FOLLOW"){
        tCount && tEvents();
        d_count && dEvents ();
        arrEvents.push(arr[i]);
    } else if (arr[i]==="TRENDING_TOPIC") {
        d_count && dEvents ();
        tCount++;
        tArr.push(arr[i]);
        if(i === arr.length-1) {
            arrEvents.push(arr[i]);
        }
    } else if(arr[i]==="DIRECT_MESSAGE"){
        tCount && tEvents();
        d_count++;
        dArr.push(arr[i]);
        if(i === arr.length-1) {
            arrEvents.push(arr[i]);
        }
    }
}
console.log("arr: ", arrEvents);