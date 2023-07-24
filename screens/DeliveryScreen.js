import { View, Text } from 'react-native'
import React from 'react'
import { featured } from '../constants'

export default function DeliveryScreen() {
    const restaurant = featured.restaurants[0];
    
  return (
    <View>
      <Text>DeliveryScreen</Text>
    </View>
  )
}