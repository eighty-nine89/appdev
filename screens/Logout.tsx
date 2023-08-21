import { View, Text, Button } from 'react-native';
import React from 'react';
import { FIREBASE_AUTH } from '../firebase/config';
import { useNavigation, NavigationProp } from '@react-navigation/native';



export default function Logout() {
    const navigation = useNavigation();
  navigation.push("Login")
  return (
    <View>
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Log Out" />
    </View>
  );
};