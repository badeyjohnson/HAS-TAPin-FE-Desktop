<template>
  <v-card>
    <v-container>
      <v-layout align-center justify-space-between row fill-height>
        <v-card-title primary-title>
          <h3 class="headline mb-0">Site name: {{info.site_name}}</h3>
        </v-card-title>
        <div v-if="">
        <v-btn flat @click="createRiskAssessment">+ Risk Assessment</v-btn>
        </div>
      </v-layout>

    </v-container>
  </v-card>
</template>

<script>
import router from "../routers/routes.js";

export default {
  name: "SiteInfo",
  router,
  props: {
    info: {
      type: Object
    }
  },
  methods: {
    createRiskAssessment() {
      router.push({
        path: `/${this.info.site_id}/risk_assessment/create`,
      });
    }
  }
};
</script>

<style scoped>
.nav-link {
  text-decoration: none;
}
</style>