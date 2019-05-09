<template>
  <v-container text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs6 sm4 lg3>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
          <v-img :src="require('../assets/Arup-logo.png')" class="my-3" contain height="200"></v-img>
          <form >
            <v-text-field v-model="email" label="E-mail" data-vv-name="email" required></v-text-field>
            <v-text-field 
              v-model="password" 
              :append-icon="showPassword ? 'visibility' : 'visibility_off'"
              label="Password" 
              data-vv-name="password" 
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              required>
            </v-text-field>
          <router-link class="nav-link" exact to="/dashboard">
            <v-btn @click="submit">submit</v-btn>
          </router-link>
            <v-btn @click="clear">clear</v-btn>
          </form>
        </v-parallax>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
    showPassword: false,
  }),

  methods: {
    clear() {
      this.email = "";
      this.password = "";
    },
    submit() {
      console.log('email: ', this.email, ' password: ', this.password)
    }
  }
};
</script>

<style scoped>
.nav-link {
  text-decoration: none;
}
</style>