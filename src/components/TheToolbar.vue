<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <router-link class="nav-link" exact to="/dashboard">
        <span >Tap</span>
        <span class="font-weight-light">In</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <div v-if="this.$route.path === '/dashboard'">
    <router-link class="nav-link" exact to="/job/create">
      <v-btn flat>
        <span>+ Job</span>
      </v-btn>
    </router-link>
    </div> -->
    <div v-if="this.$route.params.id">
    <router-link class="nav-link" exact :to="{path : `${this.$route.params.id}/site/create`}">
      <v-btn flat>
        <span>+ Site</span>
      </v-btn>
    </router-link>
    </div>
    <div  v-if="user.email">
    <router-link class="nav-link " exact to="/login">
      <v-btn flat>
        <span @click="logout">Logout</span>
      </v-btn>
    </router-link>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    logout: {
      type: Function
    },
    user: {
      type: Object
    }
  }
};
</script>

<style scoped>
.nav-link {
  color: #696eb5;
  text-decoration: none;
}
</style>
