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

    if(inputTypeValue === "mph" && outputTypeValue==="fps")
    {
        result.value = Number(input.value) * 1.467;
    }
    else if (inputTypeValue === "mph" && outputTypeValue==="mps")
    {
        result.value = Number(input.value) /2.237;
    }
    else if (inputTypeValue === "mph" && outputTypeValue==="mph")
    {
        result.value = Number(input.value) ;
    }
    else if (inputTypeValue === "mph" && outputTypeValue==="kph")
    {
        result.value = Number(input.value) * 1.609;
    }

    if (inputTypeValue === "fps" && outputTypeValue==="mph")
    {
        result.value = Number(input.value) / 1.467;
    }
    else if (inputTypeValue === "fps" && outputTypeValue==="mps")
    {
        result.value = Number(input.value) / 3.281;
    }
    else if (inputTypeValue === "fps" && outputTypeValue==="kph")
    {
        result.value = Number(input.value) * 1.097;
    }
    else if (inputTypeValue === "fps" && outputTypeValue==="fps")
    {
        result.value = Number(input.value) ;
    }

    if (inputTypeValue === "mps" && outputTypeValue==="fps")
    {
        result.value = Number(input.value) * 3.281;
    }
    else if (inputTypeValue === "mps" && outputTypeValue==="mph")
    {
        result.value = Number(input.value) * 2.237;
    }
    else if (inputTypeValue === "mps" && outputTypeValue==="kph")
    {
        result.value = Number(input.value) * 3.6 ;
    }
    else if (inputTypeValue === "mps" && outputTypeValue==="mps")
    {
        result.value = Number(input.value) ;
    }

    if (inputTypeValue === "kph" && outputTypeValue==="fps")
    {
        result.value = Number(input.value) * 1.467;
    }
    else if (inputTypeValue === "kph" && outputTypeValue==="mph")
    {
        result.value = Number(input.value) * 2.237;
    }
    else if (inputTypeValue === "kph" && outputTypeValue==="kph")
    {
        result.value = Number(input.value) ;
    }
    else if (inputTypeValue === "kph" && outputTypeValue==="mps")
    {
        result.value = Number(input.value) /2.237 ;
    }

}