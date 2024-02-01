// JavaScript for dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    
    // Toggle button color
    const isDarkMode = body.classList.contains('dark-mode');
    if (isDarkMode) {
        document.documentElement.style.setProperty('--button-color-light', 'white');
        document.documentElement.style.setProperty('--button-color-dark', 'black');
    } else {
        document.documentElement.style.setProperty('--button-color-light', 'black');
        document.documentElement.style.setProperty('--button-color-dark', 'white');
    }
});

// Check if dark mode is enabled from local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    body.classList.add('dark-mode');
    document.documentElement.style.setProperty('--button-color-light', 'white');
    document.documentElement.style.setProperty('--button-color-dark', 'black');
}


function increaseExperience(skillId) {
    var skillElement = document.getElementById(skillId);
    var experienceElement = skillElement.querySelector('.experience');
    var currentExperience = parseInt(experienceElement.textContent);
    var newExperience = currentExperience + 100; // Increase by 100 (adjust as needed)
    var maxExperience = 1000; // Maximum experience level (adjust as needed)
    if (newExperience > maxExperience) {
        newExperience = maxExperience; // Cap the experience at the maximum level
    }
    experienceElement.textContent = newExperience;
    // ???? bhai ye value kese update ho raha he
    // Update the level display
    // var levelElement = skillElement.querySelector('.level');
    // levelElement.textContent = 'Level ' + Math.floor(newExperience / 100); // Assuming each level requires 100 experience points
}



function decreaseExperience(skillId) {
    var skillElement = document.getElementById(skillId);
    var experienceElement = skillElement.querySelector('.experience');
    var currentExperience = parseInt(experienceElement.textContent);
    var newExperience = currentExperience - 100; // Decrease by 100 (adjust as needed)
    var minExperience = 0; // Minimum experience level (adjust as needed)
    if (newExperience < minExperience) {
        newExperience = minExperience; // Cap the experience at the minimum level
    }
    experienceElement.textContent = newExperience;
    // updateLevel(skillElement, newExperience);
}