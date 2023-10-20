import { useUser } from '../../../contexts/user';
import { useNavigation } from '@react-navigation/native';

import { clearUserData } from '../../../utils/storage';

import { Text, View, Button } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Dashboard() {

  const navigation = useNavigation();
  const { name, email, logout } = useUser();

  async function handleLogout() {
    logout();
    await clearUserData();
    navigation.navigate('Home' as never);
  }

  return (
    <View className="flex flex-column">
      <View className="flex flex-col items-center p-4">

        <Text className="text-center text-xl mb-3">Olá, {name}</Text>

        <Ionicons
          name="person-circle-outline"
          size={200}
          color="#61dafb"
          className="self-center"
        />

        <Text className="text-center text-xl mb-3">{email}</Text>

        <View className="pt-4">
          <Button title="Sair" onPress={() => handleLogout()} />
        </View>
      </View>
    </View>
  );
}