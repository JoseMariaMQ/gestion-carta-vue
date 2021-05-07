<template>
  <section class="container">
    <div v-for="(section, index) in menu" :key="index" class="container rounded-top mt-2 mb-4">
      <div class="row alert alert-primary p-0 mb-2">
        <div class="col-9 col-sm-10 p-0 d-flex align-items-center">
          <h2 class="ml-2">{{section.name}}</h2>
        </div>
        <div class="col-3 col-sm-2 p-0">
          <img v-if="section.picture" :src="section.picture.url" alt="Section" class="img-fluid img-section float-end rounded-right">
        </div>
      </div>
      <Dish v-if="section.dishes.length > 0" v-bind:dishes="section.dishes"></Dish>
      <Dessert v-if="section.desserts.length > 0" v-bind:desserts="section.desserts"></Dessert>
      <Drink v-if="section.drinks.length > 0" v-bind:drinks="section.drinks"></Drink>

    </div>
  </section>
</template>

<script>
import {useFetchMenu} from "../../hooks/useFecthMenu";
import Dish from "./Dish";
import Dessert from "./Dessert";
import Drink from "./Drink";

export default {
  name: "Section",
  components: {
    Dish,
    Dessert,
    Drink
  },
  setup() {
    return {...useFetchMenu()}
  }
}
</script>

<style scoped>
.img-section {
  width: 85px;
  height: 85px;
  object-fit: cover;
}

</style>