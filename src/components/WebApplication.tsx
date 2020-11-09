import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Impressions from '../screens/Impressions';

const Stack = createStackNavigator()

export default function WebApplication() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Impressions" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Impressions" component={Impressions}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}