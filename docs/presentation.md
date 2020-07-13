# 📃 Présentation de l'application
## Fonctionnalités
> Mon Confinement permet à l’utilisateur de mener ses activités quotidiennes légalement et conformément aux réglementations du confinement.
### Fonctionnalités principales
_Ces fonctionnalités doivent au minimum être implémentées dans Mon Confinement_
1. Enregistrer le lieu de confinement de l’utilisateur.
2. Détecter quand l’utilisateur sort de son lieu de confinement.
3. Indiquer la liste d’activité légale autorisée par le confinement (menu).
4. Limiter le nombre d'activité journalière.

###  Fonctionnalité intermédiaire
*Cette fonctionnalité sera implémentée si toutes les fonctionnalités principales sont déjà présentes.*

Pour chacune des activités, proposer un encadrement avec des fonctionnalités dédiées.
* Activité sportive : Limitation du temps et de la distance par rapport au lieu de confinement.

### Fonctionnalités avancées
_Ces fonctionnalités seront implémentées si les toutes les fonctionnalités principales et intermédiaires sont déjà présentes._

Ajout de deux nouveaux mode :
* Course (ravitaillement) : Limitation des commerces autorisés en fonction de la distance (visualisation graphique à l’aide d’une carte).
* Autres : Upload du justificatif, et renseignement de la localisation.
Intégration d’un panel d'administration permettant de modifier les règles du confinement (nombre d’activité journalière, détail des activités).

## Cas d’utilisations principaux
### 1. Système de paramètre
Le système de paramètre permet à l'utilisateur de renseigner ses données personnelles (nom, prénom, localisation de confinement). La localisation de confinement peut être indiquée à l’aide de l’adresse du domicile ou grâce à la géolocalisation du téléphone. La saisie des données personnelles est demandée lors de la première connexion de l’utilisateur.
<p align="center">
  <img src="../images/usecase1.png" alt="Système de paramètre" width="600">
</p>

### 2. Recevoir des notifications
L’utilisateur reçoit une notification si il sort de son lieu de confinement sans avoir démarré une activité légale au préalable. La notification lui demande de retourner dans son lieu de confinement ou de commencer une activité légale.
<p align="center">
  <img src="../images/usecase2.png" alt="Recevoir des notifications" width="600">
</p>


### 3. Ecran d'accueil de Mon Confinement
L’écran d’accueil de l’application présente la liste des activités légales. Il est possible de cliquer sur chacune des activités, de fournir les justificatifs si nécessaire, puis de commencer l’activité. Le lancement d’une activité est autorisée uniquement si le nombre d’activité déjà réalisé dans la journée est inférieur au nombre d’activités autorisées.
<p align="center">
  <img src="../images/usecase3.png" alt="Ecran d'accueil de Mon Confinement" width="600">
</p>


## Conception
### Mockups
Les mockups représentent un prototype d’interface utilisateur. Il ont été réalisés avec le logiciel Figma. Cette représentation nous a permis de trouver un consensus sur le design de Mon Confinement.
Nous pouvons voir : un écran principal représentant le menu de Mon Confinement, et les différents écrans pour chaque activités (Physique, Courses, Autres).

Au final, nous verrons que le design de l’application mobile est resté fidèle aux Mockups.
<p align="center">
  <img src="../images/mockups.png" alt="Mockups" width="700">
</p>


