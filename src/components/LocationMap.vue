<template>
  <GoogleMapLoader :mapConfig="mapConfig" :apiKey="apiKey">
    <template v-slot="{ google, map }">
      <GoogleMapMarker
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
    </template>
  </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from "./google-maps/GoogleMapLoader";
import GoogleMapMarker from "./google-maps/GoogleMapMarker";
import { mapSettings } from "@/constants/mapSettings";

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
  },

  data() {
    return {
      apiKey: "AIzaSyBnmqTU-SN6HXjRxkxhGqulntrYW4Thv2w", //idealy it should be stored securely inside enviroments variables
      marker: {
        id: "a",
        position: { lat: -33.87688, lng: 18.63 },
        title: "Sharenet (Pty) Ltd",
      },
    };
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter,
      };
    },

    mapCenter() {
      return this.marker.position;
    },
  },
};
</script>
