<template>
  <div>
    <v-container fluid class="container d-flex text-center">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="login-card" >
            <v-card-title class="text-center" style="font-size: 30px; font-weight: 500;">
              Iniciar Sesión
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="register">
                <v-text-field
                  v-model="email"
                  label="Correo Electrónico"
                  required
                  outlined
                  class="input-background"
                  prepend-icon="mdi-email"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Contraseña"
                  type="password"
                  required
                  outlined
                  class="input-background"
                  prepend-icon="mdi-lock"
                >
                  <template v-slot:append>
                    <v-btn icon @click="showPassword = !showPassword" :color="showPassword ? '#5DB075' : ''">
                      <v-icon>
                        {{ showPassword ? 'mdi-eye' : 'mdi-eye-off' }}
                      </v-icon>
                    </v-btn>
                  </template>
                </v-text-field>
                <v-btn
                  color="success"
                  dark
                  block
                  type="submit"
                  class="login-button"
                >
                  Iniciar
                </v-btn>
                <v-btn
                  color="success"
                  dark
                  block
                  type="submit"
                  class="register-button"
                  @click="redirectToRegistration"
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
      email: '',
      password: '',
      showPassword: false,
      isDesktop: window.innerWidth >= 600,
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
    register() {
      return new Promise(async (resolve, reject) => {
        try {
          const response = await fetch('https://localhost:44321/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('uuid', data.uuid);
            this.$router.push({ name: 'Inicio' });
            resolve(data); 
          } else {
            reject('Error de Login'); 
          }
        } catch (error) {
          console.error('Error de Login:', error);
          reject(error); 
        }
      }).catch((catchError) => {
        console.error('Error al manejar la promesa:', catchError);
      });
    },
    redirectToRegistration() {
      this.$router.push({ name: 'Registro' });
    },
    handleResize() {
      this.isDesktop = window.innerWidth >= 600;
    },
  },
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

.register-button {
  margin-top: 20px;
  
  background-color: #5DB075; /* Color del botón */
  padding: 10px 40px; /* Padding horizontal del botón */
  color: #fff; /* Color del texto en el botón */
}

</style>
