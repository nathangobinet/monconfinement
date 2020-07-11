import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Activity, { state } from '../../hooks/Activity'

const activityType = 1;
const durationInSeconds = 3600;
const getTimeMinutes = time => ((time % 3600) / 60) | 0;

const TimeLabel = (dimension, minute) => {
    return (
        <View style={styles.countdownWrapper}>
            <Text
                style={styles.remainingTime}>
                {minute} min.
            </Text>
            <Text style={styles.dimension}>{dimension}</Text>
        </View>
    );
};

function getRemaningSeconds() {
  const remaining = Activity.getRemainingSeconds();
  // Correct ?
  if(remaining === 0) return durationInSeconds;
  return remaining;
}

function getState() {
  if(!Activity.isCurrent(activityType)) return state.STOP;
  return Activity.getState();
}

function Timer() {

  const [timerState, setTimerState] = useState(getState());
  const [remainingSeconds] = useState(getRemaningSeconds());

  useEffect(() => {
    if(Activity.isCurrent(activityType)) {
      Activity.setSetState(setTimerState);
      return () => { Activity.setSetState(null); };
    }
  }, []);

  // Debug
  console.log(setTimerState, Activity._currentSetState, setTimerState ===  Activity._currentSetState);
  console.log('component remainingSeconds', remainingSeconds);

  if(timerState === state.STOP) {
    return (
      <TouchableOpacity 
        style={styles.startBtnWrapper} 
        onPress={() => {Activity.begin(setTimerState, activityType, durationInSeconds); }}
      >
        <Text
            style={styles.startLbl}>
            Démarrer
        </Text>
      </TouchableOpacity>
    )
  } else if(timerState === state.SETUP) {
    return (
      <View 
        style={styles.startBtnWrapper} 
      >
        <Text
            style={styles.waitingLbl}>
            En attente...
        </Text>
      </View>
    )
  } else {
    return (
      <CountdownCircleTimer
          isPlaying='true'
          duration={durationInSeconds}
          initialRemainingTime={remainingSeconds}
          colors={[[Colors.primary]]}
      >
          {
              ({ elapsedTime }) => TimeLabel(
                  "Bonne séance !",
                  getTimeMinutes(durationInSeconds - elapsedTime / 1000),
              )
          }
      </CountdownCircleTimer>
    );
  }
}

export default function ActivityTimer() {
  return (
    <View style={styles.container}>
        <Timer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 50,
    flex: 1,
    justifyContent: 'center',
    marginLeft: 100,
    marginRight: 100,
  },

  countdownWrapper: {
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
  },

  dimension: {
    color: Colors.primary,
    fontWeight: 'bold',
  },

  remainingTime: {
    color: Colors.primary,
    fontSize: 32,
  },

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

  startLbl: {
    color: Colors.white,
    fontSize: 30,
  },

  waitingLbl: {
    color: Colors.white,
    fontSize: 22,
  },
});