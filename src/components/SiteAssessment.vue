<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="900">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">Full details</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Site information</v-card-title>
        <v-card-text>This card should have a map, information about the latest risk assessment, list of people who have filled it out etc</v-card-text>
        <SiteMap :rerender=" dialog " :boundary="polygon"/>
        <CreateForm/>
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
      siteId: 1
    };
  },
  components: {
    SiteMap,
    CreateForm
  },

  mounted() {
    this.fetchMapCoords();
    
  },

  methods: {
    async fetchMapCoords() {
      const coords = await api.getMapCoords(this.siteId);
      this.polygon = coords.map(coord => {
        const coordsRefactor = [coord.latitude, coord.longitude];
        return coordsRefactor;
      });
    }
  }
};
</script>