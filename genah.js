import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, } from 'react-native';

	export default class App extends React.Component {
		render() {
			return (
			
			<KeyboardAvoidingView style={styles.container} behavior="padding">
			<Text style={[styles.largeText, styles.textStyle]}>Maluku Tengah</Text>
			<Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
			<Text style={[styles.largeText, styles.textStyle]}>24°</Text>
			<TextInput
			autoCorrect={false}
			placeholder="Masukkan Kota Kelahiran Anda"
			placeholderTextColor="white"
			style={styles.textInput}
			clearButtonMode="always"
			/>
			</KeyboardAvoidingView>
			);
		}
	}
const styles = StyleSheet.create({
	container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
	},
	textStyle: {
	textAlign: 'center',
	fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
	},
	largeText: {
	fontSize: 44,
	},
	smallText: {
		fontSize: 18,
		},
		textInput: {
		backgroundColor:'#666',
		color: 'white',
		height: 40,
		width: 300,
		marginTop: 20,
		marginHorizontal: 20,
		paddingHorizontal: 10,
		alignSelf: 'center',
	},
});
