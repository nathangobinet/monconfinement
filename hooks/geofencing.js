import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

const RADIUS_METTERS = 1;
const GEOFENCING_TASK_NAME = 'geofencing-task';

export async function geofenceLocalisation(localisation){
  if(await TaskManager.isTaskRegisteredAsync(GEOFENCING_TASK_NAME)) {
    await Location.stopGeofencingAsync(GEOFENCING_TASK_NAME);
  }
  const regions = [{
    latitude: localisation.coords.latitude,
    longitude: localisation.coords.longitude,
    radius: RADIUS_METTERS,
  }]
  Location.startGeofencingAsync(GEOFENCING_TASK_NAME, regions);
}

export function defineGeofencingTask() {
  TaskManager.defineTask(GEOFENCING_TASK_NAME, ({ data: { eventType, region }, error }) => {
    if (error) {
      // check `error.message` for more details.
      return;
    }
    if (eventType === Location.GeofencingEventType.Enter) {
      console.log(Date.now(), 'You\'ve entered region:', region);
    } else if (eventType === Location.GeofencingEventType.Exit) {
      console.log(Date.now(),'You\'ve left region:', region);
    }
  });
}


