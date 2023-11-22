importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDbyX1XWzsDbnpKOwXRzZit3bsdqVj_7aU",
  authDomain: "login-3b71d.firebaseapp.com",
  databaseURL: "https://login-3b71d-default-rtdb.firebaseio.com",
  projectId: "login-3b71d",
  storageBucket: "login-3b71d.appspot.com",
  messagingSenderId: "820859591697",
  appId: "1:820859591697:web:ac7bf9907ba8678a0125b0",
  measurementId: "G-QNDWSXX79S"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification?.title || payload.data?.title || 'Default Title';
    const notificationBody = payload.notification?.body || payload.data?.body || 'Default Body';

    // Muestra la notificación directamente en la interfaz de usuario
    const notificationOptions = {
        body: notificationBody,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});