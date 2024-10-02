import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Calculator from "./Calculator/Calculator";
import ColorPicker from "./ColorPicker/ColorPicker";

const Stack = createNativeStackNavigator();
export default function App(){
  return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={"Calculator"} component={Calculator}/>
            <Stack.Screen name={"ColorPicker"} component={ColorPicker}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
}