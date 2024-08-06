let output = document.getElementById('output');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';
let isSecondOperand = false;

function appendNumber(number) {
    if (isSecondOperand) {
        secondOperand += number;
        output.innerText += number;
    } else {
        firstOperand += number;
        output.innerText += number;
    }
}

function setOperation(operation) {
    if (firstOperand === '') return;
    if (isSecondOperand) {
        calculate();
        firstOperand = output.innerText;
        secondOperand = '';
    }
    currentOperation = operation;
    isSecondOperand = true;
    output.innerText += ' ' + operation + ' ';
}

function clearOutput() {
    output.innerText = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = '';
    isSecondOperand = false;
}

function calculate() {
    if (firstOperand === '' || secondOperand === '' || currentOperation === '') return;
    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
    }
    output.innerText = result;
    firstOperand = result.toString();
    secondOperand = '';
    currentOperation = '';
    isSecondOperand = false;
}
