import {getBandByValue, getBandValueByName, getMultiplierByName, getMultiplierByValue} from "../Data/ColorList"
export const colorToValue = (resistor) =>{
    let finalResult;
    let numBands = resistor.nBands;
    let array = resistor.bands.color;
    let unity = 1;

    let result = 0;
    for(let i=numBands-1; i>=0;i--)
    {
        result = result + getBandValueByName(array[i])*unity;
        unity = unity * 10;
    }

    //Multiplier will always be the one on the last position
    finalResult = result * getMultiplierByName(resistor.bands.color[resistor.nBands]);

    return finalResult;
}

export const valueToColor = (resistor, value, changeAllColors, changeResistorColor) =>{
    let bandValue = value;
    let unity = 1;
    let multiplierValue;
    let numDigits = (Math.log10(value)+1);

    let multiplier = 0;

    const bands = [];

    switch(resistor.nBands)
    {
        case 2 : unity = 10; break;
        case 3 : unity = 100; break;
    }

    //Numero a que vai elevar e mostra o numero da soma das bands
    for(let i=numDigits; i>resistor.nBands; i--)
    {
        bandValue = bandValue/10;
        multiplier++;
    }
    multiplierValue = Math.pow(10,multiplier);

    changeResistorColor(resistor.nBands,getMultiplierByValue(multiplierValue));

    for(let i=0; i<resistor.nBands; i++)
    {
        bands[i] = bandValue/unity;
        bandValue = bandValue%unity;
        unity = unity/10;
    }

    changeAllColors(bands);
}