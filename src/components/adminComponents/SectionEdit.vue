<template>
  <div v-if="sectionProps" class="container rounded-top mt-2 mb-4">
<!--    <div v-for="section in sections" :key="section.id">-->
      <div class="row alert alert-primary p-0 mb-2">
        <div class="col-9 col-sm-10 p-0">
          <h2 class="ml-2">{{ sectionProps.name }}</h2>
          <div class="ml-1 d-flex justify-content-start">
            <button @click="setHidden(!sectionProps.hidden, sectionProps.id)" :class="sectionProps.hidden ? 'btn btn-success btn-sm mx-1' : 'btn btn-dark btn-sm mx-1'">{{sectionProps.hidden ? 'MOSTRAR' : 'OCULTAR'}}</button>
            <button @click="changeShow(sectionProps.id)" class="btn btn-warning btn-sm mx-1">EDITAR</button>
            <button @click="deleteSection(sectionProps.id)" class="btn btn-danger btn-sm mx-1">ELIMINAR</button>
          </div>
        </div>
        <div class="col-3 col-sm-2 p-0">
          <img v-if="sectionProps.picture" class="img-fluid img-section float-end rounded-right" :src="sectionProps.picture.url" alt="Section"/>
        </div>
      </div>
      <!--   Formularios para nuevos platos, postres y bebidas   -->
      <FormNewDish v-if="sectionProps.dishes.length > 0" v-bind:id="sectionProps.id"></FormNewDish>
      <FormNewDessert v-else-if="sectionProps.desserts.length > 0" v-bind:id="sectionProps.id"></FormNewDessert>
      <FormNewDrink v-else-if="sectionProps.drinks.length > 0" v-bind:id="sectionProps.id"></FormNewDrink>
      <FormNewChoose v-else-if="sectionProps.dishes.length < 1 && sectionProps.desserts.length < 1 && sectionProps.drinks.length < 1" v-bind:id="sectionProps.id"></FormNewChoose>

      <form @submit.prevent="updateSection" v-if="show.show1 && show.show2 === sectionProps.id" class="mb-3">
        <div class="form-group">
          <label>Título de la sección</label>
          <input type="text" name="name" v-model.trim="sectionDataUpdate.name" class="form-control" placeholder="Introduce el nombre de la sección"/>
          <small class="form-text text-muted">El título no debe de ser demasiado largo</small>
        </div>
        <div class="form-group">
          <label>Orden de la sección</label>
          <input type="number" name="order" v-model.trim="sectionDataUpdate.order" class="form-control" placeholder="Introduce el orden de la sección"/>
          <small class="form-text text-muted">El orden debe de ser un número entero</small>
        </div>
        <div class="form-group mb-2">
          <label>Imagen de la sección</label>
          <input type="file" name="media" @change="onFileSelected" class="form-control" placeholder="Introduce el orden de la sección"/>
          <small class="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
        </div>
        <button type="submit" class="btn btn-primary btn-sm">EDITAR</button>
        <button @click="changeShow(sectionProps.id)" class="btn btn-danger btn-sm mx-2">CANCELAR</button>
      </form>

      <!--   Aquí van los platos, postres y bebidas   -->
      <Dish v-bind:section="sectionProps"></Dish>

    </div>
<!--  </div>-->
</template>

<script>
import {reactive, ref} from "vue";
import FormNewDish from "./FormNewDish";
import FormNewDessert from "./FormNewDessert";
import FormNewDrink from "./FormNewDrink";
import FormNewChoose from "./FormNewChoose";
import Dish from "./Dish";
import {useFetchUpdateSection} from "../../hooks/useFetchUpdateSection";
import {useFetchDeleteSection} from "../../hooks/useFetchDeleteSection";

export default {
  name: "SectionEdit",
  props: {
    section: Object
  },
  components: {
    FormNewDish,
    FormNewDessert,
    FormNewDrink,
    FormNewChoose,
    Dish
  },
  setup(props) {
    const show = reactive({
      show1: false,
      show2: null
    })
    const sectionProps = ref(props.section)

    const sectionDataUpdate = ref({
      name: sectionProps.value.name,
      order: sectionProps.value.order,
      id: sectionProps.value.id
    })
    const media = new FormData()
    const onFileSelected = (e) => {
      const file = e.target.files[0]
      media.append('media', file)
    }

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
     * Update field 'hidden' of the section
     * @param hidden
     * @param id
     * @returns {Promise<void>}
     */
    const setHidden = async (hidden, id) => {
      const body = {'hidden': hidden, 'id': id}
      sectionProps.value = await useFetchUpdateSection(body, false)
    }

    /**
     * Section update
     * @returns {Promise<void>}
     */
    const updateSection = async () => {
      sectionProps.value = await useFetchUpdateSection(sectionDataUpdate.value, media.values().next().value !== undefined ? media : false)
      changeShow(sectionProps.value.id)
    }

    /**
     * Delete section
     * @param id
     * @returns {Promise<void>}
     */
    const deleteSection = async (id) => {
      const confirm = window.confirm('Si eliminas esta sección se eliminarán también todos sus componentes')
      if (confirm) {
        const section = await useFetchDeleteSection(id)
        sectionProps.value = section.data
        if (sectionProps.value) sectionProps.value = null
      }
    }

    return {show, changeShow, setHidden, sectionProps, sectionDataUpdate, updateSection, onFileSelected, deleteSection}
  }
}
</script>
