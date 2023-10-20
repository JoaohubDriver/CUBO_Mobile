import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/home';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/signup';
import App from '../screens/app';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
