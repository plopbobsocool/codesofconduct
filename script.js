// Login Modal
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

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Example: Hashing password for demo purposes
  const hashedPassword = hashPassword(password);

  // Simulate login (for demo purposes)
  if (username === 'worker' && hashedPassword === 'hashedPassword123!') {
    // Save the login state in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'conduct.html';
  } else {
    alert('Invalid credentials. Please try again.');
  }
});

// Hashing Function (for demo purposes, replace with real hashing in production)
function hashPassword(password) {
  return btoa(password);  // Base64 encode as a placeholder (this is NOT secure for production)
}

// Check if the user is logged in when accessing a protected page
if (window.location.pathname === '/conduct.html') {
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    // Redirect to login page if not logged in
    window.location.href = 'index.html';
  }
}
