import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Color, Layout, Dots, Typography, Dimensions } from '../styles';
import Microphone from '../components/Microphone';

export default function Impression() {
  const [ impressionist, setImpressionist ] = useState<string>('')

  return (
    <View style={[Layout.flexAndDirectionRow]}>
      <View style={[Layout.alignItemsCenter, Layout.paddingTop40, Dimensions.width90, Color.bgWhite]}>
        <Microphone />
      </View>
      <View style={[Layout.isFlex, Color.bgPrimaryGray]}>
        <View style={[Layout.flexRow, Layout.marginTop40, Layout.marginLeft40]}>
          <View style={[Dots.smallBlueDot, Layout.marginTop13, Layout.marginRight10]}></View>
          <Text style={[Typography.fontSize22]}>{impressionist}</Text>
        </View>
      </View>
    </View>
  )
}