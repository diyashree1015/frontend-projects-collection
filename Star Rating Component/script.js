const stars = document.querySelectorAll(".star");
const result = document.getElementById("result");

let rating = 0;

stars.forEach(star => {
  star.addEventListener("mouseover", () => {
    highlightStars(star.dataset.value);
  });

  star.addEventListener("mouseout", () => {
    highlightStars(rating);
  });

  star.addEventListener("click", () => {
    rating = star.dataset.value;
    result.innerText = `Rating: ${rating}`;
  });
});

function highlightStars(value) {
  stars.forEach(star => {
    star.classList.toggle("active", star.dataset.value <= value);
  });
}
