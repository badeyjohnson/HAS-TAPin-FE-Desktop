<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <JobHeader/>
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

export default {
  name: "Site",
  components: {
    JobSiteCarousel,
    JobHeader,
  }
};
</script>
