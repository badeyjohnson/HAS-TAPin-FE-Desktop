<template>
  <v-card>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <v-list style="height: 35vh" class="scroll-y">
            <ul>
              <li v-for="n in numberOfRAs" :key="riskAssessments[n-1].site_specific_id">
                <v-card-title primary-title>
                  <h3 class="headline mb-0">Created by: {{riskAssessments[n-1].user}}</h3>
                  <h3 class="headline mb-0">Created at: {{riskAssessments[n-1].created_at}}</h3>
                </v-card-title>
                <SiteAssessment/>
              </li>
            </ul>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import SiteAssessment from "./SiteAssessment";
import * as api from "../api";

export default {
  name: "JobSiteRiskAssessment",
  data: () => ({
    riskAssessments: []
  }),
  components: {
    SiteAssessment
  },
  props: {
    siteId: {
      type: Number
    }
  },
  computed: {
    numberOfRAs() {
      return this.riskAssessments.length;
    }
  },
  mounted() {
    this.getRiskAssessments();
  },
  methods: {
    async getRiskAssessments() {
      this.riskAssessments = await api.getSiteRiskAssessments(this.siteId);
    }
  }
};
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>