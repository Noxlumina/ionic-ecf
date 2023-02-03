<style scoped src="../assets/mycss.css"></style>

<template>
  <IonPage>
    <Bienvenue />
    <ActionButton />
  </IonPage>
</template>

<script>
//import des composants
import ActionButton from "../components/Home/ActionButton.vue";
import Bienvenue from "../components/Home/Bienvenue.vue";
import { IonPage } from "@ionic/vue";

export default {
  data() {
    return {};
  },
  name: "Home",
  components: {
    //composant utilisé
    ActionButton,
    Bienvenue,
    IonPage,
  },
};
</script>
