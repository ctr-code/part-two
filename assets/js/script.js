let count = 0;

// BUG 1: The ID doesn't match the HTML element! Fix "counter-display-num"
const display = document.getElementById("counter-display-num");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");


incrementBtn.addEventListener("click", () => {
  count++;
  // BUG 2: Updates .value instead of text content... why?
  display.value = count;
});


// JS TASK 1: Add event listener for decrementBtn to decrease count (don't go below 0!)
// JS TASK 2: Add event listener for resetBtn to set count back to 0
