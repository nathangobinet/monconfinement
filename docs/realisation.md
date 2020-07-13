# Réalisation et implémentation
## Écran principal
Cet écran sert de menu pour l’utilisateur.  Trois type d’activités y sont proposés. Il est possible d’y accéder en cliquant dessus pour voir leur description, les consignes de sorties, les justifications nécessaires et bien sûr les démarrer.

Pour ce qui est de la structure de cette page, nous avons un composant ActivityItem.js qui s’affiche et se répète en fonction du nombre d’activité implémentée et des données renseignées.

Enfin, le numéro en bas à droite de cet écran indique le nombre d’activités restantes. Une fois à zéro, il est impossible de démarrer une activité.

<p align="center">
  <img src="https://raw.githubusercontent.com/nathangobinet/monconfinement/master/docs/images/ecran-activite.PNG" alt="Écran principal" width="800">
</p>

## Écran paramètres
L’écran paramètres permet de demander le nom, le prénom et la localisation de l’utilisateur. Cet écran est affiché deux fois:
* Au premier lancement de l'application afin d’enregistrer les informations initiales.
* A l’appuie sur le bouton Paramètres afin d’enregistrer les modifications.

Lorsque l’utilisateur appuie sur le bouton “Me localiser”, la localisation (latitude, longitude) de l’utilisateur est récupérée et affichée sur une carte (Cf.images). L’adresse est déduite de la localisation et est également enregistrée à l’appuie sur le bouton Sauvegarder. 

<p align="center">
  <img src="https://raw.githubusercontent.com/nathangobinet/monconfinement/master/docs/images/ecran-setting.PNG" alt="Écran principal" width="600">
</p>

Une fois la localisation enregistrée, l’application utilise une méthode de geofencing afin de surveiller le déplacement de l’utilisateur hors de sa zone de confinement.
## Écran activité
Pour chaque activité nous avons une image, une description, des consignes légales pour la sortie en question, et une partie “Renseignements nécessaires” qui permet à l’utilisateur de fournir les justifications obligatoires pour sa sortie. Nous détaillerons ensemble quels sont les justificatifs demandés pour chaque activité, et comment elles fonctionnent.


### Activité physiques
L’écran “Activité Physique”, permet comme son nom l’indique, de réguler les sorties Sportives.

<p align="center">
  <img src="https://raw.githubusercontent.com/nathangobinet/monconfinement/master/docs/images/ecran-sport.PNG" alt="Écran principal" width="900">
</p>

L’utilisateur confiné n’a pas besoin de justificatif ou de renseignements à indiquer pour sortir. Il est uniquement nécessaire qu’il est son compteur de sortie supérieur à zéro.

Pour démarrer l’activité, l’utilisateur appuie sur le bouton démarrer. Ce bouton se mettra “en attente” jusqu’à ce que l’utilisateur sorte de sa zone de confinement. Une fois sorti, un compte à rebours d’une heure est lancé et l’utilisateur peut commencer son activité.

Dans le cas où l’utilisateur regagne sa zone de confinement, une alerte et une notification apparaissent pour lui demander s’il souhaite terminer l’activité. Ce choix a été implémenté car l’utilisateur peut passer dans sa zone, sans pour autant avoir terminé l’activité.

Pour le compte à rebour, nous utilisons la librairie React Native Countdown Timer.

Aucune difficulté particulière n’a été rencontrée pour l’implémentation du compte à rebours.

### Courses et ravitaillement
Cet écran d’activité intègre, comme les autres, les informations propres à l’activité et un bouton Démarrer. Il possède également une section avec une liste de trois magasins ouverts à proximité. 

Les informations sur les magasins sont récupérées grâce à une requête à l’API Places de Google. L’API permet de faire des “Nearby search request”, c’est à dire de rechercher des lieux dans une zone spécifique. En spécifiant la localisation de l’utilisateur et le type de lieu souhaité (supermarché ou épicerie), on obtient une liste de magasin triée en fonction de leur proximité avec l’utilisateur. Les trois premiers résultats sont affiché sur l’écran et sont sélectionnables par l’utilisateur.

<p align="center">
  <img src="https://raw.githubusercontent.com/nathangobinet/monconfinement/master/docs/images/ecran-course.PNG" alt="Écran principal" width="450">
</p>

Une fois un magasin sélectionné l’utilisateur peut démarrer l’activité. L’activité n’est pas limité en temps. Le fonctionnement vis à vis de la localisation est similaire aux autres activités.
### Autres
On entend par “‘Autres”, toutes les activités qui nécessitent le même type de justification : une pièce jointe.

Pour lancer cette activité, il est nécessaire de renseigner une pièce justificative au format PDF. Pour renseigner une pièce jointe, l’utilisateur clique sur le bouton “Sélectionner une pièce jointe”. Ensuite, un explorateur de fichier se lance, et l’utilisateur peut choisir le fichier PDF qu’il souhaite. Une fois le justificatif sélectionné, le bouton démarrer devient coloré et cliquable. Le fonctionnement vis à vis de la localisation est similaire aux autres activités.
Pour afficher les documents du téléphone, nous utilisons la librairie Expo DocumentPicker . Cependant, nous avons rencontré des difficultés pour afficher le PDF sélectionné l’utilisateur. Lorsqu’un document est sélectionné par le DocumentPicker, un objet contenant son nom, sa taille, et son chemin d’accès absolu et local est retourné. Nous disposons donc de toutes les informations nécessaires pour afficher le PDF. Pour cela, nous avons opté pour la librairie React View Pdf. Cependant, cette librairie a une dépendance qui ne peut pas fonctionner dans un projet React native relié à Expo, et nous n’avons pas trouvé une autre librairie qui permettait d’afficher un PDF enregistré dans la mémoire locale du téléphone. Cette fonctionnalité n’a donc pas pu être développée.

<p align="center">
  <img src="https://raw.githubusercontent.com/nathangobinet/monconfinement/master/docs/images/ecran-autre.PNG" alt="Écran principal" width="700">
</p>

## Gestion de la localisation
La localisation est un élément clef de l'application Mon Confinement. Elle est obtenue en utilisant l’API Localisation de Expo. La localisation est demandée lorsque l’utilisateur lance l'application pour la première fois, et est modifiable à tout moment dans l’écran “Paramètres”. Le geofencing, qui permet de détecter un changement de position par rapport à une zone prédéfinie, est utilisé dans une tâche de fond (‘Background Task”). Cela permet de surveiller la position de l’utilisateur malgré que l'application soit en arrière-plan.  L’utilisateur est notifié si il est détecté en dehors de sa zone de confinement sans avoir lancé d’activité. Il lui est alors demandé de retourner dans sa zone de confinement ou de lancer une activité.

## Gestion des activités
Le second élément clef de l’application Mon Confinement est la gestion des activités. Il est nécessaire de conserver l’état général de l’application et des activités en cours, afin de coordonner le comportement de l’application vis à vis de la localisation. Pour cela, nous avons implémenté un pattern singleton. Il contient les informations relatives à la localisation et à l’activité en cours.  Il est utilisé dans chacun des écrans d’activité et permet de contrôler l’état du bouton “Démarrer”.  Lorsque l’utilisateur appuie sur ce bouton, l’application vérifie si il est est en dehors de sa zone de confinement. Dans le cas où l'utilisateur est en dehors de sa zone de confinement, l’activité démarrera automatiquement. Dans le cas où l’utilisateur n’est pas en dehors de sa zone de confinement, l’activité passe à l’état “En attente”, et démarrera automatiquement lorsque l’utilisateur sortira de sa zone de confinement. Lorsque l’utilisateur démarre une activité, le nombre d'activité journalière est décrémenté.  Il n’est pas possible de démarrer simultanément deux activités.