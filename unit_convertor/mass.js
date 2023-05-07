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

    if(inputTypeValue === "gram" && outputTypeValue==="kilogram")
    {
        result.value = Number(input.value) * 0.001;
    }
    else if (inputTypeValue === "gram" && outputTypeValue==="tonne")
    {
        result.value = Number(input.value) * 1000000;
    }
    else if (inputTypeValue === "gram" && outputTypeValue==="gram")
    {
        result.value = Number(input.value) ;
    }
    else if (inputTypeValue === "gram" && outputTypeValue==="pound")
    {
        result.value = Number(input.value) /453.6;
    }

    if (inputTypeValue === "kilogram" && outputTypeValue==="gram")
    {
        result.value = Number(input.value) * 1000;
    }
    else if (inputTypeValue === "kilogram" && outputTypeValue==="tonne")
    {
        result.value = Number(input.value) / 1000;
    }
    else if (inputTypeValue === "kilogram" && outputTypeValue==="pound")
    {
        result.value = Number(input.value) * 2.205;
    }
    else if (inputTypeValue === "kilogram" && outputTypeValue==="kilogram")
    {
        result.value = Number(input.value) ;
    }

    if (inputTypeValue === "tonne" && outputTypeValue==="kilogram")
    {
        result.value = Number(input.value) * 1000;
    }
    else if (inputTypeValue === "tonne" && outputTypeValue==="gram")
    {
        result.value = Number(input.value) * 1000000;
    }
    else if (inputTypeValue === "tonne" && outputTypeValue==="pound")
    {
        result.value = Number(input.value) *2205 ;
    }
    else if (inputTypeValue === "tonne" && outputTypeValue==="tonne")
    {
        result.value = Number(input.value) ;
    }

    if (inputTypeValue === "pound" && outputTypeValue==="kilogram")
    {
        result.value = Number(input.value) / 2.205;
    }
    else if (inputTypeValue === "pound" && outputTypeValue==="gram")
    {
        result.value = Number(input.value) *453.6;
    }
    else if (inputTypeValue === "pound" && outputTypeValue==="pound")
    {
        result.value = Number(input.value) ;
    }
    else if (inputTypeValue === "pound" && outputTypeValue==="tonne")
    {
        result.value = Number(input.value)/2205 ;
    }

}