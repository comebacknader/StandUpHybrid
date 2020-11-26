import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Color, Layout, Dots, Typography, Dimensions, Buttons } from '../styles';
import Microphone from '../components/Microphone';
import ListOfImpressions from './../components/impressions/ListOfImpressions';
import { TextInput } from 'react-native-gesture-handler';

export default function Impressions() {
  const [ impressions, setImpressions ] = useState<string[]>([])
  const [ state, setState ] = useState<'new-impression'|'idle'|'empty-impressions'>('empty-impressions')
  const [ impression, setImpression ] = useState<string>('')

  const getAllImpressions = async () => {
    let rawResponse: any = await fetch('', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    let jsonResponse = await rawResponse.json()
    console.log(JSON.stringify(jsonResponse, null, 2))
  }

  const newImpression = async () => {
    setState('new-impression')
  }

  const enterImpression = (e: any) => { 
    if (e.nativeEvent.key === 'Enter') {
      setImpressions([ ...impressions, impression])
      setImpression('') 
      setState('idle')
    }
  }

  return (
    <View style={[Layout.flexAndDirectionRow]}>
      <View style={[Layout.alignItemsCenter, Layout.paddingTop40, Dimensions.width90, Color.bgWhite]}>
        <Microphone />
      </View>
      <View style={[Layout.isFlex, Color.bgPrimaryGray]}>
        <View style={[Layout.flexRow, Layout.marginTop40, Layout.marginLeft40]}>
          <View style={[Dots.smallBlueDot, Layout.marginTop13, Layout.marginRight10]}></View>
          <Text style={[Typography.fontSize22]}>Impressions</Text>
        </View>
        { state === 'empty-impressions' && impressions.length === 0 ? 
        <View style={[Layout.flexRow, Layout.justifyContentCenter, Layout.alignItemsCenter, Dimensions.height500]}>
          <Text style={[Typography.fontSize40, Color.darkerGray]}>No impressions added.</Text>
          <TouchableOpacity 
            accessible={true}
            accessibilityLabel="Add new impression"
            accessibilityHint="Allows you to enter a name for a new impressionist"
            style={[Buttons.bigBlueDot, Layout.marginTop13, Layout.marginLeft40]} 
            onPress={newImpression}>
            <Text style={[Buttons.bigBlueDotText]}>+</Text>
          </TouchableOpacity>
        </View>
        :
        <View style={[Layout.marginTop30, Layout.marginLeft40, Dimensions.width500]}>
          <ListOfImpressions impressions={impressions} />
          { state === 'new-impression' ? 
            <View style={[Layout.marginTop10, Color.bgWhite, Layout.borderRadius10, Layout.padding10, Dimensions.width500, Layout.flexRow]} >
              <View style={[Dimensions.width5, Dimensions.height50, Color.bgSecondaryBlue]}></View>
              <TextInput
                accessible={true}
                accessibilityLabel="Add new impression"
                accessibilityHint="Allows you to enter a name for a new impressionist"
                style={[Layout.marginLeft50, Typography.fontSize20, Layout.alignItemsCenter, Dimensions.width400, Layout.paddingLeft10]} 
                onChangeText={setImpression}
                onKeyPress={enterImpression} 
                value={impression}
                autoFocus />
            </View>  
          : <></> }
          <TouchableOpacity style={[Buttons.bigBlueDot, Layout.alignSelfFlexEnd, Layout.marginTop20]}
            onPress={newImpression}>
            <Text style={[Buttons.bigBlueDotText]}>+</Text>
          </TouchableOpacity>
        </View>
        }
      </View>
    </View>
  )
}