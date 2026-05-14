// sw.js - VoltCalc Pro (Service Worker Profissional) // Cache inteligente + offline + performance

const CACHE_NAME = "voltcalc-pro-v1";

const STATIC_ASSETS = [ "/", "/index.html", "/manifest.json" ];

// INSTALL - pré-cache self.addEventListener("install", (event) => { event.waitUntil( caches.open(CACHE_NAME).then((cache) => { return cache.addAll(STATIC_ASSETS); }) ); self.skipWaiting(); });

// ACTIVATE - limpeza de cache antigo self.addEventListener("activate", (event) => { event.waitUntil( caches.keys().then((keys) => { return Promise.all( keys.map((key) => { if (key !== CACHE_NAME) { return caches.delete(key); } }) ); }) ); self.clients.claim(); });

// FETCH - estratégia híbrida (cache first + fallback) self.addEventListener("fetch", (event) => { const request = event.request;

// Ignora Firebase e APIs externas (sempre rede) if (request.url.includes("firestore") || request.url.includes("googleapis")) { return; }

event.respondWith( caches.match(request).then((cachedResponse) => { if (cachedResponse) { return cachedResponse; }

return fetch(request)
    .then((networkResponse) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(request, networkResponse.clone());
        return networkResponse;
      });
    })
    .catch(() => {
      // fallback offline simples
      if (request.mode === "navigate") {
        return caches.match("/");
      }
    });
})

); });