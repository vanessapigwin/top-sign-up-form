const passwordArea = document.querySelector('#password');
const confirmArea = document.querySelector('#confirm-password');
const inputRow = document.querySelector('.form-row:has(input#confirm-password)');
const submitButton = document.querySelector('button');

function validatePassword (e) {
    e.preventDefault();
    if (passwordArea.value !== confirmArea.value) {
        alert('Passwords do not match, please try again.');
    }
    else
        window.location.href = "https://www.youtube.com/watch?v=hvL1339luv0";
    
}
submitButton.addEventListener('click', validatePassword);