<template>
  <div class="alert alert-light">
    <div v-if="dessert.units" class="d-flex justify-content-center">
      <h5>{{dessert.units}} unidades</h5>
    </div>
    <hr class="my-1">
    <div class="d-flex justify-content-center">
      <h5>Alérgenos:</h5>
    </div>
    <div class="d-flex justify-content-center mb-2">
        <span v-for="allergen in dessert.allergens" :key="allergen.id" class="mx-2">
          <img :src="allergen.url" :alt="allergen.name" class="img-allergens">
        </span>
    </div>
    <hr class="my-1">
    <div v-if="dessert.ingredients">
      <div class="d-flex justify-content-center">
        <h5 class="mt-2">Ingredientes:</h5>
      </div>
      <div class="text-center">
        <div class="mb-0">{{dessert.ingredients}}</div>
      </div>
      <hr class="my-1">
    </div>
    <div v-if="dessert.menu">
      <div class="d-flex justify-content-center">
        <h5 class="mt-2">Con menú</h5>
      </div>
      <div class="text-center">
        <p class="mb-0">+ Patatas + Bebida</p>
        <p class="mb-0">{{dessert.price_menu}}€</p>
      </div>
      <hr class="my-1">
    </div>
    <div v-if="dessert.picture" class="d-flex justify-content-center mt-2">
      <img :src="dessert.picture.url" :alt="dessert.picture.name" class="img-fluid img-dish rounded">
    </div>
  </div>
</template>

<script>
export default {
  name: "DessertShow",
  props: ['dessert']
}
</script>

<style scoped>
  .img-allergens {
    width: 30px;
  }
  .img-dish {
    width: 100%;
    max-width: 300px;
    object-fit: cover;
  }
</style>