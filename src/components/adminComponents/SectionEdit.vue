<template>
  <div class="container rounded-top mt-2 mb-4">
    <div v-for="section in sections" :key="section.id" >
      <div class="row alert alert-primary p-0 mb-2">
        <div class="col-9 col-sm-10 p-0">
          <h2 class="ml-2">{{ section.name }}</h2>
          <div class="ml-1 d-flex justify-content-start">
            <button :class="section.hidden ? 'btn btn-success btn-sm mx-1' : 'btn btn-dark btn-sm mx-1'">OCULTAR</button>
            <button @click="changeShow(section.id)" class="btn btn-warning btn-sm mx-1">EDITAR</button>
            <button class="btn btn-danger btn-sm mx-1">ELIMINAR</button>
          </div>
        </div>
        <div class="col-3 col-sm-2 p-0">
          <img v-if="section.picture" class="img-fluid img-section float-end rounded-right" :src="section.picture.url" alt="Section"/>
        </div>
      </div>
      <!--   Formularios para nuevos platos, postres y bebidas   -->
      <FormNewDish v-if="section.dishes.length > 0" v-bind:id="section.id"></FormNewDish>
      <FormNewDessert v-else-if="section.desserts.length > 0" v-bind:id="section.id"></FormNewDessert>
      <FormNewDrink v-else-if="section.drinks.length > 0" v-bind:id="section.id"></FormNewDrink>
      <FormNewChoose v-else-if="section.dishes.length < 1 && section.desserts.length < 1 && section.drinks.length < 1" v-bind:id="section.id"></FormNewChoose>

      <form v-if="show.show1 && show.show2 === section.id" class="mb-3">
        <div class="form-group">
          <label>Título de la sección</label>
          <input type="text" name="name" :defaultValue="section.name" class="form-control" placeholder="Introduce el nombre de la sección"/>
          <small class="form-text text-muted">El título no debe de ser demasiado largo</small>
        </div>
        <div class="form-group">
          <label>Orden de la sección</label>
          <input type="number" name="order" :defaultValue="section.order" class="form-control" placeholder="Introduce el orden de la sección"/>
          <small class="form-text text-muted">El orden debe de ser un número entero</small>
        </div>
        <div class="form-group mb-2">
          <label>Imagen de la sección</label>
          <input type="file" name="media" class="form-control" placeholder="Introduce el orden de la sección"/>
          <small class="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
        </div>
        <button type="submit" class="btn btn-primary btn-sm">EDITAR</button>
        <button @click="changeShow(section.id)" class="btn btn-danger btn-sm mx-2">CANCELAR</button>
      </form>

      <!--   Aquí van los platos, postres y bebidas   -->
      <Dish v-bind:section="section"></Dish>

    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import FormNewDish from "./FormNewDish";
import FormNewDessert from "./FormNewDessert";
import FormNewDrink from "./FormNewDrink";
import FormNewChoose from "./FormNewChoose";
import Dish from "./Dish";

export default {
  name: "SectionEdit",
  props: ['sections'],
  components: {
    FormNewDish,
    FormNewDessert,
    FormNewDrink,
    FormNewChoose,
    Dish
  },
  setup() {
    const show = reactive({
      show1: false,
      show2: null
    })

    const changeShow = (id) => {
      if (show.show2 !== id && show.show1 === true) {
        show.show2 = id
        return
      }
      show.show2 = id
      show.show1 = !show.show1
    }


    return {show, changeShow}
  }
}
</script>
