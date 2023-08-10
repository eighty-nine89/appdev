import { StyleSheet, Text,View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";

export default function Welcome({ navigation }) {
  const dispatch = useDispatch();
  const Admin = () => {
    navigation.push("Home");
  };
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
          <Text style={styles.bottomText} onLongPress={() => Admin()}>
            BLACKSTAR CUISINE
          </Text>
        </View>
      </View>
      <View className="mb-10">
        <Text>Long press BLACKSTAR CUISINE to go home</Text>
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
