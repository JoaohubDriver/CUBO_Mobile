import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

import { useUser } from '../../../contexts/user';

import { Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TextInputComponent from '../../../components/Form/TextInput/TextInput';
import { validateForm } from './functions'
import { validEmail } from '../../../utils/validation';

import { setUserToken } from '../../../utils/storage';

export default function SignupForm() {

	const navigation = useNavigation();

	const { signUp } = useUser();

	const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [validated, setValidated] = useState(false);

	async function handleSignup() {
		setValidated(true);
		
		if (!validateForm(name, email, password, confirmPassword)) 
			return;

		signUp(name, email);
		const token = Math.random().toString(36).substring(7);
		await setUserToken(token, name, email);
		setValidated(false);
		navigation.navigate('Dashboard' as never);

	}

  return (
		<SafeAreaView className="p-4">
			<Text className="text-center text-xl mb-3">Criar conta</Text>

			<TextInputComponent
				value={name}
				onChange={(text: string) => setName(text)}
				placeholder="Nome"
				invalid={validated && name.length < 4}
				invalidMessage="Nome deve ter pelo menos 4 caracteres"
			/>

			<TextInputComponent
				value={email}
				onChange={(text:string) => setEmail(text)}
				placeholder="Email"
				invalid={validated && !validEmail(email)}
				invalidMessage="Email inválido"
				className="my-3"
			/>

			<TextInputComponent
				value={password}
				onChange={(text: string) => setPassword(text)}
				placeholder="Senha"
				invalid={validated && password.length < 6}
				invalidMessage="Senha deve ter pelo menos 6 caracteres"
			/>

			<TextInputComponent
				value={confirmPassword}
				onChange={(text: string) => setConfirmPassword(text)}
				placeholder="Digite sua senha novamente"
				invalid={validated && confirmPassword !== password}
				invalidMessage="Senhas não coincidem"
				className="my-3"
			/>

			<View className="mt-4">
				<Button
					testID="signup-button"
					title="Criar conta"
					onPress={() => handleSignup()}
				/>
			</View>

		</SafeAreaView>
	);
}
