import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { Alert } from 'react-native';

import Activity from './Activity';

const RADIUS_METTERS = 20;
const GEOFENCING_TASK_NAME = 'geofencing-task';

export let isOutside = false;

export async function geofenceLocalisation(localisation){
  const regions = [{
    latitude: localisation.coords.latitude, 
    longitude: localisation.coords.longitude,
    radius: RADIUS_METTERS,
  }];
  if(await TaskManager.isTaskRegisteredAsync(GEOFENCING_TASK_NAME)) {
    await TaskManager.unregisterAllTasksAsync();
  }
  Location.startGeofencingAsync(GEOFENCING_TASK_NAME, regions);
}

async function notifiate(title, message) {
  const {status: existingStatus} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if (existingStatus !== 'granted' ) return;
  Notifications.presentLocalNotificationAsync({
    title: title,
    body: message,
  });
}

function alertAndNotifiate(title, message) {
  Alert.alert(title, message);
  notifiate(title, message);
}


function handleGoOutside() {
  // L'uitilisateur sort de sa zone de confinement alors qu'il a commencé une activité 
  if(Activity.isSetUp()) {
    Activity.start();
    alertAndNotifiate('L\'activité à commencer !', 'L\'activité à commencer + ext info');
  } 
  // L'uitilisateur sort de sa zone de confinement alors qu'il n'a pas commencé une activité 
  else {
    alertAndNotifiate(
      'Sortie non authorisée', 
      'Attention, vous sortez de votre zone de confinement. Merci de regagner votre zone deconfinement ou de commencer une activité.',
    );
  }
}

function handleGoInside() {
  // L'uitilisateur rentre dans sa zone de confinement alors qu'il était en activité 
  if (Activity.isStarted()) {
    Alert.alert(
      "Zone de confinement regagnée",
      "Vous avez regagné votre zone de confinement. Voulez-vous terminer l'activité en cours ?",
      [{ text: "Non", style: "cancel" },
        { text: "Oui", onPress: () => { Activity.stop(); }}
      ],{ cancelable: false }
    );
  } 
  // L'uitilisateur rentre dans sa zone de confinement alors qu'il n'était pas en activité 
  else {
    alertAndNotifiate(
      'Vous êtes dans votre zone de confinement', 
      'Merci d\'avoir gagné votre zone de confinement',
    );
  }
}

function handleRegionChange(region) {
  (region.state === 2) ? handleGoOutside() : handleGoInside();
}

export function defineGeofencingTask() {
  TaskManager.defineTask(GEOFENCING_TASK_NAME, async ({ data: {  region } }) => {
    console.log('hry');
    handleRegionChange(region);
  });
}


