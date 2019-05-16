<template>
  <v-card color="grey lighten-2">
    <v-container>
      <v-layout align-start justify-space-around column fill-height>
        <v-card-title primary-title >
          <div>
          <h3 class="headline mb-0">Site: {{info.site_name}}</h3>
          <div>
          <span>{{info.site_description}}</span>
          </div>
          </div>
        </v-card-title>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>

export default {
  name: "SiteInfo",
  props: {
    info: {
      type: Object
    }
  },
};
</script>

<style scoped>
.nav-link {
  text-decoration: none;
}
</style>