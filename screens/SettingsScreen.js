import { ScrollView, Text, StyleSheet, Button } from "react-native";
import * as React from 'react';
import Colors from '../constants/Colors';

import ParameterInput from '../components/SettingsScreen/ParameterInput'

export default function SettingsScreen() {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.categorie} >Coordonnées basiques</Text>
            <ParameterInput labelInput='Nom' valueInput=''/>
            <ParameterInput labelInput='Prenom' valueInput=''/>
            <Text style={styles.categorie}>Localisation</Text>
            <ParameterInput labelInput='Adresse' valueInput=''/>
            <Button style={styles.buttonOk} title='Enregistrer'/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    buttonOk: {
        backgroundColor: Colors.primary,
        borderRadius: 5,
    },

    categorie: {
        color: Colors.text,
        fontWeight: "700",
        marginBottom: 15,
        marginTop: 10,
    },

    container: {
      backgroundColor: Colors.background,
      flexDirection: 'column',
      padding: 10,
    }
});
  