<template>
  <div>
    <v-container fluid class="container d-flex text-center">
      <v-row justify="center">
        <div class="medic-helph">
          <div class="line above"></div>
          <div class="text">MedicHelph</div>
          <div class="line below"></div>
        </div>
        <v-col cols="12" sm="8" md="8">
          <v-card class="Imc-card">
            <v-img
              src="../assets/descarga.jpeg"
              alt="Medical Image"
            ></v-img>

           
            <v-row>
              <!-- First Row -->
              <v-col cols="6" sm="6" md="6" class="text-center">
                <v-btn
                  color="success"
                  dark
                  block
                  class="custom-button square-button"
                  @click="redirectToRecordar"
                >
                 Insertar
                </v-btn>
              </v-col>

              <v-col cols="6" sm="6" md="6" class="text-center" style="margin-top: 80px;">
                <v-btn
                  color="success"
                  dark
                  block
                  class="custom-button square-button"
                  @click="redirectToIMC"
                >
                  Calculadora IMC
                </v-btn>
              </v-col>

              <!-- Second Row -->
              <v-col cols="6" sm="6" md="6" class="text-center"  style="margin-top: -80px;">
                <v-btn
                  color="success"
                  dark
                  block
                  class="custom-button square-button"
                  @click="redirectToSomeOtherPage"
                >
                  Ver recetas de Hipertension
                </v-btn>
              </v-col>

              <v-col cols="6" sm="6" md="6" class="text-center">
                <v-btn
                  color="success"
                  dark
                  block
                  class="custom-button square-button"
                  @click="redirectToAnotherPage"
                >
                  Button 4
                </v-btn>
              </v-col>
            </v-row>
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
      this.$router.push({ name: 'CamaraComponent' });
    },
    redirectToIMC() {
      this.$router.push({ name: 'IMC' });
    },
    redirectToSomeOtherPage() {
      this.$router.push({ name: 'RecipeHipertension' });
    },
    redirectToAnotherPage() {
      this.$router.push({ name: 'profile' });
    },
  },
};
</script>

<style scoped lang="css">
.custom-button {
  margin-top: 20px;
  background-color: #5DB075;
  padding: 60px ; /* Adjust padding as needed */
  color: #fff;


}

.square-button {
  border-radius: 20; /* Set border radius to 0 for square buttons */
}

.Imc-card {
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.title-style {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
}

.image-style {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 200px; /* Adjust the height as needed */
  object-fit: cover;
}

.medic-helph {
  margin: 60px 0;
  position: relative;
}

.line {
  height: 2px;
  background-color: #5DB075;
}

.line.above {
  width: 90%;
  position: absolute;
  top: 0;
  left: 5%;
}

.line.below {
  width: 90%;
  position: absolute;
  bottom: 0;
  left: 5%;
}

.text {
  display: inline-block;
  padding: 0 20px;
  font-size: 56px;
  font-weight: 500;
  color: #5DB075;
}

@media only screen and (max-width: 600px) {
  .custom-button {
    padding: 60px 60px; 
  }

  .title-style {
    font-size: 24px;
  }

  .text {
    font-size: 32px;
  }
}
</style>
