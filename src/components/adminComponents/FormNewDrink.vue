<template>
  <div class="d-flex justify-content-end mb-2">
    <button @click="showForm" :class="newDrink ? 'btn btn-danger btn-sm' : 'btn btn-success btn-sm'">{{newDrink ? 'CANCELAR' : 'AÑADIR BEBIDA'}}</button>
  </div>
  <FormDrink v-if="newDrink" v-bind:section_id="id"></FormDrink>
</template>

<script>
import FormDrink from "./FormDrink";
import {ref} from "vue";

export default {
  name: "FormNewDrink",
  props: ['id'],
  components: {
    FormDrink
  },
  setup() {
    const newDrink = ref(false)

    const showForm = () => {
      newDrink.value = !newDrink.value
    }

    return {showForm, newDrink}
  }
}
</script>

<style scoped>

</style>