<template>
  <div class="d-flex justify-content-end">
    <div class="d-flex justify-content-end mb-2">
      <button @click="showForm('dish')" :class="show.newDish ? 'btn btn-danger btn-sm' : 'btn btn-success btn-sm'" :disabled="show.newDessert || show.newDrink">{{show.newDish ? 'CANCELAR' : 'AÑADIR PLATO'}}</button>
    </div>
    <div class="d-flex justify-content-end mb-2 mx-2">
      <button @click="showForm('dessert')" :class="show.newDessert ? 'btn btn-danger btn-sm' : 'btn btn-success btn-sm'" :disabled="show.newDish || show.newDrink">{{show.newDessert ? 'CANCELAR' : 'AÑADIR POSTRE'}}</button>
    </div>
    <div class="d-flex justify-content-end mb-2">
      <button @click="showForm('drink')" :class="show.newDrink ? 'btn btn-danger btn-sm' : 'btn btn-success btn-sm'" :disabled="show.newDish || show.newDessert">{{show.newDrink ? 'CANCELAR' : 'AÑADIR BEBIDA'}}</button>
    </div>
  </div>

  <FormDish v-if="show.newDish" v-bind:section_id="id" v-bind:store="true" v-bind:choose="true"></FormDish>
  <FormDessert v-if="show.newDessert" v-bind:section_id="id" v-bind:store="true" v-bind:choose="true"></FormDessert>
  <FormDrink v-if="show.newDrink" v-bind:section_id="id" v-bind:store="true" v-bind:choose="true"></FormDrink>
</template>

<script>
import FormDish from "./FormDish";
import FormDessert from "./FormDessert";
import FormDrink from "./FormDrink";
import {provide, reactive} from "vue";

export default {
  name: "FormNewChoose",
  props: ['id'],
  components: {
    FormDish,
    FormDessert,
    FormDrink
  },
  setup() {
    const show = reactive({
      newDish: false,
      newDessert: false,
      newDrink: false
    })
    provide('showChoose', show)

    const showForm = (btn) => {
      if (btn === 'dish') show.newDish = !show.newDish
      else if (btn === 'dessert') show.newDessert = !show.newDessert
      else if (btn === 'drink') show.newDrink = !show.newDrink
    }

    return {showForm, show}
  }
}
</script>

<style scoped>

</style>