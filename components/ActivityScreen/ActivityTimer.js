import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { TouchableOpacity } from 'react-native-gesture-handler';

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


function Timer() {
  const [timerStarted, setTimerStarted] = useState(false);

  if(!timerStarted) {
    return (
      <TouchableOpacity style={styles.startBtnWrapper} onPress={() => setTimerStarted(true)}>
        <Text
            style={styles.startLbl}>
            Start
        </Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity onPress={() => setTimerStarted(false)}>
        <CountdownCircleTimer
            onComplete={() => {
                alert('Entrainement terminé !')
            }}
            isPlaying='true'
            duration={3600}
            colors={[[Colors.primary]]}
        >
            {
                ({ elapsedTime }) => TimeLabel(
                    "Bonne séance !",
                    getTimeMinutes(3600 - elapsedTime / 1000),
                )
            }
        </CountdownCircleTimer>
      </TouchableOpacity>
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
    fontSize: 44,
  },

  startBtnWrapper: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 80,
    color: Colors.white,
    height: 160,
    justifyContent: 'center',
    width: 160,
  },

  startLbl: {
    color: Colors.white,
    fontSize: 44,
  },
});