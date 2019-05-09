<template>
  <v-container fill-height fluid class="Dashboard">
    <v-layout row wrap>
      <v-flex xs12>
        <DashboardHeader/>
      </v-flex>
      <v-flex xs12>
        <ul>
          <li v-for="job in jobs" :key="`${job.JN}`">
            <DashboardProject :job="job"/>
          </li>
        </ul>
      </v-flex>
      <v-flex xs12>
        <DashboardCreate/>
      </v-flex>
      <v-flex>
        <h3>{{msg}}</h3>
        <ul>
          <li>
            <a href="https://router.vuejs.org" target="_blank" rel="noopener">{{jobs[0].JN}}</a>
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

export default {
  name: "Dashboard",
  data: () => {
    return {
      msg: "hello",
      jobs: [
        { JN: 1242, name: "one" },
        { JN: 1865, name: "blue" },
        { JN: 12456, name: "small" },
        { JN: 127, name: "duck" },
        { JN: 545678, name: "row" },
        { JN: 368, name: "again" },
        { JN: 3610, name: "again" }
      ]
    };
  },
  components: {
    DashboardHeader,
    DashboardProject,
    DashboardCreate
  },
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
