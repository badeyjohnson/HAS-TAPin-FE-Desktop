<template>
  <v-card>
    <v-container>
      <v-layout >
        <v-card-title primary-title>
          <h3 class="headline mb-0">Site name: {{info.site_name}}</h3>
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
}
</script>