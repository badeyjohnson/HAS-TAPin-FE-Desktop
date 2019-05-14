<template>
  <v-card >
    <v-container class="DashboardProject">
      <v-layout>
        <v-card-title primary-title>
          <h1 class="headline mb-0">{{job.job_name}}</h1>
          <h2 class="headline mb-0">{{job.job_no}}</h2>
        </v-card-title>
        <router-link class="nav-link" exact :to="{path: `job/${job.job_no}`}">
          <v-card-text primary-title>
            <a class="headline mb-0">Go to Job </a>
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
    }
  }
};
</script>
