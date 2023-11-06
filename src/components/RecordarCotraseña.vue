<template>
  <div>
    <!-- v-parallax, condicionalmente visible en dispositivos de escritorio -->
    <v-parallax
      v-if="isDesktop"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
    <v-container fluid id="content">
      <!-- Contenido dentro del v-container -->
      <v-row justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="login-card" >
            <v-card-title class="text-center" style="font-size: 30px; font-weight: 500;">
              Recordar Contraseña
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                
                <v-text-field
                  v-model="email"
                  label="Correo Electrónicos"
                  required
                  outlined
                  class="input-background"
                ></v-text-field>
                <v-btn
                  color="success"
                  dark
                  block
                  type="submit"
                  class="login-button"
                >
                  Registrarse
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-parallax>

    <!-- Contenedor para dispositivos móviles o cuando v-parallax no está visible -->
    <v-container v-else fluidn id="content">
      <!-- Contenido dentro del v-container -->
      <v-row justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="login-card" >
            <v-card-title class="text-center" style="font-size: 30px; font-weight: 500;">
              Recordar Contraseña
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                
                <v-text-field
                  v-model="email"
                  label="Correo Electrónico"
                  required
                  outlined
                  class="input-background"
                ></v-text-field>
                <v-btn
                  color="success"
                  dark
                  block
                  type="submit"
                  class="login-button"
                >
                  Registrarse
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      showPassword: false,
      isDesktop: window.innerWidth >= 600
    };
  },
  mounted() {
    // Agregar un listener para detectar cambios en el tamaño de la ventana
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    // Eliminar el listener antes de destruir el componente
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isDesktop = window.innerWidth >= 600;
    }
  }
};
</script>

<style scoped lang="css">
.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.login-card {
  max-width: 800px;
  max-height: 600px;
  min-height: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
 
} 



.text-center {
  text-align: center;
  justify-items: center;
}

.container {
  display: flex;
  justify-content: center; /* Centrar horizontalmente */
  align-items: center; /* Centrar verticalmente */
  height: 100vh; /* Esto es opcional y ajustará la altura del contenedor al 100% del viewport */
}

.login-button {
  margin-top: 20px;
  
  background-color: #5DB075; /* Color del botón */
  padding: 10px 40px; /* Padding horizontal del botón */
  color: #fff; /* Color del texto en el botón */
}

</style>
