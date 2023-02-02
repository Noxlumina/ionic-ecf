<style scoped src="../../assets/mycss.css"></style>

<template>
  <form class="form" @submit.prevent="updateAndRedirect(vehicule)">
    <h1 class="titre">Modificaton des informations du véhicules</h1>
    <IonList>
      <IonItem fill="solid" ref="item">
        <MDBInput
          type="text"
          label="Immatriculation"
          id="immatriculation"
          v-model="vehicule.immatriculation"
          invalidFeedback="Remplissez le champ Immatriculation"
          validFeedback="Tout semble ok!"
          validationEvent="input"
          required
          minLength="9"
          maxLength="9"
        />
      </IonItem>

      <IonItem>
        <MDBInput
          type="text"
          label="Marque"
          id="marque"
          v-model="vehicule.marque"
          invalidFeedback="Remplissez le champ Marque"
          validFeedback="Tout semble ok!"
          validationEvent="input"
          required
        />
      </IonItem>

      <IonItem>
        <MDBInput
          type="text"
          label="Modèle"
          id="modele"
          v-model="vehicule.modele"
          invalidFeedback="Remplissez le champ Modèle"
          validFeedback="Tout semble ok!"
          validationEvent="input"
          required
        />
      </IonItem>

      <IonItem>
        <MDBInput
          type="text"
          label="Etat"
          id="etat"
          v-model="vehicule.etat"
          invalidFeedback="Remplissez le champ Etat"
          validFeedback="Tout semble ok!"
          validationEvent="input"
          required
        />
      </IonItem>

      <IonItem>
        <MDBInput
          type="number"
          label="Prix"
          id="prix"
          v-model="vehicule.prix"
          invalidFeedback="Remplissez le champ Prix"
          validFeedback="Tout semble ok!"
          validationEvent="input"
          required
        />
      </IonItem>

      <IonItem>
        <label>Disponibilité &nbsp;</label>
        <MDBRadio
          label="true"
          value="true"
          v-model="vehicule.disponibilite"
          inline
          name="inlineRadioOptions"
        />
        <MDBRadio
          label="false"
          value="false"
          v-model="vehicule.disponibilite"
          inline
          name="inlineRadioOptions"
        />
      </IonItem>

      <IonItem>
        <div>Type du véhicule: {{ type }}</div>
        <select v-model="vehicule.type">
          <option disabled value="">---type---</option>
          <option>voiture</option>
          <option>motocycle</option>
          <option>utilitaire</option>
          <option>camion</option>
        </select>
      </IonItem>
      <IonItem>
        <MDBBtn color="success" @click="updateAndRedirect(vehicule)"
          >Valider la modification</MDBBtn
        >
      </IonItem>
    </IonList>
  </form>
</template>

<script>
// import des composants utilisés
import { MDBInput, MDBBtn, MDBRadio } from "mdb-vue-ui-kit";
import axios from "axios";
import { ref } from "vue";

export default {
  // initialisation de variables
  //champ recevant les valeur d'un véhicule
  data() {
    return { vehicule: [] };
  },
  /*
   *méthode se lançant à l'initialisation, et récupérant les donnée d'un véhicule à partir de son id
   */
  async created() {
    try {
      const res = await axios.get(
        "http://127.0.0.1:5000/vehicules/" + this.$route.params.id
      );
      this.vehicule = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    /*
     *redirection vers véhicules
     */
    goToVehicules() {
      this.$router.push("/vehicules");
    },
    /*
     *méthode permettant de faire la mise à jour et la redirection
     */
    updateAndRedirect(data) {
      this.update(data);
      this.goToVehicules();
    },
    /*
     *méthode permettant de modifier les données d'un véhicule, mais problème non reconnu comme une fonction à nouveau
     */
    async update(data) {
      try {
        await axios
          .patch("http://127.0.0.1:5000/vehicules/" + this.$route.params.id, {
            // id: data.id,
            immatriculation: data.immatriculation,
            modele: data.modele,
            marque: data.marque,
            etat: data.etat,
            prix: data.prix,
            disponibilite: data.disponibilite,
            type: data.type,
          })
          .then((response) => console.log(response));
      } catch (error) {
        console.error(error);
      }
    },
  },
  name: "ModifyVehicule",
  components: {
    //composants utilisés

    MDBInput,
    MDBBtn,
    MDBRadio,
  },
  setup() {
    // initialisation de variables
    const immatriculation = ref("");
    const modele = ref("");
    const marque = ref("");
    const etat = ref("");
    const prix = ref("");
    const disponibilite = ref("");
    const type = ref("");

    return {
      immatriculation,
      modele,
      marque,
      etat,
      prix,
      disponibilite,
      type,
    };
  },
};
</script>
