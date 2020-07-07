import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import Welcome from './components/Welcome'
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import Colors from './constants/Colors';
import HeaderOptions from './constants/HeaderOptions'
import ActivityScreen from './screens/ActivityScreen'
import { defineGeofencingTask } from './hooks/geofencing'

const Stack = createStackNavigator();

defineGeofencingTask();


// Return true if location var do not exist which means it is the first lauch
async function isFirstLauch() {
  return await AsyncStorage.getItem('localisation') === null;
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const [firstLauch, setFirstLaunch] = React.useState('wait');

  // When compononent did mount set isFirstLaunch state
  React.useEffect(()=> {(
    async() => {
      const result = await isFirstLauch()
      setFirstLaunch(result);
    }
  )();}, []);
  
  if (!isLoadingComplete && firstLauch === 'wait') {
    return null;
  } else {
    if(firstLauch) {
      return (
        <Welcome setFirstLaunch={setFirstLaunch}/>
      );
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
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
});
