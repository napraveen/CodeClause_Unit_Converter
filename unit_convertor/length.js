var input = document.getElementById('input')
var result = document.getElementById('result')
var inputType = document.getElementById('inputType');
var outputType = document.getElementById('outputType');
var inputTypeValue , outputTypeValue;
input.addEventListener("keyup", myresult);
input.addEventListener("keyup", myresult);
input.addEventListener("keyup", myresult); 
inputTypeValue = inputType.value;
outputTypeValue = outputType.value;
function myresult()  
{
    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;

    if(inputTypeValue === "meter" && outputTypeValue==="kilometer")
    {
        result.value = Number(input.value) * 0.001;
    }
    else if (inputTypeValue === "meter" && outputTypeValue==="centimeter")
    {
        result.value = Number(input.value) * 100;
    }
    else if (inputTypeValue === "meter" && outputTypeValue==="meter")
    {
        result.value = Number(input.value) ;
    }
    else if (inputTypeValue === "meter" && outputTypeValue==="foot")
    {
        result.value = Number(input.value) * 3.281;
    }
    else if (inputTypeValue === "meter" && outputTypeValue==="inch")
    {
        result.value = Number(input.value) * 39.37;
    }

    if (inputTypeValue === "kilometer" && outputTypeValue==="meter")
    {
        result.value = Number(input.value) * 1000;
    }
    else if (inputTypeValue === "kilometer" && outputTypeValue==="centimeter")
    {
        result.value = Number(input.value) * 100000;
    }
    else if (inputTypeValue === "kilometer" && outputTypeValue==="foot")
    {
        result.value = Number(input.value) * 3281;
    }
    else if (inputTypeValue === "kilometer" && outputTypeValue==="kilometer")
    {
        result.value = Number(input.value) ;
    }
    else if (inputTypeValue === "kilometer" && outputTypeValue==="inch")
    {
        result.value = Number(input.value) *39370;
    }

    if (inputTypeValue === "centimeter" && outputTypeValue==="kilometer")
    {
        result.value = Number(input.value) * 0.00001;
    }
    else if (inputTypeValue === "centimeter" && outputTypeValue==="meter")
    {
        result.value = Number(input.value) * 0.01;
    }
    else if (inputTypeValue === "centimeter" && outputTypeValue==="foot")
    {
        result.value = Number(input.value) / 30.48 ;
    }
    else if (inputTypeValue === "centimeter" && outputTypeValue==="centimeter")
    {
        result.value = Number(input.value) ;
    }
    else if (inputTypeValue === "centimeter" && outputTypeValue==="inch")
    {
        result.value = Number(input.value)/2.54 ;
    }

    if (inputTypeValue === "foot" && outputTypeValue==="kilometer")
    {
        result.value = Number(input.value) / 3281;
    }
    else if (inputTypeValue === "foot" && outputTypeValue==="meter")
    {
        result.value = Number(input.value) /3.281;
    }
    else if (inputTypeValue === "foot" && outputTypeValue==="foot")
    {
        result.value = Number(input.value) ;
    }
    else if (inputTypeValue === "foot" && outputTypeValue==="centimeter")
    {
        result.value = Number(input.value)*30.48 ;
    }
    else if (inputTypeValue === "foot" && outputTypeValue==="inch")
    {
        result.value = Number(input.value)*12 ;
    }

    if (inputTypeValue === "inch" && outputTypeValue==="kilometer")
    {
        result.value = Number(input.value) / 39370;
    }
    else if (inputTypeValue === "inch" && outputTypeValue==="meter")
    {
        result.value = Number(input.value) /39.37;
    }
    else if (inputTypeValue === "inch" && outputTypeValue==="foot")
    {
        result.value = Number(input.value)/12 ;
    }
    else if (inputTypeValue === "inch" && outputTypeValue==="centimeter")
    {
        result.value = Number(input.value)*2.54 ;
    }
    else if (inputTypeValue === "inch" && outputTypeValue==="inch")
    {
        result.value = Number(input.value) ;
    }


}