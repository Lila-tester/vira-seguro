// Vira Seguro: cache primeiro, atualizando em segundo plano.
// Para forçar uma limpeza total, troque a versão.
var CACHE = 'vira-seguro-v1';
var CORE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable-512.png',
  '/apple-touch-icon.png',
  '/favicon.ico',
  '/favicon-32.png'
];
var FONT_CSS = 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap';

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return c.addAll(CORE).then(function () {
      // Fonte: guarda o CSS e os arquivos que ele aponta. Se falhar, o kit abre com a fonte do sistema.
      return fetch(FONT_CSS).then(function (r) {
        if (!r.ok) return;
        return r.clone().text().then(function (css) {
          var urls = css.match(/https:\/\/fonts\.gstatic\.com\/[^)'"]+/g) || [];
          return Promise.all([c.put(FONT_CSS, r)].concat(urls.map(function (u) {
            return fetch(u, { mode: 'cors' }).then(function (f) { if (f.ok) return c.put(u, f); });
          })));
        });
      }).catch(function () {});
    });
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  var local = url.origin === self.location.origin;
  var font = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!local && !font) return;

  // Navegação sempre responde com o kit (index.html), mesmo com ?query.
  var key = (local && req.mode === 'navigate') ? '/index.html' : req;

  e.respondWith(caches.open(CACHE).then(function (c) {
    return c.match(key, { ignoreSearch: local && req.mode === 'navigate' }).then(function (hit) {
      var update = fetch(req).then(function (res) {
        if (res && (res.ok || res.type === 'opaque')) c.put(key, res.clone());
        return res;
      }).catch(function () { return hit; });
      if (hit) { e.waitUntil(update.catch(function () {})); return hit; }
      return update;
    });
  }));
});
