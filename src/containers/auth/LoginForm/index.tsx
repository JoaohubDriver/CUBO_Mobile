import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TextInputComponent from '../../../components/Form/TextInput/TextInput';

export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
		<>
			<Text className="text-center text-xl mb-3">Entrar</Text>

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

			<View className="mt-4">
				<Button
					title="Login"
					onPress={() => {}}
				/>
			</View>
		</>
	);
}
