document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Clear previous error messages
        errorMessage.textContent = '';

        // Validate the inputs
        if (username === '' || password === '') {
            errorMessage.textContent = 'Please fill in all fields.';
            return;
        }
    

        // Simulate a login process
        if (username === 'user' && password === 'password') {
            errorMessage.textContent = 'Login successful! Redirecting...';
            errorMessage.style.color = 'green';
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 2000); // Redirect after 2 seconds
        } else {
            errorMessage.textContent = 'Invalid username or password. Please try again.';
            errorMessage.style.color = 'red';
        }
    });
}); 