import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

import Colors from '../constants/Colors'

export default function ParameterButton({ navigation }) {
  return (
    <View style={styles.icon}>
      <TouchableOpacity onPress={() => navigation.navigate('Paramètres')} >
        <Ionicons 
          name="md-settings" 
          size={24} 
          color={Colors.white} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 25,
  }
});