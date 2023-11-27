<template>
    <div>
      <v-container fluid class="container d-flex text-center">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="profile-card">
              <v-card-title class="text-center title-style">
                Perfil de Usuario
              </v-card-title>
              <v-card-text>
                <div>
                  <strong>Usuario:</strong> {{ userInfo.username }}
                </div>
                <div>
                  <strong>Correo Electrónico:</strong> {{ userInfo.email }}
                </div>
                <div>
                  <strong>Género:</strong> {{ userInfo.gender }}
                </div>
                <div>
                  <strong>Fecha de Nacimiento:</strong> {{ formattedBirthday }}
                </div>
                <div>
                  <strong>IMC:</strong> {{ userInfo.imc }}
                </div>
                <!-- Agrega más campos según sea necesario -->
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="error"
                  @click="logout"
                >
                  Cerrar Sesión
                </v-btn>
              </v-card-actions>
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
        userInfo: ''
      };
    },
    computed: {
      formattedBirthday() {
        // Formatea la fecha de nacimiento según tus necesidades
        return this.userInfo.birthday ? new Date(this.userInfo.birthday).toLocaleDateString() : 'N/A';
      },
    },
    mounted() {
       // Realiza la consulta API si la información no está en el almacenamiento local
        this.fetchUserInfo();
      
    },
    methods: {
      async fetchUserInfo() {
  try {
    const storedUserInfo = localStorage.getItem('uuid');
    console.log(storedUserInfo)
    const response = await fetch(`https://university56.somee.com/api/auth/${storedUserInfo}`);
    
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const responseData = await response.text();
    console.log('Respuesta completa:', responseData);

    const data = JSON.parse(responseData);
    console.log('Datos analizados:', data);
    
    this.userInfo = data;
  } catch (error) {
    console.error('Error al obtener la información del usuario:', error);
  }
}
,
      logout() {
        // Borra la información almacenada en el almacenamiento local
        localStorage.removeItem('uuid');
        localStorage.removeItem('accessToken');
        // Redirige a la página de inicio de sesión
        this.$router.push({ name: 'Login' });
      },
    },
  };
  </script>
  
  <style scoped lang="css">
  .profile-card {
    max-width: 800px;
    max-height: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .title-style {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .error-button {
    margin-top: 20px;
    background-color: #ff5252;
    padding: 10px 40px;
    color: #fff;
  }
  
  </style>
  