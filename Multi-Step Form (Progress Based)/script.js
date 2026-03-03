const steps = document.querySelectorAll(".step");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const progress = document.getElementById("progress");

let currentStep = 0;

updateForm();

nextBtn.addEventListener("click", () => {
  if (!validateStep()) return;

  currentStep++;

  if (currentStep >= steps.length) {
    alert("Form submitted successfully ✅");
    currentStep = steps.length - 1;
  }

  updateForm();
});

prevBtn.addEventListener("click", () => {
  currentStep--;
  updateForm();
});

function updateForm() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });

  prevBtn.style.display = currentStep === 0 ? "none" : "inline-block";

  nextBtn.innerText =
    currentStep === steps.length - 1 ? "Submit" : "Next";

  progress.style.width =
    ((currentStep + 1) / steps.length) * 100 + "%";
}

function validateStep() {
  const input = steps[currentStep].querySelector("input");

  if (input.value.trim() === "") {
    alert("Please fill the field before continuing ❌");
    return false;
  }
  return true;
}
