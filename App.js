import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AnimalsScreen from './screens/AnimalsScreen';
import FoodScreen from './screens/FoodScreen';
import SuppliesScreen from './screens/SuppliesScreen';
import TutorialScreen from './screens/TutorialScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tutorial">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview Home' }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Animals" component={AnimalsScreen} />
        <Stack.Screen name="Food" component={FoodScreen} />
        <Stack.Screen name="Supplies" component={SuppliesScreen} />
        <Stack.Screen name="Tutorial" component={TutorialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
