const CACHE_NAME = 'hawkerhunt-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/all-centres.html',
  '/centre.html',
  '/stall.html',
  '/submit-review.html',
  '/admin.html',
  '/manifest.json',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    self.clients.claim()
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return the cached response or fetch from network
        return response || fetch(event.request);
      })
      .catch(() => {
        // If both fail, return offline fallback
        return caches.match('/index.html');
      })
  );
});

// Listen for push notification events
self.addEventListener('push', event => {
  console.log('Push notification received:', event);
});

// Listen for notification click events
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});