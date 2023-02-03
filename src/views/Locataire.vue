<style scoped src="../assets/mycss.css"></style>

<template>
  <IonPage>
    <MDBBtn color="primary" @:click="goToLocataires()"> Retour </MDBBtn>
    <ModifyLocataire />
  </IonPage>
</template>

<script>
// import des composants utilisés
import { MDBBtn } from "mdb-vue-ui-kit";
import ModifyLocataire from "../components/Locataire/ModifyLocataire.vue";
import { IonPage } from "@ionic/vue";

export default {
  // initialisation de variables
  //champ recevant les valeur d'un locataire
  data() {
    return { locataire: [] };
  },
  /*
   *méthode se lançant à l'initialisation, et récupérant les donnée d'un locataire à partir de son id
   */
  methods: {
    /*
     *redirection vers locataires
     */
    goToLocataires() {
      this.$router.push("/locataires");
    },
  },
  name: "Locataire",
  components: {
    //composants utilisés
    ModifyLocataire,
    MDBBtn,
    IonPage,
  },
};
</script>
