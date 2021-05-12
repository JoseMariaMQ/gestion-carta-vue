<template>
  <div class="d-flex justify-content-end mb-2">
    <button @click="showForm" :class="newDessert ? 'btn btn-danger btn-sm' : 'btn btn-success btn-sm'">{{newDessert ? 'CANCELAR' : 'AÑADIR POSTRE'}}</button>
  </div>
  <FormDessert v-if="newDessert" v-bind:section_id="id" v-bind:store="true"></FormDessert>
</template>

<script>
import FormDessert from "./FormDessert";
import {provide, ref} from "vue";

export default {
  name: "FormNewDessert",
  props: {
    id: Number,
    store: Boolean,
    update: Boolean
  },
  components: {
    FormDessert
  },
  setup() {
    const newDessert = ref(false)
    provide('newDessert', newDessert)

    const showForm = () => {
      newDessert.value = !newDessert.value
    }

    return {showForm, newDessert}
  }
}
</script>

<style scoped>

</style>