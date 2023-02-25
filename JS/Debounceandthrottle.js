// debounce = debounceCall();

// function debounceCall(){
//     console.log("checked");
//     let timer;
//     return function(event){
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             console.log("Print : ");
//         }, 600);
//     }
// }

// throttle = throttleCall();

// function throttleCall(){
//     let isThrottle;
//     return function(){
//         if(!isThrottle){
//             isThrottle = true;
//             setTimeout(() => {
//                 isThrottle = false;
//                 console.log("THrottled: ");
//             }, 2000);
//         }
//     }
// }


debounce = debounceMethod();

function debounceMethod(){
    let timer;
    return function(event){
        clearInterval(timer);
        timer = setTimeout(()=>{
            console.log("printed", event.target.value);
        }, 1000)
    }
}