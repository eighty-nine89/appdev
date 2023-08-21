import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from "react-native";
import React, { useState } from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps, navigation, navigate} from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { FIREBASE_AUTH } from '../firebase/config';
import AppTextInput from "../components/AppTextInput";
import { signInWithEmailAndPassword } from 'firebase/auth';


type Props = NativeStackScreenProps<RootStackParamList, "Login">;  

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              marginVertical: Spacing * 3,
            }}
          >
            Login 
          </Text>
          <Text
            style={{
              fontSize: FontSize.large, 
              maxWidth: "90%",
              textAlign: "center",
            }}
          >
            Welcome back you've been missed!
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <AppTextInput placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} autoCapitalize="none"/>       
          <AppTextInput secureTextEntry={true} placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} autoCapitalize="none" />
        </View>

        <View>
          <Text
            style={{
              fontSize: FontSize.small,
              color: Colors.primary,
              alignSelf: "flex-end",
            }}
          >
            Forgot your password ?
          </Text>
        </View>

        <TouchableOpacity
        onPress={() => navigate("Home")}
        style={{
          padding: Spacing * 2,
          backgroundColor: Colors.primary,
          marginVertical: Spacing * 3,
          borderRadius: Spacing,
          shadowColor: Colors.primary,
          shadowOffset: {
            width: 0,
            height: Spacing,
          },
          shadowOpacity: 0.3,
          shadowRadius: Spacing,
        }}
        >
        { loading ?  (<ActivityIndicator size="large" color="#ffffff" />)
         : (
          <>  
          <Text title="Login" onPress={signIn} 
          style={{
            color: Colors.onPrimary,
            textAlign: "center",
            fontSize: FontSize.large,
          }}
          >
            Sign In
          </Text>
        </>)}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Register")}
          style={{
            padding: Spacing,
          }}
        >
          <Text
            style={{
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Create new account
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
