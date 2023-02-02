<style scoped src="../../assets/mycss.css"></style>

<template>
  <MDBContainer fluid class="container text-center">
    <div class="display-1 styleObject">Bienvenue sur Localib</div>
  </MDBContainer>
</template>

<script>
//import des composants
import { MDBContainer } from "mdb-vue-ui-kit";
export default {
  data() {
    return {};
  },
  name: "Home",
  components: {
    //composant utilisé
    MDBContainer,
  },
};
</script>
