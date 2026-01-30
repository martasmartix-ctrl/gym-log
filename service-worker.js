self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("gym-log-v1").then(cache => {
      return cache.addAll([
        "gym-log.html",
        "manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
