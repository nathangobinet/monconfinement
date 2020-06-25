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
        <View style={styles.overTitleBackground}>
          <Text style={styles.overTitle} >Défoulez vous, tout en étant en règle.</Text>
        </View>
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
    backgroundColor: Colors.text,
    color: Colors.white,
    fontWeight: 'Bold',
    opacity: 1,
    position: 'absolute',
  },

  overTitleBackground: {
    backgroundColor: Colors.text,
    bottom: 50,
    marginLeft: 25,
    marginRight: 25,
    padding: 15,
    position: 'relative',
  },

});
