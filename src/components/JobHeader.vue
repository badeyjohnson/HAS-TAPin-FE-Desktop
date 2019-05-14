<template>
  <v-card>
    <v-container>
      <v-layout>
        <v-avatar :tile="false" :size="100" color="grey lighten-4">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
        <v-card-title primary-title>
          <h3 class="headline mb-0">{{jobInfo.job_name}}</h3>
        </v-card-title>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import * as api from "../api";

export default {
  name: "JobHeader",
  data: () => ({
    jobInfo: {}
  }),
  created() {
    this.getJobInfo();
  },
  methods: {
    async getJobInfo() {
      this.jobInfo = await api.getSingleJob(this.$route.params.id);
    }
  }
};
</script>
