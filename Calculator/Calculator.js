import Resistor from "./Resistor";
import React, {useState} from "react";
import {View} from "react-native";
import {Style} from "../Style/Style";

export default function Calculator(){
    const [resistor, setResistor] = useState({

    })
    return(
        <View style={Style.container}>
            <Resistor />
        </View>
    );

}