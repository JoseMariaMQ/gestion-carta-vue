<template>
  <div class="d-flex justify-content-end mb-2">
    <button @click="showForm" :class="newDessert ? 'btn btn-danger btn-sm' : 'btn btn-success btn-sm'">{{newDessert ? 'CANCELAR' : 'AÑADIR POSTRE'}}</button>
  </div>
  <FormDessert v-if="newDessert" v-bind:section_id="id"></FormDessert>
</template>

<script>
import FormDessert from "./FormDessert";
import {ref} from "vue";

export default {
  name: "FormNewDessert",
  props: ['id'],
  components: {
    FormDessert
  },
  setup() {
    const newDessert = ref(false)

    const showForm = () => {
      newDessert.value = !newDessert.value
    }

    return {showForm, newDessert}
  }
}
</script>

<style scoped>

</style>