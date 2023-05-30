// Check if the user is logged in by checking the session flag
const isLoggedIn = sessionStorage.getItem('isLoggedIn');

// If the user is not logged in, redirect to the login page
if (!isLoggedIn) {
  window.location.href = 'login.html';
}
