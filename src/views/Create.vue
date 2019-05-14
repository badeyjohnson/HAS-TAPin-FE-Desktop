<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <JobHeader/>
      </v-flex>
      <!-- <v-dialog>
        <router-view></router-view>
      </v-dialog>-->
      <v-flex xs12>
        <SiteMap :boundary="polygon"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import JobHeader from "../components/JobHeader";
import SiteMap from "../components/SiteMap";

export default {
  name: "Site",
  data() {
    return {
      polygon: [
        []
      ]
    };
  },
  methods: {

  },
  components: {
    SiteMap,
    JobHeader
  }
};
</script>
