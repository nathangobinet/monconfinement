import { ScrollView, Text, StyleSheet, Button, AsyncStorage } from "react-native";
import React, { Component } from 'react';
import Colors from '../constants/Colors';

import ParameterInput from '../components/SettingsScreen/ParameterInput';

export default function SettingsScreen() {

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.categorie} >Coordonnées basiques</Text>
            <ParameterInput labelInput='Nom' valueInput=''/>
            <ParameterInput labelInput='Prenom' valueInput=''/>
            <Text style={styles.categorie}>Localisation</Text>
            <ParameterInput labelInput='Adresse' valueInput=''/>

            <Button
                style={styles.formButton}
                title="Save Data"
                accessibilityLabel="Save Data"

                onPress={
                    async () => {
                        try {
                            await AsyncStorage.setItem(
                                '@MySuperStore:key',
                                'I like to save it.'
                        );
                        } catch (error) {
                            // Error saving data
                        }
                    }
                }
            />

            <Button
                style={styles.formButton}
                title="Get Data"
                accessibilityLabel="Get Key"

                onPress={
                    async () => {
                        try {
                            const value = await AsyncStorage.getItem('@MySuperStore:key');
                            if (value !== null) {
                                // We have data!!
                                console.log(value);
                            }
                        } catch (error) {
                            // Error retrieving data
                        }
                    }
                }
            />

            <Button
                style={styles.formButton}
                title="Remove Data"
                accessibilityLabel="Get Key"

                onPress={
                    async () => {
                        try {
                            await AsyncStorage.removeItem('@MySuperStore:key')
                        } catch (error) {
                            // Error retrieving data
                        }
                    }
                }
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: Colors.background,
      flexDirection: 'column',
    },

    categorie: {
        color: Colors.text,
        fontWeight: "700",
        marginBottom: 15,
        marginTop: 10,
    },

    buttonOk: {
        borderRadius: 5,
        backgroundColor: Colors.primary,
        color: Colors.primary
    }
});
  