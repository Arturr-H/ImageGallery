import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../styles';


export default function Login() {
	return (
		<View style={styles.container}>
			<Text>Login.js</Text>
			<StatusBar style="auto" />
		</View>
	);
}
