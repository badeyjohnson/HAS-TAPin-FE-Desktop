<template>
  <div>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
      <v-img :src="require('../assets/Arup-logo.png')" class="my-3" contain height="200"></v-img>
    <form>
      <v-text-field v-model="email" label="E-mail" data-vv-name="email" required></v-text-field>
      <v-text-field v-model="password" label="Password" data-vv-name="password" required></v-text-field>
      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
    </v-parallax>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data: () => ({
    email: "",
    dictionary: {
      attributes: {
        email: "E-mail Address"
        // custom attributes
      }
    }
  }),

  methods: {
    clear() {
      this.email = "";
    }
  }
};
</script>