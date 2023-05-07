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

    if(inputTypeValue === "celsius" && outputTypeValue==="farenheit")
    {
        result.value = (Number(input.value) * (9/5))+32;
    }
    else if (inputTypeValue === "celsius" && outputTypeValue==="kelvin")
    {
        result.value = Number(input.value) + 273.15 ;
    }
    else if (inputTypeValue === "celsius" && outputTypeValue==="celsius")
    {
        result.value = Number(input.value) ;
    }

    if (inputTypeValue === "farenheit" && outputTypeValue==="celsius")
    {
        result.value = (Number(input.value)-32) * (5/9) ;
    }
    else if (inputTypeValue === "farenheit" && outputTypeValue==="kelvin")
    {
        result.value = (Number(input.value)-32) * (5/9) + 273.15 ;
    }
    else if (inputTypeValue === "farenheit" && outputTypeValue==="farenheit")
    {
        result.value = Number(input.value) ;
    }

    if (inputTypeValue === "kelvin" && outputTypeValue==="farenheit")
    {
        result.value = (Number(input.value)-273.15)*(9/5)+32 ;
    }
    else if (inputTypeValue === "kelvin" && outputTypeValue==="celsius")
    {
        result.value = Number(input.value) -273.15;
    }
    else if (inputTypeValue === "kelvin" && outputTypeValue==="kelvin")
    {
        result.value = Number(input.value) ;
    }

}