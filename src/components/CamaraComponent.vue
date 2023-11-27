<template>
    <v-container class="recipe-form-container">
      <v-form @submit.prevent="submitRecipe" id="recipeForm">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field label="Nombre" v-model="formData.name" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Tiempo de preparación" v-model="formData.time" required></v-text-field>
          </v-col>
        </v-row>
  
        <v-row>
            <v-col cols="12" md="3">
              <v-btn @click="openCamera" class="camera-button">Abrir Cámara</v-btn>
             
              <v-row>
                <v-col cols="6" v-if="isVideoOpen">
                  <video ref="video" autoplay  ></video>
                </v-col>
                <v-col cols="6">
                  <canvas ref="canvas" style="display: none;"></canvas>
                  <v-img v-if="capturedImage" :src="capturedImage" alt="Captured Image" class="captured-image" />
                </v-col>
              </v-row>
            </v-col>
            <v-btn
            v-if="isCameraOpen"
            @click="takePhoto"
            class="rounded-photo-button"
          >
          📸
          </v-btn>
        </v-row>
  
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field label="Ingredientes (separados por comas)" v-model="formData.ingredients" required></v-text-field>
          </v-col>
        
          <v-col cols="12" md="6"> 
            <v-text-field label="Categoría" v-model="formData.category" readonly></v-text-field>
          </v-col>
        </v-row>
  
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field label="Pasos de preparación (separados por comas)" v-model="formData.preparationSteps" required></v-text-field>
          </v-col>
        
          <v-col cols="12" md="6">
            <v-text-field label="ID de usuario" v-model="formData.uidUser" required></v-text-field>
          </v-col>
       
          <v-col cols="12" md="6">
            <v-btn type="submit" class="submit-button">Registrar Receta</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
  <script>
  export default {
    data() {
      return {
        videoStream: null,
        capturedImage: null,
        isCameraOpen: false,
        isVideoOpen: false,
        formData: {
        name: '',
        time: '',
        image: '',
        ingredients: [],
        preparationSteps: [],
        uidUser: '',
        category: 'Hipertension',
       
      },
      };
    },
    methods: {
      openCamera() {
        this.isVideoOpen = true;
        this.isCameraOpen = true;
        navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
            this.$refs.video.srcObject = stream;
            this.videoStream = stream;
          
          })
          .catch((error) => {
            console.error('Error al abrir la cámara:', error);
          });
      },
      takePhoto() {
        this.isVideoOpen = false;
        this.isCameraOpen = false;
        if (this.videoStream) {
          const video = this.$refs.video;
          const canvas = this.$refs.canvas;
          const context = canvas.getContext('2d');
  
          // Establecer el tamaño del lienzo para que coincida con el tamaño del video
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
  
          // Capturar el cuadro actual del video en el lienzo
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
          // Obtener datos binarios de la imagen en el formato deseado (por ejemplo, JPEG)
          const imageDataURL = canvas.toDataURL('image/jpeg');
  
          // Mostrar la imagen capturada en el elemento img
          this.capturedImage = imageDataURL;
          this.formData.image = imageDataURL;
        }
    },
        submitRecipe() {
            console.log(this.formData)
      // Enviar los datos al servicio web usando fetch
      fetch('https://university56.somee.com/api/RECIPE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...this.formData,
          ingredients: this.formData.ingredients.split(',').map(item => item.trim()),
          preparationSteps: this.formData.preparationSteps.split(',').map(item => item.trim()),
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Receta registrada con éxito:', data);
          alert('Receta registrada con éxito');
        })
        .catch(error => {
          console.error('Error al registrar la receta:', error);
          alert('Error al registrar la receta');
        });
    },
  },
    beforeDestroy() {
      // Detener la transmisión de video al destruir el componente
      if (this.videoStream) {
        const tracks = this.videoStream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    },
  };
  </script>
<style scoped>
.recipe-form-container {
  margin: 0 auto;
  padding: 20px;
}

.camera-button {
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
}

.rounded-photo-button {
    border-radius: 85px; /* Ajusta el valor según tus preferencias para hacerlo más redondo o menos */
    background-color: white;
    color: white;
    cursor: pointer;
    width: 40px; /* Ajusta el ancho según tus preferencias */
    height: 40px; /* Ajusta la altura según tus preferencias */
    display: flex;
    align-items: center;
    justify-content: center;
    top: -40px;
    right: -7vh;
    
  }
  
.captured-image {
  max-width: 100%;
  margin-top: 0px;
}

/* Make the video responsive */
video {
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>