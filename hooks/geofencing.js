import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

const RADIUS_METTERS = 20;
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

export function defineGeofencingTask() {
  TaskManager.defineTask(GEOFENCING_TASK_NAME, async ({ data: {  region } }) => {
    const stateString = Location.GeofencingRegionState[region.state].toLowerCase();
    console.log(`${stateString} region ${region.identifier}`);
  });
}


