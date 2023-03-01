//Square Number Calculate
function temperaturecalc(){
    var actualtemperature = document.getElementById("temperatesolve").value;
    var select = document.querySelector('#units');
    var selectedvalule = select.value;
    if (selectedvalule == " "){
        document.getElementById("temperatureanswer").innerText = "Please select suitable temperature";
    }
    else if (selectedvalule == "fahrenheit"){
        var fahrenheittemperature = actualtemperature;
        var actualtemperaturecelcius = (fahrenheittemperature - 32) * 5/9; 
        var actualtemperaturekelvin = (fahrenheittemperature - 32) * 5/9 + 273.15;
        document.getElementById("temperatureanswer").innerText = fahrenheittemperature + " in celcius is " + actualtemperaturecelcius;
        document.getElementById("temperatureanswer2").innerText = fahrenheittemperature + " in kelvin is " + actualtemperaturekelvin;
    }
    else if (selectedvalule == "celcius"){
        var celciustemperature = actualtemperature; 
        var actualtemperaturefahrenheit = celciustemperature * 9/5 + 32;
        document.getElementById("temperatureanswer").innerText= celciustemperature + " in fahrenheit is " + actualtemperaturefahrenheit;
    }
    
};
function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};