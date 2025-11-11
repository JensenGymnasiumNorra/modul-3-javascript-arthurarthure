function calculateSum() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum = num1 + num2;
    document.getElementById('result').innerHTML = 'Result: ' + sum;
}
function calculateDifference() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum = num1 - num2;
    document.getElementById('result').innerHTML = 'Result: ' + sum;
}
function calculateFactor() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum = num1 * num2;
    document.getElementById('result').innerHTML = 'Result: ' + sum;
}
function calculateDiv() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum = num1 / num2;
    document.getElementById('result').innerHTML = 'Result: ' + sum;
}
