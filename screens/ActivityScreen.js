import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../constants/Colors'
import ParameterButton from '../components/ParameterButton';

export default function ActivityScreen({ navigation }) {
  navigation.setOptions({
    title: 'Activity',
    headerRight: () => (
      <ParameterButton navigation={navigation} />
    ),
  });

  return (
    <View style={styles.container}>

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
