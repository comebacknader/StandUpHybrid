import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Color, Layout, Dots, Typography, Dimensions, Buttons } from '../styles';
import Microphone from '../components/Microphone';
import ListOfImpressions from './../components/impressions/ListOfImpressions';

export default function Impressions() {
  const [ impressions, setImpressions ] = useState(["Hitler", "Rabbi", "Kanye West"])

  return (
    <View style={[Layout.flexAndDirectionRow]}>
      <View style={[Layout.alignItemsCenter, Layout.paddingTop40, Dimensions.width90, Color.bgWhite]}>
        <Microphone />
      </View>
      <View style={[Layout.isFlex, Color.bgPrimaryGray]}>
        <View style={[Layout.flexRow, Layout.marginTop40, Layout.marginLeft40]} >
          <View style={[Dots.smallBlueDot, Layout.marginTop13, Layout.marginRight10]} ></View>
          <Text style={[Typography.fontSize22]}>Impressions</Text>
        </View>
        { impressions.length === 0 ? 
        <View style={[Layout.flexRow, Layout.justifyContentCenter, Layout.alignItemsCenter, Dimensions.height500]}>
          <Text style={[Typography.fontSize40, Color.darkerGray]}>No impressions added.</Text>
          <TouchableOpacity style={[Buttons.bigBlueDot, Layout.marginTop13, Layout.marginLeft40]} >
            <Text style={[Buttons.bigBlueDotText]}>+</Text>
          </TouchableOpacity>
        </View>
        :
          <ListOfImpressions impressions={impressions} />
        }
      </View>
    </View>
  )
}