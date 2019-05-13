<template>
  <v-app>
    <Toolbar :logout="logout"/>
    <v-content>
      <router-view :login="login" :auth="auth">
        <!-- this is where the route matched will render-->
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "./components/TheToolbar";
import router from "./routers/routes.js";

export default {
  name: "App",
  data: () => {
    return { auth: false };
  },
  router,
  components: {
    Toolbar
  },
  mounted() {
    this.auth = localStorage.getItem("isAuth") || false;
  },

  methods: {
    login(user) {
      localStorage.setItem("user", user);
      localStorage.setItem("isAuth", true);
      this.auth = true;
    },
    logout() {
      localStorage.removeItem("isAuth");
      localStorage.removeItem("user");
      this.auth = false;
    }
  }
};
</script>
