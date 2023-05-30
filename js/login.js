// login.js

// Get the form element from the HTML
const loginForm = document.querySelector('#loginForm');

// Add an event listener to the form's submit event
loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the email and password input fields
  const emailInput = document.getElementById('exampleInputEmail');
  const passwordInput = document.getElementById('exampleInputPassword');

  // Get the entered values
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Perform validation checks
  if (email === '') {
    alert('Please enter an email address.');
    emailInput.focus();
    return;
  }

  if (password === '') {
    alert('Please enter a password.');
    passwordInput.focus();
    return;
  }

  // Check if email and password match
  if (email === 'hloni@datacube.com' && password === 'moc.ebucatad@inolh') {
    // Start a session or set a flag in sessionStorage or localStorage
    sessionStorage.setItem('isLoggedIn', 'true'); // Use sessionStorage for session-based storage

    // Redirect to index.html
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }

  // Reset the form
  loginForm.reset();
});
