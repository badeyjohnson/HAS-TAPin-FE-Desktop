<template>
  <v-card>
    <v-container>
      <v-layout align-center justify-space-around row fill-height>
        <v-avatar :tile="false" :size="100" color="grey lighten-4">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
        <v-card-title primary-title>
          <h3 class="headline mb-0">{{jobInfo.job_name}}</h3>
        </v-card-title>
        <SiteCreate :optimisticRender="optimisticRender"/>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import * as api from "../api";
import SiteCreate from './SiteCreate';

export default {
  name: "JobHeader",
  data: () => ({
    jobInfo: {}
  }),
  props:{
    optimisticRender: {
      type: Function
    },
  },
  components: {
    SiteCreate,
  },
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
