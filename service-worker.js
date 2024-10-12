const CACHE_NAME = 'rj-services-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/RJ%20SERVICES.HTML', // Add other URLs that need to be cached
  '/itr.html',
  '/gst.html',
  '/accounting.html',
  '/jobs.html',
  '/pan_services.html',
  '/financial_consulting.html',
  '/tax_planning.html',
  '/business_registration.html',
  '/bookkeeping.html',
  '/other_services.html',
  '/privecy%20policy.html',
  '/terms&conditions.html',
  '/about.html',
  '/BACK%20.jpg',
  '/RJ%20LOGO.png'
];

// Install service worker and cache files
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch resources from cache if available, else go to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response; // Return cached file
        }
        return fetch(event.request); // Fetch from network if not in cache
      }
    )
  );
});

// Update the service worker and remove old caches
self.addEventListener('activate', function(event) {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
