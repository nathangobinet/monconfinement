/* eslint-disable react-native/no-color-literals */
import * as React from 'react';
import { StyleSheet, Text} from 'react-native';

import Colors from '../../constants/Colors';

export default function ActivityTitle(props) {
    return(
        <Text style={styles.overTitle}>
            <Text>{title(props.type)}</Text>
        </Text>
    )
}

function title(props){
    if (props == 1)
        return "Défoulez vous, tout en étant en règle.";
    else if (props == 2)
      return "Faites vos courses, tout en étant en règle.";
    else
        return "Soyez en règle, et respectez les consignes."
}

const styles = StyleSheet.create({
  
    overTitle: {
      backgroundColor: "rgba(0,0,0,.6)",
      bottom: 20,
      color: Colors.white,
      fontSize: 16,
      fontWeight: 'bold',
      marginLeft: 25,
      marginRight: 25,
      padding: 10,
      position: 'absolute',
    },
  
  });
  