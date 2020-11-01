import React from 'react';
import { Platform } from 'react-native';
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