
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Color, Layout, Dots, Typography, Dimensions, Buttons } from '../../styles';

export default function ListOfImpressions(props: any) {
  const impressions = props.impressions
  return (
    <View style={[{marginTop: 30, marginLeft: 40, width: 500}]}>
      {impressions.map((item: any) => {
        return (
          <TouchableOpacity style={[{marginTop: 10, backgroundColor: 'white', borderRadius: 10, padding: 10, width: 500, flexDirection: 'row'}]} >
            <View style={[{width: 5, height: 50, backgroundColor: Color.SECONDARY_BLUE}]}></View>
            <Text style={[{marginLeft: 50, fontSize: 20, alignSelf: 'center'}]}>{item}</Text>
          </TouchableOpacity>          
        )
      })}
      <TouchableOpacity style={[Buttons.bigBlueDot, {alignSelf: 'flex-end', marginTop: 20}]} >
        <Text style={[Buttons.bigBlueDotText]}>+</Text>
      </TouchableOpacity>
    </View>
  )
} 
