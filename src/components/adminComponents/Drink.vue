<template>
  <div v-for="drink in sectionDrink.drinks" :key="drink.id">
    <div class="row alert alert-danger p-0 mb-2">
      <span class="col-2 col-sm-1 p-0">
        <img v-if="drink.picture" :src="drink.picture.url" alt="Drink" class="img-thumbnail img-children">
      </span>
      <div class="col-8 col-sm-9 p-0 m-0 pl-3 pl-sm-0">
        <span class="d-flex justify-content-center h6 mb-1">{{drink.name}}</span>
        <div class="d-flex justify-content-center">
          <button @click="setHidden(!drink.hidden, drink.id, drink.section_id)" :class="drink.hidden ? 'btn btn-success btn-sm' : 'btn btn-dark btn-sm'">{{drink.hidden ? 'MOSTRAR' : 'OCULTAR'}}</button>
          <button @click="changeShow(drink.id)" class="btn btn-warning btn-sm mx-2">EDITAR</button>
          <button @click="deleteDrink(section.id, drink.id)" class="btn btn-danger btn-sm">ELIMINAR</button>
        </div>
      </div>
      <span class="col-2 col-sm-1 p-0 m-0 d-flex justify-content-end align-items-center h5">{{drink.price}}€</span>
    </div>
    <div v-if="show.show1 && show.show2 === drink.id" class="f-flex justify-content-center">
      <FormDrink v-bind:drink="drink" v-bind:update="true"></FormDrink>
    </div>
  </div>
</template>

<script>
import FormDrink from "./FormDrink";
import {useFetchUpdateDrink} from "../../hooks/useFetchUpdateDrink";
import {useFetchDeleteDrink} from "../../hooks/useFetchDeleteDrink";
import {inject, provide, reactive} from "vue";

export default {
  name: "Drink",
  components: {
    FormDrink
  },
  props: {
    section: Object
  },
  setup(props) {
    const show = reactive({
      show1: false,
      show2: null
    })

    const sectionDrink = inject('section', props.section)

    provide('showDrink', show)

    /**
     * Show and hide the form for dish update
     * @param id
     */
    const changeShow = (id) => {
      if (show.show2 !== id && show.show1 === true) {
        show.show2 = id
        return
      }
      show.show2 = id
      show.show1 = !show.show1
    }

    /**
     * Update field 'hidden' of the drink
     * @param hidden
     * @param id
     * @param section_id
     * @returns {Promise<void>}
     */
    const setHidden = async (hidden, id, section_id) => {
      const body = {'hidden': hidden}
      sectionDrink.value = await useFetchUpdateDrink(body, false, id, section_id)
    }

    /**
     * Delete drink
     * @param section_id
     * @param id
     * @returns {Promise<void>}
     */
    const deleteDrink = async (section_id, id) => {
      const confirm = window.confirm('Si eliminas esta bebida se eliminarán también todos sus componentes')
      if (confirm) {
        sectionDrink.value = await useFetchDeleteDrink(section_id, id)
      }
    }

    return {show, sectionDrink, changeShow, setHidden, deleteDrink}
  }
}
</script>

<style scoped>

</style>