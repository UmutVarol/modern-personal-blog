const CACHE_NAME = 'muv-blog-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/posts.html',
    '/contact.html',
    '/styles.css',
    '/main.js',
    '/manifest.json'
];

// 1. Kurulum (Install) - Dosyaları Önbelleğe (Cache) Al
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Önbellek başarıyla açıldı.');
                return cache.addAll(urlsToCache);
            })
    );
});

// 2. Fetch (Ağ İsteklerini Yakalama) - Çevrimdışıyken Cache'den Oku
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Eğer istek önbellekte varsa onu döndür
                if (response) {
                    return response;
                }
                // Yoksa normal ağ (network) isteği yap
                return fetch(event.request);
            })
    );
});

// 3. Aktifleştirme (Activate) - Eski Önbellekleri Temizle
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});