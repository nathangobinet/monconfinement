import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/Colors'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';


export default function ParameterInput(props) {
    return(
		<TouchableOpacity activeOpacity={.8} >
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<Text style={styles.title}>{props.titre}</Text>
					<TextInput style={styles.input} placeholder="Nom"/>
				</View>
			</View>
		</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
		width: '95%',
		

        flex: 1
    },
    
    input: {
        backgroundColor: '#AAA',
        flex: 1,
        padding: 15,
        height: 80,

        backgroundColor: Colors.white,
		borderRadius: 5,


        borderWidth: 1,
        borderColor: '#CCC',
        
        textAlign: "right",
        color: Colors.primary
    }
})