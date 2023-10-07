if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).then((registration) => {
      // Registro exitoso del Service Worker
      console.log('Service Worker registrado con éxito:', registration);

      // Solicitar permisos para notificaciones
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          // Permiso de notificación concedido, puedes enviar notificaciones
          console.log('Permiso de notificación concedido');
        }
      });
    }).catch((error) => {
      console.error('Error al registrar el Service Worker:', error);
    });
  });
}
