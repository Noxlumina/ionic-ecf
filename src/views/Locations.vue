<style scoped src="../assets/mycss.css"></style>

<template>
  <IonPage>
    <MDBTable captionTop class="form">
      <caption class="form">
        <h1 class="titre">Tableau des locations</h1>
      </caption>
      <LocationList />
    </MDBTable>
  </IonPage>
</template>

<script>
import { MDBTable } from "mdb-vue-ui-kit";
import LocationList from "../components/Location/LocationList.vue";
import { IonPage } from "@ionic/vue";

export default {
  name: "Locations",
  components: {
    //composants utilisés
    MDBTable,
    LocationList,
    IonPage,
  },
};
</script>
