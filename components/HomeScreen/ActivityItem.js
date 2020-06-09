import React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';
import Colors from '../../constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function ActivityItem(props) {
    return(
		<TouchableOpacity 
			activeOpacity={.8}
			onPress={() => props.navigation.navigate("Activité", {
				titre: props.titre,
				img: props.img,
				desc: props.desc,
				type: props.type,
			})}
			>
			
			<View style={styles.container}>
				<View style={styles.imgContainer}>
				<Image
					style={styles.img}
					source={props.img}
				/>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.title}>{props.titre}</Text>
					<View style={styles.orangeLine}></View>
					<Text style={styles.description}>{props.desc}</Text>
				</View>
			</View>
		</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.white,
		borderRadius: 5,
		elevation: 3,
		flexDirection: 'row',

		height: 150,

		margin: 10,

		shadowColor: Colors.shadowColor,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		width: '95%',
	},

	description: {
		color: Colors.text,
		fontSize: 15,
		marginTop: 10
	},

	img: {
		borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
		flex: 1,
		height: null,
    width: null,
	},

	imgContainer:{
		backgroundColor: Colors.secondary,

		borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
		flex: 1,

		marginRight: 10
	},

	orangeLine: {
		borderBottomColor: Colors.primary,
		borderBottomWidth: 2,
		height: 1,
		marginBottom: 5,
    width: 75,
	},

	textContainer: {
		flex: 2,
		padding: 10,
	},

	title : {
		fontSize: 20,
		marginBottom: 5
	}
})