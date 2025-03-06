const button = document.querySelector('#button');
const result = document.querySelector('#result');

button.onclick = function() {
    const grade = parseFloat(document.getElementById('grade').value); // Convert grade to a number

    // Check if the input is invalid (NaN or -0)
    if (isNaN(grade) || grade === "" || Object.is(grade, -0)) {
        result.textContent = 'Invalid grade'; // Handle invalid input (NaN, -0, or empty)
        result.style.display = 'block';
    } else if (grade > 100) {
        result.textContent = 'Invalid grade'; // Grade too high
        result.style.display = 'block';
    } else if (grade < 0) {
        result.textContent = 'Invalid grade'; // Grade too low
        result.style.display = 'block';
    } else if (grade >= 90) {
        result.textContent = 'You got an A, congrats!'; // Grade A
        result.style.display = 'block';
    } else if (grade >= 80) {
        result.textContent = 'You got a B, great job!'; // Grade B
        result.style.display = 'block';
    } else if (grade >= 70) {
        result.textContent = 'You got a C, nice work!'; // Grade C
        result.style.display = 'block';
    } else if (grade >= 60) {
        result.textContent = 'You got a D, keep it up!'; // Grade D
        result.style.display = 'block'; 
    } else {
        result.textContent = 'You got an F, don\'t give up!'; // Grade F
        result.style.display = 'block';
    }
};