<style scoped src="../assets/mycss.css">
</style>

<template>
  <Bienvenue/>
  <ActionButton/>
</template>

<script>
    //import des composants
import ActionButton from "../components/Home/ActionButton.vue";
import Bienvenue from "../components/Home/Bienvenue.vue";
export default {
  data() {
    return {};
  },
  name: "Home",
  components: {
    //composant utilisé
    ActionButton,
    Bienvenue
},
};
</script>
