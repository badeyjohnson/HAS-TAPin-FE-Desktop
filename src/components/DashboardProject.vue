<template>
  <v-card >
    <v-container class="DashboardProject">
      <v-layout>
        <v-card-title primary-title>
          <h3 class="headline mb-0">this is an example job card</h3>
        </v-card-title>
        <router-link class="nav-link" exact to="/job/:id">
          <v-card-text primary-title>
            <a class="headline mb-0">Job number {{job.JN}}, Job name {{job.name}}</a>
          </v-card-text>
        </router-link>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "DashboardProject",
  props: {
    job: {
      type: Object,
      required: true,
      default: 'yellow'
    }
  }
};
</script>
