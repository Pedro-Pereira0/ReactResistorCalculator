import {StyleSheet} from "react-native";
export const Style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2D3250',
    },

    colorButton:{
        height: 120,width: 120,margin:5,
    },

    resistorContainer:{
        marginTop:60,
        margin:20,
        height:175,
        alignItems:"flex-start",
        justifyContent:"space-evenly",
        flexDirection:"row",
    },

    base:{
        margin: 5,
        backgroundColor:'#b6bac3',
        alignItems:"center",
        height: 130,
        width: 70,
    },

    bands:{
        margin:5,
        backgroundColor:'#7077A1',
        paddingTop:10,
        alignItems:'center',
        justifyContent:'space-evenly',
    },

    baseText:{
        color:'#ffffff',
    },

    plus:{
        color:'#ffffff',
        fontSize:25,
    },


    buttonBand: {
        height: 130,
        width: 70,
        alignItems:"center",
        justifyContent:'space-evenly',
    },

    calculateButtonContainer:{
        marginLeft:25,
        height:100,
        width:345,
        //backgroundColor:'orange',
        justifyContent:"space-evenly",
        flexDirection:"row",
    },
    buttonCalc:{
        backgroundColor:"#7077A1",
        height:50,
        width:125,
        alignItems:"center",
        justifyContent:"space-evenly",
    },

    resultView:{
        backgroundColor: "#1e2136",
        height:50,
        width:125,
        alignItems:"center",
        justifyContent:"space-evenly",

    }
});