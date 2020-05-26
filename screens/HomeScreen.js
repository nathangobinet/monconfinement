import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import ParameterButton from '../components/ParameterButton';
import ActivityItem from '../components/HomeScreen/ActivityItem'
import Colors from '../constants/Colors';

export default function HomeScreen({ navigation }) {

  navigation.setOptions({
    headerRight: () => (
      <ParameterButton navigation={navigation} />
    )});

  return (
    <View style={styles.container}>
      <ActivityItem/>
	    <ActivityItem/>
	    <ActivityItem/>
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
