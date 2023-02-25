const cacheName ="v2";

const cacheObject =[
    'index.html',
    'indexs.html',
    'index.css',
    'contact.html',
    'hpylori.jpg'
]

self.addEventListener('install', (e)=>{
    console.log("The SW is installed");
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
            console.log('caching files');
            cache.addAll(cacheObject);
        }).then(()=>{
            self.skipWaiting();
        })
    )
})

self.addEventListener('activate', (e)=>{
    console.log("The SW is activated");
    e.waitUntil(
        caches.keys().then((cachesName)=>{
            return Promise.all(
                cachesName.map((item)=>{
                    if(item!== cacheName){
                        console.log("delete other version");
                        return caches.delete(item);
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', (e)=>{
    e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))
});