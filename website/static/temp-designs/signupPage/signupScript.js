// Simulate sign-up functionality
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Here, you would typically send the form data to the server for user registration.
    // Since we don't have a server here, let's just log the input values.
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  });
  
  // Simulate Google sign-up
  document.getElementById('google-signup').addEventListener('click', function () {
    // You would typically redirect the user to the Google authentication page here.
    // Since we don't have real authentication, let's just log that the user clicked the Google button.
    console.log('Google sign-up clicked');
  });
  
  // Simulate GitHub sign-up
  document.getElementById('github-signup').addEventListener('click', function () {
    // You would typically redirect the user to the GitHub authentication page here.
    // Since we don't have real authentication, let's just log that the user clicked the GitHub button.
    console.log('GitHub sign-up clicked');
  });