<template>
  <div>
    <v-container fluid class="container d-flex text-center">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="Imc-card">
            <v-card-title class="text-center" style="font-size: 30px; font-weight: 500;">
              índice de Masa Corporal
            </v-card-title>

            <v-card-text>
              <!-- Botón para redirigir a la página de Recordar Contraseña -->
              <v-btn
                color="success"
                dark
                block
                class="custom-button"
                @click="redirectToRecordar"
              >
                Recordar Contraseña
              </v-btn>

              <!-- Botón para redirigir a la página de IMC -->
              <v-btn
                color="success"
                dark
                block
                class="custom-button"
                @click="redirectToIMC"
              >
                Calculadora IMC
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToRecordar() {
      this.$router.push({ name: 'Recordar' });
    },
    redirectToIMC() {
      this.$router.push({ name: 'IMC' });
    },
  },
};
</script>

<style scoped lang="css">
.custom-button {
  margin-top: 20px;
  background-color: #5DB075; /* Estilo verde para ambos botones */
  padding: 10px 40px;
  color: #fff;
}
</style>
