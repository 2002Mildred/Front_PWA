<template>
  <div>
    <v-container fluid class="container d-flex text-center">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="login-card">
            <v-card-title class="text-center" style="font-size: 30px; font-weight: 500;">
              Recordar Contraseña
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="resetPassword">
                <v-text-field
                  v-model="email"
                  label="Correo Electrónico"
                  required
                  outlined
                  class="input-background"
                  prepend-icon="mdi-email"
                ></v-text-field>
                <v-btn
                  color="success"
                  dark
                  block
                  type="submit"
                  class="login-button"
                >
                  Enviar
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
      email: "",
    };
  },
  methods: {
    resetPassword() {
      // Asegúrate de que la ruta coincida con la del controlador ASP.NET Core.
      const apiUrl = "http://serviceuniversity.somee.com/api/user/reset-password"; // Cambia la URL según tu configuración.

      // Crea un objeto para enviar los datos al controlador.
      const data = {
        email: this.email,
      };

      // Realiza una solicitud POST al controlador.
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al restablecer la contraseña");
          }
          return response.text();
        })
        .then((result) => {
          // Maneja la respuesta exitosa aquí (por ejemplo, muestra un mensaje al usuario).
          console.log("Contraseña restablecida exitosamente", result);
          // Redirige al usuario al inicio o al login
          this.$router.push({ name: "Inicio" }); // Cambia el nombre de la ruta a la que deseas redirigir.
        })
        .catch((error) => {
          // Maneja errores de la solicitud (por ejemplo, muestra un mensaje de error).
          console.error("Error al restablecer la contraseña", error);
        });
    },
  },
};
</script>

<style scoped lang="css">
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

.input-background {
  background-color: #f5f5f5;
}
</style>
