import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import WebApplication from './src/components/WebApplication';
import MobileApplication from './src/components/MobileApplication';

export default function App() {
  const platform = Platform.OS 
  if (platform === "web") {
    return <WebApplication />
  } else {
    return <MobileApplication />
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
