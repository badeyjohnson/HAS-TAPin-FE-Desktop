<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <router-link class="nav-link" exact to="/dashboard">
        <span>Tap</span>
        <span class="font-weight-light">In</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link class="nav-link" exact to="/site/create">
      <v-btn flat>
        <span class="mr-2">Create</span>
      </v-btn>
    </router-link>
  </v-toolbar>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
}
</style>
