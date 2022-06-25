// *** Write your code here***
// The function calcNumbers() to display the number(s) clicked
function calcNumbers(num) {
    form.displayResult.value=form.displayResult.value+num;
}
// The function clear() to clear on the values in the display
const clear = () => {
    result = '';
    updateDisplay();
  }

// Refreshing the display
const updateDisplay = () => {
    displayResult.value = result;
  };
