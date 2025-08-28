// JavaScript for Login and Signup Form
document.addEventListener("DOMContentLoaded", function () {
  // Toggle between login and signup forms
  const loginToggle = document.getElementById("login-toggle");
  const signupToggle = document.getElementById("signup-toggle");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const switchToSignup = document.getElementById("switch-to-signup");
  const switchToLogin = document.getElementById("switch-to-login");

  function activateLogin() {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    loginToggle.classList.add("active");
    signupToggle.classList.remove("active");
  }

  function activateSignup() {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    signupToggle.classList.add("active");
    loginToggle.classList.remove("active");
  }

  loginToggle.addEventListener("click", activateLogin);
  signupToggle.addEventListener("click", activateSignup);
  switchToSignup.addEventListener("click", activateSignup);
  switchToLogin.addEventListener("click", activateLogin);

  // Password visibility toggle
  function setupPasswordToggle(toggleElement, inputElement) {
    toggleElement.addEventListener("click", function () {
      const type =
        inputElement.getAttribute("type") === "password" ? "text" : "password";
      inputElement.setAttribute("type", type);

      // Toggle eye icon
      const eyeIcon = this.querySelector("i");
      eyeIcon.classList.toggle("fa-eye");
      eyeIcon.classList.toggle("fa-eye-slash");
    });
  }

  const loginPasswordInput = document.getElementById("login-password");
  const loginPasswordToggle = document.getElementById("login-password-toggle");
  const signupPasswordInput = document.getElementById("signup-password");
  const signupPasswordToggle = document.getElementById(
    "signup-password-toggle"
  );

  setupPasswordToggle(loginPasswordToggle, loginPasswordInput);
  setupPasswordToggle(signupPasswordToggle, signupPasswordInput);

  // Form validation
  const loginFormEl = document.getElementById("login-form");
  const signupFormEl = document.getElementById("signup-form");

  loginFormEl.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login successful!");
    loginFormEl.reset();
  });

  signupFormEl.addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById(
      "signup-confirm-password"
    ).value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Account created successfully!");
    signupFormEl.reset();
  });

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
