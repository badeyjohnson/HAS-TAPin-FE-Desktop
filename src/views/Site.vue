<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <SiteHeader/>
      </v-flex>
      <v-flex xs12>
        <SiteRiskAssessments/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SiteHeader from "../components/SiteHeader";
import SiteRiskAssessments from "../components/SiteRiskAssessments";
export default {
  name: "Site",
  components: {
    SiteRiskAssessments,
    SiteHeader
  }
};
</script>
