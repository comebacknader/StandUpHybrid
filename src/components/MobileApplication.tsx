import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import { Layout } from '../styles';

export default function MobileApplication() {
  return (
    <View style={[Layout.isFlex, Layout.justifyContentCenter, Layout.alignItemsCenter]}>
      <Text>MobileApplication</Text>
      <StatusBar style="auto" />
    </View>
  )
}