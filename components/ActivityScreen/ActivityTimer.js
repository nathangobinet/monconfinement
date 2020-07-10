import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import CountDown from 'react-native-countdown-component';

let pauseResume = {"running":"false"};


export default function ActivityTimer() {
    return (
    <View>
        <CountDown
        style={styles.container}
        until={3599}
        digitStyle={{backgroundColor: Colors.primary}}
        digitTxtStyle={{color: Colors.white}}
        onFinish={() => alert('finished')}
        onPress={() => alert('Bruh')}
        size={25}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
        separatorStyle={{color: Colors.white}}
        {...pauseResume}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        borderRadius: 50,
        marginLeft: 100,
        marginRight: 100,
        marginTop: 50,
    },
  });
  