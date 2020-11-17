import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Color, Layout, Dots, Typography, Dimensions, Buttons } from '../styles';
import Microphone from '../components/Microphone';
import ListOfImpressions from './../components/impressions/ListOfImpressions';

export default function Impressions() {
  const [ impressions, setImpressions ] = useState(["Hitler", "Rabbi", "Kanye West"])

  const getAllImpressions = async () => {
    let rawResponse = await fetch('', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    let jsonResponse = await rawResponse.json()
    console.log(JSON.stringify(jsonResponse, null, 2))
  }

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
        <View style={[{marginTop: 30, marginLeft: 40, width: 500}]}>
          <ListOfImpressions impressions={impressions} />
          <TouchableOpacity style={[Buttons.bigBlueDot, {alignSelf: 'flex-end', marginTop: 20}]}
            onPress={getAllImpressions} >
            <Text style={[Buttons.bigBlueDotText]}>+</Text>
          </TouchableOpacity>
        </View>
        }
      </View>
    </View>
  )
}