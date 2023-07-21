// Simulate login functionality
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Here, you would typically send the username and password to the server for validation.
    // Since we don't have a server here, let's just log the input values.
    console.log('Username:', username);
    console.log('Password:', password);
  });
  
  // Simulate Google authentication
  document.getElementById('google-login').addEventListener('click', function () {
    // You would typically redirect the user to the Google authentication page here.
    // Since we don't have real authentication, let's just log that the user clicked the Google button.
    console.log('Google login clicked');
  });
  
  // Simulate GitHub authentication
  document.getElementById('github-login').addEventListener('click', function () {
    // You would typically redirect the user to the GitHub authentication page here.
    // Since we don't have real authentication, let's just log that the user clicked the GitHub button.
    console.log('GitHub login clicked');
  });