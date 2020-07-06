/* eslint-disable react/no-unescaped-entities */
import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from 'react';
import Colors from '../constants/Colors';

import SettingsScreen from '../screens/SettingsScreen';
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";


export default function Welcome(props) {
  const [firstScreen, setFirstScreen] = useState(true)
  if(firstScreen) {
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={require('../assets/images/icon.png')}/>
        <Text style={styles.title}>Bienvenue dans Mon Confinement !</Text>
        <Text style={styles.sub}>L'application qui vous simplifie le confinement.</Text>
        <TouchableOpacity 
          style={styles.btn} 
          activeOpacity={.7} 
          onPress={() => {setFirstScreen(false);}}
        >
          <Text style={styles.btnText}>Suivant</Text>
        </TouchableOpacity>
      </View>
    )
  } else {
    return (
      <ScrollView style={styles.secondContainer}>
        <Text style={styles.settingTitle}>Pour commencer, merci de remplir les informations ci-dessous.</Text>
        <SettingsScreen firstLauch={props.setFirstLaunch} /> 
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 14,
    paddingLeft: 60,
    paddingRight: 60,
  },
  btnText: {
      color: Colors.white,
      fontWeight: 'bold',
      textAlign: "center",
  },
  container: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    marginTop: 50,
    padding: 10,
  },
  imageStyle: {
    height: 200,
    marginBottom: 20, 
    width: 200,
  }, secondContainer: {
    marginTop: 40,
  }, settingTitle: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 20,
    textAlign: "center",
  }
  ,sub : {
    color: Colors.text,
    fontSize: 18,
    paddingBottom: 20,
    textAlign: "center",
  }, title : {
    color: Colors.primary,
    fontSize: 32,
    fontWeight: '600',
    paddingBottom: 10,
    textAlign: "center",
  }
});
