<template>
  <v-app>
    <Toolbar :logout="logout"/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "./components/TheToolbar";
import router from "./routers/routes.js";

export default {
  name: "App",
  router,
  components: {
    Toolbar
  },
  mounted() {
    this.auth = localStorage.getItem("isAuth") || false;
  },

  methods: {
    logout() {
      localStorage.removeItem("isAuth");
      localStorage.removeItem("user");
    }
  }
};
</script>
