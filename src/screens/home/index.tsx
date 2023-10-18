import { Text, Button, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styled } from 'nativewind';

const StyledView = styled(View)

export default function Home(
	{ navigation }: { navigation: any }
	) {
  return (
		<StyledView className="flex flex-column">
			<Text>Bem-vindo ao Cubo!</Text>
			<Button
        title="Entrar"
        onPress={() => navigation.navigate('Login')}
      />
			<Button
        title="Criar conta"
        onPress={() => navigation.navigate('Signup')}
      />
		</StyledView>
	);
}
