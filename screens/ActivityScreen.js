import * as React from 'react';
import { StyleSheet, Text,  View } from 'react-native';

import Colors from '../constants/Colors'
import ParameterButton from '../components/ParameterButton';

export default function ActivityScreen({ route, navigation}) {

  const { titre, img, desc, type } = route.params;

  navigation.setOptions({
    title: titre,
    headerRight: () => (
      <ParameterButton navigation={navigation} />
    ),
  });

  return (
    <View style={styles.container}>
      <Text>{titre}{img}{desc}{type}</Text>
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
