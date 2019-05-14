<template>
  <v-container text-xs-center>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs6 sm4 lg3>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
          <v-img :src="require('../assets/Arup-logo.png')" class="my-3" contain height="200"></v-img>
          <form>
            <v-text-field
              class="input-alpha"
              v-model="email"
              label="E-mail"
              data-vv-name="email"
              required
            ></v-text-field>
            <v-text-field
              class="textbox"
              v-model="password"
              :append-icon="showPassword ? 'visibility' : 'visibility_off'"
              label="Password"
              data-vv-name="password"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              required
            ></v-text-field>
            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </form>
        </v-parallax>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import bcrypt from "bcryptjs";
import * as api from "../api";
import router from "../routers/routes.js";

export default {
  name: "Login",
  data: () => ({
    password: "",
    email: "",
    showPassword: false
  }),
  props: {
    updateUser: {
      type: Function
    }
  },
  methods: {
    clear() {
      this.email = "";
      this.password = "";
    },
    async submit() {
      const user = await api.auth(this.email);
      bcrypt.compare(this.password, user.password, (err, res) => {
        if (res) {
          localStorage.setItem("user", user);
          localStorage.setItem("isAuth", true);
          this.updateUser(user);
          router.push({ path: "/dashboard" });
        }
      });
    }
  }
};
</script>

<style scoped>
.nav-link {
  text-decoration: none;
}
</style>