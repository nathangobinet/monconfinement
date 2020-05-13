import * as React from 'react';
import { Button, Platform, StyleSheet, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button 
      title="Paramètres"
      onPress={() => navigation.navigate('Paramètres')}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
