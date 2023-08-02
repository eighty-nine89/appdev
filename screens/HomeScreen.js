import { View, Text, TextInput, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import { featured } from '../constants';
import { getFeaturedRestaurants } from '../api';

export default function HomeScreen() {

  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  useEffect(()=>{
    getFeaturedRestaurants().then(data=>{
      setFeaturedRestaurants(data);
    })
  },[])

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="mx-4  mb-3 flex-row items-center space-x-2 justify-between">
        <Image source={require('../assets/logo.png')} className="h-9 w-9 rounded-full" />
        <View className="flex-row items-center space-x-2">
          <Icon.MapPin height="20" width="20" stroke="gray" />
          <Text className="text-gray-600 font-extrabold text-base">LABONE, ACCRA</Text>
        </View>
        <Icon.User height="25" width="25" stroke="gray" />
      </View>
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
            <Icon.Search height="25" width="25" stroke="gray" />
            <TextInput placeholder='What are you looking for...' className="ml-2 flex-1" />        
        </View>       
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