<template>
  <v-container>
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
      crossorigin
    >
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.css"
    >

    <div id="mapid" ref="mapElement"></div>
  </v-container>
</template>

<script >
import L from "leaflet";
import { Draw } from "leaflet-draw";
export default {
  name: "lmap",
  props: {
    rerender: {
      type: Boolean
    },
    boundary: {
      type: Array
    },
    sendCoords: {
      type: Function
    },
  },
  data: () => ({
    map: null,
    tileLayer: null,
    polygon: []
  }),
  watch: {
    rerender: function() {
      this.map.invalidateSize();
    },
    polygon: function() {
      for (let i in this.map._layers) {
        if (this.map._layers[i]._path != undefined) {
          this.map.removeLayer(this.map._layers[i]);
        }
      }
      L.polygon(this.polygon).addTo(this.map);
      this.sendCoords && this.sendCoords(this.polygon)
    },
    boundary: function() {
      // for (let i in this.map._layers) {
      //   if (this.map._layers[i]._path != undefined) {
      //     this.map.removeLayer(this.map._layers[i]);
      //   }
      // }
      L.polygon(this.boundary).addTo(this.map);
      // this.sendCoords && this.sendCoords(this.boundary)
    }
  },

  mounted() {
    this.initMap();
    this.initLayers();
  },

  methods: {
    initMap() {
      this.map = L.map(this.$refs["mapElement"]).setView(
        [53.7947616, -1.5468854],
        14
      );
      this.tileLayer = L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution: `&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>`
        }
      );
      this.tileLayer.addTo(this.map);
      const drawnItems = new L.FeatureGroup();
      this.map.addLayer(drawnItems);
      const drawControl = new L.Control.Draw({
        position: "topright",
        draw: {
          polygon: true,
          polyline: false,
          rectangle: false,
          circle: false,
          circlemarker: false,
          marker: false
        }
      });
      L.drawLocal.draw.toolbar.buttons.polygon = '';
      L.drawLocal.draw.handlers.polygon.tooltip.start = 'Click to start';
      this.map.on(L.Draw.Event.CREATED, e => {
        const layer = e.layer;
        console.log(layer)
        this.polygon = layer._latlngs;
      });
      L.polygon(this.boundary).addTo(this.map);
      this.sendCoords && this.map.addControl(drawControl);
    },
    initLayers() {},
    // addPolygon(layer) {
    //   this.polygon = layer;
    // }
  }
};
</script>

<style scoped>
#mapid {
  height: 300pt;
}
</style>
