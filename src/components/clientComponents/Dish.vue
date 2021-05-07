<template>
  <div v-for="dish in dishes" :key="dish.id">
    <div type="button" @click="changeShow(dish.id)" class="row alert alert-danger p-0 mb-0">
      <span class="col-2 col-sm-1 p-0">
        <img v-if="dish.picture" :src="dish.picture.url" alt="Dish" class="img-thumbnail img-children">
      </span>
      <span class="col-8 col-sm-9 p-0 m-0 pl-3 pl-sm-0 d-flex align-items-center h6">{{dish.name}}</span>
      <span class="col-1 col-sm-1 p-0 m-0 d-flex justify-content-end align-items-center h5">{{dish.price}}€</span>
      <span class="col-1 col-sm-1 border-0 alert-danger p-0 d-flex justify-content-center align-items-center">
        <FontAwesomeIcon v-if="show.show1 && show.show2 === dish.id" :icon="['fas', 'chevron-down']"/>
        <FontAwesomeIcon v-else :icon="['fas', 'chevron-right']"/>
      </span>
    </div>

    <DishShow v-if="show.show1 && show.show2 === dish.id" v-bind:dish="dish"></DishShow>

  </div>

</template>

<script>
import {reactive} from 'vue'
import DishShow from "./DishShow";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faChevronRight, faChevronDown)

export default {
  name: "Dish",
  props: ['dishes'],
  components: {
    FontAwesomeIcon,
    DishShow
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