/* eslint-disable react-native/no-color-literals */
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Colors from '../constants/Colors'
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

});
