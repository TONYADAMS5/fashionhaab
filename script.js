document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Replace this with your own logic to check the username and password
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      // Redirect to the home page
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password');
    }
  });