<template>
  <div class="container">
    <div class="d-flex justify-content-center min-vh-100">
      <div class="card">
        <div class="card-header">
          <h3>Sign In</h3>
          <div class="d-flex justify-content-end title-login">
            <span class="font-weight-bolder">CUKY'S</span>
          </div>
        </div>
        <div class="card-body">
          <form @submit.prevent="storeDish">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <FontAwesomeIcon :icon="['fas', 'user']"/>
                </span>
              </div>
              <input
                  type="text"
                  name="email"
                  class="form-control"
                  placeholder="email"
                  v-model="credentials.email"
              />

            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <FontAwesomeIcon :icon="['fas', 'key']"/>
                </span>
              </div>
              <input
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="password"
                  v-model="credentials.password"
              />
            </div>
            <div class="row align-items-center remember">
              <input type="checkbox"/>Remember Me
            </div>
            <div class="form-group">
              <input type="submit" value="Login" class="btn float-right login_btn"/>
            </div>
          </form>
        </div>
        <div class="card-footer">
<!--          <div class="d-flex justify-content-center links">
          Don't have an account?<a href="#">Sign Up</a>
          </div>-->
          <div class="d-flex justify-content-center">
            <a href="/login">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useFetchLogin} from "../hooks/useFetchLogin";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {reactive} from "vue";
import router from "../router";
library.add(faUser, faKey)

export default {
  name: "Login",
  components: {
    FontAwesomeIcon
  },
  setup() {
    const credentials = reactive({
      email: '',
      password: ''
    })

    const storeDish = async () => {
      const res = await useFetchLogin(credentials)
      if (res) router.push('admin')
    }

    return {credentials, storeDish}
  }
}
</script>

<style scoped>
.card{
  height: 350px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0,0,0,0.5) !important;
}

.title-login span{
  font-size: 60px;
  margin-left: 10px;
  color: hotpink;
}

.title-login span:hover{
  color: cornflowerblue;
  cursor: pointer;
}

.card-header h3{
  color: white;
}

.title-login{
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend span{
  width: 50px;
  background-color: cornflowerblue;
  color: black;
  border:0 !important;
}

.remember{
  color: white;
}

.remember input
{
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn{
  color: black;
  background-color: hotpink;
  width: 100px;
}

.login_btn:hover{
  color: black;
  background-color: white;
}

.links{
  color: white;
}

.links a{
  margin-left: 4px;
}

svg {
  font-weight:bold;
  max-width:600px;
  height:26px;
}
</style>