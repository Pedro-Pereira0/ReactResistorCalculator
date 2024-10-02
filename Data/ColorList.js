global.DATAMULT = [
    {name:"black", bandValue:0, multiplier:1, key:1},
    {name:"brown", bandValue:1, multiplier:10, key:2},
    {name:"red", bandValue:2, multiplier:100, key:3},
    {name:"orange", bandValue:3, multiplier:1000, key:4},
    {name:"yellow", bandValue:4, multiplier:10000, key:5},
    {name:"green", bandValue:5, multiplier:100000, key:6},
    {name:"blue", bandValue:6, multiplier:1000000, key:7},
    {name:"violet", bandValue:7, multiplier:10000000, key:8},
    {name:"grey", bandValue:8, multiplier:100000000, key:9},
    {name:"white", bandValue:9, multiplier:1000000000, key:10},
    {name:"gold", bandValue:"none", multiplier:0.1, key:11},
    {name:"silver", bandValue:"none", multiplier:0.01, key:12},
]

global.DATABAND = [
    {name:"black", bandValue:0, multiplier:1, key:1},
    {name:"brown", bandValue:1, multiplier:10, key:2},
    {name:"red", bandValue:2, multiplier:100, key:3},
    {name:"orange", bandValue:3, multiplier:1000, key:4},
    {name:"yellow", bandValue:4, multiplier:10000, key:5},
    {name:"green", bandValue:5, multiplier:100000, key:6},
    {name:"blue", bandValue:6, multiplier:1000000, key:7},
    {name:"violet", bandValue:7, multiplier:10000000, key:8},
    {name:"grey", bandValue:8, multiplier:100000000, key:9},
    {name:"white", bandValue:9, multiplier:1000000000, key:10},
]

export const getBandValueByName = (colorName)=>{
    for(let i=0; i<10; i++)
    {
        if(DATABAND[i].name === colorName)
        {
            return DATABAND[i].bandValue;
        }
    }
}

export const getMultiplierByName = (colorName)=>{
    for(let i=0; i<12; i++)
    {
        if(DATAMULT[i].name === colorName)
        {
            return DATAMULT[i].multiplier;
        }
    }
}

export const getMultiplierByValue = (value) =>{
    for(let i=0; i<12; i++)
    {
        if(DATAMULT[i].multiplier === value)
        {
            return DATAMULT[i].name;
        }
    }
}

export const getBandByValue = (value) =>{
    for(let i=0; i<10; i++)
    {
        if(DATABAND[i].bandValue === value)
        {
            return DATABAND[i].name;
        }
    }
}

