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
          source={require("../assets/avatar.png")}
          style={{ height: 250, width: 400 }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomTop}>
          <Text style={styles.bottomText} onLongPress={() => Admin()}>
            Welcome
            BlackStar Cuisine
          </Text>
          <Text style={styles.bottomLine}></Text>
        </View>
        <View style={styles.buttons}>
        </View>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 14,
    fontWeight: "500",
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
    marginBottom: 20,
  },
  verseContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  giver: {
    fontSize: 20,
  },
  buttons: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
  signup: {
    flex: 1,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 33.33,
    marginRight: 10,
  },
  login: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 33.33,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  buttonTextUp: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonTextIn: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
