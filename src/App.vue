<style scoped src="./assets/mycss.css"></style>

<template>
  <IonApp>
    <!-- style de background s'appliquant sur toutes les pages -->
    <div class="background">
      <Navbar />
      <router-view />
    </div>
  </IonApp>
</template>

<script>
// import des composants utilisés
import Navbar from "./components/shared/Navbar.vue";
import { IonApp } from "@ionic/vue";

export default {
  name: "App",
  components: {
    Navbar,
    IonApp,
  },
};
</script>
