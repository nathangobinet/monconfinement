import ActivityImages from './ActivityImages';
export default [
    {
        titre : "Activité physique",
        desc : "Toutes les pratiques liées à l'activité sportive (jogging, promenade, sortir son chien, etc...)",
        infoSupp : "Temps maximum 1h, Distance maximum 1km",
        need : "Aucun renseignement n'est nécessaire pour cette activitée.",
        img : ActivityImages["Activité physique"],
        type: 1,
    },
    {
        titre : "Courses / Ravitaillement",
        desc : "Realisez vos courses tout en étant en règle.",
        infoSupp : "Distance max du magasin : 10km.",
        need : "Vous devez renseigner le magasin et sa localisation.",
        img : ActivityImages["Course"],
        type: 2,
    },
    {
        titre : "Autres",
        desc : "Travail, Rendez-vous et autres sorties diverses.",
        infoSupp : "Pièce justificative obligatoire.",
        need : "Renseignez une pièce justificative pour pouvoir démarrer l'activité.",
        img : ActivityImages["Autre"],
        type: 3,
    }
]