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
          title: "Hi, Welcome Cherished Customer :)",
          subtitle: "New here, welcome to BlackStar Cuisine",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/avatar.png")}
              style={{ width: 220, height: 245 }}
            />
          ),
          title: "Sumptuous Native and Continental Menu",
          subtitle: "Not sure about what we serve?",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/avatar.png")}
              style={{ width: 305, height: 245 }}
            />
          ),
          title: "Fast Delivery Services",
          subtitle: "Use our online order at your convenient homes",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/avatar.png")}
              style={{ width: 320, height: 230 }}
            />
          ),
          title: "Pay after delivery",
          subtitle: "Safe, secure and trustful payment method",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({});
