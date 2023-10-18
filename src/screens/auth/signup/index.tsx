import { Text, Button, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Signup(
	{ navigation }: { navigation: any }
	) {
  return (
		<SafeAreaView>
			<Text>Criar conta</Text>
			<Button
        title="Voltar"
        onPress={() => navigation.navigate('Home')}
      />
		</SafeAreaView>
	);
}
