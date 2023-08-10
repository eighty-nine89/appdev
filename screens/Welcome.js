import { StyleSheet, Text,View, Image, TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";
import React, { useEffect } from 'react';

export default function Welcome({ navigation }) {
  useEffect(()=>{
    setTimeout(()=>{
        //move to homescreen
        navigation.navigate("Home");
    }, 4000)
},[])
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/welcome.png")}
          style={{ height: 150, width: 300 }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomTop}>
          <Text style={styles.bottomText} >
            BLACKSTAR CUISINE
          </Text>
        </View>
      </View>
      <View className="mb-10">
        <Text>©2023 All rights reserved, BlackStar Cuisine.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250,
    padding: 20
  },
  bottomContainer: {
    flex: 1,
    paddingTop: 10,
    width: "100%",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  bottomTop: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    fontSize: 36,
    fontWeight: "bold",
  },
  bottomLine: {
    width: 80,
    height: 3,
    marginTop: 3,
    marginBottom: 30,
  },
});
