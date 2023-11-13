<template>
  <v-app>
    <v-app-bar app color="#5DB075"> 
    </v-app-bar>

    <v-main>
      <router-view></router-view> 
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
  },

  data: () => ({
    
  }),
}
</script>
