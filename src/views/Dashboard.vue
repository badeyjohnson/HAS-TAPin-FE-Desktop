<template>
  <v-container fill-height fluid class="Dashboard">
    <v-layout row wrap>
      <v-flex xs12>
        <DashboardHeader :user="user"/>
      </v-flex>
      <v-flex xs12>
        <v-list background-color="grey" style="max-height: 50vh" class="scroll-y">
          <ul>
            <li v-for="job in orderedJobs" :key="job.job_no" class="py-1">
              <DashboardProject :job="job"/>
            </li>
          </ul>
        </v-list>
      </v-flex>
      <v-flex xs12>
        <DashboardCreate :user="user" :optimisticallyRender="optimisticallyRender"/>
      </v-flex>
      <v-flex>
        <h3>Useful links</h3>
        <ul>
          <li>
            <a href="https://router.vuejs.org" target="_blank" rel="noopener">"jobs[0].JN"</a>
          </li>
          <li>
            <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">H&amp;S sheet</a>
          </li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DashboardHeader from "../components/DashboardHeader";
import DashboardProject from "../components/DashboardProject";
import DashboardCreate from "../components/DashboardCreate";
import * as api from "../api";

export default {
  name: "Dashboard",
  data: () => {
    return {
      jobs: []
    };
  },
  computed: {
    orderedJobs: function() {
      return this.jobs.sort((a, b) => a.job_no - b.job_no);
    }
  },
  props: {
    user: {
      type: Object
    }
  },
  mounted() {
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      const userJobs = await api.getJobs(this.user.email);
      this.jobs = userJobs.jobs;
    },
    optimisticallyRender(addedJobs) {
      this.jobs.push(addedJobs)
    }
  },
  components: {
    DashboardHeader,
    DashboardProject,
    DashboardCreate
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
