// Registro Turni — service worker
// IMPORTANTE: aumentare CACHE_NAME a ogni release, insieme ad APP_VERSION in index.html e storico.html.
var CACHE_NAME = "turni-cache-v16-2.5.0";
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

// Solo queste origini esterne possono essere messe in cache (librerie statiche e font).
// Google Drive, OAuth e userinfo NON devono mai passare dalla cache.
var CACHEABLE_EXTERNAL_HOSTS = ["cdnjs.cloudflare.com", "fonts.googleapis.com", "fonts.gstatic.com"];

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

function putInCache(req, res){
  if(!res || (res.status !== 200 && res.type !== "opaque")) return;
  var resClone = res.clone();
  caches.open(CACHE_NAME).then(function(cache){ return cache.put(req, resClone); }).catch(function(){});
}

self.addEventListener("fetch", function(event){
  var req = event.request;
  if(req.method !== "GET") return; // POST/PATCH (es. upload su Drive) vanno sempre in rete

  var url = new URL(req.url);
  var sameOrigin = url.origin === self.location.origin;
  var cacheableExternal = CACHEABLE_EXTERNAL_HOSTS.indexOf(url.hostname) !== -1;
  if(!sameOrigin && !cacheableExternal) return; // Google APIs ecc.: il browser gestisce la richiesta normalmente

  var isPage = sameOrigin && (req.mode === "navigate" || /\.html$/.test(url.pathname) || /\/$/.test(url.pathname));

  if(isPage){
    // Rete prima, cache come riserva offline
    event.respondWith(
      fetch(req).then(function(res){
        putInCache(req, res);
        return res;
      }).catch(function(){
        return caches.match(req, { ignoreSearch: true }).then(function(r){
          return r || caches.match("./index.html");
        });
      })
    );
    return;
  }

  // Risorse statiche: cache prima, poi rete
  event.respondWith(
    caches.match(req).then(function(cached){
      if(cached) return cached;
      return fetch(req).then(function(res){
        putInCache(req, res);
        return res;
      });
    })
  );
});
