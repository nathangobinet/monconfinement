import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/Colors'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';


export default function ParameterInput(props) {
    return(
            <View style={styles.inputContainer}>
                <Text style={styles.label}>{props.label}</Text>
                <TextInput style={styles.input} placeholder="texte ici">{props.val}</TextInput>
            </View>
    )
}

const styles = StyleSheet.create({
	inputContainer: {
        padding: 20,
        marginBottom: 10,
        display:"flex",
        flexDirection: "row",

        backgroundColor: Colors.white,
		borderRadius: 5,

        borderWidth: 1,
        borderColor: '#CCC',
    },
    
    input: {
        flex: 2,
        textAlign: "right",
        color: Colors.primary,
    },

    label: {
        flex: 1,
        color: Colors.text,
    }
})