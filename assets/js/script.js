let count = 0;


const display = document.getElementById("count");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");


incrementBtn.addEventListener("click", () => {
    count++;
    
    display.textContent = count;
});



decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        display.textContent = count;
    }
});


resetBtn.addEventListener("click", () => {
    count = 0;
    display.textContent = count;
});
