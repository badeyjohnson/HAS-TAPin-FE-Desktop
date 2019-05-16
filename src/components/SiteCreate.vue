<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-layout justify-end>
        <v-btn class="white--text" flat v-on="on">+ Site</v-btn>
      </v-layout>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2 pa-2 justify-space-between" primary-title>
        <v-btn class="headline pl-3" color="#696eb5" large flat @click="newSite">
          <v-icon>add</v-icon>Create Site
        </v-btn>
        <v-card-actions>
          <v-btn class="px-2" color="black" flat @click="closePopup">Close</v-btn>
        </v-card-actions>
      </v-card-title>
      <v-container>
        <v-layout column>
          <v-form ref="form">
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  class="px-3"
                  v-model="site_name"
                  @blur="checkSiteName"
                  @focus="resetRule"
                  label="Site Name"
                  :rules="blurRule"
                  required
                ></v-text-field>
                <v-text-field
                  class="px-3 pb-4"
                  v-model="site_description"
                  label="Description"
                  :rules="allRules"
                  required
                ></v-text-field>
                <span class="font-weight-light px-3">Please draw a site boundary below</span>
                <SiteMap :rerender="dialog" :boundary="polygon" :sendCoords="fetchCoords"/>
              </v-flex>
            </v-layout>
          </v-form>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import SiteMap from "./SiteMap";
import * as api from "../api";

export default {
  name: "SiteCreate",
  data: () => {
    return {
      dialog: false,
      site_name: "",
      site_description: "",
      polygon: [],
      createdPolygon: [],
      allRules: [v => !!v || "Required"],
      blurRule: []
    };
  },
  props: {
    optimisticRender: {
      type: Function
    }
  },
  components: {
    SiteMap
  },
  methods: {
    async newSite() {
      if (this.$refs.form.validate() && this.createdPolygon.length) {
        const addedSite = await api.createSite(this.$route.params.id, {
          site_name: this.site_name,
          site_description: this.site_description
        });

        api.postMapCoords(addedSite.site_id, this.createdPolygon)
        this.optimisticRender({
          site_id: addedSite.site_id,
          job_no: this.$route.params.id,
          site_name: this.site_name,
          site_description: this.site_description
        });
        this.$refs.form.reset();
        this.dialog = false;
      }
    },
    async checkSiteName() {
      const exisitingSites = await api.getJobSites(this.$route.params.id);
      const exisitingSiteNames = exisitingSites.map(site => site.site_name);
      this.blurRule = exisitingSiteNames.includes(this.site_name)
        ? [() => "Site already included for this Job"]
        : [v => !!v || "Required"];
    },
    resetRule() {
      this.blurRule = [];
    },
    fetchCoords(coords) {
      this.createdPolygon = coords[0].map(coord => {
        return {
          latitude: coord.lat,
          longitude: coord.lng
        };
      });
    },
    closePopup() {
      this.dialog = false;
      this.$refs.form.reset();
    }
  }
};
</script>