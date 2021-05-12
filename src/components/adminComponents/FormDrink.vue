<template>
  <form @submit.prevent="storeUpdateDrink" class="mb-3">
    <div class="form-group">
      <label>Título de la bebida</label>
      <input type="text" name="name" v-model="drinkDataStoreUpdate.name" required class="form-control" placeholder="Introduce el nombre de la bebida"/>
      <small class="form-text text-muted">El título no debe de ser demasiado largo</small>
    </div>

    <div class="form-group">
      <label>Precio de la bebida</label>
      <input type="number" step=".01" name="price" v-model="drinkDataStoreUpdate.price" required class="form-control" placeholder="Introduce el precio de la bebida"/>
      <small class="form-text text-muted"/>
    </div>

    <div class="form-group mt-2">
      <label>Imagen dela bebida</label>
      <input type="file" name="media" @change="onFileSelected" class="form-control"/>
      <small class="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
    </div>
    <button type="submit" class="btn btn-primary mt-2">ACEPTAR</button>
  </form>
</template>

<script>
import {inject, ref} from "vue";
import {useFetchUpdateDrink} from "../../hooks/useFetchUpdateDrink";
import {useFetchStoreDrink} from "../../hooks/useFetchStoreDrink";

export default {
  name: "FormDrink",
  props: {
    section_id: Number,
    store: Boolean,
    update: Boolean,
    drink: Object
  },
  setup(props) {
    const sectionDrinkUpdate = inject('section', undefined)
    const show = inject('showDrink', undefined)
    const newDrink = inject('newDrink', undefined)
    /**
     * Show and hide the form for dish update
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

    const drinkDataStoreUpdate = ref({
      name: props.update ? props.drink.name : '',
      price: props.update ? props.drink.price : '',
      hidden: props.update ? props.drink.hidden : 0,
    })

    const media = new FormData()
    const onFileSelected = (e) => {
      const file = e.target.files[0]
      media.append('media', file)
    }

    const storeUpdateDrink = async () => {
      if (props.store) {
        sectionDrinkUpdate.value = await useFetchStoreDrink(drinkDataStoreUpdate.value, media.values().next().value !== undefined ? media : false, props.section_id)
        newDrink.value = !newDrink.value
      } else if (props.update) {
        sectionDrinkUpdate.value = await useFetchUpdateDrink(drinkDataStoreUpdate.value, media.values().next().value !== undefined ? media : false, props.drink.id, props.drink.section_id)
        changeShow(props.drink.id)
      }
    }

    return {drinkDataStoreUpdate, onFileSelected, storeUpdateDrink}
  }
}
</script>

<style scoped>

</style>