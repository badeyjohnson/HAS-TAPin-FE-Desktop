// base this off DashboardHeader

<template>
  <v-card :hover="true">
    <v-container>
      <v-layout>
        <router-link class="nav-link" exact to="/job/create">
        <v-card-title primary-title>
          <h3 class="headline mb-0">+ Create</h3>
        </v-card-title>
        </router-link>
      </v-layout>
    </v-container>
  </v-card>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
}
</style>