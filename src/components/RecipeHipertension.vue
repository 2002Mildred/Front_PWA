<template>
  <v-container>
    <v-row>
      <h3>Hipertension</h3>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="searchTerm" label="Buscar recetas" @input="searchRecipes" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="recipe in recipes"
        :key="recipe.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card @click="navigateToRecipeDetails(recipe)">
          <v-img :src="recipe.image" aspect-ratio="2/3"> </v-img>
          <v-card-title>{{ recipe.name }}</v-card-title>
          <v-card-text>{{ recipe.time }} minutos</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      recipes: [],
      searchTerm: '',
    };
  },
  methods: {
    async getRecipesByCategory(category) {
  try {
    const cacheKey = `https://localhost:44321/api/RECIPE/category/${category}`;
    const cache = await caches.open('my-cache');

    // Intenta obtener la respuesta desde el caché
    const cachedResponse = await cache.match(cacheKey);

    // Si hay una respuesta en el caché, devuélvela directamente
    if (cachedResponse) {
      const cachedData = await cachedResponse.json();
      return cachedData;
    }

    // Si no hay respuesta en el caché, realiza la solicitud a la red
    const response = await fetch(cacheKey);

    // Si la solicitud a la red fue exitosa, almacena la respuesta en el caché
    if (response.ok) {
      await cache.put(cacheKey, response.clone());
    }

    // Devuelve la respuesta
    return response.json();
  } catch (error) {
    // Si hay algún error, lánzalo para que sea manejado más arriba
    throw error;
  }
},
    searchRecipes() {
      return new Promise(async (resolve, reject) => {
        try {
          if (this.searchTerm) {
            const response = await fetch(`https://localhost:44321/api/RECIPE/search?recipeName=${this.searchTerm}`);
            if (!response.ok) {
              reject(new Error('No se encontraron recetas que coincidan con la búsqueda.'));
            }
            const data = await response.json();
            resolve(data);
          } else {
            // Si no se proporciona un término de búsqueda, muestra todas las recetas de la categoría "Hipertension"
            this.getRecipesByCategory('Hipertension')
              .then((data) => {
                resolve(data);
              })
              .catch((error) => {
                reject(error);
              });
          }
        } catch (error) {
          reject(error);
        }
      });
    },
    navigateToRecipeDetails(recipe) {
      this.$router.push({ name: 'recipe-details', params: { id: recipe.id } });
    }
  },
  mounted() {
    // Carga las recetas de la categoría "Hipertension" por defecto al cargar la página
    this.getRecipesByCategory('Hipertension')
      .then((data) => {
        this.recipes = data;
      })
      .catch((error) => {
        console.error(error);
        // Puedes mostrar un mensaje de error al usuario si lo deseas.
      });
  },
};
</script>

  