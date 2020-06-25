import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

import useCachedResources from './hooks/useCachedResources';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import Colors from './constants/Colors';
import HeaderOptions from './constants/HeaderOptions'
import ActivityScreen from './screens/ActivityScreen';

const LOCATION_TASK_NAME = 'background-location-task';

const Stack = createStackNavigator();

(async function startBackgroundLocation() {
  const { status } = await Location.requestPermissionsAsync();
  if (status === 'granted') {
    try {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
      });
    } catch(Error) {
      console.log("Device does not support Async Update Location");
    }
  }
})();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Sorties" 
              component={HomeScreen}
              options={ HeaderOptions }
            />
            <Stack.Screen 
              name="Paramètres" 
              component={SettingsScreen} 
              options={ HeaderOptions } 
            />
            <Stack.Screen 
              name="Activité" 
              component={ActivityScreen} 
              options={ HeaderOptions } 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
});

/* Try to set up location detection */
TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.log('Error', error)
    return;
  }
  if (data) {
    // const { locations } = data;
    // const adress = await Location.reverseGeocodeAsync(locations[0].coords);
    console.log('Success');
  }
});
/* Try to set up location detection */