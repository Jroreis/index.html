// ATENÇÃO: Incrementado para v2 para disparar a atualização automática no seu próximo deploy
const CACHE_NAME = 'voltcalc-v2'; 
const ASSETS = ['/', '/index.html', '/21310.png', '/manifest.json'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => k !== CACHE_NAME ? caches.delete(k) : null)))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, res.clone());
          return res;
        });
      })
      .catch(() => caches.match(e.request))
  );
});
