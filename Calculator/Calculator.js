import Resistor from "./Resistor";
import ValueToColor from "./ValueToColor";
import React, {useState} from "react";
import {View} from "react-native";
import {Style} from "../Style/Style";

export default function Calculator(){
    const [resistor, setResistor] = useState({
        nBands:2,
        bands:{
            color:[null,null, null, null],
            type:["BAND", "BAND", "MULTI", "NONE"]
        }
    })

    const changeResistorType = () => {
        if(resistor.nBands === 2){
            setResistor({
                ...resistor,
                nBands:3,
                bands:{
                    color:[null,null, null, null],
                    type:["BAND","BAND","BAND","MULTI"]}
            })
        }else{
            setResistor({
                ...resistor,
                nBands:2,
                bands:{
                    color:[null,null, null, null],
                    type:["BAND","BAND","MULTI","NONE"]}
            })
        }
    }

    const isResistorEmpty = () =>{
        let isEmpty = false;
        for(let i=0; i<resistor.nBands;i++){
            if(resistor.bands.color[i] === null){
                isEmpty = true;
            }
        }
        return isEmpty;
    }

    const changeColor = (i, color)=>{
        let newArray = [...resistor.bands.color];
        newArray.splice(i,1,color);
        setResistor({
            ...resistor,
            bands:{
                ...resistor.bands,
                color:newArray
            }
        });
    }

    const changeAllColors = (colors)=>{
        setResistor({
            ...resistor,
            bands:{
                ...resistor.bands,
                color:colors
            }
        })
    }

    return(
        <View style={Style.container}>
            <Resistor isResistorEmpty = {isResistorEmpty} changeResistorColor = {changeColor} resistor = {resistor} changeResistorType={changeResistorType}/>
            <ValueToColor changeResistorColor = {changeColor} changeAllColors = {changeAllColors} resistor = {resistor}/>
        </View>
    );

}