import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import * as DocumentPicker from 'expo-document-picker';

export default function ActivityAttachement() {
    const [docState, setDocState] = useState(false);

    async function DocUrl() {
        const doc = await DocumentPicker.getDocumentAsync({});
        if (doc.type === "success") {
            setDocState(true);
            console.log(doc);
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
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
            {
                docState &&
                <View style={styles.btnContainer}>
                    <TouchableOpacity 
                    onPress={DocUrl}
                    style={styles.btnDisplayWrapper}
                    >
                        <Text
                            style={styles.btn}>
                            Afficher le justificatif
                        </Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        color: Colors.white,
    },

    btnContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },

    btnDisplayWrapper: {
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        padding: 15,
        shadowColor: Colors.shadowColor,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
    },

    btnSearchWrapper: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
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