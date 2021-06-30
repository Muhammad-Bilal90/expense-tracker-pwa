
const cacheName = "v1";

const cacheAssets = [
    './',
    './static/js/bundle.js',
    './static/css/main.f16f8172.chunk.css',
    './sstatic/js/2.f8be9857.chunk.js',
    './static/js/2.f8be9857.chunk.js',
    './index.html',
];

// Creating Install Event

self.addEventListener('install', e => {
    console.log('Service Worker: Installed');
    e.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            console.log('Service Worker: Catching Files');
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
        );
});

// Creating Fetch Event

self.addEventListener('fetch', e => {
    console.log('Fetch event for ', e.request.url);
    e.respondWith(
        caches.match(e.request)
        .then(response => {
            if(response) {
                console.log('Found ', e.request.url, ' in cache');
                return response;
            }
            console.log('Network request for ', e.request.url);
            return fetch(e.request)
            .then(response => {
                return caches.open(cacheName)
                        .then(cache => {
                        cache.put(e.request.url, response.clone());
                        return response;
                    });
            });
        })
        .catch(err => {
            console.log('error in loading page', err);
        })
    );
});

// Creating Activate Event

self.addEventListener('activate', e => {
    console.log('Activating new service worker...');
    const cacheAllowList = [cacheName];
    e.waitUntil(
        caches.keys()
        .then(cachesNames => {
            return Promise.all(
                cachesNames.map(cacheName => {
                    if(cacheAllowList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
