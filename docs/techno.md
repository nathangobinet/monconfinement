# Choix technologiques
## Introduction
Cette partie détaillera les choix technologiques que nous avons pris pour réaliser notre application.

Le monde du développement mobile est aujourd’hui divisé en deux types d’application : les applications natives et les applications cross-plateformes. 

Les applications natives sont des applications spécifiques à un système d’exploitation.  Ainsi si l’on souhaite développer une application pour IOS et Android, il est nécessaire de développer deux applications totalement différentes.

A l’inverse les applications cross-plateformes permettent de développer une application unique qui fonctionne aussi bien sur Android que sur IOS. Cependant ce type d’application est souvent moins fluide que les applications natives.

## React native
React native est un framework cross-plateformes open-source sorti en 2015. Le framework est  soutenu par une grande communauté de développeur et est porté par Facebook, qui a développé sa propre application mobile avec.

Afin de réaliser l’application Mon Confinement nous avons choisi d’utiliser React native. Contrairement aux frameworks cross-plateformes traditionnels, React native utilise des composants mobiles propre à chaque système d’exploitation. Cette particularité permet d’améliorer grandement la performance des applications.

De plus React native utilise le langage Javascript auquel nous sommes tous les deux familiers.

## Expo
Expo est un ensemble d’outils permettant de simplifier le développement d’application React native. Expo nous a permis de configurer notre projet très rapidement, et de tester l’application directement sur notre téléphone et sur un simulateur. Les outils Expo nous ont également permis d'accéder aux fonctionnalités spécifiques des appareils comme la caméra, la localisation et les notifications.

## Les librairies/API utilisées
De nombreuses librairies sont mises à disposition des développeurs par la communauté Open Source. Nous avons ainsi pu simplifier le développement de certaines de nos composantes logicielles. Nous avons notamment utilisé :
* Expo MapView pour la carte présentant la localisation : [MapView](https://docs.expo.io/versions/latest/sdk/map-view/)
* React Native Countdown Timer pour le timer de notre application : [react-native-countdown-circle-timer](https://www.npmjs.com/package/react-native-countdown-circle-timer)
* Expo DocumentPicker pour la sélection de document: [DocumentPicker](https://docs.expo.io/versions/latest/sdk/document-picker/)
* React Native View Pdf pour la prévisualisation des pdf: [react-native-view-pdf](https://www.npmjs.com/package/react-native-view-pdf)

Nous avons également utilisé l’API Places de Google ([Overview | Places API](https://developers.google.com/places/web-service/intro)) pour identifier les magasins proches de la localisation de l’utilisateur.

## Enregistrement des données
Nous avons décidé de ne pas sauvegarder les données de l’utilisateur sur un serveur. L’application mon confinement a pour but d’aider les utilisateurs dans leur confinement, elle n’a pas pour but de les surveiller. Sauvegarder la localisation de confinement ainsi que les activités de l’utilisateur aurait été beaucoup trop intrusif, et cela n’aurait pas été accepté par le grand public. Nous préférons le principe de responsabilité collective. Chacun est responsable de respecter le confinement, et l’application Mon Confinement peut être d’une grande utilité pour cela.

Les données de l’utilisateur sont donc stockées uniquement sur son téléphone. Les données sauvegardées sont le nom, le prénom, la localisation de confinement, et le nombre d’activité journalière. Les trajets et l'historique des activités réalisées ne sont pas sauvegardées. Toutes les données sont supprimés lors de la désinstallation de l’application.
