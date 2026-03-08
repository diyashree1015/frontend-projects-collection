const form = document.getElementById("subscribeForm");
const emailInput = document.getElementById("emailInput");
const message = document.getElementById("message");

form.addEventListener("submit", e => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    message.style.color = "red";
    message.innerText = "Please enter a valid email address ❌";
    return;
  }

  message.style.color = "green";
  message.innerText = "Subscribed successfully 🎉";
  emailInput.value = "";
});

// Email validation
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
