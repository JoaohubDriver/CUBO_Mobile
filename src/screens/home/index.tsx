import React, { useEffect } from 'react';
import { useUser } from '../../contexts/user';
import { useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { getUserData, checkTokenValidity } from '../../utils/storage';

export default function Home() {

	const { login } = useUser();
	const navigation = useNavigation();


	useEffect(() => {
		checkTokenValidity()
			.then(valid => {
				if (valid) {
					getUserData()
					.then(data => {
						if (data?.name && data?.email) {
							login(data.email);
							navigation.navigate('App' as never);
						}
					})
				}
			})
	}, []);

  return (
		<SafeAreaView className="px-4 pt-8">
			<StatusBar style="auto" />
			<Text className="text-xl text-center">Bem-vindo ao Cubo!</Text>

			<View className="my-8 items-center">
				<Ionicons 
					name="logo-react" 
					size={300} 
					color="#61dafb"
					className="self-center" 
				/>
			</View>

			<View className="mt-8">
				<Button
					title="Entrar"
					onPress={() => navigation.navigate('Login' as never)}
				/>
			</View>

			<View className="mt-2">
				<Button
					title="Criar conta"
					onPress={() => navigation.navigate('Signup' as never)}
				/>
			</View>
		</SafeAreaView>
	);
}
