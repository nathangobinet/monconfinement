import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Colors from '../../constants/Colors'


export default function ActivityItem() {
    return(
        <View style={styles.container}>
			<View style={styles.img}>
			</View>
			<View>
				<Text style={styles.title}>Activité Physique</Text>
				<Text>Toutes les pratiques liées....</Text>
			</View>
		</View>
    )
}

const styles = StyleSheet.create({
	container: {
		margin: 20,
		width: 330,
		height: 90,
		borderRadius: 5,
		backgroundColor: '#fff',
		flexDirection: 'row'
	},

	img: {
		backgroundColor: '#FF0000',
		height: 90,
		width: 90,
		marginRight: 10
	},

	title : {
		fontSize: 20
	}
})