/* When the input field receives input, convert the value from kilogramm to Pound */
function unitConverter(valueOfInput) {
    valueOfInput = parseFloat(valueOfInput);

    if (isNaN(valueOfInput)) {
        document.getElementById("outputPounds").innerHTML = '';
    } else {
        document.getElementById("outputPounds").innerHTML = (valueOfInput) * 2.2046;
    }
}