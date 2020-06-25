import { ScrollView, Text, StyleSheet, Button, AsyncStorage } from "react-native";
import React, { useEffect, useState } from 'react';
import Colors from '../constants/Colors';

import ParameterInput from '../components/SettingsScreen/ParameterInput';
import ParameterMap from '../components/SettingsScreen/ParameterMap';

const inputs = ['nom', 'prenom', 'localisation'];

async function saveData(inputNom, inputPrenom, inputLocation) {
    try {
        await AsyncStorage.setItem('nom', inputNom.current);
        await AsyncStorage.setItem('prenom', inputPrenom.current);
        await AsyncStorage.setItem('localisation', inputLocation.current);
    } catch (error) {
        console.log('Une erreur');
    }
}

async function getData() {
    return Promise.all(inputs.map(async (input) =>  {
        try {
            return await AsyncStorage.getItem(input);
        } catch (error) {
            return '';
        }
    }));
}

export default  function SettingsScreen() {

    const inputNom = React.useRef(null);
    const inputPrenom = React.useRef(null);
    const inputLocation = React.useRef(null);

    const [inputValues, setInputValues] = useState({nom: '', prenom: '', localisation: ''});
    
    useEffect(() => {(
        async () => {
            const inputVals = await getData();
            setInputValues({nom: inputVals[0], prenom: inputVals[1], localisation: inputVals[2]});
        })();
    }, []);

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.categorie} >Coordonnées basiques</Text>
            <ParameterInput parentRef={inputNom} labelInput='Nom' valueInput={inputValues.nom}/>
            <ParameterInput parentRef={inputPrenom} labelInput='Prenom' valueInput={inputValues.prenom}/>
            <Text style={styles.categorie}>Localisation</Text>
            <ParameterInput parentRef={inputLocation} labelInput='Adresse' valueInput={inputValues.localisation}/>
            <ParameterMap updateinputValues={setInputValues} inputValues={inputValues}></ParameterMap>
            <Button
                title="Save Data"
                accessibilityLabel="Save Data"
                onPress={() => { saveData(inputNom, inputPrenom, inputLocation); }}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
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
  