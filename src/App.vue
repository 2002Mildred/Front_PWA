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
import { ref } from 'vue';


export default {
  name: 'App',

  setup() {
    const permissionGranted = ref(false);

    const subscribeToNotifications = () => {
      requestPermission(messaging)
        .then(() => getToken(messaging))
        .then((token) => {
          console.log('Token de dispositivo:', token);
          permissionGranted.value = true;
        })
        .catch((error) => {
          console.error('Error al obtener el token:', error);
        });
    };

    return {
      permissionGranted,
      subscribeToNotifications,
    };
  },
};
</script>
