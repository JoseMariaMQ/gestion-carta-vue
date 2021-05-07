<template>
  <header class="card-header text-center alert alert-danger">
    <h1 class="display-1 fw-bolder">
      <span>C</span>
      <span>U</span>
      <span>K</span>
      <span>Y</span>
      <span>'</span>
      <span>S</span>
    </h1>
    <a v-for="contact in contacts" :key="contact.id" :href="contact.url" target="_blank" rel="noreferrer" class="mx-1">
      <FontAwesomeIcon v-if="contact.name.toLowerCase() === 'whatsapp'" :icon="['fab', 'whatsapp-square']" class="display-6"/>
      <FontAwesomeIcon v-if="contact.name.toLowerCase() === 'phone'" :icon="['fas', 'phone-square']" class="display-6"/>
      <FontAwesomeIcon v-if="contact.name.toLowerCase() === 'facebook'" :icon="['fab', 'facebook-square']" class="display-6"/>
      <FontAwesomeIcon v-if="contact.name.toLowerCase() === 'instagram'" :icon="['fab', 'instagram-square']" class="display-6"/>
<!--      <FontAwesomeIcon v-if="contact.name.toLowerCase() === 'google maps'" :icon="['fas', 'map-marker-alt']" class="display-6"/>-->
    </a>


  </header>
</template>

<script>
import {useFetchHeader} from "../hooks/useFetchHeader";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhoneSquare, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faWhatsappSquare, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPhoneSquare, faMapMarkedAlt, faWhatsappSquare, faFacebookSquare, faInstagramSquare)

export default {
  name: "Header",
  components: {
    FontAwesomeIcon
  },
  setup() {
    return {...useFetchHeader()}
  }
}
</script>
