import React from 'react';
import { StyleSheet, View } from 'react-native';

import ParameterButton from '../components/ParameterButton';
import ActivityItem from '../components/HomeScreen/ActivityItem'
import ActivityLeft from '../components/HomeScreen/ActivityLeft'
import Colors from '../constants/Colors';

import ListeActivite from '../constants/listeActivite';

export default function HomeScreen({ navigation }) {

  navigation.setOptions({
    // eslint-disable-next-line react/display-name
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
      <ActivityLeft />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingTop: 10
  },
});
