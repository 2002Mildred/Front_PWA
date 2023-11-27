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
    getRecipesByCategory(category) {
  const cacheKey = `https://university56.somee.com/api/RECIPE/category/${category}`;

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(cacheKey);

      if (!response.ok) {
        // Si la respuesta no es exitosa, intenta obtener la respuesta desde el caché
        const cache = await caches.open('my-cache');
        const cachedResponse = await cache.match(cacheKey);

        // Si hay una respuesta en el caché, devuélvela directamente
        if (cachedResponse) {
          const cachedData = await cachedResponse.json();
          resolve(cachedData);
          return;
        }

        // Si no hay respuesta en el caché y la respuesta no es exitosa, rechaza la promesa
        reject(new Error('No se pudo obtener la lista de recetas.'));
        return;
      }

      // Si la respuesta es exitosa, almacena la respuesta en el caché y resuelve la promesa
      const cache = await caches.open('my-cache');
      await cache.put(cacheKey, response.clone());

      const data = await response.json();
      resolve(data);
    } catch (error) {
      // Si hay algún error, lánzalo para que sea manejado más arriba
      reject(error);
    }
  });
}
,
    searchRecipes() {
      return new Promise(async (resolve, reject) => {
        try {
          if (this.searchTerm) {
            const response = await fetch(`https://university56.somee.com/api/RECIPE/search?recipeName=${this.searchTerm}`);
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
      console.log(recipe)
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

  