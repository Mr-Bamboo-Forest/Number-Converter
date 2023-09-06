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
            document.getElementById("temperatureanswer").innerText = "Please select suitable type of temperature from the dropdown (Celcius, Kelvin or Fahrenheit)";
        }
        else if (selectedvalule == "fahrenheit"){
            var fahrenheittemperature = actualtemperature;
            var actualtemperaturecelcius = (fahrenheittemperature - 32) * 5/9; 
            var actualtemperaturekelvin = (fahrenheittemperature - 32) * 5/9 + 273.15;
            document.getElementById("temperatureanswer").innerText = fahrenheittemperature + " in Celcius is " + actualtemperaturecelcius;
            document.getElementById("temperatureanswer2").innerText = fahrenheittemperature + " in Kelvin is " + actualtemperaturekelvin;
            document.getElementById("temperatureanswer3").innerText = fahrenheittemperature + " in Fahrenheit is " + actualtemperature;
        }
        else if (selectedvalule == "celcius"){
            var celciustemperature = actualtemperature; 
            var actualtemperaturefahrenheit = celciustemperature * 9/5 + 32;
            var actualtemperaturekelvin2 = celciustemperature + 273.15; 
            document.getElementById("temperatureanswer3").innerText = celciustemperature + " in Fahrenheit is " + actualtemperaturefahrenheit;
            document.getElementById("temperatureanswer2").innerText = celciustemperature + " in Kelvin is " + actualtemperaturekelvin2;
            document.getElementById("temperatureanswer").innerText = celciustemperature + " in Celcius is " + actualtemperature;
        }    
        else if (selectedvalule == "kelvin"){
            var kelvintemperature = actualtemperature; 
            var actualtemperaturefahrenheit2 = (kelvintemperature - 273.15) * 9/5 + 32;
            var actualtemperaturecelcius2 = kelvintemperature -273.15;
            document.getElementById("temperatureanswer3").innerText = kelvintemperature + " in Fahrenheit is " + actualtemperaturefahrenheit2;
            document.getElementById("temperatureanswer").innerText = kelvintemperature + " in Celcius is " + actualtemperaturecelcius2; 
            document.getElementById("temperatureanswer2").innerText = kelvintemperature + " in Kelvin is " + actualtemperature;
        }
    }
};
//https://coolconversion.com/math/binary-octal-hexa-decimal/_binary__10101_to_hexadecimal_
function typecalc(){
    var actualtype = document.getElementById("typesolve").value;
    var select2 = document.querySelector('#types');
    var selectedvalue2 = select2.value;
    if (actualtype == ""){
        document.getElementById("typeanswer").innerText = "Please type number system amount";
        document.getElementById("typeanswer2").innerText = "";
    }
    else {
        if (selectedvalue2 == " "){
            document.getElementById("typeanswer").innerText = "Please select suitable type of number system from the dropdown (Binary, Octal or Hexadecimal)";
        }
        else if (selectedvalue2 == "binary"){
            var binary = actualtype; 
            var binary2octal = parseInt(binary, 2).toString(8)
            var binary2hexadecimal = parseInt(binary, 2).toString(16)
            var binary2decimal = parseInt(binary, 2).toString(10)
            document.getElementById("typeanswer").innerText = actualtype + " in Octal is " + binary2octal;
            document.getElementById("typeanswer2").innerText = actualtype + " in Hexadecimal is " + binary2hexadecimal;
            document.getElementById("typeanswer3").innerText = actualtype + " in Binary is " + binary;
            document.getElementById("typeanswer4").innerText = actualtype + " in Decimal is " + binary2decimal;
        }
        else if (selectedvalue2 == "decimal"){
            var decimal = actualtype; 
            var decimal2octal = parseInt(decimal, 10).toString(8)
            var decimal2hexadecimal = parseInt(decimal, 10).toString(16)
            var decimal2binary = parseInt(decimal, 10).toString(2)
            document.getElementById("typeanswer").innerText = actualtype + " in Octal is " + decimal2octal;
            document.getElementById("typeanswer2").innerText = actualtype + " in Hexadecimal is " + decimal2hexadecimal;
            document.getElementById("typeanswer3").innerText = actualtype + " in Binary is " + decimal2binary;
            document.getElementById("typeanswer4").innerText = actualtype + " in Decimal is " + decimal;
        }  
        else if (selectedvalue2 == "octal"){
            var octal = actualtype; 
            var octal2decimal = parseInt(octal, 8).toString(10)
            var octal2hexadecimal = parseInt(octal, 8).toString(16)
            var octal2binary = parseInt(octal, 8).toString(2)
            document.getElementById("typeanswer").innerText = actualtype + " in Octal is " + octal;
            document.getElementById("typeanswer2").innerText = actualtype + " in Hexadecimal is " + octal2hexadecimal;
            document.getElementById("typeanswer3").innerText = actualtype + " in Binary is " + octal2binary;
            document.getElementById("typeanswer4").innerText = actualtype + " in Decimal is " + octal2decimal;
        }
        else if (selectedvalue2 == "hexadecimal"){
            var hexadecimal = actualtype; 
            var hexadecimal2decimal = parseInt(hexadecimal, 16).toString(10)
            var hexadecimal2octal = parseInt(hexadecimal, 16).toString(8)
            var hexadecimal2binary = parseInt(hexadecimal, 16).toString(2)
            document.getElementById("typeanswer").innerText = actualtype + " in Octal is " + hexadecimal;
            document.getElementById("typeanswer2").innerText = actualtype + " in Hexadecimal is " + hexadecimal2octal;
            document.getElementById("typeanswer3").innerText = actualtype + " in Binary is " + hexadecimal2binary;
            document.getElementById("typeanswer4").innerText = actualtype + " in Decimal is " + hexadecimal2decimal;
        }
    }
};
function numbercalc(){
    const numbersToWords = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
      };
      
      // Define the convertNumberToWords function
      function convertNumberToWords(number) {
        // if number present in object no need to go further
        if (number in numbersToWords) return numbersToWords[number];
      
        // Initialize the words variable to an empty string
        let words = "";
      
        // If the number is greater than or equal to 100, handle the hundreds place (ie, get the number of hundres)
        if (number >= 100) {
          // Add the word form of the number of hundreds to the words string
          words += convertNumberToWords(Math.floor(number / 100)) + " hundred";
      
          // Remove the hundreds place from the number
          number %= 100;
        }
      
        // If the number is greater than zero, handle the remaining digits
        if (number > 0) {
          // If the words string is not empty, add "and"
          if (words !== "") words += " and ";
      
          // If the number is less than 20, look up the word form in the numbersToWords object
          if (number < 20) words += numbersToWords[number];
          else {
            // Otherwise, add the word form of the tens place to the words string
            //if number = 37, Math.floor(number /10) will give you 3 and 3 * 10 will give you 30
            words += numbersToWords[Math.floor(number / 10) * 10];
      
            // If the ones place is not zero, add the word form of the ones place
            if (number % 10 > 0) {
              words += "-" + numbersToWords[number % 10];
            }
          }
        }
      
        // Return the word form of the number
        return words;
      }
      var lol = document.getElementById("number").value;
      document.getElementById("wordanswer").innerText = convertNumberToWords(lol);
};
function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
