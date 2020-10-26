import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Color, Layout } from '../styles';
import Microphone from './Microphone';

export default function WebApplication() {
  return (
    <View style={[Layout.flexAndDirectionRow]}>
      <View style={[styles.navigationBar]}>
        <Microphone />
      </View>
      <View style={[styles.mainContent]}>
        <View style={[styles.impressionsContainer]}>
          <View style={[styles.dot]} ></View>
          <Text style={{fontSize: 22}}>Impressions</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 500}}>
          <Text style={{fontSize: 40, color: '#787878'}}>No impressions added.</Text>
          <TouchableOpacity style={[styles.bigBlueDot, {marginLeft: 40}]} ><Text style={[styles.buttonText]}>+</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navigationBar: {
    alignItems: 'center',
    width: 90,
    marginTop: 40,
  },
  mainContent: {
    ...Layout.isFlex, 
    backgroundColor: '#F2F2F2',
  },
  impressionsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 50,
  },
  dot: {
    width:5, 
    height: 5, 
    borderRadius: 50, 
    borderColor: Color.SECONDARY_BLUE, 
    borderWidth: 5, 
    backgroundColor: Color.SECONDARY_BLUE, 
    marginTop: 12, 
    marginRight: 10 
  },
  bigBlueDot: {
    width:50, 
    height: 50, 
    borderRadius: 50, 
    borderColor: Color.SECONDARY_BLUE,  
    backgroundColor: Color.SECONDARY_BLUE, 
    marginTop: 12, 
    marginRight: 10 
  },
  buttonText: {
    alignSelf: 'center', 
    color: 'white', 
    fontSize: 30, 
    fontWeight: 'bold'
  },
});