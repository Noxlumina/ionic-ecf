<style scoped src="../../assets/mycss.css"></style>

<template>
  <!-- composant de la navbar -->
  <MDBNavbar expand="lg" class="nav">
    <MDBNavbarBrand href="#">
      <img
        src="../../assets/logo.png"
        alt="logo de localib"
        loading="lazy"
        class="logo"
      />
    </MDBNavbarBrand>
    <MDBNavbarToggler
      target="#navbarCenterAlignExample"
      @click="collapse6 = !collapse6"
    ></MDBNavbarToggler>
    <MDBCollapse id="navbarCenterAlignExample" v-model="collapse6">
      <MDBNavbarNav center class="mb-2 mb-lg-0 p-4">
        <MDBNavbarItem
          class="shadow-inner"
          to="/vehicules"
          active
          @click="collapse6 = !collapse6"
        >
          <p class="navItem">Gestion des véhicules</p>
        </MDBNavbarItem>
        <MDBNavbarItem
          class="shadow-inner"
          to="/locataires"
          active
          @click="collapse6 = !collapse6"
          ><p class="navItem">Gestion des locataires</p>
        </MDBNavbarItem>
        <MDBNavbarItem
          class="shadow-inner"
          to="/locations"
          active
          @click="collapse6 = !collapse6"
        >
          <p class="navItem">Gestion locations</p>
        </MDBNavbarItem>
        <MDBNavbarItem
          class="shadow-inner"
          to="/louer"
          active
          @click="collapse6 = !collapse6"
        >
          <p class="navItem">Location d'un véhicule</p>
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script>
// import des composants utilisés
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  name: "Navbar",
  components: {
    //composants utilisés
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
  },
  setup() {
    //initialisation de variables
    const collapse6 = ref(false);

    return {
      collapse6,
    };
  },
};
</script>
