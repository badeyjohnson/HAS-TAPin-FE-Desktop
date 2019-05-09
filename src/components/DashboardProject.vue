<template>
  <v-card>
    <v-container>
      <v-layout>
        <v-card-title primary-title>
          <h3 class="headline mb-0">this is an example project card</h3>
        </v-card-title>
        <router-link class="nav-link" exact to="/job/:id">
        <v-card-title primary-title>
          <h3 class="headline mb-0">Go to job</h3>
        </v-card-title>
        </router-link>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "DashboardProject",
  data: () => {},
  props: {
    job: {
      type: Array,
      required: true,
    }
  }
}