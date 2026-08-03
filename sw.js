var CACHE_NAME = "turni-cache-v9";
var CORE_ASSETS = [
  "./",
  "./index.html",
  "./storico.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
];

self.addEventListener("install", function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return Promise.all(CORE_ASSETS.map(function(url){
        return cache.add(new Request(url, { mode: "no-cors" })).catch(function(){});
      }));
    })
  );
});

self.addEventListener("message", function(event){
  if(event.data && event.data.type === "SKIP_WAITING"){
    self.skipWaiting();
  }
});

self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE_NAME; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(event){
  var req = event.request;
  var isOwnPage = req.url.indexOf(self.location.origin) === 0 && (req.url.endsWith(".html") || req.url.endsWith("/"));

  if(isOwnPage){
    event.respondWith(
      fetch(req).then(function(res){
        var resClone = res.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(req, resClone); });
        return res;
      }).catch(function(){ return caches.match(req).then(function(r){ return r || caches.match("./index.html"); }); })
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(function(cached){
      if(cached) return cached;
      return fetch(req).then(function(res){
        var resClone = res.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(req, resClone); });
        return res;
      }).catch(function(){});
    })
  );
});
