
self.addEventListener('install', function(event) {
    event.waitUntil(caches.open('static').then((cache)=>{
        console.log("Opened Cache");
        return cache.addAll(["/","index.html","/login","/signup"]);
    }))
 });
 
 self.addEventListener('activate', function(event) {
   const cacheWhitelist = [];
   cacheWhitelist.push(CACHE_NAME);
 
   event.waitUntil(caches.keys().then((cacheNames)=>Promise.all(
       cacheNames.map((cacheName)=>{
           if(!cacheWhitelist.includes(cacheName)){
               return caches.delete(cacheName);
           }
        })
       ))
   )
 });
 
 self.addEventListener('fetch', function(event) {
   event.respondWith(caches.match(event.request).then(()=>{
       return fetch(event.request).catch((err)=>console.log(err));
   }))
   
 });