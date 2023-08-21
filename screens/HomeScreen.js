import { View, Text, TextInput, ScrollView, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import { featured } from '../constants';
import { getFeaturedRestaurants } from '../api';
import { TouchableOpacity } from 'react-native';
import {Linking} from 'react-native';
import { FIREBASE_AUTH } from '../firebase/config';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Logout from "../screens/Logout";



export default function HomeScreen() {
  const navigation = useNavigation();
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);


  useEffect(()=>{
    getFeaturedRestaurants().then(data=>{
      setFeaturedRestaurants(data);
    })
  },[])

  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row justify-center items-center mb-2">
      <Image source={require('../assets/logo.png')} className="h-10 w-10 rounded-full" />
      </View>
      <StatusBar barStyle="dark-content" />
      <View className="mx-4  mb-3 flex-row items-center space-x-2 justify-between">
      <TouchableOpacity onPress={() => Linking.openURL('mailto:awueteysamuel89@gmail.com?subject=ContactBlackstarCuisine&body=Description')}>
              <Icon.Mail height="25" width="25" stroke="black" />
            </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(`maps://app?daddr=${5.56512},${-0.15761}&dirflg=d&t=m`)}>
    <View className="flex-row items-center space-x-1 justify-center">
      <Icon.MapPin height="15" width="15" stroke="black" />
      <Text className="text-black font-light text-base">LABONE, ACCRA</Text>
    </View>
    </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.push("Logout")}>
            <Text className="text-base font-bold space-x-2"> LogOut </Text>
            </TouchableOpacity>     
      </View>
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        {/* <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
            <Icon.Search height="25" width="25" stroke="gray" />
            <TextInput placeholder='What are you looking for...' className="ml-2 flex-1" />        
        </View> */}    
      </View>

      {/*main */}
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 20
      }}
      >
        {/* categories */}
        <Categories />

        {/* featured */}
        <View className="mt-5">
          {
            featuredRestaurants.map((item,index)=>{
              return (
                <FeaturedRow 
                  key={index}
                  title={item.name}
                  restaurants={item.restaurants}
                  description={item.description}
                />
              )
            })
          }
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}