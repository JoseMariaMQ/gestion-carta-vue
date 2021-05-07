<template>
  <footer class="card-footer alert alert-light">
    <hr/>
    <div class="text-center">
      <p class="mb-0">© CUKY'S 2021 | Developed by JoseMariaMQ</p>
      <a class="mx-2" href="https://github.com/JoseMariaMQ" target="_blank" rel="noreferrer"><FontAwesomeIcon :icon="['fab', 'github']" color="#666"/></a>
      <a class="mx-2" href="https://www.linkedin.com/in/josemariamq" target="_blank" rel="noreferrer"><FontAwesomeIcon :icon="['fab', 'linkedin']" color="#666"/></a>
      <a class="mx-2" href="https://twitter.com/JoseMariaMQ" target="_blank" rel="noreferrer"><FontAwesomeIcon :icon="['fab', 'twitter']" color="#666"/></a>
    </div>
  </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faGithub, faTwitter, faLinkedin)

export default {
  name: "Footer",
  components: {
    FontAwesomeIcon
  }
}
</script>
