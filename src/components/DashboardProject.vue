<template>
  <router-link class="nav-link" exact :to="{path: `job/${job.job_no}`}">
    <v-card :hover="true">
      <v-container class="DashboardProject">
        <v-layout align-center>
          <v-card-title primary-title>
            <h2 class="headline mb-1 pr-5">{{job.job_no}}</h2>
          </v-card-title>
          <v-card-text >
            <h1 class="headline font-weight-bold">{{job.job_name}}</h1>
          </v-card-text>
        </v-layout>
      </v-container>
    </v-card>
  </router-link>
</template>

<script>
export default {
  name: "DashboardProject",
  props: {
    job: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped>
.nav-link {
  text-decoration: none;
}
</style>