import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import Activity, { states } from '../../hooks/Activity'
import ActivityStart from './ActivityStart';
import * as DocumentPicker from 'expo-document-picker';

export default function ActivityAttachement(props) {
    const [docState, setDocState] = useState(false);

    async function DocUrl() {
        const doc = await DocumentPicker.getDocumentAsync({"type": "application/pdf"});
        if (doc.type === "success") {
            setDocState(doc);
            console.log(docState);
        }
    }
    
    if(docState && Activity.getState() === states.SETUP) {
        return (
            <ActivityStart type={props.type} />
        );
    } else {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                onPress={DocUrl}
                style={styles.btnSearchWrapper}
                >
                    <Text
                        style={styles.btn}>
                        Selectionner un justificatif
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        color: Colors.white,
    },

    btnSearchWrapper: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 50,
        padding: 15,
        shadowColor: Colors.shadowColor,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
    },

    container: {
        alignItems: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        marginLeft: 100,
        marginRight: 100,
    },

});