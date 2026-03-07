const skeleton = document.getElementById("skeleton");
const content = document.getElementById("content");

// Simulate loading
setTimeout(() => {
  skeleton.style.display = "none";
  content.style.display = "block";
}, 3000);
