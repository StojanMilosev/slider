var slider = document.getElementById("range-slider");
var value = document.getElementById("slider-value");

slider.oninput = function(){
    value.innerHTML = this.value;
};