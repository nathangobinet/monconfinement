import * as React from 'react';
import { Button } from 'react-native';

export default function ParameterButton({ navigation }) {
  return (
    <Button 
      onPress={() => navigation.navigate('Paramètres')} title="Paramètres" 
    />
  );
}
