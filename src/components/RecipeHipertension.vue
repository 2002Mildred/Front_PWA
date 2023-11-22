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
          <v-img src="https://cdn0.recetasgratis.net/es/posts/6/7/5/espinacas_con_papas_56576_600.jpg" aspect-ratio="2/3"> </v-img>
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
      return new Promise(async (resolve, reject) => {
        try {
          const response = await fetch(`http://serviceuniversity.somee.com/api/RECIPE/category/${category}`);
          if (!response.ok) {
            reject(new Error('No se pudo obtener la lista de recetas.'));
          }
          const data = await response.json();
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
    },
    searchRecipes() {
      return new Promise(async (resolve, reject) => {
        try {
          if (this.searchTerm) {
            const response = await fetch(`http://serviceuniversity.somee.com/api/RECIPE/search?recipeName=${this.searchTerm}`);
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

  