<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <router-view>
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
  router,
  components: {
    Toolbar
  }
};
</script>
