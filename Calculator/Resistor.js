import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Style} from "../Style/Style";

export default function Resistor(){
    const[label, setLabel] = useState({
        p1: "Band 1",
        p2: "Band 2",
        p3: "Multiplier",
        p4:{bLabel:"Add", sLabel:"+"},
    })

    const addBand = () =>{
        setLabel({
            ...label,
            p3:"Band 3",
            p4:{bLabel:"Multiplier", sLabel:"-"}
        });
    }

    const removeBand = () =>{
        setLabel({
            ...label,
            p3:"Multiplier",
            p4:{bLabel:"Add", sLabel:"+"}
        });
    }

    const interact = (i) =>{
        addBand();
    }

    return(
        <View style={Style.resistorContainer}>
            <View style = {Style.bands}>
                <Text style={Style.baseText}>{label.p1}</Text>
                <View style={Style.base}>
                    <TouchableOpacity style={Style.buttonBand} onPress={()=>interact(0, label.p1)}>

                    </TouchableOpacity>
                </View>
            </View>

            <View style = {Style.bands}>
                <Text style={Style.baseText}>{label.p2}</Text>
                <View style={Style.base}>
                    <TouchableOpacity style={Style.buttonBand} onPress={()=>interact(1, label.p2)}>

                    </TouchableOpacity>
                </View>
            </View>

            <View style = {Style.bands}>
                <Text style={Style.baseText}>{label.p3}</Text>
                <View style={Style.base}>
                    <TouchableOpacity style={Style.buttonBand} onPress={()=>interact(2,label.p3)}>

                    </TouchableOpacity>
                </View>
            </View>

            <View style = {Style.bands}>
                <Text style={Style.baseText}>{label.p4.bLabel}</Text>
                <View style={Style.base}>
                    <TouchableOpacity style={Style.buttonBand} onPress={()=>interact(3,label.p4.bLabel)}>
                        <Text style={Style.plus}>{label.p4.sLabel}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}