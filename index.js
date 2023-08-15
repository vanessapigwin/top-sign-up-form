const passwordArea = document.querySelector('#password');
const confirmArea = document.querySelector('#confirm-password');
const inputRow = document.querySelector('.form-row:has(input#confirm-password)');
const submitButton = document.querySelector('button');

function validatePassword () {
    if (passwordArea.value !== confirmArea.value) {
        alert('Passwords do not match, please try again.');
    }
}
submitButton.addEventListener('click', validatePassword);