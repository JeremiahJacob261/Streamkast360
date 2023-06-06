import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acc from './pages/AccountPage';
import Login from './pages/login'
import Create from './pages/create';
const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Acc" component={Acc} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Create" component={Create} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
