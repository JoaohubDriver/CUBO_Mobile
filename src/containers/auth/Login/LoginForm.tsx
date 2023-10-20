import React, { useState } from "react";
import { useUser } from '../../../contexts/user';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { validEmail } from '../../../utils/validation';

import TextInputComponent from '../../../components/Form/TextInput/TextInput';

export default function LoginForm() {

	const navigation = useNavigation();
	const { login } = useUser();

	const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	async function handleLogin() {

		setValidated(true);
		if (email.length < 4 || password.length < 6) 
			return;

		login(email);
		setValidated(false);
		navigation.navigate('App' as never);
	}

  return (
		<>
			<Text className="text-center text-xl mb-3">Entrar</Text>

			<TextInputComponent
				value={email}
				onChange={(text:string) => setEmail(text)}
				placeholder="Email"
				style="my-5"
				invalid={validated && (!validEmail(email) || password.length < 6)}
			/>

			<TextInputComponent
				value={password}
				onChange={(text: string) => setPassword(text)}
				placeholder="Senha"
				invalid={validated && (!validEmail(email) || password.length < 6)}
			/>

			{
				validated && (!validEmail(email) || password.length < 6) &&
				<Text className="text-red-500 text-sm">Email ou senha incorretos</Text>
			}

			<View className="mt-4">
				<Button
					title="Login"
					onPress={handleLogin}
				/>
			</View>
		</>
	);
}
