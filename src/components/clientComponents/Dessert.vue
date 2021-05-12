<template>
  <div v-for="dessert in desserts" :key="dessert.id">
    <div v-if="!dessert.hidden" type="button" @click="changeShow(dessert.id)" class="row alert alert-danger p-0 mb-0">
      <span class="col-2 col-sm-1 p-0">
        <img v-if="dessert.picture" :src="dessert.picture.url" alt="Dish" class="img-thumbnail img-children">
      </span>
      <span class="col-8 col-sm-9 p-0 m-0 pl-3 pl-sm-0 d-flex align-items-center h6">{{dessert.name}}</span>
      <span class="col-1 col-sm-1 p-0 m-0 d-flex justify-content-end align-items-center h5">{{dessert.price}}€</span>
      <span class="col-1 col-sm-1 border-0 alert-danger p-0 d-flex justify-content-center align-items-center">
        <FontAwesomeIcon v-if="show.show1 && show.show2 === dessert.id" :icon="['fas', 'chevron-down']"/>
        <FontAwesomeIcon v-else :icon="['fas', 'chevron-right']"/>
      </span>
    </div>

    <DessertShow v-if="show.show1 && show.show2 === dessert.id" v-bind:dessert="dessert"></DessertShow>

  </div>
</template>

<script>
import {reactive} from "vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import DessertShow from "./DessertShow";
library.add(faChevronRight, faChevronDown)

export default {
  name: "Dessert",
  props: ['desserts'],
  components: {
    DessertShow,
    FontAwesomeIcon,
  },
  setup() {
    const show = reactive({
      show1: false,
      show2: null
    })

    const changeShow = (id) => {
      if (show.show2 !== id && show.show1 === true) {
        show.show2 = id
        return
      }
      show.show2 = id
      show.show1 = !show.show1
    }


    return {show, changeShow}
  }
}
</script>

<style scoped>
.img-children {
  width: 55px;
  height: 55px;
  object-fit: cover;
}
</style>