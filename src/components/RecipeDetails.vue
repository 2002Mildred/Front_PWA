<template>
  <div>
    <v-card v-if="recipe" class="recipe-card">
      <v-img :src="recipe.image" aspect-ratio="2/3" class="recipe-image"></v-img>
      <v-card-title class="recipe-title">{{ recipe.name }}</v-card-title>
      <v-card-text>
        <div class="recipe-info">
          <strong>Tiempo de preparación:</strong> {{ recipe.time }}
        </div>
        <div class="recipe-details">
          <div>
            <strong>Ingredientes:</strong>
            <ul>
              <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
                {{ ingredient }}
              </li>
            </ul>
          </div>
          <div>
            <strong>Instrucciones:</strong>
            <ul>
              <li v-for="(step, index) in recipe.preparationSteps" :key="index">
                {{ step }}
              </li>
            </ul>
          </div>
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
    const fetchRecipe = async () => {
      const cacheKey = `https://university56.somee.com/api/RECIPE/searchByUserId/${this.id}`;

      try {
        const response = await fetch(`https://university56.somee.com/api/RECIPE/searchByUserId/${this.id}`, {
          method: 'GET',
        });

        if (response.ok) {
          const cache = await caches.open('my-cache');
          await cache.put(cacheKey, response.clone());
        }

        const data = await response.json();
        return data;
      } catch (error) {
        const cache = await caches.open('my-cache');
        const cachedResponse = await cache.match(cacheKey);

        if (cachedResponse) {
          const cachedData = await cachedResponse.json();
          return cachedData;
        }

        throw error;
      }
    };

    fetchRecipe()
      .then((data) => {
        this.recipe = data;
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        // Show an error message to the user if desired.
      });
  },
};
</script>

<style scoped>
.recipe-card {
  max-width: 400px;
  margin: auto;
  transition: box-shadow 0.3s ease-in-out;
}

.recipe-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.recipe-image {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.recipe-title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}

.recipe-info {
  margin-top: 15px;
}

.recipe-details {
  margin-top: 15px;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  margin-bottom: 5px;
}

strong {
  font-weight: bold;
}

/* Responsive Styles */
@media only screen and (max-width: 600px) {
  .recipe-card {
    max-width: 100%;
  }
}
</style>
