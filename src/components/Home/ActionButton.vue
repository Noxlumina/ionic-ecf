<style scoped src="../../assets/mycss.css"></style>

<template>
  <MDBContainer fluid class="container">
    <button
      class="d-block p-3 bg-primary text-white homebutton"
      v-on:click="goToVehicules"
    >
      Gestion des véhicules
    </button>
    <button
      class="d-block p-3 bg-primary text-white homebutton"
      v-on:click="goToLocataires"
    >
      Gestion des locataires
    </button>
    <button
      class="d-block p-3 bg-primary text-white homebutton"
      v-on:click="goToLocations"
    >
      Gestion des locations
    </button>
    <button class="d-block p-3 bg-primary text-white homebutton" v-on:click="goToLouer">
      Location de véhicules
    </button>
  </MDBContainer>
</template>

<script>
//import des composants
import { MDBContainer } from "mdb-vue-ui-kit";
export default {
  data() {
    return {};
  },
  name: "ActionButton",
  methods: {
    /*
     *méthodes de redirection vers la pages Véhicules
     */
    goToVehicules() {
      this.$router.push("/vehicules");
    },
    /*
     *méthodes de redirection vers la pages Locataires
     */
    goToLocataires() {
      this.$router.push("/locataires");
    },
    /*
     *méthodes de redirection vers la pages Locations
     */
    goToLocations() {
      this.$router.push("/locations");
    },
    /*
     *méthodes de redirection vers la pages Louer
     */
    goToLouer() {
      this.$router.push("/louer");
    },
  },
  components: {
    //composant utilisé
    MDBContainer,
  },
};
</script>
