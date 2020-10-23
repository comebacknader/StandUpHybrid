import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Layout } from '../styles';

export default function WebApplication() {
  return (
    <View style={[Layout.flexAndDirectionRow]}>
      <View style={[styles.navigationBar]}>
        <Image source={require('../assets/icon.png')} />
      </View>
      <View style={[styles.mainContent]}>
        <Text>Impressions</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navigationBar: {
    width: 100,
  },
  mainContent: {
    ...Layout.isFlex, 
    backgroundColor: '#F2F2F2',
  }
});