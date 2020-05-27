import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';

/* Location tests */
import * as Location from 'expo-location';


import ParameterButton from '../components/ParameterButton';
import ActivityItem from '../components/HomeScreen/ActivityItem'
import Colors from '../constants/Colors';

import ListeActivite from '../constants/listeActivite';

export default function HomeScreen({ navigation }) {

  /* Location tests */
  const [text, setText] = useState('Waiting..');

  useEffect(() => { 
    getPosition().then((text) => {setText(text);})
  }, [])
  /* Location tests */


  navigation.setOptions({
    headerRight: () => (
      <ParameterButton navigation={navigation} />
    )});

  return (
    <View style={styles.container}>
      {
        ListeActivite.map(
          (activity, key) => {
            return (
              <ActivityItem 
                navigation={navigation} 
                titre={activity.titre} 
                img={activity.img} 
                desc={activity.desc} 
                type={activity.type}
                key={key}
              />
            );
        })
      }
      <Text>{text}</Text>
    </View>
  );
}

async function getPosition() {
  let { status } = await Location.requestPermissionsAsync();
  if (status !== 'granted') return('Permission to access location was denied');
  const location = await Location.getCurrentPositionAsync();
  return JSON.stringify(location);
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: Colors.background
  },
});
