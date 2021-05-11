<template>
  <form @submit.prevent="storeUpdateDish" class="mb-3">
    <div class="form-group">
      <label>Título del plato</label>
      <input type="text" name="name" v-model="dishDataStoreUpdate.name" required class="form-control" placeholder="Introduce el nombre del plato"/>
      <small class="form-text text-muted">El título no debe de ser demasiado largo</small>
    </div>

    <div class="form-group">
      <label>Precio del plato</label>
      <input type="number" step=".01" name="price" v-model="dishDataStoreUpdate.price" required class="form-control" placeholder="Introduce el precio del plato"/>
      <small class="form-text text-muted"/>
    </div>

    <div class="form-group">
      <label>Unidades</label>
      <input type="number" name="units" v-model="dishDataStoreUpdate.units" class="form-control" placeholder="Introduce las unidades que contiene el plato"/>
      <small class="form-text text-muted"/>
    </div>

    <div><label>Disponible para menú</label></div>
    <div class="form-check form-check-inline mb-2">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="dishDataStoreUpdate.menu" required id="inlineRadio1" value="1"/>
      <label class="form-check-label">SI</label>
    </div>
    <div class="form-check form-check-inline mb-2">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" v-model="dishDataStoreUpdate.menu" required id="inlineRadio2" value="0"/>
      <label class="form-check-label">NO</label>
    </div>

    <div class="form-group">
      <label>Precio con menú</label>
      <input type="number" step=".01" name="price_menu" v-model="dishDataStoreUpdate.price_menu" class="form-control" placeholder="Introduce el precio con menú"/>
      <small class="form-text text-muted"/>
    </div>

    <div class="form-group">
      <label>Ingredientes</label>
      <input type="text" name="ingredients" v-model="dishDataStoreUpdate.ingredients" class="form-control" placeholder="Introduce los ingredientes del plato"/>
      <small class="form-text text-muted"/>
    </div>

    <div><label>Alérgenos</label></div>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dishDataStoreUpdate.allergens_id[0]" v-model="dishDataStoreUpdate.allergens_id" id="inlineCheckbox1" value="1"/>
          <label class="form-check-label">Contiene gluten</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dishDataStoreUpdate.allergens_id[1]" v-model="dishDataStoreUpdate.allergens_id" id="inlineCheckbox2" value="2"/>
          <label class="form-check-label">Crustáceos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dishDataStoreUpdate.allergens_id[2]" v-model="dishDataStoreUpdate.allergens_id" id="inlineCheckbox3" value="3"/>
          <label class="form-check-label" >Huevos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dishDataStoreUpdate.allergens_id[3]" v-model="dishDataStoreUpdate.allergens_id" id="inlineCheckbox4" value="4"/>
          <label class="form-check-label">Pescado</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dishDataStoreUpdate.allergens_id[4]" v-model="dishDataStoreUpdate.allergens_id" id="inlineCheckbox5" value="5"/>
          <label class="form-check-label">Cacahuetes</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dishDataStoreUpdate.allergens_id[5]" v-model="dishDataStoreUpdate.allergens_id" id="inlineCheckbox6" value="6"/>
          <label class="form-check-label">Soja</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dishDataStoreUpdate.allergens_id[6]" v-model="dishDataStoreUpdate.allergens_id" id="inlineCheckbox7" value="7"/>
          <label class="form-check-label">Lácteos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dishDataStoreUpdate.allergens_id[7]" v-model="dishDataStoreUpdate.allergens_id" id="inlineCheckbox8" value="8"/>
          <label class="form-check-label">Frutos de cáscara</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dishDataStoreUpdate.allergens_id[8]" v-model="dishDataStoreUpdate.allergens_id" id="inlineCheckbox9" value="9"/>
          <label class="form-check-label">Apio</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dishDataStoreUpdate.allergens_id[9]" v-model="dishDataStoreUpdate.allergens_id" id="inlineCheckbox10" value="10"/>
          <label class="form-check-label">Mostaza</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dishDataStoreUpdate.allergens_id[10]" v-model="dishDataStoreUpdate.allergens_id" id="inlineCheckbox11" value="11"/>
          <label class="form-check-label">Granos de sésamo</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dishDataStoreUpdate.allergens_id[11]" v-model="dishDataStoreUpdate.allergens_id" id="inlineCheckbox12" value="12"/>
          <label class="form-check-label" >Dioxido de azufre y sulfitos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dishDataStoreUpdate.allergens_id[12]" v-model="dishDataStoreUpdate.allergens_id" id="inlineCheckbox13" value="13"/>
          <label class="form-check-label">Moluscos</label>
        </div>
        <div class="col form-check">
          <input class="form-check-input" type="checkbox" :checked="dishDataStoreUpdate.allergens_id[13]" v-model="dishDataStoreUpdate.allergens_id" id="inlineCheckbox14" value="14"/>
          <label class="form-check-label">Altramuces</label>
        </div>
      </div>
    </div>

    <div class="form-group mt-2">
      <label>Imagen del plato</label>
      <input type="file" name="media" @change="onFileSelected" class="form-control"/>
      <small class="form-text text-muted">jpeg, jpg, png. Max: 512KB</small>
    </div>
    <button type="submit" class="btn btn-primary mt-2">ACEPTAR</button>
  </form>
</template>

<script>
import {useFetchStoreDish} from "../../hooks/useFetchStoreDish";
import {ref} from "vue";
import {useFetchUpdateDish} from "../../hooks/useFetchUpdateDish";

export default {
  name: "FormDish",
  props: {
    section_id: Number,
    store: Boolean,
    update: Boolean,
    dish: Object
  },
  setup(props) {
    const dishDataStoreUpdate = ref({
      name: props.update ? props.dish.name : '',
      price: props.update ? props.dish.price : '',
      units: props.update ? props.dish.units : null,
      extra: 0,
      hidden: props.update ? props.dish.hidden : 0,
      menu: props.update ? props.dish.menu : '',
      price_menu: props.update ? props.dish.price_menu : null,
      ingredients: props.update ? props.dish.ingredients : null,
      allergens_id: props.update && props.dish.allergens.length > 0 ? props.dish.allergens : [], //comprobar como seleccionar por defecto
      section_id: props.section_id
    })

    const media = new FormData()
    const onFileSelected = (e) => {
      const file = e.target.files[0]
      media.append('media', file)
    }

    const storeUpdateDish = async () => {
      if (!dishDataStoreUpdate.value.ingredients) delete dishDataStoreUpdate.value.ingredients
      if (!dishDataStoreUpdate.value.units) delete dishDataStoreUpdate.value.units
      if (!dishDataStoreUpdate.value.price_menu) delete dishDataStoreUpdate.value.price_menu
      if (!dishDataStoreUpdate.value.allergens_id.length > 0) delete dishDataStoreUpdate.value.allergens_id
      if (store) {
        await useFetchStoreDish(dishDataStoreUpdate.value, media.values().next().value !== undefined ? media : false)
        window.location.reload()
      } else if (update) {
        await useFetchUpdateDish(dishDataStoreUpdate.value, media.values().next().value !== undefined ? media : false)
      }
    }

    return {dishDataStoreUpdate: dishDataStoreUpdate, onFileSelected, storeUpdateDish}
  }
}
</script>

<style scoped>

</style>