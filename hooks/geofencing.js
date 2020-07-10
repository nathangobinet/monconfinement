import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { Alert } from 'react-native';

const RADIUS_METTERS = 15;
const GEOFENCING_TASK_NAME = 'geofencing-task';

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

function alert(title, message) {
  Alert.alert(title, message);
}

export function defineGeofencingTask() {
  TaskManager.defineTask(GEOFENCING_TASK_NAME, async ({ data: {  region } }) => {
    const stateString = Location.GeofencingRegionState[region.state].toLowerCase();
    const { title, message  } = { 
      title: 'Alerte sur votre emplacement', 
      message: `${stateString} region ${region.identifier}`
    };
    notifiate(title, message);
    alert(title, message);
  });
}


