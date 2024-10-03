import {TextInput, TouchableOpacity, View, Text} from "react-native";
import {valueToColor} from "./Operations";
import React, {useState} from "react";
import {Style} from "../Style/Style";

export default function ValueToColor(props){
    const [value, setValue] = useState ( '0');

    const getColors = (value) =>{
        //Not working
        valueToColor(props.resistor, value, props.changeAllColors);
    }

    return(
        <View style = {Style.form}>
            <View style={Style.formText}>
                <TextInput style={Style.textInput}
                           keyboardType="numeric"
                           onChangeText={value => setValue(value)}
                />

                <Text style={Style.baseText}>Ω</Text>
            </View>

            <TouchableOpacity style={Style.buttonGetColors} onPress={()=>getColors(value)}>
                <Text style={Style.baseText}>Get Colors</Text>
            </TouchableOpacity>
        </View>
    );
}