<style scoped src="../assets/mycss.css"></style>

<template>
  <IonPage>
  <div>
    <MDBBtn color="success" v-on:click="show" v-if="!isEditing"
      >Ajouter un véhicule</MDBBtn
    >
    <div v-else>
      <MDBBtn color="danger" @:click="hide">Fermer le formulaire</MDBBtn>
      <form class="form" @submit.prevent="addVehicule()">
        <h1 class="titre">Ajout d'un nouveau véhicule</h1>
        <IonList>
          <IonItem fill="solid" ref="item">
            <MDBInput
              type="text"
              label="Immatriculation"
              id="immatriculation"
              v-model="immatriculation"
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
              v-model="marque"
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
              v-model="modele"
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
              v-model="etat"
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
              v-model="prix"
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
              v-model="disponibilite"
              inline
              name="inlineRadioOptions"
            />
            <MDBRadio
              label="false"
              value="false"
              v-model="disponibilite"
              inline
              name="inlineRadioOptions"
            />
          </IonItem>

          <IonItem>
            <div>Type du véhicule: {{ type }}</div>
            <select v-model="type">
              <option disabled value="">---type---</option>
              <option>voiture</option>
              <option>motocycle</option>
              <option>utilitaire</option>
              <option>camion</option>
            </select>
          </IonItem>
        </IonList>
        <!-- Submit button -->
        <MDBBtn color="success" type="submit">Ajout du nouveau véhicule</MDBBtn>
      </form>
    </div>
  </div>
  <div v-if="!isEditing">
    <div class="searchDiv">
      <input
        class="form-control searchBar"
        type="search"
        placeholder="Votre recherche"
        aria-label="Search"
        v-model="search"
      />
    </div>
  </div>

  <div v-if="this.search != ''">
    <MDBTable captionTop v-if="!isEditing" class="form">
      <caption class="form">
        <h1 class="titre">Tableau des véhicules</h1>
      </caption>
      <div
        class="cardDiv"
        v-for="vehicule of vehicules"
        :key="vehicule.immatriculation"
        v-show="
          vehicule.immatriculation == this.search ||
          vehicule.modele == this.search ||
          vehicule.marque == this.search ||
          vehicule.etat == this.search ||
          vehicule.prix == this.search ||
          vehicule.disponibilite == this.search ||
          vehicule.type == this.search
        "
      >
        <IonCard class="card">
          <ion-card-header>
            <img v-bind:src="vehicule.photo" alt="photo de vehicule" class="photo" />
            <ion-card-title class="mainName"
              >{{ vehicule.marque }} {{ vehicule.modele }}
            </ion-card-title>
            <ion-card-subtitle>
              <p>Immatriculation : {{ vehicule.immatriculation }}</p>
              <p>
                Etat du véhicule : {{ vehicule.etat }} Prix à la journée :
                {{ vehicule.prix }} Disponibilité : {{ vehicule.disponibilite }} Type du
                véhicule : {{ vehicule.type }}
              </p></ion-card-subtitle
            >
          </ion-card-header>
        </IonCard>
        <MDBBtn color="warning"
          ><router-link :to="{ name: 'Vehicule', params: { id: vehicule._id } }"
            >Modifier</router-link
          ></MDBBtn
        >
        <MDBBtn color="danger" @:click="removeItem(vehicule._id)">Supprimer</MDBBtn>
      </div>
    </MDBTable>
  </div>
  <div v-else>
    <MDBTable captionTop v-if="!isEditing" class="form">
      <caption class="form">
        <h1 class="titre">Tableau des véhicules</h1>
      </caption>
      <div class="cardDiv" v-for="vehicule of vehicules" :key="vehicule.immatriculation">
        <IonCard class="card">
          <ion-card-header>
            <img v-bind:src="vehicule.photo" alt="photo de vehicule" class="photo" />
            <ion-card-title class="mainName"
              >{{ vehicule.marque }} {{ vehicule.modele }}
            </ion-card-title>
            <ion-card-subtitle>
              <p>Immatriculation : {{ vehicule.immatriculation }}</p>
              <p>
                Etat du véhicule : {{ vehicule.etat }} Prix à la journée :
                {{ vehicule.prix }} Disponibilité : {{ vehicule.disponibilite }} Type du
                véhicule : {{ vehicule.type }}
              </p></ion-card-subtitle
            >
          </ion-card-header>

        </IonCard>
        <MDBBtn color="warning"
          ><router-link :to="{ name: 'Vehicule', params: { id: vehicule._id } }"
            >Modifier</router-link
          ></MDBBtn
        >
        <MDBBtn color="danger" @:click="removeItem(vehicule._id)">Supprimer</MDBBtn>
      </div>
    </MDBTable>
  </div>
  </IonPage>
</template>

<script>
// import des composants utilisés
import { MDBInput, MDBBtn, MDBTable, MDBRadio } from "mdb-vue-ui-kit";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonList,
  IonPage
} from "@ionic/vue";
import { ref } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      // initialisation de variables
      vehicules: [],
      isEditing: false,
      selected: null,
      search: "",
    };
  },
  /*
   *méthode permettant de récupérer toutes les données des véhicules
   */
  async created() {
    try {
      const res = await axios.get(`http://127.0.0.1:5000/vehicules`);
      this.vehicules = res.data;
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    /*
     *méthodes relatives à l'affichage conditionnel
     */
    show() {
      this.isEditing = true;
    },
    hide() {
      this.isEditing = false;
    },
    /*
     *méthode permettant d'ajouter un véhicule
     */
    async addVehicule() {
      let newvehicule = {
        immatriculation: this.immatriculation,
        modele: this.modele,
        marque: this.marque,
        etat: this.etat,
        prix: this.prix,
        disponibilite: this.disponibilite,
        type: this.type,
        photo: "",
      };
      console.log(newvehicule);
      const res = await axios.post(`http://127.0.0.1:5000/vehicules`, newvehicule);
      this.vehicules = [...this.vehicules, res.data];
      this.immatriculation = "";
      this.modele = "";
      this.marque = "";
      this.etat = "";
      this.prix;
      this.disponibilite = true;
      this.isEditing = false;
    },
    /*
     *méthode permettant de supprimer un véhicule en fonction de son id
     */
    removeItem(id) {
      axios.delete(`http://127.0.0.1:5000/vehicules/${id}`);
      this.vehicules = this.vehicules.filter((vehicule) => vehicule._id !== id);
    },
  },
  name: "Vehicules",
  components: {
    //composants utilisés
    MDBInput,
    MDBBtn,
    MDBTable,
    MDBRadio,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonList,
    IonPage
  },
  setup() {
    //initialisation de variables
    const immatriculation = ref("");
    const modele = ref("");
    const marque = ref("");
    const etat = ref("");
    const prix = ref();
    const disponibilite = ref(true);
    const type = ref("");
    const photo = ref("");

    return {
      immatriculation,
      modele,
      marque,
      etat,
      prix,
      disponibilite,
      type,
      photo,
    };
  },
};
</script>
