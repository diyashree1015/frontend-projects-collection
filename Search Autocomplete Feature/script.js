const input = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

const items = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "Vue",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Bootstrap",
  "Tailwind CSS",
  "Python",
  "Django",
  "Flask"
];

let activeIndex = -1;
let debounceTimer;

/* Debounce function */
function debounce(callback, delay) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(callback, delay);
}

/* Handle input */
input.addEventListener("input", () => {
  debounce(showSuggestions, 200);
});

function showSuggestions() {
  const value = input.value.toLowerCase();
  suggestions.innerHTML = "";
  activeIndex = -1;

  if (!value) return;

  const filtered = items.filter(item =>
    item.toLowerCase().includes(value)
  );

  filtered.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = highlightMatch(item, value);

    li.addEventListener("click", () => {
      input.value = item;
      suggestions.innerHTML = "";
    });

    suggestions.appendChild(li);
  });
}

/* Highlight matching text */
function highlightMatch(text, value) {
  const regex = new RegExp(`(${value})`, "gi");
  return text.replace(regex, `<span class="highlight">$1</span>`);
}

/* Keyboard navigation */
input.addEventListener("keydown", e => {
  const listItems = document.querySelectorAll("#suggestions li");

  if (e.key === "ArrowDown") {
    activeIndex++;
    if (activeIndex >= listItems.length) activeIndex = 0;
  }

  if (e.key === "ArrowUp") {
    activeIndex--;
    if (activeIndex < 0) activeIndex = listItems.length - 1;
  }

  if (e.key === "Enter" && activeIndex > -1) {
    input.value = listItems[activeIndex].innerText;
    suggestions.innerHTML = "";
    return;
  }

  listItems.forEach(item => item.classList.remove("active"));
  if (listItems[activeIndex]) {
    listItems[activeIndex].classList.add("active");
  }
});

/* Close suggestions on outside click */
document.addEventListener("click", e => {
  if (!e.target.closest(".search-box")) {
    suggestions.innerHTML = "";
  }
});
