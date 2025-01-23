const CACHE_NAME = 'liuketh-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/favicon.png',
  '/grid.svg',
  '/fonts/custom-font.woff2',
  '/image/index/logo_w.png',
  '/image/index/me.webp',
];

// Service Worker 安装事件
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

// Service Worker 激活事件
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 拦截请求事件
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果在缓存中找到响应，则返回缓存的响应
        if (response) {
          return response;
        }

        // 否则发起网络请求
        return fetch(event.request)
          .then((response) => {
            // 检查是否收到有效的响应
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // 克隆响应
            const responseToCache = response.clone();

            // 将响应添加到缓存
            caches.open(CACHE_NAME)
              .then((cache) => {
                // 只缓存静态资源
                if (event.request.url.match(/\.(js|css|png|jpg|jpeg|gif|webp|svg|woff2)$/)) {
                  cache.put(event.request, responseToCache);
                }
              });

            return response;
          });
      })
  );
}); 