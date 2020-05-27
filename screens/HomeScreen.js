import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import ParameterButton from '../components/ParameterButton';
import ActivityItem from '../components/HomeScreen/ActivityItem'
import Colors from '../constants/Colors';

export default function HomeScreen({ navigation }) {

  const path ='../assets/images/ActivityPic/'

  navigation.setOptions({
    headerRight: () => (
      <ParameterButton navigation={navigation} />
    )});

  return (
    <View style={styles.container}>
      <ActivityItem titre="Activité Physique" img={require(path + 'coursesRavitaillement.jpg')}/>
	    <ActivityItem titre="Courses / Ravitaillement" img={require(path + 'activitePhysique.jpg')}/>
	    <ActivityItem titre="Autres" img={require(path + 'other.jpg')}/>
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
