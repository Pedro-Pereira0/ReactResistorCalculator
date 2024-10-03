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

    finalResult = result * getMultiplierByName(resistor.bands.color[resistor.nBands]);

    return finalResult;
}