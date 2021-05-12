<template>
  <header class="card-header text-center alert alert-danger">
    <div class="d-flex justify-content-end">
      <button v-if="!accessToken" @click="redirectLogin" class="btn"><FontAwesomeIcon :icon="['fas', 'sign-in-alt']" color="green"></FontAwesomeIcon></button>
      <button v-if="getPath === '/' && accessToken" @click="redirectAdmin" class="btn"><FontAwesomeIcon :icon="['fas', 'user']" color="blue"></FontAwesomeIcon></button>
      <button v-if="accessToken" @click="logout" class="btn"><FontAwesomeIcon :icon="['fas', 'sign-out-alt']" color="red"></FontAwesomeIcon></button>
    </div>
    <h1 class="display-1 fw-bolder">
      <span>C</span>
      <span>U</span>
      <span>K</span>
      <span>Y</span>
      <span>'</span>
      <span>S</span>
    </h1>
    <a v-for="contact in contacts" :key="contact.id" :href="contact.url" target="_blank" rel="noreferrer" class="mx-2">
      <FontAwesomeIcon v-if="contact.name.toLowerCase() === 'whatsapp'" :icon="['fab', 'whatsapp-square']" class="display-6"/>
      <FontAwesomeIcon v-if="contact.name.toLowerCase() === 'phone'" :icon="['fas', 'phone-square']" class="display-6"/>
      <FontAwesomeIcon v-if="contact.name.toLowerCase() === 'facebook'" :icon="['fab', 'facebook-square']" class="display-6"/>
      <FontAwesomeIcon v-if="contact.name.toLowerCase() === 'instagram'" :icon="['fab', 'instagram-square']" class="display-6"/>
      <FontAwesomeIcon v-if="contact.name.toLowerCase() === 'google maps'" :icon="['fas', 'map-marker-alt']" class="display-6"/>
    </a>


  </header>
</template>

<script>
import {useFetchHeader} from "../hooks/useFetchHeader";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhoneSquare, faMapMarkerAlt, faSignInAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { faWhatsappSquare, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from "../router";
import {ref} from "vue";
library.add(faPhoneSquare, faMapMarkerAlt, faWhatsappSquare, faFacebookSquare, faInstagramSquare, faSignInAlt, faSignOutAlt, faUser)

export default {
  name: "Header",
  components: {
    FontAwesomeIcon
  },
  setup() {
    const accessToken = ref(false)
    const getPath = ref(window.location.pathname)

    accessToken.value = localStorage.getItem('jwtToken') && new Date(localStorage.getItem('tokenExpires')).getTime() > Date.now()

    const redirectLogin = () => {
      router.push('login')
    }

    const logout = () => {
      localStorage.removeItem('jwtToken')
      localStorage.removeItem('tokenExpires')
      accessToken.value = localStorage.getItem('jwtToken') && new Date(localStorage.getItem('tokenExpires')).getTime() > Date.now()
      if (getPath.value !== '/') {
        router.push('login')
      }
    }

    const redirectAdmin = () => {
      router.push('admin')
    }

    return {...useFetchHeader(), redirectLogin, accessToken, logout, getPath, redirectAdmin}
  }
}
</script>
