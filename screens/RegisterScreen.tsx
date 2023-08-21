  import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native";
  import React, { useState } from "react";
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Colors";
  import { Ionicons } from "@expo/vector-icons";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../types";
  import AppTextInput from "../components/AppTextInput";
  import { FIREBASE_AUTH } from "../firebase/config";
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  
  type Props = NativeStackScreenProps<RootStackParamList, "Register">;
  
  const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signUp = async () => {
      setLoading(true);
      try {
        const response = await createUserWithEmailAndPassword(auth, name, email, password);
        console.log(response);
        alert('Congratulations on creating account with BlackStar Cuisine!');
        navigation.push("Login");
      } catch (error) {
        console.log(error);
        alert('Sign up failed: ' + error.message)
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
              Create Account
            </Text>
            <Text
              style={{
                fontSize: FontSize.small,
                maxWidth: "90%",
                textAlign: "center",
              }}
            >
              Create an account to enjoy our mesmerizing services.
            </Text>
          </View>
          <View
            style={{
              marginVertical: Spacing * 3,
            }}
          >
            <AppTextInput placeholder="Full name" onChangeText={(text) => setName(text)} value={name} autoCapitalize="words" />
            <AppTextInput placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} autoCapitalize="none" />
            <AppTextInput placeholder="Password" secureTextEntry={true} onChangeText={(text) => setPassword(text)} value={password} autoCapitalize="none"/>
          </View>
  
          <TouchableOpacity
          onPress={() => navigate("Login")}
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
            { loading ? (<ActivityIndicator size="large" color="#ffffff" />)
        : (
        <>  
          <Text title="Register" onPress={signUp} 
          style={{
            color: Colors.onPrimary,
            textAlign: "center",
            fontSize: FontSize.large,
          }}
          >
            Sign Up
          </Text>
        </>)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("Login")}
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
              Already have an account
            </Text>
          </TouchableOpacity>
  
        </View>
      </SafeAreaView>
    );
  };
  
  export default RegisterScreen;
  