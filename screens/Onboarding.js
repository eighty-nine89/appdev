import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

import Onboarding from "react-native-onboarding-swiper";

const Done = ({ ...props }) => (
  <TouchableOpacity {...props} style={{ marginHorizontal: 20 }}>
    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Done</Text>
  </TouchableOpacity>
);

export default function OnBoarding({ navigation }) {
  return (
    <Onboarding
      DoneButtonComponent={Done}
      onDone={() => navigation.push('Welcome')}
      onSkip={() => navigation.push('Welcome')}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/avatar.png")}
              style={{ width: 220, height: 245 }}
            />
          ),
          title: "Create an account with Blackstar Restaurant",
          subtitle: "New here, start by signing up",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/avatar.png")}
              style={{ width: 220, height: 245 }}
            />
          ),
          title: "Order your dish from us",
          subtitle: "Not sure about our Online Order?",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/avatar.png")}
              style={{ width: 305, height: 245 }}
            />
          ),
          title: "Pay after delivery",
          subtitle: "Pay after your dish has been delivered",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/avatar.png")}
              style={{ width: 320, height: 230 }}
            />
          ),
          title: "Contact us at kobbyfrimpz89@gmail.com",
          subtitle: "Share your feedback with Blackstar Restaurant",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({});
