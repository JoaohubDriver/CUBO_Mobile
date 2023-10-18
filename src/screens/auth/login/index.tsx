import { Text, Button, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Login(
	{ navigation }: { navigation: any }
	) {
  return (
		<SafeAreaView>
			<Text>Login</Text>
			<Button
        title="Voltar"
        onPress={() => navigation.navigate('Home')}
      />
		</SafeAreaView>
	);
}
