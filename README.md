# Dernier ECF

Ceci est le ECF relaatif à la partie mobile

J'ai utilisé le framework ionic avec vue pour la réalisation de cette partie.

Normalement il était demandé de build le projet android et de pouvoir le lancer sur l'émulateur android studio.
pour build le projet il faut lancer la commande "ionic build" ou "npm run build".

## Prérequis

Pour crééer le projet ionic préalablement il faut installer le cli avec la commande "npm install -g @ionic/cli".
puis créer son projet avec la commande "ionic start <nomduprojet>". Ensuite il faut choisir si on veut un projet anngular, react ou vue.

Après on peut installer directement capcitor à un projet déjà existant.
La démarche est la suivante:
effectuer les commandes --> 
 - "npm i @capacitor/core" 
 - "npm i -D @capacitor/cli"
 - "npx cap init" pour créer le fichier "capacitor.config.json" où spécifie le dossier de build en entrée 
 - "npm i @capacitor/android @capacitor/ios" pour installer les platforms android et ios 
 - "npx cap add android" 
 - "npx cap add ios" pour créer les dossier android et ios dans notre projet 
 - "npx cap sync" pour synchroniser les dossier avec nos fichiers et dépendances installés 

J'ai pas réussi à faire fonctionner totalement le projet sur android studio j'ai mon front qui ne communique pas avec le back de cette façon. 
Il faut trouver comment faire communiquer le localhost avec le l'émulateur.

A partir d'android studio, en allant dans l'onglet build puis build bundle/apk on peut crééer un executable pour installer l'application sur le téléphone.

## Lancement du projet

installer les nodes modules à partir du dossier root de l'application et du dossier back avec la commande "npm install".

pour lancer le back à partir du dossier Back il faut lancer la commande: "node server.js" .
pour lancer le font il faut réaliser la commande  il faut lancer la commande -> "ionic serve".







