<style scoped src="../assets/mycss.css"></style>

<template>
  <MDBTable captionTop class="form">
    <caption class="form">
      <h1 class="titre">Tableau des locations</h1>
    </caption>
  <LocationList/>
  </MDBTable>
</template>

<script>
import { MDBTable} from "mdb-vue-ui-kit";
import LocationList from "../components/Location/LocationList.vue";


export default {
  name: "Locations",
  components: {
    //composants utilisés
    MDBTable,
    LocationList
  }
};
</script>
