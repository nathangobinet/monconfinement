import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Activity, { states } from '../../hooks/Activity'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';

function getState(type) {
  if(!Activity.isCurrent(type)) return states.STOP;
  return Activity.getState();
}

function getTextWithState(state) {
  switch(state) {
    case(states.STOP):
      return 'Démarrer';
    case(states.SETUP):
      return 'En attente';
    case(states.STARTED):
      return 'En cours';
    default:
      return '??';
  }
}

function StartButton(props) {
  const { state, setState, type } = props;
  const text = <Text style={styles.textBtn}>{getTextWithState(state)}</Text>
  if(state === states.STOP) {
    return (
    <TouchableOpacity 
      style={styles.startBtnWrapper}
      onPress={() => { Activity.begin(setState, type); }}
    >
      {text}
    </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.startBtnWrapper}>
        {text}
      </View>
    )
  }
}

export default function ActivityStart({ type }) {
  const [state, setState] = useState(getState(type))

  useEffect(() => {
    if(Activity.isCurrent(type)) {
      Activity.setSetState(setState);
      return () => { Activity.setSetState(null); };
    }
  }, []);

  return (
    <View style={styles.startContainer}>
     <StartButton state={state} setState={setState} type={type}/>
    </View>
  );
}

const styles = StyleSheet.create({
  startBtnWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 80,
    color: Colors.white,
    height: 160,
    justifyContent: 'center',
    shadowColor: Colors.shadowColor,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
    width: 160,
  }, 
  startContainer: {
    alignItems: 'center',
    borderRadius: 50,
    flex: 1,
    justifyContent: 'center',
    marginLeft: 100,
    marginRight: 100,
  }, textBtn: {
    color: Colors.white,
    fontSize: 22,
  },
})