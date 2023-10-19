import AsyncStorage from '@react-native-async-storage/async-storage'

import { daysToMiliseconds } from './time'

interface UserData {
  token: string;
  name: string;
  email: string;
  expiration: number;
}

async function setUserToken(
  token: string, 
  name: string,
  email: string,
): Promise<void> {

  const userData = {
    token: token,
    name: name,
    email: email,
    expiration: new Date().getTime() + daysToMiliseconds(30) // Data atual + 30 dias para expirar
  };

  await AsyncStorage.setItem('userData', JSON.stringify(userData));
}

// Função para verificar a validade do token
export const checkTokenValidity = async (): Promise<boolean> => {
  try {
    const userData = await AsyncStorage.getItem('userData');

    if (userData) {
      const parsedData: UserData = JSON.parse(userData);
      const currentTime = new Date().getTime();

      if (parsedData?.expiration < currentTime) {
        // O token expirou
        await AsyncStorage.removeItem('userData'); 
        return false
      }

      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};