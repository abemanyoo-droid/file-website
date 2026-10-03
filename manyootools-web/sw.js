// Manyoo — service worker sederhana untuk app-shell offline.
// Hanya meng-cache file yang sama-origin (index.html, manifest, icon).
// Library dari CDN (pdf-lib, JSZip, qrcodejs, gif.js, gifuct-js, dll) TIDAK di-cache di sini,
// jadi tool yang butuh library itu tetap perlu koneksi internet saat pertama dipakai.

const CACHE_NAME = 'manyoo-shell-v4';
const APP_SHELL = ['./', './index.html', './manifest.json', './icon.svg', './apple-touch-icon.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Hanya tangani request sama-origin (app shell). Request ke CDN pihak ketiga
  // dibiarkan lewat jalur normal browser (network), tidak dicampuri service worker ini.
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.ok) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
