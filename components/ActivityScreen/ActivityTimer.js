import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const getTimeMinutes = time => ((time % 3600) / 60) | 0;

const renderTime = (dimension, minute) => {
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

const start = () => {
  return (
    <View style={styles.countdownWrapper}>
        <Text
            style={styles.remainingTime}>
            Start
        </Text>
    </View>
  );
}

const [timerStarted, setTimerStarted] = useState(false);

function renderTimer() {
  if(!timerStarted) {
    return <Text>HHOOOOW</Text>
  } else {
    return (<CountdownCircleTimer
                onComplete={() => {
                    alert('LET\'S GO')
                }}

                duration={3600}
                colors={[[Colors.primary]]}
            >
                {
                    ({ elapsedTime }) => renderTime(
                        "Bonne séance !",
                        getTimeMinutes(3600 - elapsedTime / 1000),
                    )
                }
            </CountdownCircleTimer>);
  }
}

export default function ActivityTimer() {
  return (
    <View style={styles.container}>
        {renderTimer()}
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
});