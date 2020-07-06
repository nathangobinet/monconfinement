/* eslint-disable react-native/no-color-literals */
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Colors from '../constants/Colors';
import ActivityInfo from '../constants/listeActivite';
import ParameterButton from '../components/ParameterButton';
import ActivityTitle from '../components/ActivityScreen/ActivityTitle';


export default function ActivityScreen({ route, navigation}) {

  const { titre, img, desc, type } = route.params;

  navigation.setOptions({
    title: titre,
    // eslint-disable-next-line react/display-name
    headerRight: () => (
      <ParameterButton navigation={navigation} />
    ),
  });

  return (
    <View style={styles.container}>
      <View>
				<Image
          style={styles.activityImage}
					source={img}
				/>

        <ActivityTitle type={type} />
        
			</View>
      
      <View style={styles.textContainer}>
				<Text style={styles.title}>{getOverallInfo(type).titre}</Text>
				<View style={styles.orangeLine}></View>
				<Text style={styles.description}>{desc}</Text>
			</View>

      <View style={styles.textContainer}>
				<Text style={styles.title}>Informations supplémentaires</Text>
				<View style={styles.orangeLine}></View>
				<Text style={styles.description}>{getOverallInfo(type).infoSupp}</Text>
			</View>

      <View style={styles.textContainer}>
				<Text style={styles.title}>Renseignements nécessaires</Text>
				<View style={styles.orangeLine}></View>
				<Text style={styles.description}>{getOverallInfo(type).need}</Text>
			</View>

    </View>
  );
}

function getOverallInfo(type) {
  return ActivityInfo.filter(x => x.type === type)[0];
}

const styles = StyleSheet.create({
  
  activityImage: {
    backgroundColor: Colors.primary,
    height: 170,
    marginTop: -10,
    width: '100%',
  },
  
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingTop: 10
  },

  orangeLine: {
		borderBottomColor: Colors.primary,
		borderBottomWidth: 2,
		height: 1,
		marginBottom: 5,
    width: 75,
	},

	textContainer: {
    marginBottom: 5,
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
	},

	title : {
		fontSize: 20,
		marginBottom: 5
	}

});
