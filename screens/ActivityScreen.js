/* eslint-disable react-native/no-color-literals */
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Colors from '../constants/Colors'
import ParameterButton from '../components/ParameterButton';

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
        
      <Text style={styles.overTitle} >Défoulez vous, tout en étant en règle.</Text>
			</View>
      <Text>Yes</Text>
      <Text>{titre}{img}{desc}{type}</Text>
    </View>
  );
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

  overTitle: {
    backgroundColor: "rgba(0,0,0,.7)",
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
