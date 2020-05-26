import React, { Component } from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';
import Colors from '../../constants/Colors'


export default function ActivityItem() {
    return(
        <View style={styles.container}>
				<View style={styles.imgContainer}>
				<Image
					style={styles.img}
					source={require('../../assets/images/ActivityPic/activitePhysique.jpg')}
				/>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.title}>Enorme Titre</Text>
					<View style={styles.orangeLine}></View>
					<Text style={styles.description}>Petite description vraiment pas mal.... Je profite de voir si ça fonctionne et si ça va bien à la ligne</Text>
				</View>
		</View>
    )
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
		width: '95%',
		height: 150,
		borderRadius: 5,

		backgroundColor: '#fff',

		flexDirection: 'row',

		shadowColor: "#111",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},

	imgContainer: {
		backgroundColor: Colors.secondary,
		width:120,
		height:150,

		borderTopLeftRadius: 5,
    	borderBottomLeftRadius: 5,
		marginRight: 10,

		flex: 1
	},

	img: {
		flex: 1,
        width: null,
		height: null,
		borderTopLeftRadius: 5,
    	borderBottomLeftRadius: 5,
	},

	textContainer: {
		flex: 2,
		paddingTop: 10,
		marginLeft: 10,
		marginRight: 10,
	},

	title : {
		fontSize: 20,
		marginBottom: 5
	},

	orangeLine: {
		height: 1,
		width: 75,
		marginBottom: 5,
		borderBottomColor: Colors.primary,
    	borderBottomWidth: 2,
	},

	description: {
		fontSize: 15,
		marginTop: 10,
		color: Colors.text
	}
})