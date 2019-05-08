<template>
  <v-container fill-height fluid class="Dashboard">
    <v-layout row wrap>
      <v-flex xs12>
        <DashboardHeader/>
      </v-flex>
      <v-flex xs12>
        <ul>
          <li>
            <DashboardProject/>
          </li>
          <li>
            <DashboardProject/>
          </li>
          <li>
            <DashboardProject/>
          </li>
        </ul>
      </v-flex>
      <v-flex xs12>
            <DashboardCreate/>
      </v-flex>
      <v-flex>
        <h3>Export</h3>
        <ul>
          <li>
            <a href="https://router.vuejs.org" target="_blank" rel="noopener">Project</a>
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
  components: {
    DashboardHeader,
    DashboardProject,
    DashboardCreate
  },
  props: {
    msg: {
      type: String,
      required: true
    },
    user: {
      type: Number,
      required: true
    }
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
