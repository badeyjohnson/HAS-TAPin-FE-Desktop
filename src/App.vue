<template>
  <v-app>
    <Toolbar :logout="logout" :user="user"/>
    <v-content>
      <router-view :updateUser="updateUser" :user="user"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "./components/TheToolbar";
import router from "./routers/routes.js";

export default {
  name: "App",
  router,
  data: () => ({
    user: {}
  }),
  components: {
    Toolbar
  },
  mounted() {
    this.auth = localStorage.getItem("isAuth") || false;
    this.user = JSON.parse(localStorage.getItem("user"))|| "";
  },
  methods: {
    logout() {
      localStorage.removeItem("isAuth");
      localStorage.removeItem("user");
      this.user = {};
    },
    updateUser(update) {
      this.user = update
    }
  }
};
</script>
