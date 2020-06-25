import { View, Dimensions, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView from 'react-native-maps'
import React, { useState } from 'react';
import Colors from '../../constants/Colors';

const imagePreview = require('../../assets/images/map_preview.jpg');
const defaultRegion = {
  latitude: 46.64888018091346,
  longitude: 2.4383404373266715,
  latitudeDelta: 9,
  longitudeDelta: 9,
}

function transitionViews(setMapDisplay, setpreviewDisplay) {
  setMapDisplay({ display:'flex'});
  setpreviewDisplay({ display:'none'});
}

function setUpMapLocation(setMapRegion) {

}

function handleLocate(setMapDisplay, setpreviewDisplay, setMapRegion) {
  transitionViews(setMapDisplay, setpreviewDisplay);
  setUpMapLocation(setMapRegion)
}

export default function ParameterMap() {
  const [mapDisplay, setMapDisplay] = useState({display: 'none'});
  const [previewDisplay, setpreviewDisplay] = useState({display: 'flex'});
  const [mapRegion, setMapRegion] = useState(defaultRegion);
  return (
    <TouchableOpacity activeOpacity={.8} onPress={() => handleLocate(setMapDisplay, setpreviewDisplay, setMapRegion)}>
      <View style={styles.container}>
        <Image source={imagePreview} style={[styles.imageStyle, previewDisplay]}/>
        <View style={styles.buttonStyle} activeOpacity={.4}>
          <Text style={styles.buttonTextStyle}>Me localiser</Text>
        </View>
        <MapView style={[styles.mapStyle, mapDisplay]} region={mapRegion}/>
      </View>
    </TouchableOpacity>
  ); 
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.primary,
    left: "100%",
    padding: 10,
    position: "absolute",
    top: "100%",
    transform: [{translateX: Dimensions.get('window').width * -0.6 }, {translateY: 300 * -0.57 }],
  }, 
  buttonTextStyle: {
    color: Colors.white,
  },
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    marginBottom: 10,
    position: "relative",
  },
  imageStyle: {
    height: 300,
    width: Dimensions.get('window').width,
  },
  mapStyle: {
    height: 300,
    width: Dimensions.get('window').width,
  },
});