<template>
  <v-card color="#696eb5">
    <v-container>
      <v-layout align-center justify-space-around row fill-height>
        <v-avatar :tile="false" :size="100" color="grey lighten-4">
          <img src="../assets/building.jpg" alt="avatar">
        </v-avatar>
        <v-layout column class>
        <v-card-title primary-title>
          <div>
          <h3 class="display-1 white--text font-weight-light mb-0">{{jobInfo.job_name}}</h3>
        <div class="white--text">
          <span >Job number: {{jobInfo.job_no}}</span><br>
          <span>Project manager: {{upperFirstName}} {{upperLastName}}</span><br>
          Contact number: {{jobInfo.pm_number}}
        </div>
        </div>
        </v-card-title>
        </v-layout>
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
  computed: {
    upperFirstName: function() {
      if (this.jobInfo.pm_first_name) this.jobInfo.pm_first_name.charAt(0).toUpperCase() + this.jobInfo.pm_first_name.slice(1)
    },
    upperLastName: function() {
      if (this.jobInfo.pm_last_name) this.jobInfo.pm_last_name.charAt(0).toUpperCase() + this.jobInfo.pm_last_name.slice(1)
    }
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
