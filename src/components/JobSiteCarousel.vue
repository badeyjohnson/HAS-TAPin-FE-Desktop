<template>
  <v-card color="black" dark flat tile>
    <v-window v-model="onboarding">
      <v-window-item v-for="n in length" :key="`card-${n}`">
        <JobInfo/>
        <JobSiteRiskAssessment/>
      </v-window-item>
    </v-window>
    <v-card-actions class="justify-space-between">
      <v-btn flat @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group v-model="onboarding" class="text-xs-center" mandatory>
        <v-item v-for="n in length" :key="`btn-${n}`">
          <v-btn slot-scope="{ active, toggle }" :input-value="active" icon @click="toggle">
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn flat @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import JobInfo from "./JobInfo";
import JobSiteRiskAssessment from "./JobSiteRiskAssessment";

export default {
  data: () => ({
    length: 3,
    onboarding: 0
  }),
  components: {
    JobInfo,
    JobSiteRiskAssessment
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    }
  }
};
</script>
