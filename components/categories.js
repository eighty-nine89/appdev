import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { urlFor } from '../sanity';
import { getCategories } from '../api';

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);
    let [categories, setCategories] = useState([]);

    useEffect(()=>{
        getCategories().then(data=>{
            setCategories(data);
        })
    },[])

    return (
    <View className="mt-1">
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="overflow-visible"
      contentContainerStyle={{
        paddingHorizontal: 15
      }}
    >
       {
          categories.map((category, index)=>{
            let isActive = category._id==activeCategory;
            let btnClass = isActive? ' bg-white-600' : 'bg-white-200';
            let textClass = isActive? ' font-semibold text-gray-800': ' text-gray-500'
            return (
              <View key={index} className="flex justify-center items-center mr-6">
                <TouchableOpacity
                onPress={()=> setActiveCategory(category._id)}
                className={"p-1 rounded-full shadow bg-gray-200"+btnClass}>
                  <Image style={{width: 45, height: 45}}
                  source={{uri: urlFor(category.image).url()}} />
                  
                </TouchableOpacity>
                <Text className={"text-sm "+textClass}>{category.name}</Text>
              </View>
            )
          })
       }
    </ScrollView>
    </View>
  )
}