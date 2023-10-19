import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TextInputComponent from '../../../components/Form/TextInput';
import { validEmail } from '../../../utils/validation';

export default function SignupForm() {

	const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

  return (
		<SafeAreaView className="p-4">
			<Text className="text-center text-xl mb-3">Criar conta</Text>

      <TextInputComponent
        value={name}
        onChange={(text: string) => setName(text)}
        placeholder="Nome"
      />

			<TextInputComponent
				value={email}
				onChange={(text:string) => setEmail(text)}
				placeholder="Email"
			/>

			<TextInputComponent
				value={password}
				onChange={(text: string) => setPassword(text)}
				placeholder="Senha"
			/>

			<TextInputComponent
				value={confirmPassword}
				onChange={(text: string) => setConfirmPassword(text)}
				placeholder="Digite sua senha novamente"
			/>

			<View className="mt-4">
				<Button
					title="Criar conta"
					onPress={() => {}}
				/>
			</View>

		</SafeAreaView>
	);
}
