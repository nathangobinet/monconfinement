import * as React from 'react';
import { StyleSheet, View, Text} from 'react-native';

import Colors from '../../constants/Colors';

export default function ActivityTitle() {
    return(
        <View style={styles.circle}>
            <Text style={styles.count}>3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 75/2,
        bottom: 70,
        height: 75,
        justifyContent: 'center',
        position: "absolute",
        right: 20,
        shadowColor: Colors.shadowColor,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
        width: 75,
     },

     count: {
        color: Colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 0,
        textAlign: 'center',
     }
  });
  