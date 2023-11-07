<template>
  <div>
    <!-- Otro contenido de Vue.js aquí -->

    <v-form @submit.prevent="resetPassword">
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
        Restablecer Contraseña
      </v-btn>
    </v-form>
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
      const apiUrl = "https://localhost:44321/api/user/reset-password"; // Cambia la URL según tu configuración.

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
