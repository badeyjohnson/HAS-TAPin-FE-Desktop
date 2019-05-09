<template>
  <v-card>
    <v-container>
      <v-layout>
        <v-card-title primary-title>
          <h3 class="headline mb-0">this is an example risk assessment card</h3>
        </v-card-title>
        <SiteAssessment/>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import SiteAssessment from "./SiteAssessment";

export default {
  name: 'JobSiteRiskAssessment',
  data: () => ({}),
  components: {
    SiteAssessment
  },
}
</script>