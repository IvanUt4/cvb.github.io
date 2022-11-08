self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll([
            "./",
            "./src/index.css",
            "./images/icons/icon-96x96.png",
            "./images/icons/icon-128x128.png"      
            ]);
        })
    );
});



self.addEventListener("fetch",e =>{
    console.log(`Fetch request ${e.request.url}`);
})