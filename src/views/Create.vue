<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <JobHeader/>
      </v-flex>
      <v-flex xs12>
        <SiteMap :boundary="polygon" :sendCoords="fetchCoords"/>
        <CreateForm :coords="polygon"/>
        
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import JobHeader from "../components/JobHeader";
import SiteMap from "../components/SiteMap";
import CreateForm from "../components/CreateForm";

export default {
  name: "Site",
  data() {
    return {
      valid: true,
      polygon: [[]],
    };
  },
  watch: {},

  mounted() {
    // this.fetchQuestions();
  },

  methods: {
    fetchCoords(coords) {
      this.polygon = coords[0].map(coord => {
        return {
          latitude: coord.lat,
          longitude: coord.lng
        };
      });
    }
  },

  components: {
    SiteMap,
    JobHeader,
    CreateForm
  }
};
</script>
