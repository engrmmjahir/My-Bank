// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // step-3: get password from the email input field
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // DANGER: DO NOT VERIFY email password on the client side
    // step-4: verify email and password and check whether valid user or not
    if (userEmail === 'engrmmjahir@gmail.com' && userPassword === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('incorrect email or password')
    }
})