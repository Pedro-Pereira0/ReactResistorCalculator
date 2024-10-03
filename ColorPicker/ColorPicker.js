import React from 'react';
import {View, TouchableOpacity, FlatList, ToastAndroid} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import "../Data/ColorList";
import {Style} from "../Style/Style";

export default function ColorPicker(props){
    const navigation = useNavigation();

    const colorList = (bandType) =>{
        if(bandType === "BAND"){
            return DATABAND;
        }else{
            return DATAMULT;
        }
    }

    const pressHandler = (item) =>{
        ToastAndroid.show("Color: "+item.name+", Band value: "+item.bandValue+", Multiplier: "+item.multiplier, ToastAndroid.SHORT);
    }

    const chooseColor = (i, colorName) =>
    {
        props.route.params.changeResistorColor(i,colorName);
        navigation.navigate("Calculator");
    }

    return(
        <View style = {Style.container}>
            <View style={{paddingTop:125}}>
                <FlatList numColumns={3}
                    data={colorList(props.route.params.type)}
                    renderItem= {({item}) =>(
                        <TouchableOpacity style={[Style.colorButton,{backgroundColor:item.name}]} onPress={()=>chooseColor(props.route.params.i, item.name)} onLongPress={()=>pressHandler(item)}>

                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}
