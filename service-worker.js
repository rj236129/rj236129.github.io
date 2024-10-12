const CACHE_NAME = 'v1_cache_rj236129';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',   // Replace with actual stylesheet file
  '/app.js',       // Replace with actual JavaScript file
  '/images/logo.png',  // Replace with actual image file(s)
  // Add more assets if necessary
];

// Install Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate Service Worker
self.addEventListener('activate', function(event) {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName); // Delete old cache
          }
        })
      );
    })
  );
});

// Fetch requests and serve from cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;  // Return from cache if available
        }
        return fetch(event.request); // Fetch from network if not in cache
      })
  );
});
