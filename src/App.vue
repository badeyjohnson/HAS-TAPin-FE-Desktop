<template>
  <v-app>
    <Toolbar :logout="logout"/>
    <v-content>
      <router-view :updateUser="updateUser" :user="email"></router-view>
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
    email: ""
  }),
  components: {
    Toolbar
  },
  mounted() {
    this.auth = localStorage.getItem("isAuth") || false;
    this.email = localStorage.getItem("user") || "";
  },

  methods: {
    logout() {
      localStorage.removeItem("isAuth");
      localStorage.removeItem("user");
      this.email = "";
    },
    updateUser(update) {
      this.email = update
    }
  }
};
</script>
