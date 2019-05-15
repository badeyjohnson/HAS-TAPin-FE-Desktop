<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <JobHeader :optimisticRender="optimisticRender"/>
      </v-flex>
      <v-dialog>
        <router-view></router-view>
      </v-dialog>
      <v-flex xs12>
        <JobSiteCarousel :siteDetails="siteDetails" :getSiteDetails="getSiteDetails"/>
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
    siteDetails: []
  }),
  components: {
    JobSiteCarousel,
    JobHeader
  },
  methods: {
    async getSiteDetails() {
      this.siteDetails = await api.getJobSites(this.$route.params.id);
    },
    optimisticRender(newSite) {
      this.siteDetails = this.siteDetails.concat([newSite])
    }
  }
};
</script>
