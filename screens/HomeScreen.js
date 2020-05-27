import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import ParameterButton from '../components/ParameterButton';
import ActivityItem from '../components/HomeScreen/ActivityItem'
import Colors from '../constants/Colors';
import ActivityImages from '../constants/ActivityImages';

export default function HomeScreen({ navigation }) {
  navigation.setOptions({
    headerRight: () => (
      <ParameterButton navigation={navigation} />
    )});

  return (
    <View style={styles.container}>
      <ActivityItem titre="Activité Physique" img={ActivityImages['Activité physique']}/>
	    <ActivityItem titre="Courses / Ravitaillement" img={ActivityImages['Course']}/>
	    <ActivityItem titre="Autres" img={ActivityImages['Autre']}/>
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
