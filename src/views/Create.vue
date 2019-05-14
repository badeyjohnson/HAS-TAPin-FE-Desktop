<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <JobHeader/>
      </v-flex>
      <!-- <v-dialog>
        <router-view></router-view>
      </v-dialog>-->
      <v-flex xs12>
        <SiteMap :boundary="polygon"/>
        <v-form ref="form" v-model="valid" lazy-validation>
          <div v-for="(q, index) in questions" :key="q.question_id">
            <div v-if="q.question_id === 1">
              <v-text-field
                v-model="dates[index]"
                :counter="10"
                :rules="nameRules"
                :label="q.question"
                required
              ></v-text-field>
            </div>
            <div v-if="q.question_id >1 && q.question_id <= 10">
              <v-text-field
                v-model="multi[index]"
                :counter="10"
                :rules="nameRules"
                :label="q.question"
                required
              ></v-text-field>
            </div>
            <div v-if="q.question_id >10 && q.question_id <= 33">
              <v-text-field
                v-model="answers[index]"
                :counter="10"
                :rules="nameRules"
                :label="q.question"
                required
              ></v-text-field>
            </div>
            <!-- <v-text-field
              v-model="answers[index]"
              :counter="10"
              :rules="nameRules"
              :label="q.question"
              required
            ></v-text-field> -->
          </div>
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-btn :disabled="!valid" color="success" @click="validate">Validate</v-btn>
        </v-form>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ questions[0].question }}</h3>
              <div>{{ questions[0].question }}</div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import JobHeader from "../components/JobHeader";
import SiteMap from "../components/SiteMap";
import * as api from "../api";

export default {
  name: "Site",
  data() {
    return {
      valid: true,
      polygon: [[]],
      questions: [],
      dates:[],
      multi:[],
      answers:[],
      mitigations:[],
      riskLevels:[],
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false
    };
  },
  watch: {
    answers: function () {
      console.log(this.answers, '<<<this')
    }
  },



  mounted() {
    this.fetchQuestions();
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    async fetchQuestions() {
      const questions = await api.getQuestions(1);
      console.log(questions, "<<< Qs");
      this.questions = questions;
    }
  },

  components: {
    SiteMap,
    JobHeader
  }
};
</script>
