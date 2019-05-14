<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <JobHeader :jobInfo="jobInfo"/>
      </v-flex>
      <v-dialog>
        <router-view></router-view>
      </v-dialog>
      <v-flex xs12>
        <JobSiteCarousel/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import JobHeader from "../components/JobHeader";
import JobSiteCarousel from "../components/JobSiteCarousel";
import * as api from "../api";

export default {
  name: "Site",
  data: () => ({
    jobInfo: {},
    siteInfo: {}
  }),
  components: {
    JobSiteCarousel,
    JobHeader
  },
  created() {
    this.getJobInfo();
  },
  methods: {
    async getJobInfo() {
      this.jobInfo = await api.getSingleJob(this.$route.params.id);
    },

  }
};
</script>
