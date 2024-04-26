document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullNameInput = document.querySelector(
      'input[placeholder="Full Name"]'
    );
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const passwordInput = document.querySelector(
      'input[placeholder="Password"]'
    );
    const fullNameError = document.querySelector(".Name-req");
    const emailError = document.querySelector(".Email-req");
    const passError = document.querySelector(".Pass-req");

    let isValid = true;

    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (!nameRegex.test(fullNameInput.value.trim())) {
      fullNameError.textContent = "Enter your Full Name";
      isValid = false;
    } else {
      fullNameError.textContent = "";
    }

    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = "Enter a valid Email address";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    if (!passRegex.test(passwordInput.value.trim())) {
      passError.textContent =
        "Enter a valid Password with minmum of 8 characters, 1 digit, 1 uppercase and 1 lowercase letter";
      isValid = false;
    } else {
      passError.textContent = "";
    }

    if (isValid) {
      window.location.href = "index.html";
      alert("You have successfully signed up!");
    }
  });
});
