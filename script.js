
function add(num1, num2) {
  return Number(num1) + Number(num2);
};

function subtract(num1, num2) {
  return num1 - num2;
};

function multiply(num1, num2) {
  return num1 * num2;
  // return arr.reduce((acc, curr) => acc*curr, 1);
};

function divide(num1, num2) {
  if(num2==0){   //num2 actually a string, which is why we have == and not ===
    return("ERROR");
  }
  return num1 / num2;
}


let display = document.querySelector("#display");

function operate(num1, num2, operator) {
  switch(operator){
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
  }
}

function updateDisplay() {
  let operatorFlag = false;
  let clearEntryFlag = false;
  let operatorVal;
  let operatorSymbol;
  let numbersArr = document.querySelectorAll(".number");
  let operatorsArr = document.querySelectorAll(".operator");
  let clearBtn = document.querySelector("#clear");
  let equalsBtn = document.querySelector("#equals");

  numbersArr.forEach(number => {
    number.addEventListener("click", () => {
      let numberVal = number.textContent;
      display.textContent = display.textContent + numberVal;
      clearBtn.textContent = "CE"
      clearEntryFlag = true;
    })
  })
  operatorsArr.forEach(operator => {
    operator.addEventListener("click", () => {
      operatorVal = operator.id;   //the text content of the operators are symbols, not conducive to variable assignment
      operatorSymbol = operator.textContent
      if(!operatorFlag){
        display.textContent=display.textContent+operatorSymbol;
        operatorFlag = true;
      }
    })
  })
  clearBtn.addEventListener("click", () => {
    if(clearEntryFlag){
      console.log(display.textContent);
      let lastItem = display.textContent.slice(-1)
      if(isNaN(lastItem)){  //allows operator to be changed if cleared
        operatorFlag = false;
      }
      display.textContent = display.textContent.slice(0, -1);
      clearEntryFlag = false;
      clearBtn.textContent = "AC"
    }
    else{
      display.textContent = "";
      operatorFlag = false;
    }
  })

  equalsBtn.addEventListener("click", () => {
    if(operatorVal!=null){
      let sum = display.textContent.split(operatorSymbol);
      let num1=sum[0];
      let num2=sum[1];
      let answer = operate(num1, num2, operatorVal);
      display.textContent = answer;
      operatorFlag=false;
    }
  })

}

updateDisplay();