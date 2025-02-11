$(document).ready(function() {
  // Initialize Stellar.js for parallax effect
  $.stellar({
    horizontalScrolling: false,  // Disable horizontal scrolling
    verticalOffset: 40,          // Set the vertical offset
    responsive: true             // Enable responsive design
  });
});

// Login Modal (unchanged)
const loginLink = document.getElementById('loginLink');
const modal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');

loginLink.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Login Form Submission (unchanged)
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate login (for demo purposes)
  if (username === 'worker' && password === 'Password123!') {
    window.location.href = 'conduct.html';
  } else {
    alert('Invalid credentials. Please try again.');
  }
});
