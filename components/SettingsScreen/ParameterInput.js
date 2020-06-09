import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/Colors'
import { TextInput } from 'react-native-gesture-handler';


export default function ParameterInput(props) {
    const [ value, setValue ] = useState('');
    
    useEffect(() => {
        props.parentRef.current = value;
    }, [value]);

    useEffect(() => {
        setValue(props.valueInput);
    }, [props.valueInput])

    return(
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{props.labelInput}</Text>
            <TextInput style={styles.input} placeholder="Insérer le texte ici" value={value} onChange={(e) => setValue(e.target.value)} />
        </View>
    )
}

const styles = StyleSheet.create({
	input: {
        color: Colors.primary,
        flex: 2,
        textAlign: "right",
    },
    
    inputContainer: {
        backgroundColor: Colors.white,
        borderColor: Colors.borderColor,
        borderRadius: 5,
        borderWidth: 1,

        display:"flex",
		flexDirection: "row",

        marginBottom: 10,
        padding: 20,
    },

    label: {
        color: Colors.text,
        flex: 1,
    }
})