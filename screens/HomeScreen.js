import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import ParameterButton from '../components/ParameterButton';
import ActivityItem from '../components/HomeScreen/ActivityItem'
import Colors from '../constants/Colors';

import ListeActivite from '../constants/listeActivite';

export default function HomeScreen({ navigation }) {
  navigation.setOptions({
    headerRight: () => (
      <ParameterButton navigation={navigation} />
    )});

  return (
    <View style={styles.container}>
      {
        ListeActivite.map((activity) => <ActivityItem titre={activity.titre} img={activity.img} desc={activity.desc}/>)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: Colors.background
  },
});
