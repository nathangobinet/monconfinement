import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

import Activity from './Activity';

const RADIUS_METTERS = 15;
const GEOFENCING_TASK_NAME = 'geofencing-task';

export async function geofenceLocalisation(localisation){
  const regions = [{
    latitude: localisation.coords.latitude, 
    longitude: localisation.coords.longitude,
    radius: RADIUS_METTERS,
  }];
  await TaskManager.unregisterAllTasksAsync();
  Location.startGeofencingAsync(GEOFENCING_TASK_NAME, regions);
}

export async function defineGeofencingTask() {
  TaskManager.defineTask(GEOFENCING_TASK_NAME, async ({ data: {  region } }) => {
    Activity.handlePositionChange(region.state);
  });
}


