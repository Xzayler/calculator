function add(a,b) {
  return a+b;
}

function subtract(a,b) {
  return a-b;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  return a/b;
}

function operate(operator,a,b) {
  let solution;
  switch (operator) {
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/':
      return divide(a,b);    
    default:
      console.log('ERROR')
      return 'error'
  }
}

function addDigit(e) {
  let digit = e.target.getAttribute('id');
  inputDisplay.textContent += digit;
}

let a, b, operator;

const digitButtons = document.querySelectorAll('.digit');
const inputDisplay = document.querySelector('.input');
digitButtons.forEach((button) => button.addEventListener('click',addDigit));

function clearInput() {
inputDisplay.textContent = '';
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearInput);

function setOperator(e) {
  operator = e.target.getAttribute('id');
  a = inputDisplay.textContent;
  inputDisplay.textContent += operator;
}

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => button.addEventListener('click', setOperator));

function calculate() {
  b = inputDisplay.textContent.slice(a.length + operator.length);
  inputDisplay.textContent = operate(operator, parseFloat(a), parseFloat(b));
}

const equalButton = document.querySelector('.equals');
equalButton.addEventListener('click', calculate)