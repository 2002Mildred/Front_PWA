<template>
    <div>
      <v-card v-if="recipe">
        <v-img :src="recipe.image" aspect-ratio="2/3"></v-img>
        <v-card-title>{{ recipe.name }}</v-card-title>
        <v-card-text>
          {{ recipe.time }}
          <!-- Muestra otros detalles de la receta aquí -->
          <div>
            Ingredientes:
            <ul>
              <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
                {{ ingredient }}
              </li>
            </ul>
          </div>
          <div>
            Instrucciones:
            <ul>
              <li v-for="(step, index) in recipe.preparationSteps" :key="index">
                {{ step }}
              </li>
            </ul>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        recipe: null,
      };
    },
    created() {
      // Utiliza this.id para hacer una solicitud a la API y obtener los detalles de la receta
      const fetchRecipe = () => {
        return new Promise((resolve, reject) => {
          fetch(`https://localhost:44321/api/RECIPE/searchByUserId/${this.id}`, {
            method: 'GET',
          })
            .then((response) => {
              if (!response.ok) {
                reject(new Error('No ¿se pudo obtener los detalles de la receta.'));
              }
              return response.json();
            })
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        });
      };
  
      fetchRecipe()
        .then((data) => {
          this.recipe = data;
        })
        .catch((error) => {
          console.error(error);
          // Puedes mostrar un mensaje de error al usuario si lo deseas.
        });
    },
  };
  </script>
  