function calculateEMI() {
  const amount = document.getElementById("loanAmount").value;
  const rate = document.getElementById("interestRate").value;
  const tenure = document.getElementById("loanTenure").value;
  const result = document.getElementById("result");

  if (!amount || !rate || !tenure) {
    result.style.color = "red";
    result.innerText = "Please fill all fields";
    return;
  }

  const principal = parseFloat(amount);
  const monthlyRate = parseFloat(rate) / 12 / 100;
  const months = parseFloat(tenure) * 12;

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  result.style.color = "green";
  result.innerText = `Your Monthly EMI is ₹${emi.toFixed(2)}`;
}
