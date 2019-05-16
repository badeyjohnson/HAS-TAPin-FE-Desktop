<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="1200">
      <template v-slot:activator="{ on }">
        <v-btn color="#696eb5" dark v-on="on">risk assessment</v-btn>
      </template>
      <v-card >
        <v-card-title class="headline grey lighten-2" primary-title>Site information</v-card-title>
        <v-card-text>This card should have a map, information about the latest risk assessment, list of people who have filled it out etc</v-card-text>
        <SiteMap :rerender=" dialog " :boundary="polygon"/>
        <CreateForm :SSRA="riskData" :site_id="siteId"/>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import SiteMap from "./SiteMap";
import CreateForm from "./CreateForm";
import * as api from "../api";

export default {
  data() {
    return {
      dialog: false,
      polygon: [],
      riskData: [],
    };
  },
  props: {
    siteId: {
      type: Number
    },
    siteRiskId: {
      type: Number
    }
  },
  components: {
    SiteMap,
    CreateForm
  },

  mounted() {
    this.fetchMapCoords();
    this.fetchSSRA();
  },

  methods: {
    async fetchMapCoords() {
      const coords = await api.getMapCoords(this.siteId);
      this.polygon = coords.map(coord => {
        const coordsRefactor = [coord.latitude, coord.longitude];
        return coordsRefactor;
      });
    },
    async fetchSSRA() {
      const unsortedRiskData = await api.getSSRA(this.siteId, this.siteRiskId);
      const sortedRiskData = unsortedRiskData.sort(function(a, b) {
        return a.question_id - b.question_id;
      });
      this.riskData = sortedRiskData;
    }
  }
};
</script>