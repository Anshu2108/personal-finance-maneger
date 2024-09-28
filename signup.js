const signupForm = document.querySelector('form');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get values from input fields
  const username = document.querySelector('input[placeholder="Username"]').value;
  const email = document.querySelector('input[placeholder="Email"]').value;
  const password = document.querySelector('input[placeholder="Password"]').value;
  const upiPhone = document.querySelector('input[placeholder="UPI Phone Number"]').value;

  // Basic validation (you can add more robust validation)
  if (!username || !email || !password || !upiPhone) {
    alert('Please fill in all fields.');
    return;
  }

  // Store user data in local storage
  const userData = {
    username: username,
    email: email,
    password: password,
    upiPhone: upiPhone
  };

  localStorage.setItem('userData', JSON.stringify(userData));

  // Redirect to login page (or other page)
  window.location.href = 'login.html'; // Replace 'login.html' with your actual login page URL
});
