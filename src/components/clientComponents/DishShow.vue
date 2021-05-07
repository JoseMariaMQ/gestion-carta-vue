<template>
  <div class="alert alert-light">
    <div v-if="dish.units" class="d-flex justify-content-center">
      <h5>{{dish.units}} unidades</h5>
    </div>
    <hr class="my-1">
    <div class="d-flex justify-content-center">
      <h5>Alérgenos:</h5>
    </div>
    <div class="d-flex justify-content-center mb-2">
        <span v-for="allergen in dish.allergens" :key="allergen.id" class="mx-2">
          <img :src="allergen.url" :alt="allergen.name" class="img-allergens">
        </span>
    </div>
    <hr class="my-1">
    <div v-if="dish.ingredients">
      <div class="d-flex justify-content-center">
        <h5 class="mt-2">Ingredientes:</h5>
      </div>
      <div class="text-center">
        <div class="mb-0">{{dish.ingredients}}</div>
      </div>
      <hr class="my-1">
    </div>
    <div v-if="dish.menu">
      <div class="d-flex justify-content-center">
        <h5 class="mt-2">Con menú</h5>
      </div>
      <div class="text-center">
        <p class="mb-0">+ Patatas + Bebida</p>
        <p class="mb-0">{{dish.price_menu}}€</p>
      </div>
      <hr class="my-1">
    </div>
    <div v-if="dish.picture" class="d-flex justify-content-center mt-2">
      <img :src="dish.picture.url" :alt="dish.picture.name" class="img-fluid img-dish rounded">
    </div>
  </div>
</template>

<script>
export default {
  name: "DishShow",
  props: ['dish']
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