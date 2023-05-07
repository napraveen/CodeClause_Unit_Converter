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

    if(inputTypeValue === "seconds" && outputTypeValue==="minutes")
    {
        result.value = Number(input.value) /60 ;
    }
    else if (inputTypeValue === "seconds" && outputTypeValue==="hours")
    {
        result.value = Number(input.value) /3600;
    }
    else if (inputTypeValue === "seconds" && outputTypeValue==="seconds")
    {
        result.value = Number(input.value) ;
    }
    else if (inputTypeValue === "seconds" && outputTypeValue==="days")
    {
        result.value = Number(input.value) /86400;
    }
    else if (inputTypeValue === "seconds" && outputTypeValue==="weeks")
    {
        result.value = Number(input.value) /604800;
    }
    else if (inputTypeValue === "seconds" && outputTypeValue==="months")
    {
        result.value = Number(input.value) /(2.628*10^6);
    }
    else if (inputTypeValue === "seconds" && outputTypeValue==="years")
    {
        result.value = Number(input.value) /(3.154*10^ 7);
    }

    if (inputTypeValue === "minutes" && outputTypeValue==="seconds")
    {
        result.value = Number(input.value) *60;
    }
    else if (inputTypeValue === "minutes" && outputTypeValue==="hours")
    {
        result.value = Number(input.value) /60;
    }
    else if (inputTypeValue === "minutes" && outputTypeValue==="days")
    {
        result.value = Number(input.value) /1440;
    }
    else if (inputTypeValue === "minutes" && outputTypeValue==="minutes")
    {
        result.value = Number(input.value) ;
    }
    else if (inputTypeValue === "minutes" && outputTypeValue==="weeks")
    {
        result.value = Number(input.value) /10080;
    }
    else if (inputTypeValue === "minutes" && outputTypeValue==="years")
    {
        result.value = Number(input.value) /525600;
    }

    if (inputTypeValue === "hours" && outputTypeValue==="minutes")
    {
        result.value = Number(input.value) * 60;
    }
    else if (inputTypeValue === "hours" && outputTypeValue==="seconds")
    {
        result.value = Number(input.value) * 3600;
    }
    else if (inputTypeValue === "hours" && outputTypeValue==="days")
    {
        result.value = Number(input.value) / 24;
    }
    else if (inputTypeValue === "hours" && outputTypeValue==="hours")
    {
        result.value = Number(input.value) ;
    }
    else if (inputTypeValue === "hours" && outputTypeValue==="weeks")
    {
        result.value = Number(input.value)/168 ;
    }
    else if (inputTypeValue === "hours" && outputTypeValue==="years")
    {
        result.value = Number(input.value)/8760 ;
    }

    if (inputTypeValue === "days" && outputTypeValue==="minutes")
    {
        result.value = Number(input.value) *1440;
    }
    else if (inputTypeValue === "days" && outputTypeValue==="seconds")
    {
        result.value = Number(input.value) *86400;
    }
    else if (inputTypeValue === "days" && outputTypeValue==="days")
    {
        result.value = Number(input.value) ;
    }
    else if (inputTypeValue === "days" && outputTypeValue==="hours")
    {
        result.value = Number(input.value)*24;
    }
    else if (inputTypeValue === "days" && outputTypeValue==="weeks")
    {
        result.value = Number(input.value)/7 ;
    }
    else if (inputTypeValue === "days" && outputTypeValue==="years")
    {
        result.value = Number(input.value)/365 ;
    }

    if (inputTypeValue === "weeks" && outputTypeValue==="minutes")
    {
        result.value = Number(input.value) *10080;
    }
    else if (inputTypeValue === "weeks" && outputTypeValue==="seconds")
    {
        result.value = Number(input.value) *604800;
    }
    else if (inputTypeValue === "weeks" && outputTypeValue==="days")
    {
        result.value = Number(input.value)*7;
    }
    else if (inputTypeValue === "weeks" && outputTypeValue==="hours")
    {
        result.value = Number(input.value)*168;
    }
    else if (inputTypeValue === "weeks" && outputTypeValue==="weeks")
    {
        result.value = Number(input.value) ;
    }
    else if (inputTypeValue === "weeks" && outputTypeValue==="years")
    {
        result.value = Number(input.value)/ 52.14;
    }

    if (inputTypeValue === "years" && outputTypeValue==="minutes")
    {
        result.value = Number(input.value) *525600;
    }
    else if (inputTypeValue === "years" && outputTypeValue==="seconds")
    {
        result.value = Number(input.value) *(3.15*10^7);
    }
    else if (inputTypeValue === "years" && outputTypeValue==="days")
    {
        result.value = Number(input.value)*365;
    }
    else if (inputTypeValue === "years" && outputTypeValue==="hours")
    {
        result.value = Number(input.value)*8760;
    }
    else if (inputTypeValue === "years" && outputTypeValue==="weeks")
    {
        result.value = Number(input.value)*52.143 ;
    }
    else if (inputTypeValue === "years" && outputTypeValue==="years")
    {
        result.value = Number(input.value);
    }


}