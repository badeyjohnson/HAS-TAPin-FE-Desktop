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
      const coords = await api.getMapCoords(this.$route.params.site_id);
      this.polygon = coords.map(coord => {
        const coordsRefactor = [coord.latitude, coord.longitude];
        return coordsRefactor;
      });
    }
  },

  components: {
    SiteMap,
    CreateForm
  }
};
</script>
