import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Color, Layout, Dots, Typography, Dimensions, Buttons } from '../styles';
import Microphone from './Microphone';

export default function WebApplication() {
  return (
    <View style={[Layout.flexAndDirectionRow]}>
      <View style={[Layout.alignItemsCenter, Layout.marginTop40, Dimensions.width90]}>
        <Microphone />
      </View>
      <View style={[Layout.isFlex, Color.bgPrimaryGray]}>
        <View style={[Layout.flexRow, Layout.marginTop40, Layout.marginLeft40]} >
          <View style={[Dots.smallBlueDot, Layout.marginTop13, Layout.marginRight10]} ></View>
          <Text style={[Typography.fontSize22]}>Impressions</Text>
        </View>
        <View style={[Layout.flexRow, Layout.justifyContentCenter, Layout.alignItemsCenter, Dimensions.height500]}>
          <Text style={[Typography.fontSize40, Color.darkerGray]}>No impressions added.</Text>
          <TouchableOpacity style={[Buttons.bigBlueDot,  Layout.marginTop13, Layout.marginLeft40]} >
            <Text style={[Buttons.bigBlueDotText]}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({});
