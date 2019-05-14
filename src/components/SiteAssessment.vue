<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">Full details</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Site information</v-card-title>
        <v-card-text>This card should have a map, information about the latest risk assessment, list of people who have filled it out etc</v-card-text>
        <SiteMap/>
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
export default {
  data() {
    return {
      dialog: false
    };
  },
  components: {
    SiteMap
  }
};
</script>