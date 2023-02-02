<style scoped src="../assets/mycss.css"></style>

<template>
  <div>
    <MDBBtn color="success" @click="show" v-if="!isEditing">Ajouter un locataire</MDBBtn>
    <div v-else>
      <MDBBtn color="danger" @click="hide">Fermer le formulaire</MDBBtn>
      <form class="form" @submit.prevent="addLocataire()">
        <h1 class="titre">Ajout d'un nouveau locataire</h1>
        <IonList>
          <IonItem fill="solid" ref="item">
            <MDBInput
              type="text"
              label="Nom"
              id="nom"
              v-model="nom"
              invalidFeedback="Remplissez le champ Nom"
              validFeedback="Tout semble ok!"
              validationEvent="input"
              required
            />
          </IonItem>
          <IonItem>
            <MDBInput
              type="text"
              label="Prénom"
              id="prenom"
              v-model="prenom"
              invalidFeedback="Remplissez le champ Prénom"
              validFeedback="Tout semble ok!"
              validationEvent="input"
              required
            />
          </IonItem>

          <IonItem>
            <MDBInput
              type="email"
              label="Adresse email"
              id="email"
              v-model="email"
              invalidFeedback="Ajoutez une adresse email"
              validFeedback="Tout semble ok!"
              validationEvent="input"
              required
              pattern="(?=.*[a-z]).{6,}"
            />
          </IonItem>

          <IonItem>
            <MDBInput type="password" label="Password" id="password" v-model="password" />
          </IonItem>
        </IonList>
        <!-- Submit button -->
        <!-- <MDBBtn color="success" @click="addLocataire()"> -->
        <MDBBtn color="success" type="submit"> Ajout d'un nouveau locataire </MDBBtn>
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
        <h1 class="titre">Tableau des locataires</h1>
      </caption>
      <div
        class="cardDiv"
        v-for="locataire of locataires"
        :key="locataire._id"
        v-show="
          locataire.nom == this.search ||
          locataire.prenom == this.search ||
          locataire._id == this.search ||
          locataire.email == this.search
        "
      >
        <IonCard class="card">
          <ion-card-header>
            <ion-card-title class="mainName"
              >{{ locataire.nom }} {{ locataire.prenom }}
            </ion-card-title>
            <ion-card-subtitle>
              <p>numéro du locataire : {{ locataire._id }}</p>
              <p>email : {{ locataire.email }}</p></ion-card-subtitle
            >
          </ion-card-header>

        </IonCard>
        <MDBBtn color="warning">
          <router-link :to="{ name: 'Locataire', params: { id: locataire._id } }"
            >Modifier</router-link
          ></MDBBtn
        >
        <MDBBtn color="danger" v-on:click="removeItem(locataire._id)">Supprimer</MDBBtn>
      </div>
    </MDBTable>
  </div>

  <div v-else>
    <MDBTable captionTop v-if="!isEditing" class="form">
      <caption class="form">
        <h1 class="titre">Tableau des locataires</h1>
      </caption>
      <div class="cardDiv" v-for="locataire of locataires" :key="locataire._id">
        <IonCard class="card">
          <ion-card-header>
            <ion-card-title class="mainName"
              >{{ locataire.nom }} {{ locataire.prenom }}
            </ion-card-title>
            <ion-card-subtitle>
              <p>numéro du locataire : {{ locataire._id }}</p>
              <p>email : {{ locataire.email }}</p></ion-card-subtitle
            >
          </ion-card-header>
        </IonCard>
        <MDBBtn color="warning">
          <router-link :to="{ name: 'Locataire', params: { id: locataire._id } }"
            >Modifier</router-link
          ></MDBBtn
        >
        <MDBBtn color="danger" v-on:click="removeItem(locataire._id)">Supprimer</MDBBtn>
      </div>
    </MDBTable>
  </div>
  <router-view />
</template>

<script>
// import des composants utilisés
import { MDBBtn, MDBTable, MDBInput } from "mdb-vue-ui-kit";
import {
  IonCard,
  // IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonItem,
  IonList,
} from "@ionic/vue";
import { ref } from "vue";
import axios from "axios";
export default {
  data() {
    // initialisation de variables
    //donnée utilisé pour l'affichage conditionnel
    return { locataires: [], isEditing: false, search: "" };
  },
  /*
   *méthode permettant de récupérer tous les locataires lors de l'initialisation de la page
   */
  async created() {
    try {
      // const res = await axios.get(`http://localhost:8090/locataires`);
      const res = await axios.get(`http://127.0.0.1:5000/locataires`);
      this.locataires = res.data;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    /*
     *méthode permettant de cacher du contenu
     */
    show() {
      this.isEditing = true;
    },
    /*
     *méthode permettant de montrer du contenu
     */
    hide() {
      this.isEditing = false;
    },
    /*
     *méthode permettant d'ajouter un locataire
     */
    async addLocataire() {
      let newlocataire = {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        password: this.password,
      };
      const res = await axios.post(`http://127.0.0.1:5000/locataires`, newlocataire);
      this.locataires = [...this.locataires, res.data];
      this.nom = "";
      this.prenom = "";
      this.email = "";
      this.isEditing = false;
    },
    /*
     *méthode permettant de supprimer un locataire en fonction de son id
     */
    removeItem(id) {
      axios.delete(`http://127.0.0.1:5000/locataires/${id}`);
      this.locataires = this.locataires.filter((locataire) => locataire._id !== id);
    },
  },
  name: "Locataires",
  components: {
    //composants utilisés
    MDBTable,
    MDBInput,
    MDBBtn,
    IonCard,
    // IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonItem,
    IonList,
  },
  setup() {
    // initialisation de variables
    const nom = ref("");
    const prenom = ref("");
    const email = ref("");
    const password = ref("");

    return {
      nom,
      prenom,
      email,
      password,
    };
  },
};
</script>
