<template>
  <v-app>
    <v-app-bar app color="#5DB075"> <!-- Aquí agregamos el color personalizado -->
      <!-- Contenido de la AppBar -->
    </v-app-bar>

    <v-main>
      <router-view></router-view> 
    </v-main>
  </v-app>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDbyX1XWzsDbnpKOwXRzZit3bsdqVj_7aU",
  authDomain: "login-3b71d.firebaseapp.com",
  databaseURL: "https://login-3b71d-default-rtdb.firebaseio.com",
  projectId: "login-3b71d",
  storageBucket: "login-3b71d.appspot.com",
  messagingSenderId: "820859591697",
  appId: "1:820859591697:web:ac7bf9907ba8678a0125b0",
  measurementId: "G-QNDWSXX79S"
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging();

// Configurar el oyente para manejar notificaciones cuando la aplicación está en primer plano.
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);

  const notificationTitle = payload.notification?.title || payload.data?.title || 'Default Title';
  const notificationBody = payload.notification?.body || payload.data?.body || 'Default Body';

  // Muestra la notificación directamente en la interfaz de usuario
  const notificationOptions = {
    body: notificationBody,
  };
  
  console.log('Showing notification in foreground:', notificationTitle, notificationOptions);

  new Notification(notificationTitle, notificationOptions);
});


getToken(messaging, { vapidKey: 'BDmk8uvZPHOX7T3HdxpoY-Se6WVRN0K-5C5yGiI2OKMHTyCxk1W7upUrZ6lpsC6MUDsxeMCtgzaVkN0XS50a2hw' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    console.log("Token:", currentToken);
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});
</script>
