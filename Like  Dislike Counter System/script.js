const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");
const likeCount = document.getElementById("likeCount");
const dislikeCount = document.getElementById("dislikeCount");

let likes = 0;
let dislikes = 0;
let userAction = null; // "like" or "dislike"

likeBtn.addEventListener("click", () => {
  if (userAction === "like") return;

  if (userAction === "dislike") {
    dislikes--;
    dislikeCount.innerText = dislikes;
    dislikeBtn.classList.remove("active");
  }

  likes++;
  likeCount.innerText = likes;
  likeBtn.classList.add("active");
  userAction = "like";
});

dislikeBtn.addEventListener("click", () => {
  if (userAction === "dislike") return;

  if (userAction === "like") {
    likes--;
    likeCount.innerText = likes;
    likeBtn.classList.remove("active");
  }

  dislikes++;
  dislikeCount.innerText = dislikes;
  dislikeBtn.classList.add("active");
  userAction = "dislike";
});
