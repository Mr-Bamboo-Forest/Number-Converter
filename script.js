//Square Number Calculate
function squarecalc(){
    var squaresolveanswer = Number(document.getElementById("squaresolve").value * Number(document.getElementById("squaresolve").value));
    document.getElementById("squareanswer").innerText = comma(squaresolveanswer);  
}
