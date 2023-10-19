import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignupForm from '../../../containers/auth/SignupForm';

export default function Signup(
	{ navigation }: { navigation: any }
	) {

	const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

  return (
		<SafeAreaView className="p-4">
			
			<SignupForm />

		</SafeAreaView>
	);
}
