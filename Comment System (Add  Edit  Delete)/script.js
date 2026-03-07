const commentInput = document.getElementById("commentInput");
const addCommentBtn = document.getElementById("addCommentBtn");
const commentList = document.getElementById("commentList");

let editTarget = null;

// Add Comment
addCommentBtn.addEventListener("click", () => {
  const text = commentInput.value.trim();
  if (!text) return alert("Comment cannot be empty");

  if (editTarget) {
    editTarget.querySelector(".comment-text").innerText = text;
    editTarget = null;
    addCommentBtn.innerText = "Add Comment";
  } else {
    addNewComment(text);
  }

  commentInput.value = "";
});

// Create Comment
function addNewComment(text) {
  const li = document.createElement("li");

  li.innerHTML = `
    <div class="comment-text">${text}</div>
    <div class="actions">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>
  `;

  li.querySelector(".edit").addEventListener("click", () => {
    commentInput.value = li.querySelector(".comment-text").innerText;
    editTarget = li;
    addCommentBtn.innerText = "Update Comment";
  });

  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
    if (editTarget === li) {
      editTarget = null;
      addCommentBtn.innerText = "Add Comment";
      commentInput.value = "";
    }
  });

  commentList.appendChild(li);
}
