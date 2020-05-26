import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import ParameterButton from '../components/ParameterButton';

export default function HomeScreen({ navigation }) {

  navigation.setOptions({
    headerRight: () => (
      <ParameterButton navigation={navigation} />
    )});

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
