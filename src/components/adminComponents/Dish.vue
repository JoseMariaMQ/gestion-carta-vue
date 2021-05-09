<template>
 <div v-for="dish in section.dishes" :key="dish.id">
    <div class="row alert alert-danger p-0 mb-2">
      <span class="col-2 col-sm-1 p-0">
        <img v-if="dish.picture" :src="dish.picture.url" alt="Dish" class="img-thumbnail img-children">
      </span>
      <div class="col-8 col-sm-9 p-0 m-0 pl-3 pl-sm-0">
        <span class="d-flex justify-content-center h6 mb-1">{{dish.name}}</span>
        <div class="d-flex justify-content-center">
          <button class="btn btn-dark btn-sm">OCULTAR</button>
          <button class="btn btn-warning btn-sm mx-2">EDITAR</button>
          <button class="btn btn-danger btn-sm">ELIMINAR</button>
        </div>
      </div>
      <span class="col-2 col-sm-1 p-0 m-0 d-flex justify-content-end align-items-center h5">{{dish.price}}€</span>
    </div>
    <div class="f-flex justify-content-center">

    </div>
 </div>
</template>

<script>
export default {
  name: "Dish",
  props: ['section']
}
</script>

<style scoped>

</style>