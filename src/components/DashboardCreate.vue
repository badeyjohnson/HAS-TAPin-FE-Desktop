<template>
  <v-card :hover="true">
    <v-container>
      <v-layout column>
        <v-form>
          <v-layout row>
            <v-flex xs2 mx-4>
              <v-text-field
                class="headline mb-1"
                v-model="job_no"
                label="Job Number"
                :rules="jnRules"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs3>
              <v-text-field
                class="headline font-weight-bold"
                v-model="job_name"
                label="Job Name"
                :rules="allRules"
                required
              ></v-text-field>
            </v-flex>
            <v-layout justify-start align-end column v-if="this.job_no">
              <v-btn class="headline mr-4" color="#696eb5" large flat @click="submit"><v-icon>add</v-icon>Create Job</v-btn>
            </v-layout>
          </v-layout>
          <v-layout v-if="this.job_no">
            <v-flex>
              <v-text-field
                class="mx-4"
                v-model="pm_first_name"
                label="PM first name"
                :rules="allRules"
                required
              ></v-text-field>
              <v-text-field
                class="mx-4"
                v-model="auto_pm_email"
                label="PM contact email"
                :rules="emailRules"
                required
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field class="mr-4 ml-2" v-model="pm_last_name" label="PM last name" :rules="allRules" required></v-text-field>
              <v-text-field
                class="mr-4 ml-2"
                v-model="pm_number"
                label="PM contact number"
                :rules="allRules"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-form>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import * as api from "../api";

export default {
  name: "CreateJob",
  data: () => {
    return {
      job_no: null,
      job_name: "",
      pm_first_name: "",
      pm_last_name: "",
      pm_number: null,
      jnRules: [
        v => !!v || "Job number is required",
        v => (v && v.length <= 6) || "Please ignore project suffix"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@arup\.com/.test(v) || "Please enter valid Arup email address"
      ],
      allRules: [v => !!v || "Field required"]
    };
  },
  computed: {
    auto_pm_email: function() {
      const lower_firstName = this.pm_first_name.toLowerCase();
      const lower_lastName = this.pm_last_name.toLowerCase();
      return this.pm_first_name || this.pm_last_name
        ? `${lower_firstName}.${lower_lastName}@arup.com`
        : "";
    }
  },
  methods: {
    async submit() {
      const user = await api.auth(this.email);
    }
  }
};
</script>

<style scoped>
.nav-link {
  text-decoration: none;
}
</style>