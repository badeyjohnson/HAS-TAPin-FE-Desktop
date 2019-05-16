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
                <SiteAssessment :siteId="siteId" :siteRiskId="riskAssessments[n-1].site_specific_id"/>
              </li>
            </ul>
          </v-list>
          <div v-if="!numberOfRAs">
            <v-btn flat @click="createRiskAssessment">+ Risk Assessment</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import SiteAssessment from "./SiteAssessment";
import * as api from "../api";
import router from "../routers/routes.js";

export default {
  name: "JobSiteRiskAssessment",

  router,
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
    },
    createRiskAssessment() {
      router.push({
        path: `/${this.siteId}/risk_assessment/create`
      });
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