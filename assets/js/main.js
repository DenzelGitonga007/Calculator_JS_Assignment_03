// *** Write your code here***
// The function calcNumbers() to display the number(s) clicked
function calcNumbers(num) {
    form.displayResult.value=form.displayResult.value+num;
}
// The function clear() to clear on the values in the display
function clear(num) {
  if (form.displayResult.value != '') {
      form.displayResult.value = '';
  }
}

// The function deleteSingle() to delete a single value
function delSingleNumber(num) {
  form.displayResult.value = form.displayResult.value.substr(0, form.displayResult.value.length - 1);
}