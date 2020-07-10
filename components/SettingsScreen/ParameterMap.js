/* eslint-disable react/no-children-prop */
import { View, Dimensions, StyleSheet, Image, Text, ActivityIndicator } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView from 'react-native-maps'
import { Circle } from 'react-native-maps'
import React, { useState } from 'react';
import Colors from '../../constants/Colors';
import * as Location from 'expo-location';

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

async function locationGranted() {
  let { status } = await Location.requestPermissionsAsync();
  return status === 'granted';
}

async function getLocation(setAnimation) {
  setAnimation(true);
  return await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
}

async function setUpMapLocation(location, setMapRegion, setAnimation) {
  setMapRegion({...location.coords, latitudeDelta: .001, longitudeDelta: .001});
  setAnimation(false);
}

async function handleLocate(setMapDisplay, setpreviewDisplay, setMapRegion, setAnimation, setValue, setChildren) {
  if(!await locationGranted()) return;
  transitionViews(setMapDisplay, setpreviewDisplay);
  const location = await getLocation(setAnimation);
  setChildren(<Circle center={location.coords} radius={20} fillColor="#bcd7f5" strokeColor="#4c97ed"/>)
  setUpMapLocation(location, setMapRegion, setAnimation);
  const [adressObject] = await Location.reverseGeocodeAsync(location.coords);
  const adressString = `${adressObject.name} ${adressObject.street}`;
  location.adress = adressString;
  setValue(location);
}

export default function ParameterMap(props) {
  const { setValue } = props;
  const [mapDisplay, setMapDisplay] = useState({display: 'none'});
  const [previewDisplay, setpreviewDisplay] = useState({display: 'flex'});
  const [mapRegion, setMapRegion] = useState(defaultRegion);
  const [animation, setAnimation] = useState(false);
  const [children, setChildren] = useState(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={.8} onPress={() => handleLocate(setMapDisplay, setpreviewDisplay, setMapRegion, setAnimation, setValue, setChildren)}>
        <Image source={imagePreview} style={[styles.imageStyle, previewDisplay]}/>
        <Text style={styles.buttonStyle}>Me localiser</Text>
      </TouchableOpacity>
      <MapView style={[styles.mapStyle, mapDisplay]} region={mapRegion} children={children}>
      </MapView>
      <View style={styles.acitivityView}>
        <ActivityIndicator size="large" color={Colors.primary} hidesWhenStopped={true} animating={animation} />
      </View>
    </View>
  ); 
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  acitivityView: {
    position: "absolute",
  },
  buttonStyle: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    left: "100%",
    padding: 10,
    position: "absolute",
    top: "100%",
    transform: [{translateX: Dimensions.get('window').width * -0.6 }, {translateY: 300 * -0.57 }],
  }, 
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    marginBottom: 10,
    position: "relative",
  },
  imageStyle: {
    height: 300,
    width,
  },
  mapStyle: {
    height: 300,
    width,
  },
});