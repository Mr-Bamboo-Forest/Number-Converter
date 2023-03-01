//Square Number Calculate
function temperaturecalc(){
    var actualtemperature = document.getElementById("temperatesolve").value;
    var select = document.querySelector('#units');
    var selectedvalule = select.value;
    if (actualtemperature == ""){
        document.getElementById("temperatureanswer").innerText = "Please enter temperature";
        document.getElementById("temperatureanswer2").innerText = "";
    }
    else {
        if (selectedvalule == " "){
            document.getElementById("temperatureanswer").innerText = "Please select suitable type of temperature from the dropdown (Kelvin, Celcius or Fahrenheit)";
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
            var actualtemperaturekelvin2 = celciustemperature + 273.15; 
            document.getElementById("temperatureanswer").innerText = celciustemperature + " in fahrenheit is " + actualtemperaturefahrenheit;
            document.getElementById("temperatureanswer2").innerText = celciustemperature + " in Kelvin is " + actualtemperaturekelvin2;
        }    
        else if (selectedvalule == "kelvin"){
            var kelvintemperature = actualtemperature; 
            var actualtemperaturefahrenheit2 = (kelvintemperature - 273.15) * 9/5 + 32;
            var actualtemperaturecelcius2 = kelvintemperature -273.15;
            document.getElementById("temperatureanswer").innerText = kelvintemperature + " in fahrenheit is " + actualtemperaturefahrenheit2;
            document.getElementById("temperatureanswer2").innerText = kelvintemperature + " in celcius is " + actualtemperaturecelcius2; 
        }
    }
};
function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};