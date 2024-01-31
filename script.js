// JavaScript code for interactivity
// console.log("0 runnning before body redendered")

// Get references to HTML elements
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

let count = 0;

// Function to increment the count
function incrementCount() {
    count++;
    countDisplay.textContent = count;
    // countDisplay = {};
}

// Function to reset the count
function resetCount() {
    count = 0;
    countDisplay.textContent = count;
}

// Add event listeners to buttons
incrementBtn.addEventListener('click', incrementCount);
resetBtn.addEventListener('click', resetCount);
