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
        [53.808819, -1.570087],
        [53.802323, -1.537812],
        [53.787217, -1.542117],
        [53.792495, -1.566657]
      ]
    };
  },
  components: {
    SiteMap,
    JobHeader
  }
};
</script>
