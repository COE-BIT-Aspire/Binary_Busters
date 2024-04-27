
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    if (b === 0) {
      return "Error: Division by zero!";
    }
    return a / b;
  }
  
  // Function to calc
  function calculate(operator, num1, num2) {
    switch (operator) {
      case '+':
        return add(num1, num2);
      case '-':
        return subtract(num1, num2);
      case '*':
        return multiply(num1, num2);
      case '/':
        return divide(num1, num2);
      default:
        return "Error: Invalid operator!";
    }
  }
  console.log(calculate('+', 5, 3)); 
  console.log(calculate('-', 7, 2)); 
  console.log(calculate('*', 4, 6)); 
  console.log(calculate('/', 8, 2)); 
  console.log(calculate('/', 8, 0)); 
  