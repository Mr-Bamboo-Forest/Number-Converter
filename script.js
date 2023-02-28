//Square Number Calculate
function squarecalc(){
    var select = document.querySelector('#units');
    var output = select.value;
    console.log(output)  
};
function comma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};