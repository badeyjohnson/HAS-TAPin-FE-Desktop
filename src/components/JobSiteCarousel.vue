<template>
  <v-card color="black" dark flat tile>
    <v-window v-model="onboarding">
      <v-window-item v-for="n in carouselLength" :key="`card-${n}`">
        <SiteInfo :info="siteDetails[n-1]"/>
        <JobSiteRiskAssessment :siteId="siteDetails[n-1].site_id"/>
      </v-window-item>
    </v-window>
    <v-card-actions class="justify-space-between">
      <v-btn flat @click="prev">
        <v-icon>arrow_back_ios</v-icon>
      </v-btn>
      <v-item-group v-model="onboarding" class="text-xs-center" mandatory>
        <v-item v-for="n in carouselLength" :key="`btn-${n}`">
          <v-btn slot-scope="{ active, toggle }" :input-value="active" icon @click="toggle" color="grey darken-2">
            <v-icon>panorama_fish_eye</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn flat @click="next">
        <v-icon>arrow_forward_ios</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import SiteInfo from "./SiteInfo";
import JobSiteRiskAssessment from "./JobSiteRiskAssessment";

export default {
  data: () => ({
    onboarding: 0
  }),
  components: {
    SiteInfo,
    JobSiteRiskAssessment
  },
  props: {
    siteDetails: {
      type: Array
    },
    getSiteDetails: {
      type: Function
    }
  },
  computed: {
    carouselLength() {
      return this.siteDetails.length;
    }
  },
  created() {
    this.getSiteDetails();
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.carouselLength ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.carouselLength - 1 : this.onboarding - 1;
    }
  }
};
</script>
