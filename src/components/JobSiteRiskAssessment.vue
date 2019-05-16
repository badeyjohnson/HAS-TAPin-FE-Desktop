<template>
  <v-card>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <v-list style="height: 35vh" class="scroll-y" >
            <ul >
              <li v-for="n in numberOfRAs" :key="riskAssessments[n-1].site_specific_id" >
                <v-card hover class="my-2">
                <v-card-title primary-title justify-space-around>
                  <div >
                  <span class="font-weight-light title mb-0">Created by: {{riskAssessments[n-1].user}}</span><br>
                  <span class="font-weight-light subheading mb-0">Date: {{formattedDates[n-1]}}</span>
                  </div>
                  <v-spacer></v-spacer>
                <SiteAssessment
                  :siteId="siteId"
                  :siteRiskId="riskAssessments[n-1].site_specific_id"
                />
                </v-card-title>
                </v-card>
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
import * as util from "../util";
import SiteAssessment from "./SiteAssessment";
import * as api from "../api";
import router from "../routers/routes.js";

export default {
  name: "JobSiteRiskAssessment",

  router,
  data: () => ({
    riskAssessments: [],
    formattedDates: []
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
      const response = await api.getSiteRiskAssessments(this.siteId);
      console.log(response, 'response')
      this.riskAssessments = response.sort((a, b) => b.created_at - a.created_at)
      console.log(this.riskAssessments, 'ra')
      this.formattedDates = this.riskAssessments.map(assessment => {
        return util.dateConverter(assessment.created_at);
      });
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