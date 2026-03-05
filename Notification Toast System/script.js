const toastContainer = document.getElementById("toastContainer");

function showToast(type) {
  const toast = document.createElement("div");
  toast.classList.add("toast", type);

  let message = "";
  if (type === "success") message = "Action successful!";
  if (type === "error") message = "Something went wrong!";
  if (type === "info") message = "Here is some information.";

  toast.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()">×</button>
  `;

  toastContainer.appendChild(toast);

  // Auto remove after 3s
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
