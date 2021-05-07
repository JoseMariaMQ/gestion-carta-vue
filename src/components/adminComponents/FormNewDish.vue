<template>
  <div class="d-flex justify-content-end mb-2">
    <button @click="showForm" :class="newDish ? 'btn btn-danger btn-sm' : 'btn btn-success btn-sm'">{{newDish ? 'CANCELAR' : 'AÑADIR PLATO'}}</button>
  </div>
  <FormDish v-if="newDish" v-bind:section_id="id"></FormDish>
</template>

<script>
import {ref} from "vue";
import FormDish from "./FormDish";

export default {
  name: "FormNewDish",
  props: ['id'],
  components: {
    FormDish
  },
  setup() {
    const newDish = ref(false)

    const showForm = () => {
      newDish.value = !newDish.value
    }

    return {showForm, newDish}
  }
}
</script>

<style scoped>

</style>