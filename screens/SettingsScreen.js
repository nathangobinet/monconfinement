import { ScrollView, Text, StyleSheet } from "react-native";
import * as React from 'react';
import Colors from '../constants/Colors';

import ParameterInput from '../components/SettingsScreen/ParameterInput'

export default function SettingsScreen() {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.categorie} >Coordonnées basiques</Text>
            <ParameterInput label='Nom' val=''/>
            <ParameterInput label='Prenom' val=''/>
            <Text style={styles.categorie} >Localisation</Text>
            <ParameterInput label='Adresse' val=''/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: Colors.background,
      flexDirection: 'column'
    },

    categorie: {
        fontWeight: "700",
        color: Colors.text,
        marginBottom: 15,
        marginTop: 10,
    }
});
  