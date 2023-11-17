<template>
    <div>
        <form id="recipeForm">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" v-model="formData.name" required>
  
        <label for="time">Tiempo de preparación:</label>
        <input type="text" id="time" name="time" v-model="formData.time" required>
  
      <button @click="openCamera">Abrir Cámara</button>
      <video ref="video" autoplay></video>
      <button @click="takePhoto">Tomar Foto</button>
      <canvas ref="canvas" style="display: none;"></canvas>
      <img v-if="capturedImage" :src="capturedImage" alt="Captured Image" style="max-width: 100%; margin-top: 10px;"  >
      <label for="ingredients">Ingredientes (separados por comas):</label>
      <input type="text" id="ingredients" name="ingredients" v-model="formData.ingredients" required>

      <label for="category">Categoría:</label>
      <input type="text" id="category" name="category" v-model="formData.category" readonly>

      <label for="preparationSteps">Pasos de preparación (separados por comas):</label>
      <input type="text" id="preparationSteps" name="preparationSteps" v-model="formData.preparationSteps" required>

      <label for="uidUser">ID de usuario:</label>
      <input type="text" id="uidUser" name="uidUser" v-model="formData.uidUser" required>
      <button type="button" @click="submitRecipe">Registrar Receta</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videoStream: null,
        capturedImage: null,
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
      fetch('https://localhost:44321/api/RECIPE', {
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
  