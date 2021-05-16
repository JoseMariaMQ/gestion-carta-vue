<template>
  <div v-for="dessert in sectionDessert.desserts" :key="dessert.id">
    <div class="row alert alert-danger p-0 mb-2">
      <span class="col-2 col-sm-1 p-0">
        <img v-if="dessert.picture" :src="dessert.picture.url" alt="Dessert" class="img-thumbnail img-children">
      </span>
      <div class="col-8 col-sm-9 p-0 m-0 pl-3 pl-sm-0">
        <span class="d-flex justify-content-center h6 mb-1">{{dessert.name}}</span>
        <div class="d-flex justify-content-center">
          <button @click="setHidden(!dessert.hidden, dessert.id, dessert.section_id)" :class="dessert.hidden ? 'btn btn-success btn-sm' : 'btn btn-dark btn-sm'">{{dessert.hidden ? 'MOSTRAR' : 'OCULTAR'}}</button>
          <button @click="changeShow(dessert.id)" class="btn btn-warning btn-sm mx-2">{{show.show1 && show.show2 === dessert.id ? 'CANCELAR' : 'EDITAR'}}</button>
          <button @click="deleteDessert(section.id, dessert.id)" class="btn btn-danger btn-sm">ELIMINAR</button>
        </div>
      </div>
      <span class="col-2 col-sm-1 p-0 m-0 d-flex justify-content-end align-items-center h5">{{dessert.price}}€</span>
    </div>
    <div v-if="show.show1 && show.show2 === dessert.id" class="f-flex justify-content-center">
      <FormDessert v-bind:dessert="dessert" v-bind:update="true"></FormDessert>
    </div>
  </div>
</template>

<script>
import FormDessert from "./FormDessert";
import {inject, provide, reactive} from "vue";
import {useFetchUpdateDessert} from "../../hooks/useFetchUpdateDessert";
import {useFetchDeleteDessert} from "../../hooks/useFetchDeleteDessert";

export default {
  name: "Dessert",
  components: {
    FormDessert
  },
  props: {
    section: Object
  },
  setup(props) {
    const show = reactive({
      show1: false,
      show2: null
    })

    const sectionDessert = inject('section', props.section)

    provide('showDessert', show)

    /**
     * Show and hide the form for dessert update
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
     * Update field 'hidden' of the dessert
     * @param hidden
     * @param id
     * @param section_id
     * @returns {Promise<void>}
     */
    const setHidden = async (hidden, id, section_id) => {
      const body = {'hidden': hidden}
      sectionDessert.value = await useFetchUpdateDessert(body, false, id, section_id)
    }

    /**
     * Delete dessert
     * @param section_id
     * @param id
     * @returns {Promise<void>}
     */
    const deleteDessert = async (section_id, id) => {
      const confirm = window.confirm('Si eliminas este postre se eliminarán también todos sus componentes')
      if (confirm) {
        sectionDessert.value = await useFetchDeleteDessert(section_id, id)
      }
    }

    return {show, sectionDessert, changeShow, setHidden, deleteDessert}
  }
}
</script>

<style scoped>

</style>