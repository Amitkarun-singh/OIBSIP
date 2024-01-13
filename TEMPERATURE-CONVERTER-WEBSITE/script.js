// script.js

function calculateTemp() {
    // Get input values
    var temperature = parseFloat(document.getElementById("temp").value);
    var tempUnit = document.getElementById("temp_diff").value;

    // Perform temperature conversion
    var result;
    if (tempUnit === "cel") {
        result = (temperature * 9 / 5) + 32;
        result = result.toFixed(2) + "&#176;F";
    } else if (tempUnit === "fah") {
        result = (temperature - 32) * 5 / 9;
        result = result.toFixed(2) + "&#176;C";
    }

    // Display the result
    document.getElementById("result").innerHTML = "Result: " + result;
}

// Clear the form and result
function clearForm() {
    document.getElementById("calcTemp").reset();
    document.getElementById("result").innerHTML = "";
}
