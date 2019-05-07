<template>
  <v-app>
    <!-- <Toolbar/> -->
    
    <v-btn flat small>
      <router-link to="/foo">Go to Foo</router-link>
    </v-btn>
    <router-view><!-- this is where the route matched will render--></router-view>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import router from "./routers/index.js"

export default {
  name: "App",
  router,
  components: {
    Toolbar
  }
};
</script>
