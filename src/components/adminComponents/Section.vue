<template>
  <section class="container">
    <div class="d-flex justify-content-end">
      <button @click="showForm" :class="newSection ? 'btn btn-danger' : 'btn btn-success'">{{ newSection ? 'CANCELAR' : 'AÑADIR NUEVA SECCIÓN' }}</button>
    </div>
    <form v-if="newSection" @submit.prevent="storeSection" class="mb-3">
      <div class="form-group">
        <label>Título de la sección</label>
        <input type="text" name="name" v-model="sectionDataStore.name" class="form-control" placeholder="Introduce el nombre de la sección">
        <small class="form-text text-muted">El título no debe ser demasiado largo</small>
      </div>
      <div class="form-group">
        <label>Orden de la sección</label>
        <input type="number" name="order" v-model="sectionDataStore.order" class="form-control" placeholder="Introduce el orden de la sección"/>
        <small class="form-text text-muted">El orden debe de ser un número entero</small>
      </div>
      <div class="form-group">
        <label>Imagen de la sección</label>
        <input type="file" name="media" @change="onFileSelected" class="form-control"/>
        <small class="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
      </div>
      <button type="submit" class="btn btn-primary mt-2">ACEPTAR</button>
    </form>
    <SectionEdit v-for="section in menu" :key="section.id" v-bind:section="section"></SectionEdit>
  </section>
</template>

<script>
import {ref} from "vue";
import SectionEdit from "./SectionEdit";
import {useFetchMenu} from "../../hooks/useFecthMenu";
import {useFetchStoreSection} from "../../hooks/useFetchStoreSection";

export default {
  name: "Section",
  components: {
    SectionEdit
  },
  setup() {

    const menu = ref(useFetchMenu("http://127.0.0.1:8000/api/section"))

    const newSection = ref(false)
    const showForm = () => {
      newSection.value = !newSection.value
    }

    const sectionDataStore = ref({
      name: '',
      order: '',
    })
    const media = new FormData()
    const onFileSelected = (e) => {
      const file = e.target.files[0]
      media.append('media', file)
    }

    const storeSection = async () => {
      menu.value = await useFetchStoreSection(sectionDataStore.value, media.values().next().value !== undefined ? media : false)
      newSection.value = !newSection.value
    }

    return {showForm, newSection, sectionDataStore, onFileSelected, storeSection, menu}
  }
}
</script>

<style scoped>

</style>