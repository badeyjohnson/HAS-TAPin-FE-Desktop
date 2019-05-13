<template>
  <v-card>
    <v-container>
      <v-layout >
        <v-avatar :tile="false" :size="100" color="grey lighten-4">
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
        <v-card-title primary-title>
          <h3 class="headline mb-0">A Job</h3>
        </v-card-title>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script >
export default {
  name: "lmap",
  data: () => ({
    map: null,
    tileLayer: null,
    polygon: [
      [53.808819, -1.570087],
      [53.802323, -1.537812],
      [53.787217, -1.542117],
      [53.792495, -1.566657]
    ]
  }),
props: {
    title: {
      type: Boolean
    }
  }
}
</script>