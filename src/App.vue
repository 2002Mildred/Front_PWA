// App.vue
<template>
  <v-app>
    <v-app-bar app color="#5DB075">
      <v-btn @click="subscribeToNotifications">Suscribirse a Notificaciones</v-btn>
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


</script>
