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
     
  const cacheKey = `https://university56.somee.com/api/RECIPE/searchByUserId/${this.id}`;

  return new Promise(async (resolve, reject) => {
    try {
      // Intenta realizar la solicitud a la red
      const response = await fetch(`https://university56.somee.com/api/RECIPE/searchByUserId/${this.id}`, {
        method: 'GET',
      });

      // Si la solicitud a la red fue exitosa, almacena la respuesta en el caché
      if (response.ok) {
        const cache = await caches.open('my-cache');
        await cache.put(cacheKey, response.clone());
      }

      // Devuelve la respuesta
      const data = await response.json();
      resolve(data);
    } catch (error) {
      // Si hay algún error al realizar la solicitud a la red, intenta obtener la respuesta desde el caché
      const cache = await caches.open('my-cache');
      const cachedResponse = await cache.match(cacheKey);

      // Si hay una respuesta en el caché, devuélvela directamente
      if (cachedResponse) {
        const cachedData = await cachedResponse.json();
        resolve(cachedData);
        return;
      }

      // Si no hay respuesta en el caché y hay un error, lánzalo para que sea manejado más arriba
      reject(error);
    }
  });
      };
  
      fetchRecipe()
        .then((data) => {
          
          this.recipe = data;
          console.log(data)
        })
        .catch((error) => {
          console.error(error);
          // Puedes mostrar un mensaje de error al usuario si lo deseas.
        });
    },
  };
  </script>
  