<template>
  <v-card color="#696eb5">
    <v-container>
      <v-layout align-center justify-start row fill-height>
        <v-avatar :tile="false" :size="100" color="grey lighten-4" class="mx-2">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
        <v-card-title primary-title class="ml-5">
          <h3 class="headline text-uppercase mb-0 font-weight-light">Hello {{capitaliseName}}</h3>
        </v-card-title>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "DashboardHeader",
  props: {
    user: {
      type: Object
    }
  },
  computed: {
    capitaliseName: function() {
      const name = this.user.first_name || "";
      return name.charAt(0).toUpperCase() + name.substring(1);
    }
  }
};
</script>