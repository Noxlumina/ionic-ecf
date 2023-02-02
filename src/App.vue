<style scoped src="./assets/mycss.css"></style>


<template>
  <!-- style de background s'appliquant sur toutes les pages -->
  <div class="background">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
// import des composants utilisés
import Navbar from './components/shared/Navbar.vue';

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
