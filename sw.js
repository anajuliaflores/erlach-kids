// Incrementa a versão para forçar atualização em todos os dispositivos
const CACHE = 'erlach-kids-v3';

self.addEventListener('install', e => {
  self.skipWaiting(); // Força ativação imediata
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(['./index.html','./manifest.json']))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim()) // Assume controle imediato
  );
});

self.addEventListener('fetch', e => {
  // Network first - sempre tenta buscar versão mais recente
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});