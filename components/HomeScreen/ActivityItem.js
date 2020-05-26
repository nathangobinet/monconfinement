import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/Colors'


export default function ActivityItem() {
    return(
        <View style={styles.container}>
			<View>
			</View>
			<View>
				<Text>Activité Physique</Text>
				<Text>Toutes les pratiques liées....</Text>
			</View>
		</View>
    )
}

const styles = StyleSheet.create({
	container: {
		margin: 20,
		width: 332,
		height: 92,
		backgroundColor: '#fff'
	}
})