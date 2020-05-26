import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button, Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import HomeScreen from './screens/HomeScreen';
import LinksScreen from './screens/LinksScreen';

const Stack = createStackNavigator();
const navigationRef = React.createRef();


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
              options={{
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#DF7861' },
              }}
            />
            <Stack.Screen name="Paramètres" component={LinksScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
