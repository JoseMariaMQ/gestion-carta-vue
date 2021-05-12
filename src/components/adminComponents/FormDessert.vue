<template>
  <form @submit.prevent="storeUpdateDessert" class="mb-3">
    <div class="form-group">
      <label>Título del postre</label>
      <input type="text" name="name" v-model="dessertDataStoreUpdate.name" required class="form-control" placeholder="Introduce el nombre del postre"/>
      <small class="form-text text-muted">El título no debe de ser demasiado largo</small>
    </div>

    <div class="form-group">
      <label>Precio del postre</label>
      <input type="number" step=".01" name="price" v-model="dessertDataStoreUpdate.price" required class="form-control" placeholder="Introduce el precio del postre"/>
      <small class="form-text text-muted"/>
    </div>

    <div class="form-group">
      <label>Unidades</label>
      <input type="number" name="units" v-model="dessertDataStoreUpdate.units" class="form-control" placeholder="Introduce las unidades que contiene el postre"/>
      <small class="form-text text-muted"/>
    </div>

    <div><label>Disponible para menú</label></div>
    <div class="form-check form-check-inline mb-2">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="dessertDataStoreUpdate.menu" required id="inlineRadio1" value="1"/>
      <label class="form-check-label">SI</label>
    </div>
    <div class="form-check form-check-inline mb-2">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="dessertDataStoreUpdate.menu" required id="inlineRadio2" value="0"/>
      <label class="form-check-label">NO</label>
    </div>

    <div class="form-group">
      <label>Precio con menú</label>
      <input type="number" step=".01" name="price_menu" v-model="dessertDataStoreUpdate.price_menu" class="form-control" placeholder="Introduce el precio con menú"/>
      <small class="form-text text-muted"/>
    </div>

    <div class="form-group">
      <label>Ingredientes</label>
      <input type="text" name="ingredients" v-model="dessertDataStoreUpdate.ingredients" class="form-control" placeholder="Introduce los ingredientes del postre"/>
      <small class="form-text text-muted"/>
    </div>

    <div><label>Alérgenos</label></div>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dessert?.allergens.some(allergen => allergen.id === 1)" v-model="dessertDataStoreUpdate.allergens_id" id="inlineCheckbox1" value="1"/>
          <label class="form-check-label">Contiene gluten</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dessert?.allergens.some(allergen => allergen.id === 2)" v-model="dessertDataStoreUpdate.allergens_id" id="inlineCheckbox2" value="2"/>
          <label class="form-check-label">Crustáceos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dessert?.allergens.some(allergen => allergen.id === 3)" v-model="dessertDataStoreUpdate.allergens_id" id="inlineCheckbox3" value="3"/>
          <label class="form-check-label" >Huevos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dessert?.allergens.some(allergen => allergen.id === 4)" v-model="dessertDataStoreUpdate.allergens_id" id="inlineCheckbox4" value="4"/>
          <label class="form-check-label">Pescado</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dessert?.allergens.some(allergen => allergen.id === 5)" v-model="dessertDataStoreUpdate.allergens_id" id="inlineCheckbox5" value="5"/>
          <label class="form-check-label">Cacahuetes</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dessert?.allergens.some(allergen => allergen.id === 6)" v-model="dessertDataStoreUpdate.allergens_id" id="inlineCheckbox6" value="6"/>
          <label class="form-check-label">Soja</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dessert?.allergens.some(allergen => allergen.id === 7)" v-model="dessertDataStoreUpdate.allergens_id" id="inlineCheckbox7" value="7"/>
          <label class="form-check-label">Lácteos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dessert?.allergens.some(allergen => allergen.id === 8)" v-model="dessertDataStoreUpdate.allergens_id" id="inlineCheckbox8" value="8"/>
          <label class="form-check-label">Frutos de cáscara</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dessert?.allergens.some(allergen => allergen.id === 9)" v-model="dessertDataStoreUpdate.allergens_id" id="inlineCheckbox9" value="9"/>
          <label class="form-check-label">Apio</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dessert?.allergens.some(allergen => allergen.id === 10)" v-model="dessertDataStoreUpdate.allergens_id" id="inlineCheckbox10" value="10"/>
          <label class="form-check-label">Mostaza</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dessert?.allergens.some(allergen => allergen.id === 11)" v-model="dessertDataStoreUpdate.allergens_id" id="inlineCheckbox11" value="11"/>
          <label class="form-check-label">Granos de sésamo</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dessert?.allergens.some(allergen => allergen.id === 12)" v-model="dessertDataStoreUpdate.allergens_id" id="inlineCheckbox12" value="12"/>
          <label class="form-check-label" >Dioxido de azufre y sulfitos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dessert?.allergens.some(allergen => allergen.id === 13)" v-model="dessertDataStoreUpdate.allergens_id" id="inlineCheckbox13" value="13"/>
          <label class="form-check-label">Moluscos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dessert?.allergens.some(allergen => allergen.id === 14)" v-model="dessertDataStoreUpdate.allergens_id" id="inlineCheckbox14" value="14"/>
          <label class="form-check-label">Altramuces</label>
        </div>
      </div>
    </div>

    <div class="form-group mt-2">
      <label>Imagen del postre</label>
      <input type="file" name="media" @change="onFileSelected" class="form-control"/>
      <small class="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
    </div>
    <button type="submit" class="btn btn-primary mt-2">ACEPTAR</button>
  </form>
</template>

<script>
import {inject, ref} from "vue";
import {useFetchStoreDessert} from "../../hooks/useFetchStoreDessert";
import {useFetchUpdateDessert} from "../../hooks/useFetchUpdateDessert";

export default {
  name: "FormDessert",
  props: {
    section_id: Number,
    store: Boolean,
    update: Boolean,
    dessert: Object
  },
  setup(props) {
    const sectionDessertUpdate = inject('section', undefined)
    const show = inject('showDessert', undefined)
    const newDessert = inject('newDessert', undefined)

    /**
     * Show and hide the form for dessert update
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

    const dessertDataStoreUpdate = ref({
      name: props.update ? props.dessert.name : '',
      price: props.update ? props.dessert.price : '',
      units: props.update ? props.dessert.units : null,
      extra: 0,
      hidden: props.update ? props.dessert.hidden : 0,
      menu: props.update ? props.dessert.menu : '',
      price_menu: props.update ? props.dessert.price_menu : null,
      ingredients: props.update ? props.dessert.ingredients : '',
      allergens_id: props.update && props.dessert.allergens.length > 0 ? props.dessert.allergens?.map(allergen => (allergen.id)) : [],
    })

    const media = new FormData()
    const onFileSelected = (e) => {
      const file = e.target.files[0]
      media.append('media', file)
    }

    const storeUpdateDessert = async () => {
      if (!dessertDataStoreUpdate.value.ingredients) delete dessertDataStoreUpdate.value.ingredients
      if (!dessertDataStoreUpdate.value.units) delete dessertDataStoreUpdate.value.units
      if (!dessertDataStoreUpdate.value.price_menu) delete dessertDataStoreUpdate.value.price_menu
      if (!dessertDataStoreUpdate.value.allergens_id.length > 0) delete dessertDataStoreUpdate.value.allergens_id
      if (props.store) {
        sectionDessertUpdate.value = await useFetchStoreDessert(dessertDataStoreUpdate.value, media.values().next().value !== undefined ? media : false, props.section_id)
        newDessert.value = !newDessert.value
      } else if (props.update) {
        sectionDessertUpdate.value = await useFetchUpdateDessert(dessertDataStoreUpdate.value, media.values().next().value !== undefined ? media : false, props.dessert.id, props.dessert.section_id)
        changeShow(props.dessert.id)
      }
    }

    return {dessertDataStoreUpdate, onFileSelected, storeUpdateDessert}
  }
}
</script>

<style scoped>

</style>