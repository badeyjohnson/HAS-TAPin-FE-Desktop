<template>
  <v-container>
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
      crossorigin
    >
    <div id="mapid" ref="mapElement"></div>
  </v-container>
</template>

<script >
import L from "leaflet";

export default {
  name: "lmap",
  data: () => ({
    map: null,
    tileLayer: null,
    layers: []
  }),
  mounted() {
    this.initMap();
    this.initLayers();
  },
  methods: {
    initMap() {
      this.map = L.map(this.$refs['mapElement']).setView([53.7947616, -1.5468854], 14);
      this.tileLayer = L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        }
      );
      this.tileLayer.addTo(this.map);
    },
    initLayers() {}
  }
};
</script>

<style scoped>
#mapid {
  height: 300pt;
}
</style>