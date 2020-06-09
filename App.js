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

export default function App() {
  const isLoadingComplete = useCachedResources();

  /* Try to set up location detection */

  (async function startBackgroundLocation() {
    const { status } = await Location.requestPermissionsAsync();
    if (status === 'granted') {
      Location.get
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
      });
    }
  })();
    

  /* Try to set up location detection */

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
    flex: 1,
    backgroundColor: Colors.background,
  },
});

/* Try to set up location detection */
TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.log('Error', error)
    return;
  }
  if (data) {
    const { locations } = data;
    console.log('Success', JSON.stringify(locations));
  }
});
/* Try to set up location detection */