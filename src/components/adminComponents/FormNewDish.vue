<template>
  <div class="d-flex justify-content-end mb-2">
    <button @click="showForm" :class="newDish ? 'btn btn-danger btn-sm' : 'btn btn-success btn-sm'">{{newDish ? 'CANCELAR' : 'AÑADIR PLATO'}}</button>
  </div>
  <FormDish v-if="newDish" v-bind:section_id="id" v-bind:store="true"></FormDish>
</template>

<script>
import {provide, ref} from "vue";
import FormDish from "./FormDish";

export default {
  name: "FormNewDish",
  props: {
    id: Number,
    store: Boolean,
    update: Boolean
  },
  components: {
    FormDish
  },
  setup() {
    const newDish = ref(false)
    provide('newDish', newDish)

    const showForm = () => {
      newDish.value = !newDish.value
    }

    return {showForm, newDish}
  }
}
</script>

<style scoped>

</style>