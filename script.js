let displayValue = "";
let history = [];

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function removeLastDigit() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").value = displayValue;
}

function addToHistory() {
    history.push(displayValue);
    displayValue = "";
    document.getElementById("display").value = "";
}

function showHistory() {
    let historyText = history.join(" | ");
    document.getElementById("display").value = historyText;
}

function calculateResult() {
    try {
        let result = eval(displayValue);
        history.push(displayValue + " = " + result);
        displayValue = result.toString();
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}



