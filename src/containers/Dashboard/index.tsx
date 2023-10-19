import { useUser } from '../../contexts/user';
import { useNavigation } from '@react-navigation/native';

import { clearUserData } from '../../utils/storage';

import { Text, View, Button } from "react-native";

export default function Dashboard() {

  const navigation = useNavigation();
  const { name, email, logout } = useUser();

  async function handleLogout() {
    logout();
    await clearUserData();
    navigation.navigate('Home' as never);
  }

  return (
    <View className="p-4">
      <Text className="text-center text-xl mb-3">Dashboard</Text>

      <Text className="text-center text-xl mb-3">{name}</Text>
      <Text className="text-center text-xl mb-3">{email}</Text>

      <Button title="Sair" onPress={() => handleLogout()} />
    </View>
  );
}