const modal = document.getElementById("modal");
const inputs = document.querySelectorAll(".otp-box input");
const msg = document.getElementById("msg");

let otp = "";

/* Generate OTP & Show Alert */
function handleGetOTP() {
  otp = Math.floor(1000 + Math.random() * 9000).toString();
  alert("Your OTP is: " + otp);

  modal.style.display = "flex";
  msg.innerText = "";
  inputs.forEach(i => i.value = "");
  inputs[0].focus();
}

/* Close Modal */
function closeModal() {
  modal.style.display = "none";
}

/* Auto focus */
inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", e => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

/* Verify OTP */
function verifyOTP() {
  let enteredOTP = "";
  inputs.forEach(i => enteredOTP += i.value);

  if (enteredOTP.length < 4) {
    msg.style.color = "red";
    msg.innerText = "Enter complete OTP";
    return;
  }

  if (enteredOTP === otp) {
    msg.style.color = "green";
    msg.innerText = "OTP Verified ✅";

    setTimeout(() => {
      closeModal();
      alert("Verification Successful 🎉");
    }, 800);
  } else {
    msg.style.color = "red";
    msg.innerText = "Invalid OTP ❌";
  }
}
