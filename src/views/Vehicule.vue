<style scoped src="../assets/mycss.css"></style>

<template>
  <IonPage>
    <MDBBtn color="primary" @:click="goToVehicules()"> Retour </MDBBtn>
    <ModifyVehicule />
  </IonPage>
</template>

<script>
// import des composants utilisés
import { MDBBtn } from "mdb-vue-ui-kit";
import ModifyVehicule from "../components/Vehicule/ModifyVehicule.vue";
import { IonPage } from "@ionic/vue";

export default {
  // initialisation de variables
  //champ recevant les valeur d'un véhicule
  data() {
    return { vehicule: [] };
  },
  methods: {
    /*
     *redirection vers véhicules
     */
    goToVehicules() {
      this.$router.push("/vehicules");
    },
    /*
     *méthode permettant de modifier les données d'un véhicule, mais problème non reconnu comme une fonction à nouveau
     */
  },
  name: "Vehicule",
  components: {
    //composants utilisés

    MDBBtn,
    ModifyVehicule,
    IonPage,
  },
};
</script>
