import React, {useState} from "react";
import {Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import {Style} from "../Style/Style";
import {colorToValue} from "./Operations";
import {useNavigation} from "@react-navigation/native";

export default function Resistor(props){

    const navigation = useNavigation();

    const[label, setLabel] = useState({
        p1: "Band 1",
        p2: "Band 2",
        p3: "Multiplier",
        p4:{bLabel:"Add", sLabel:"+"},
    })

    const[resistorValue, setResistorValue] = useState(0);

    const addBand = () =>{
        setLabel({
            ...label,
            p3:"Band 3",
            p4:{bLabel:"Multiplier", sLabel:"-"}
        });
        props.changeResistorType();
    }

    const removeBand = () =>{
        setLabel({
            ...label,
            p3:"Multiplier",
            p4:{bLabel:"Add", sLabel:"+"}
        });
        props.changeResistorType();
    }
    const changeColor = (i) =>{
        navigation.navigate("ColorPicker",{i:i, type: props.resistor.bands.type[i], changeResistorColor:props.changeResistorColor});
    }

    const interactTouch = (i) =>{
        if(props.resistor.bands.type[i]==="NONE"){
            addBand();
        }else{
            changeColor(i);
        }
    }

    const interactHold =() =>{
        if(props.resistor.nBands === 3){
            removeBand();
        }
    }

    const calculate = () =>{
        if(props.isResistorEmpty() === false){
            setResistorValue(colorToValue(props.resistor));
        }else{
            ToastAndroid.show("All the bands must have colors!",ToastAndroid.SHORT);
        }
    }

    return(
        <View>
            <View style={Style.resistorContainer}>
                <View style = {Style.bands}>
                    <Text style={Style.baseText}>{label.p1}</Text>
                    <View style={Style.base}>
                        <TouchableOpacity style={[Style.buttonBand,{backgroundColor:props.resistor.bands.color[0]}]} onPress={()=>interactTouch(0)}>

                        </TouchableOpacity>
                    </View>
                </View>

                <View style = {Style.bands}>
                    <Text style={Style.baseText}>{label.p2}</Text>
                    <View style={Style.base}>
                        <TouchableOpacity style={[Style.buttonBand,{backgroundColor:props.resistor.bands.color[1]}]} onPress={()=>interactTouch(1)}>

                        </TouchableOpacity>
                    </View>
                </View>

                <View style = {Style.bands}>
                    <Text style={Style.baseText}>{label.p3}</Text>
                    <View style={Style.base}>
                        <TouchableOpacity style={[Style.buttonBand,{backgroundColor:props.resistor.bands.color[2]}]} onPress={()=>interactTouch(2)}>

                        </TouchableOpacity>
                    </View>
                </View>

                <View style = {Style.bands}>
                    <Text style={Style.baseText}>{label.p4.bLabel}</Text>
                    <View style={Style.base}>
                        <TouchableOpacity style={[Style.buttonBand,{backgroundColor:props.resistor.bands.color[3]}]} onPress={()=>interactTouch(3)} onLongPress={() => interactHold()}>
                            <Text style={Style.plus}>{label.p4.sLabel}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/*Button to calculate*/}
            <View style = {Style.calculateButtonContainer}>
                <TouchableOpacity style={Style.buttonCalc} onPress={calculate}>
                    <Text style={Style.baseText}>Calculate</Text>
                </TouchableOpacity>
                <View style={Style.resultView}>
                    <Text style={Style.baseText}>{resistorValue} Ω</Text>
                </View>
            </View>
        </View>
    );
}