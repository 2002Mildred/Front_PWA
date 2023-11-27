<template>
  <div class="background">
      <v-container fluid class=" container d-flex text-center">
        <v-row justify="center"  >
          <v-col cols="12" sm="8" md="8" >
            <v-card class="login-card" >
              <v-card-title class="text-center" style="font-size: 30px; font-weight: 500;">
                Registrate 
              </v-card-title>
              <v-card-text>
                <v-form @submit.prevent="register">
                  <v-text-field
                    v-model="name"
                    label="Nombre"
                    required
                    outlined
                    prepend-icon="mdi-account"
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    label="Correo Electrónico"
                    required
                    outlined
                    class="input-background"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Contraseña"
                    type="password"
                    required
                    outlined
                    class="input-background"
                  >
                    <template v-slot:append>
                      <v-btn icon @click="showPassword = !showPassword" :color="showPassword ? 'primary' : ''">
                        <v-icon>
                          {{ showPassword ? 'mdi-eye' : 'mdi-eye-off' }}
                        </v-icon>
                      </v-btn>
                    </template>
                  </v-text-field>
                  <v-text-field
                    v-model="username"
                    label="Nombre de usuario"
                    required
                    outlined
                  ></v-text-field>
                  <v-select
                    v-model="gender"
                    :items="genderOptions"
                    label="Género"
                    required
                    outlined
                  ></v-select>
                  <v-text-field
                    v-model="birthday"
                    label="Fecha de nacimiento"
                    outlined
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
      username: '',
      gender: '', // Campo de género
      birthday: '',
      showPassword: false,
      isDesktop: window.innerWidth >= 600,
      genderOptions: ['Hombre', 'Mujer'], // Opciones de género
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
    },
    async register() {
      // Construye el objeto de datos a enviar en la solicitud POST
      const postData = {
        email: this.email,
        password: this.password,
        username: this.username,
        Gender: this.gender,
        Birthday: this.birthday,
      };

      // Realiza la solicitud de registro y obtén el token
      try {
        const response = await fetch('https://university56.somee.com/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        });

        if (response.ok) {
          // Registro exitoso, maneja la respuesta si es necesario
          console.log('Registro exitoso');
          this.$router.push({ name: 'Login' });

        } else {
          // Maneja los errores de registro
          console.error('Error de registro:', response.statusText);
        }
      } catch (error) {
        console.error('Error de registro:', error);
      }
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
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-button {
  margin-top: 20px;
  background-color: #5DB075;
  padding: 10px 40px;
  color: #fff;
}
</style>
