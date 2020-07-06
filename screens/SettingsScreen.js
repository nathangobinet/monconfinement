import { ScrollView, Text, StyleSheet, AsyncStorage } from "react-native";
import React, { useEffect, useState } from 'react';
import Colors from '../constants/Colors';

import ParameterInput from '../components/SettingsScreen/ParameterInput';
import ParameterMap from '../components/SettingsScreen/ParameterMap';
import { TouchableOpacity } from "react-native-gesture-handler";

async function saveData(datas, firstLauch) {
    for(const prop in datas){
        await AsyncStorage.setItem(prop, JSON.stringify(datas[prop]));
    }
    // Deblock the user one all the datas are not empty
    if(firstLauch) {
        if(datas.nom !== '' && datas.prenom !== '' && datas.localisation.adress !== '') {
            firstLauch(false);
        }
    }
}

async function getData(inputValues) {
    const loadData = {...inputValues};
    for(const [key] of Object.entries(loadData)) {
        const item = await AsyncStorage.getItem(key);
        if(item !== null) loadData[key] = JSON.parse(item);
    }
    return loadData;
}

export default function SettingsScreen(props) {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom]  = useState('');
    const [localisation, setLocalisation]  = useState({adress: ''});

    // This prop refer the function to deblock the user if it the first launch
    const {firstLauch} = props;

    // Init the state with the saved values
    useEffect(() => {(
        async () => {
            const savedVals = await getData({nom, prenom, localisation});
            setNom(savedVals.nom); 
            setPrenom(savedVals.prenom); 
            setLocalisation(savedVals.localisation);
        })();
    }, []);

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.categorie} >Coordonnées basiques</Text>
            <ParameterInput setValue={setNom} labelInput='Nom' value={nom}/>
            <ParameterInput setValue={setPrenom} labelInput='Prenom' value={prenom}/>
            <Text style={styles.categorie}>Localisation</Text>
            <ParameterInput labelInput='Adresse' value={localisation.adress} disable />
            <ParameterMap setValue={setLocalisation}></ParameterMap>
            <TouchableOpacity 
                style={styles.btn} 
                activeOpacity={.7} 
                onPress={() => { saveData({nom, prenom, localisation}, firstLauch); }}
            >
                <Text style={styles.btnText}>{(firstLauch) ? 'Terminer' : 'Sauvegarder'}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 14,
    },

    btnText: {
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: "center",
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
  