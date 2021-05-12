<template>
  <div v-for="drink in drinks" :key="drink.id">
    <div v-if="!drink.hidden" class="row alert alert-danger p-0 mb-0">
      <span class="col-2 col-sm-1 p-0">
        <img v-if="drink.picture" :src="drink.picture.url" alt="Dish" class="img-thumbnail img-children">
      </span>
      <span class="col-8 col-sm-9 p-0 m-0 pl-3 pl-sm-0 d-flex align-items-center h6">{{drink.name}}</span>
      <span class="col-1 col-sm-1 p-0 m-0 d-flex justify-content-end align-items-center h5">{{drink.price}}€</span>
      <span class="col-1 col-sm-1 border-0 alert-danger p-0 d-flex justify-content-center align-items-center"></span>
    </div>
  </div>
</template>

<script>

export default {
  name: "Drink",
  props: ['drinks']
}
</script>

<style scoped>
.img-children {
  width: 55px;
  height: 55px;
  object-fit: cover;
}
</style>