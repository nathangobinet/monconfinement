import React, { useEffect, useState } from 'react';
import { View, AsyncStorage, StyleSheet, Text } from 'react-native';

import ActivityStart from './ActivityStart';
import Colors from '../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

function getApiKey() {
  return 'AIzaSyCo0vxHXHTA9u3_zAwNHhewrxz458bYNzc';
}

async function getLocalisation() {
  const storedLocation = JSON.parse(await AsyncStorage.getItem('localisation'));
  return { latitude: storedLocation.coords.latitude, longitude: storedLocation.coords.longitude };
}

async function getStores(setStores) {
  const apiKey = getApiKey();
  const localisation = await getLocalisation();
  const query = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${localisation.latitude},${localisation.longitude}
  &rankby=distance&type=grocery_or_supermarket&language=fr&opennow=true&key=${apiKey}`;
  const response = await fetch(query);
  const stores = (await response.json()).results;
  setStores(stores);
}

function StoresCpt(props) {
  const { stores, activeStore, setActiveStore } = props;
  const closestStores = stores.slice(0, 3);
  return (
    <View style={styles.storeContainer}> 
      {closestStores.map((store) => (
        <TouchableOpacity 
          activeOpacity={0.7} 
          key={store.place_id} 
          style={{ ...styles.storeItem, ...{ backgroundColor: (store.place_id === activeStore) ? Colors.disable : Colors.white }}} 
          onPress={() => { setActiveStore(store.place_id); }}
        > 
          <Text style={styles.storeName}>{store.name}</Text>
          <Text style={styles.storeAdress}>{store.vicinity}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default function ActivityStores({ type }) {
  const [stores, setStores] = useState(undefined)
  const [activeStore, setActiveStore] = useState(undefined);

  useEffect(() => {
    getStores(setStores);
  }, []);

  return (
   <View style={styles.container}>     
    <Text style={styles.title}>Sélectionnez un magasin ouvert à proximité: </Text>
     {!stores && <Text style={styles.text}>Chargement...</Text>}
     {stores && <StoresCpt stores={stores} activeStore={activeStore} setActiveStore={setActiveStore} />}
     <ActivityStart type={type} ready={activeStore !== undefined}/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
  }, storeAdress: {
    color: Colors.text,
    fontSize: 16,
  }, 
  storeContainer: {
    backgroundColor: Colors.white,
    borderColor: Colors.text,
    borderRadius: 10,
    borderWidth: 1,
  }, storeItem: {
    borderRadius: 10,
    padding: 10,
  }, storeName: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  }, title: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 10
  }
})