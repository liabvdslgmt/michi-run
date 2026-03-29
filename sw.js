const CACHE_NAME = 'michi-run-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo.png',
  './michi-gris.png',
  './suelo.png',
  './piedrita.png',
  './nube.png',
  './salto.mp3',
  './choque.mp3',
  './musica-fondo.mp3',
  './click.mp3',
  './gameover.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
