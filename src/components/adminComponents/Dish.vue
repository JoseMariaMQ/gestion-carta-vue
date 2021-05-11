<template>
 <div v-for="dish in sectionDish.dishes" :key="dish.id">
    <div class="row alert alert-danger p-0 mb-2">
      <span class="col-2 col-sm-1 p-0">
        <img v-if="dish.picture" :src="dish.picture.url" alt="Dish" class="img-thumbnail img-children">
      </span>
      <div class="col-8 col-sm-9 p-0 m-0 pl-3 pl-sm-0">
        <span class="d-flex justify-content-center h6 mb-1">{{dish.name}}</span>
        <div class="d-flex justify-content-center">
          <button @click="setHidden(!dish.hidden, dish.id, dish.section_id)" :class="dish.hidden ? 'btn btn-success btn-sm' : 'btn btn-dark btn-sm'">{{dish.hidden ? 'MOSTRAR' : 'OCULTAR'}}</button>
          <button @click="changeShow(dish.id)" class="btn btn-warning btn-sm mx-2">EDITAR</button>
          <button @click="deleteDish(section.id, dish.id)" class="btn btn-danger btn-sm">ELIMINAR</button>
        </div>
      </div>
      <span class="col-2 col-sm-1 p-0 m-0 d-flex justify-content-end align-items-center h5">{{dish.price}}€</span>
    </div>
    <div v-if="show.show1 && show.show2 === dish.id" class="f-flex justify-content-center">
      <FormDish v-bind:dish="dish" v-bind:update="true"></FormDish>
    </div>
 </div>
</template>

<script>
import FormDish from "./FormDish";
import {inject, provide, reactive, ref} from "vue";
import {useFetchDeleteDish} from "../../hooks/useFetchDeleteDish";
import {useFetchUpdateDish} from "../../hooks/useFetchUpdateDish";

export default {
  name: "Dish",
  components: {
    FormDish
  },
  props: {
    section: Object
  },
  setup(props) {
    const show = reactive({
      show1: false,
      show2: null
    })

    const sectionDish = inject('sectionDish', props.section)

    provide('show', show)

    /**
     * Show and hide the form for section update
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
     * Update field 'hidden' of the dish
     * @param hidden
     * @param id
     * @param section_id
     * @returns {Promise<void>}
     */
    const setHidden = async (hidden, id, section_id) => {
      const body = {'hidden': hidden}
      sectionDish.value = await useFetchUpdateDish(body, false, id, section_id)
    }

    /**
     * Delete dish
     * @param section_id
     * @param id
     * @returns {Promise<void>}
     */
    const deleteDish = async (section_id, id) => {
      const confirm = window.confirm('Si eliminas este plato se eliminarán también todos sus componentes')
      if (confirm) {
        sectionDish.value = await useFetchDeleteDish(section_id, id)
      }
    }

    return {show, sectionDish, changeShow, deleteDish, setHidden}
  }
}
</script>

<style scoped>

</style>