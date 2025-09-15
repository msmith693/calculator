function add(num1, num2) {
	return num1+num2;
};

function subtract(num1, num2) {
	return num1-num2;
};

function multiply(num1, num2) {
  return num1*num2;
  // return arr.reduce((acc, curr) => acc*curr, 1);
};

function divide(num1, num2){
  return num1/num2;
}

let num1;
let num2;

function operate(num1, num2, operator){
  return operator(num1, num2);
}

console.log(operate(3,2,divide));