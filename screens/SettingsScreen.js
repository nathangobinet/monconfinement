import { View, Text, StyleSheet } from "react-native";
import * as React from 'react';
import Colors from '../constants/Colors';

export default function SettingsScreen() {
    return(
        <View style={styles.container}>
            <Text>Coordonnées basiques</Text>
            <Text>Localisation</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
      flex: 1,
      backgroundColor: Colors.background
    },
});
  