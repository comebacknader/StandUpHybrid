import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Color, Layout, Typography, Dimensions } from '../../styles';

export default function ListOfImpressions(props: any) {
  const impressions = props.impressions
  return (
      <>
        {impressions.map((item: any, index: any) => {
          return (
            <TouchableOpacity 
              style={[Layout.flexRow, Layout.marginTop10, Color.bgWhite, Layout.borderRadius10, Layout.padding10, Dimensions.width500]} 
              key={index} >
              <View style={[Dimensions.width5, Dimensions.height50, Color.bgSecondaryBlue]}></View>
              <Text style={[Layout.marginLeft50, Typography.fontSize20, Layout.alignSelfCenter]}>{item}</Text>
            </TouchableOpacity>          
          )
        })}
      </>
  )
} 
