// Fake "database" using localStorage
if (!localStorage.getItem("users")) {
  const defaultUsers = [
    { username: "daniel", password: "1234" },
    { username: "admin", password: "admin" }
  ];
  localStorage.setItem("users", JSON.stringify(defaultUsers));
}

// Handle login form
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(u => u.username === username && u.password === password);

  if (foundUser) {
    document.getElementById("loginMessage").textContent = "✅ Login successful!";
    localStorage.setItem("loggedInUser", username); // save login
    window.location.href = "index.html"; // redirect
  } else {
    document.getElementById("loginMessage").textContent = "❌ Invalid username or password.";
  }

});
