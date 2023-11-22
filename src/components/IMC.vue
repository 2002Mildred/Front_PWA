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
                <v-form @submit.prevent="calculateIMC">
                  <v-row>
                    <v-col cols="12">
                      <v-select
                        v-model="gender"
                        :items="genderOptions"
                        label="Sexo"
                        required
                        outlined
                        prepend-icon="mdi-gender-male-female"
                      ></v-select>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field 
                      v-model="weight" 
                      label="Peso (kg)" 
                      required 
                      outlined 
                      prepend-icon="mdi-weight-kilogram">
                    </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field 
                      v-model="height" 
                      label="Altura (cm)" 
                      required 
                      outlined 
                      prepend-icon="mdi-human-male-height">
                    </v-text-field>
                    </v-col>
                  </v-row>
                  <v-btn color="success" 
                  dark 
                  block 
                  type="submit" 
                  class="calculate-button">
                     Calcular IMC 
                  </v-btn>
                </v-form>
                <div v-if="imcResult">
                  <p class="imc-result">
                    Tu IMC es: {{ imcResult.toFixed(2) }}
                  </p>
                  <p class="imc-classification">
                    {{ getIMCClassification(imcResult) }}
                  </p>
                </div>
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
        gender: null,
        weight: null,
        height: null,
        imcResult: null,
        uuid: localStorage.getItem('uuid'),
        genderOptions: ['Hombre', 'Mujer'] // Opciones para el campo de selección de sexo
      };
    },
    methods: {
      calculateIMC() {
        // Verificar si se ha seleccionado un sexo
        if (!this.gender) {
          alert('Por favor, seleccione un sexo.');
          return;
        }
  
        // Convertir altura a metros
        const heightInMeters = this.height / 100;
        // Calcular el IMC
        const imc = this.weight / (heightInMeters * heightInMeters);
        // Actualizar el resultado
        this.imcResult = imc;
        return new Promise((resolve, reject) => {
    
          const data = {
            UserId: this.uuid, 
            IMC: this.imcResult
          };

          console.log(data);
          fetch('http://serviceuniversity.somee.com/api/Auth/add-imc', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Error en la solicitud');
              }
              return response.json();
            })
            .then((data) => {
              // Actualizar 'imcResult' con el valor del IMC
              this.imcResult = data.imc;
              resolve(data);
            })
            .catch((error) => {
              console.error('Error:', error);
              reject(error);
            });
      });
      },
      getIMCClassification(imc) {
        // Agregar lógica para clasificar IMC según el sexo
        if (this.gender === 'Hombre') {
          // Valores de referencia para hombres
          if (imc < 18.5) {
            return 'Peso insuficiente';
          } else if (imc < 24.9) {
            return 'Peso normal';
          } else if (imc < 29.9) {
            return 'Sobrepeso';
          } else if (imc < 34.9) {
            return 'Obesidad grado I';
          } else if (imc < 39.9) {
            return 'Obesidad grado II';
          } else {
            return 'Obesidad grado III';
          }
        } else {
          // Valores de referencia para mujeres
          if (imc < 17.5) {
            return 'Peso insuficiente';
          } else if (imc < 23.9) {
            return 'Peso normal';
          } else if (imc < 28.9) {
            return 'Sobrepeso';
          } else if (imc < 33.9) {
            return 'Obesidad grado I';
          } else if (imc < 38.9) {
            return 'Obesidad grado II';
          } else {
            return 'Obesidad grado III';
          }
        }
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
.Imc-card {
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

.imc-result {
  font-size: 24px; /* Tamaño de fuente */
  color: #4CAF50; /* Color de texto verde */
  margin-top: 10px; /* Margen superior */
}

.imc-classification {
  font-size: 18px; /* Tamaño de fuente */
  color: #333; /* Color de texto predeterminado */
  margin-top: 10px; /* Margen superior */
}
</style>


