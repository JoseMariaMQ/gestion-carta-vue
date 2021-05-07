<template>
  <section class="container">
    <div class="d-flex justify-content-end">
      <button @click="showForm" :class="newSection ? 'btn btn-danger' : 'btn btn-success'">{{ newSection ? 'CANCELAR' : 'AÑADIR NUEVA SECCIÓN' }}</button>
    </div>
    <form v-if="newSection" class="mb-3">
      <div class="form-group">
        <label>Título de la sección</label>
        <input type="text" class="form-control" placeholder="Introduce el nombre de la sección">
        <small class="form-text text-muted">El título no debe ser demasiado largo</small>
      </div>
      <div class="form-group">
        <label>Orden de la sección</label>
        <input type="number" class="form-control" placeholder="Introduce el orden de la sección"/>
        <small class="form-text text-muted">El orden debe de ser un número entero</small>
      </div>
      <div class="form-group">
        <label>Imagen de la sección</label>
        <input type="file" class="form-control" placeholder="Introduce el orden de la sección"/>
        <small class="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
      </div>
      <button type="submit" class="btn btn-primary mt-2">ACEPTAR</button>
    </form>
    <SectionEdit v-bind:sections="menu"></SectionEdit>
  </section>
</template>

<script>
import {ref} from "vue";
import SectionEdit from "./SectionEdit";
import {useFetchMenu} from "../../hooks/useFecthMenu";

export default {
  name: "Section",
  components: {
    SectionEdit
  },
  setup() {
    const newSection = ref(false)

    const showForm = () => {
      newSection.value = !newSection.value
    }

    return {showForm, newSection, ...useFetchMenu()}
  }
}
</script>

<style scoped>

</style>