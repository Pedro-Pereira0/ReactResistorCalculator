import Resistor from "./Resistor";
import React, {useState} from "react";
import {View} from "react-native";
import {Style} from "../Style/Style";

export default function Calculator(){
    const [resistor, setResistor] = useState({
        nBands:2,
        bands:{
            color:["NULL","NULL", "NULL","NULL"],
            type:["BAND", "BAND", "MULTI", "NONE"]
        }
    })

    const changeResistorType = () => {
        if(resistor.nBands === 2){
            setResistor({
                ...resistor,
                nBands:3,
                bands:{
                    color:["NULL","NULL", "NULL","NULL"],
                    type:["BAND","BAND","BAND","MULTI"]}
            })
        }else{
            setResistor({
                ...resistor,
                nBands:2,
                bands:{
                    color:["NULL","NULL", "NULL","NULL"],
                    type:["BAND","BAND","MULTI","NONE"]}
            })
        }
    }

    const changeColor = (i, color)=>{
        //todo make the setResistance change the color...
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

    return(
        <View style={Style.container}>
            <Resistor changeResistorColor = {changeColor} resistor = {resistor} changeResistorType={changeResistorType}/>
        </View>
    );

}