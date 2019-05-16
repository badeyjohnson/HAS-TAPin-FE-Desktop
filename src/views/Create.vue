<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <SiteMap :boundary="polygon"/>
        <CreateForm :coords="polygon"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SiteMap from "../components/SiteMap";
import CreateForm from "../components/CreateForm";
import * as api from "../api";

export default {
  name: "Site",
  data() {
    return {
      valid: true,
      polygon: [[]],
    };
  },
  mounted() { 
      this.fetchPolygon()
  },
  methods: {
    async fetchPolygon() {
      const response = await api.getMapCoords(this.$route.params.site_id)
      if (response) {
        this.polygon = response.map(point => [point.latitude, point.longitude])
      }
    }
  },

  components: {
    SiteMap,
    CreateForm
  }
};
</script>
