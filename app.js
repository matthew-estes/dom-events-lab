/*-------------------------------- Constants --------------------------------*/
const numbers = document.querySelectorAll(".number");
const totalDisplay = document.querySelector(".display");
const operationButtons = document.querySelectorAll(".operation");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
/*-------------------------------- Variables --------------------------------*/
let value1 = null;
let value2 = null;
let operation = null;
let isFirstValue = true;
/*-------------------------------- Functions --------------------------------*/

const add = () => {
  return parseInt(value1) + parseInt(value2);
};

const subtract = () => {
  return parseInt(value1) - parseInt(value2);
};

const multiply = () => {
  return parseInt(value1) * parseInt(value2);
};

const divide = () => {
  return parseInt(value1) / parseInt(value2);
};

const renderResult = () => {
  let total;
  if (operation === "add") {
    total = add();
  } else if (operation === "subtract") {
    total = subtract();
  } else if (operation === "multiply") {
    total = multiply();
  } else if (operation === "divide") {
    total = divide();
  }
  totalDisplay.innerText = total;
  console.log(total);
};

const handleOperationButtons = (event) => {
  operation = event.target.id;
  isFirstValue = false;
  console.log(operation);
};

/*----------------------------- Event Listeners -----------------------------*/

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    let clickedButton = event.target.innerText;
    if (isFirstValue === true) {
      value1 = clickedButton;
      totalDisplay.innerText = value1;
    } else if (value2 === null) {
      value2 = clickedButton;
      totalDisplay.innerText = value2;
    }
  });
});

operationButtons.forEach((operation) => {
  operation.addEventListener("click", handleOperationButtons);
});

equalsButton.addEventListener("click", (event) => {
  renderResult();
});

clearButton.addEventListener("click", (event) => {
  value1 = null;
  value2 = null;
  operation = null;
  isFirstValue = true;
  totalDisplay.innerText = "0";
});
