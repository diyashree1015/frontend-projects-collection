const pagination = document.getElementById("pagination");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const totalPages = 5;
let currentPage = 1;

// Render pagination
function renderPagination() {
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.innerText = i;

    if (i === currentPage) {
      li.classList.add("active");
    }

    li.addEventListener("click", () => {
      currentPage = i;
      updatePagination();
    });

    pagination.appendChild(li);
  }

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

// Update state
function updatePagination() {
  renderPagination();
}

// Previous
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

// Next
nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();
  }
});

// Initial render
renderPagination();
