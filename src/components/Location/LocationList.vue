<style scoped src="../../assets/mycss.css"></style>

<template>
    <div class="cardDiv" v-for="location of locations" :key="location._id">
      <IonCard class="card">
        <ion-card-header>
          <ion-card-title class="mainName"
            >location n° {{ location._id }}
          </ion-card-title>
        </ion-card-header>
        <MDBAccordion v-model="activeItem" stayOpen>
          <MDBAccordionItem
            headerTitle="Informations du véhicule"
            collapseId="stayOpen-collapseOne"
          >
            Marque: {{ location.vehicule.marque }} <br />
            Modèle: {{ location.vehicule.modele }} <br />
            Immatriculation:
            {{ location.vehicule.immatriculation }}
          </MDBAccordionItem>
          <MDBAccordionItem
            headerTitle="Informations du locataire"
            collapseId="stayOpen-collapseTwo"
          >
            <p>
              Nom du locataire : {{ location.locataire.nom }}
              {{ location.locataire.prenom }}
            </p>
            <p>Email du locataire : {{ location.locataire.email }}</p>
          </MDBAccordionItem>
          <MDBAccordionItem
            headerTitle="Informations de la location"
            collapseId="stayOpen-collapseThree"
          >
            <p>Date de début : {{ location.date_de_debut }}</p>
            <p>Date de fin : {{ location.date_de_fin }}</p>
            <p>Prix de la location : {{ location.prix }} €</p>
          </MDBAccordionItem>
        </MDBAccordion>
      </IonCard>
      <MDBBtn color="danger" v-on:click="removeItem(location._id)">Supprimer</MDBBtn>
    </div>
</template>

<script>
import { MDBBtn, MDBAccordion, MDBAccordionItem } from "mdb-vue-ui-kit";
import { ref } from "vue";
import axios from "axios";

export default {
  data() {
    // initialisation de variables
    //donnée utilisé pour l'affichage conditionnel
    return { locations: [], isEditing: false, search: "", vehicules: [], locataires: [] };
  },
  /*
   *méthode permettant de récupérer tous les locataires lors de l'initialisation de la page, tous les véhicules et locations
   */
  async created() {
    try {
      const reslocation = await axios.get(`http://127.0.0.1:5000/locations`);
      this.locations = reslocation.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    /*
     *méthode permettant de supprimer uene location en fonction de son id
     */
    removeItem(id) {
      axios.delete(`http://127.0.0.1:5000/locations/${id}`);
      this.locations = this.locations.filter((location) => location._id !== id);
    },
  },
  name: "LocationList",
  components: {
    //composants utilisés
    MDBBtn,
    MDBAccordion,
    MDBAccordionItem,
  },
  setup() {
    // initialisation de variables
    const locataire = ref("");
    const vehicule = ref("");
    const prix = ref();
    const activeItem = ref();
    return {
      locataire,
      vehicule,
      prix,
      activeItem,
    };
  },
};
</script>