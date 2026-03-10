const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const status = document.getElementById("status");

/* Load saved data */
window.addEventListener("load", () => {
  nameInput.value = localStorage.getItem("name") || "";
  emailInput.value = localStorage.getItem("email") || "";
  messageInput.value = localStorage.getItem("message") || "";

  if (nameInput.value || emailInput.value || messageInput.value) {
    status.innerText = "Saved ✔";
  }
});

/* Auto-save on input */
[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener("input", () => {
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("message", messageInput.value);
    status.innerText = "Saved ✔";
  });
});

/* Clear form */
function clearForm() {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("message");

  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";

  status.innerText = "Form cleared";
  status.style.color = "red";
}
