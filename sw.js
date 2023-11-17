// sw.js


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/src/main.js',
        '/src/assets/descarga.jpeg',
        './public/images/icons/app-icon-114x114.png',
        '/src/components/IMC.vue',
        '/src/components/Inicio.vue',
        '/src/components/Login.vue',
        'src/plugins/vuetify.js',
        '/src/components/RecipeDetails.vue',
        '/src/components/RecipeHipertension.vue',
        '/src/components/Registro.vue',
        '@mdi/font/css/materialdesignicons.css',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open('my-cache').then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // Si la solicitud a la red fue exitosa, actualiza la caché con la nueva respuesta
          if (networkResponse.ok) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          // Si la solicitud a la red falla, intenta devolver la respuesta desde la caché
          return cachedResponse || new Response('No internet connection', { status: 503 });
        });

        return cachedResponse || fetchPromise;
      });
    })
  );
});


