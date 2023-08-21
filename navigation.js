import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderPrepairingScreen from './screens/OrderPrepairingScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import OnBoarding from './screens/Onboarding';
import Welcome from './screens/Welcome';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Logout from './screens/Logout';
import { FIREBASE_AUTH } from "./firebase/config";
import { onAuthStateChanged, User } from 'firebase/auth';


const InsiderStack = createNativeStackNavigator();
function InsiderLayout() {
  <InsiderStack.Navigator>
    <InsiderStack.Screen name="Home" component={HomeScreen} />
  </InsiderStack.Navigator>
}

export default function Navigation() {
  const setUser = useState<User | null>(null);
  const user = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
    setUser(user);
  });}, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Onboarding" component={OnBoarding} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Welcoming" component={WelcomeScreen} />
        {user ? <Stack.Screen name="Inside" component={InsiderLayout} /> :
        <Stack.Screen name="Login" component={LoginScreen} />}
        <Stack.Screen name="Logout" component={Logout} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen} />
        <Stack.Screen name="OrderPrepairing" options={{presentation: 'fullScreenModal'}} component={OrderPrepairingScreen} />
        <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}