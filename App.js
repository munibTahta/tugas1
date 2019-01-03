import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, ImageBackground, } from 'react-native';
const profileImage = require('./images/clear.png');
	export default class App extends React.Component {
		renderStat(options) {
    return (
      <View style={styles.stat}>
        <ImageBackground source={options.icon}
               style={[styles.icon, options.selected ?
               styles.selected :                null]}
             />
             <Text style={styles.counter}>{options.value}</Text>
           </View>
         );
    }
		render() {
			return (
			<ImageBackground source={profileImage} style={styles.container}>
			<KeyboardAvoidingView style={styles.container} behavior="padding">
			<Text style={[styles.largeText, styles.textStyle]}>Sukabumi</Text>
			<Text style={[styles.largeText, styles.textStyle]}>2015150088</Text>
			<Text style={[styles.smallText, styles.textStyle]}>sunny</Text>
			<Text style={[styles.largeText, styles.textStyle]}>32°</Text>
			<TextInput
			autoCorrect={false}
			placeholder="Masukkan Kota Kelahiran Anda"
			placeholderTextColor="white"
			style={styles.textInput}
			clearButtonMode="always"
			/>
			</KeyboardAvoidingView>
			</ImageBackground>
			);
		}
	}
const styles = StyleSheet.create({
	container: {
	flex: 1,
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
