import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/Colors'

export default function ParameterButton({ navigation }) {
  return (
    <Ionicons 
      style= {styles.icon}
      onPress={() => navigation.navigate('Paramètres')} 
      name="md-settings" 
      size={24} 
      color={Colors.white} 
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 25,
  }
});