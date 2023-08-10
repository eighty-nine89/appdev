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
              source={require("../assets/thankyou.png")}
              style={{ width: 307, height: 210 }}
            />
          ),
          title: "Welcome Cherished Customer :)",
          subtitle: "Thank you for choosing BlackStar Cuisine!",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/menu.png")}
              style={{ width: 300, height: 200 }}
            />
          ),
          title: "Sumptuous Native and Continental Dishes",
          subtitle: "Not sure about what we serve?",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/deliveryy.png")}
              style={{ width: 300, height: 200 }}
            />
          ),
          title: "Fast Delivery Services",
          subtitle: "Use our online order at your convenient homes",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/payment.png")}
              style={{ width: 300, height: 200 }}
            />
          ),
          title: "Pay After Delivery",
          subtitle: "Safe, secure and trustful payment method",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    alignItems: "center",
    padding: 0,
    marginBottom: 0,
    marginTop: 0,
  },

});
