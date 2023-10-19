import { Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginForm from "../../../containers/auth/LoginForm";

export default function Login(
	{ navigation }: { navigation: any }
	) {

  return (
		<SafeAreaView className="p-4">
			<LoginForm  />
		</SafeAreaView>
	);
}
