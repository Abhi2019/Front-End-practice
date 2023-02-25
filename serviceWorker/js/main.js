
if('serviceWorker' in navigator){
    console.log("Service worker started");
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./serviceWorker.js')
        .then(res=> console.log(`The service worker is registered ${JSON.stringify(res)}`))
        .catch(error => console.log(`The service worker is not registered ${error}`))
    })
}