<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <div v-for="(q, index) in questions" :key="q.question_id">
      <v-card v-if="q.question_id <= 10" hover flat class="px-4 py-2 my-2">
        <v-text-field
          v-model="multi[index]"
          :disabled="disabled"
          :counter="100"
          :label="q.question"
          py-5
          required
        ></v-text-field>
      </v-card>
      <v-card v-if="q.question_id >10 && q.question_id <= 33" hover flat class="px-4 py-2 my-2">
        <span>{{q.question}}</span>
        <v-radio-group :disabled="disabled" v-model="answers[index]" row>
          <v-radio color="#696eb5 !important" label="Yes" value="1"></v-radio>
          <v-radio color="#696eb5 !important" label="No" value="2"></v-radio>
          <v-radio color="#696eb5 !important" label="N/A" value="3"></v-radio>
        </v-radio-group>
        <v-text-field
          v-if="answers[index] === '1' || answers[index] === '2'"
          v-model="mitigations[index]"
          :disabled="disabled"
          :counter="300"
          label="Mitigation measures / Additional information"
          required
        ></v-text-field>
        <span v-if="answers[index] === '1' || answers[index] === '2'">Risk Level:</span>
        <v-radio-group
          v-model="riskLevels[index]"
          :disabled="disabled"
          v-if="answers[index] === '1' || answers[index] === '2'"
          row
        >
          <v-radio color="#ff0000 !important" label="High" value="3"></v-radio>
          <v-radio color="#ffbf00 !important" label="Mod" value="2"></v-radio>
          <v-radio color="#008b00 !important" label="Low" value="1"></v-radio>
        </v-radio-group>
      </v-card>
      <v-card v-if="q.question_id === 34" hover>
        <v-layout class="px-4 py-2 my-2" row wrap>
          <v-flex grow>
            <v-checkbox
              color="#696eb5 !important"
              v-model="ppe"
              label="Safety helmet"
              value="Safety helmet"
              :disabled="disabled"
            ></v-checkbox>
            <v-checkbox
              color="#696eb5 !important"
              v-model="ppe"
              label="Safety boots"
              value="Safety boots"
              :disabled="disabled"
            ></v-checkbox>
            <v-checkbox
              :disabled="disabled"
              color="#696eb5 !important"
              v-model="ppe"
              label="Safety wellington boots"
              value="Safety wellington boots"
            ></v-checkbox>
            <v-checkbox
              :disabled="disabled"
              color="#696eb5 !important"
              v-model="ppe"
              label="Boiler suit / overalls"
              value="Boiler suit / overalls"
            ></v-checkbox>
            <v-checkbox
              color="#696eb5 !important"
              v-model="ppe"
              label="Gloves"
              value="Gloves"
              :disabled="disabled"
            ></v-checkbox>
          </v-flex>
          <v-flex grow>
            <v-checkbox
              color="#696eb5 !important"
              v-model="ppe"
              label="High visibility trousers (Yellow)"
              value="High visibility trousers (Yellow)"
              :disabled="disabled"
            ></v-checkbox>
            <v-checkbox
              color="#696eb5 !important"
              v-model="ppe"
              label="High visibility jacket / vest (Yellow)"
              value="High visibility jacket / vest (Yellow)"
              :disabled="disabled"
            ></v-checkbox>
            <v-checkbox
              color="#696eb5 !important"
              v-model="ppe"
              label="High visibility trousers (Orange)"
              value="High visibility trousers (Orange)"
              :disabled="disabled"
            ></v-checkbox>
            <v-checkbox
              color="#696eb5 !important"
              v-model="ppe"
              label="High visibility jacket / vest (Orange)"
              value="High visibility jacket / vest (Orange)"
              :disabled="disabled"
            ></v-checkbox>
            <v-checkbox
              color="#696eb5 !important"
              v-model="ppe"
              label="Goggles / visor / safety glasses"
              value="Goggles / visor / safety glasses"
              :disabled="disabled"
            ></v-checkbox>
          </v-flex>
          <v-flex grow>
            <v-checkbox
              color="#696eb5 !important"
              v-model="ppe"
              label="Hearing protection (ear plugs)"
              value="Hearing protection (ear plugs)"
              :disabled="disabled"
            ></v-checkbox>
            <v-checkbox
              color="#696eb5 !important"
              v-model="ppe"
              label="Ear defenders (safety helmet)"
              value="Ear defenders (safety helmet)"
              :disabled="disabled"
            ></v-checkbox>
            <v-checkbox
              color="#696eb5 !important"
              :disabled="disabled"
              v-model="ppe"
              label="First aid kit"
              value="First aid kit"
            ></v-checkbox>
            <v-checkbox
              color="#696eb5 !important"
              v-model="ppe"
              label="Disinfectant hand wipes/gel"
              value="Disinfectant hand wipes/gel"
              :disabled="disabled"
            ></v-checkbox>
            <v-checkbox
              color="#696eb5 !important"
              v-model="ppe"
              label="Respiratory protection"
              value="Respiratory protection"
              :disabled="disabled"
            ></v-checkbox>
          </v-flex>
          <v-flex grow>
            <v-checkbox
              color="#696eb5 !important"
              :disabled="disabled"
              v-model="ppe"
              label="Mobile phone"
              value="Mobile phone"
            ></v-checkbox>
            <v-checkbox
              :disabled="disabled"
              color="#696eb5 !important"
              v-model="ppe"
              label="Torch + spare batteries"
              value="Torch + spare batteries"
            ></v-checkbox>
            <v-checkbox
              :disabled="disabled"
              color="#696eb5 !important"
              v-model="ppe"
              label="Head torch + spare batteries"
              value="Head torch + spare batteries"
            ></v-checkbox>
            <v-checkbox
              :disabled="disabled"
              color="#696eb5 !important"
              v-model="ppe"
              label="Satellite phone"
              value="Satellite phone"
            ></v-checkbox>
            <v-checkbox
              :disabled="disabled"
              v-model="ppe"
              label="Four-point chin strap"
              value="Four-point chin strap"
            ></v-checkbox>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card v-if="q.question_id === 35" hover flat class="px-4 py-2 my-2">
        <v-text-field v-model="multi[index]" :counter="400" :label="q.question" py-5 required></v-text-field>
      </v-card>
    </div>

    <v-btn v-if="!SSRA" :disabled="!valid" color="success" @click="submitSSRA">Submit</v-btn>
  </v-form>
</template>

<script>
import JobHeader from "../components/JobHeader";
import SiteMap from "../components/SiteMap";
import router from "../routers/routes.js";
import * as api from "../api";
import * as util from "../util";

export default {
  name: "Site",
  props: {
    coords: {
      type: Array
    },
    SSRA: {
      type: Array
    },
    site_id: {
      type: Number
    }
  },

  data() {
    return {
      valid: true,
      disabled: false,
      user: "jonny.bravo@arup.com",
      polygon: [[]],
      questions: [],
      multi: [],
      answers: [],
      mitigations: [],
      riskLevels: [],
      ppe: [],
      checkbox: false
    };
  },
  router,
  watch: {
    SSRA: function() {
      this.disabled = true;
      const answers = this.SSRA.map(question => {
        if (question.answer === "Y") {
          return "1";
        } else if (question.answer === "N") {
          return "2";
        } else if (question.answer === "N/A") {
          return "3";
        } else return null;
      });
      this.answers = answers;
      const riskLevels = this.SSRA.map(question => {
        if (question.risk === "L") {
          return "1";
        } else if (question.risk === "M") {
          return "2";
        } else if (question.risk === "H") {
          return "3";
        } else return null;
      });
      this.riskLevels = riskLevels;
      const mitigations = this.SSRA.map(
        question => question.mitigation_Measures
      );
      this.mitigations = mitigations;
      const multi = this.SSRA.map((question, index) => {
        if (question.question_id === 34) {
          this.ppe = JSON.parse(question.multi_option);
          return null;
        } else return question.multi_option;
      });
      this.multi = multi;
    }
  },

  mounted() {
    this.fetchQuestions();
  },

  methods: {
    submitSSRA() {
      const postSSRA = util.formatSSRA(
        this.user,
        this.questions,
        this.multi,
        this.answers,
        this.mitigations,
        this.riskLevels,
        this.ppe
      );
      const siteIdPresent = this.site_id
        ? this.site_id
        : this.$route.params.site_id;
      api.postSiteRiskAssessment(siteIdPresent, postSSRA);
      router.go(-1);
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    async fetchQuestions() {
      const questions = await api.getQuestions(1);
      this.questions = questions;
    }
  }
};
</script>
