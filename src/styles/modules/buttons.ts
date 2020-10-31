import { TextStyle, ViewStyle } from "react-native";
import { Color } from "..";

export const bigBlueDot = {
  width:50, 
  height: 50, 
  borderRadius: 50, 
  borderColor: Color.SECONDARY_BLUE,  
  backgroundColor: Color.SECONDARY_BLUE, 
};

export const bigBlueDotText: TextStyle = {
  alignSelf: 'center', 
  color: 'white', 
  fontSize: 30, 
  fontWeight: 'bold'
};