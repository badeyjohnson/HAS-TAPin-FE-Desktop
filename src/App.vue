<template>
  <v-app>
    <v-container>
      <v-layout align-center justify-center column fill-height>
        <v-flex>
          <Toolbar/>
        </v-flex>
        <v-flex>
          <router-view>
            <!-- this is where the route matched will render-->
          </router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import router from "./routers/routes.js";

export default {
  name: "App",
  router,
  components: {
    Toolbar
  }
};
</script>
