
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Color, Layout, Dots, Typography, Dimensions, Buttons } from '../../styles';

export default function ListOfImpressions(props: any) {
  const impressions = props.impressions
  return (
      <>
        {impressions.map((item: any, index: any) => {
          return (
            <TouchableOpacity style={[{marginTop: 10, backgroundColor: 'white', borderRadius: 10, padding: 10, width: 500, flexDirection: 'row'}]} key={index} >
              <View style={[{width: 5, height: 50, backgroundColor: Color.SECONDARY_BLUE}]}></View>
              <Text style={[{marginLeft: 50, fontSize: 20, alignSelf: 'center'}]}>{item}</Text>
            </TouchableOpacity>          
          )
        })}
      </>
  )
} 
