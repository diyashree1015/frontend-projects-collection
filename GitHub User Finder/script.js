const result = document.getElementById("result");

function getUser() {
  const username = document.getElementById("username").value.trim();

  if (!username) {
    result.innerHTML = `<p class="error">Please enter a username</p>`;
    return;
  }

  result.innerHTML = "Loading...";

  fetch(`https://api.github.com/users/${username}`)
    .then(res => {
      if (!res.ok) throw new Error("User not found");
      return res.json();
    })
    .then(user => {
      result.innerHTML = `
        <div class="profile">
          <img src="${user.avatar_url}" alt="Avatar">
          <h3>${user.name || user.login}</h3>
          <p>${user.bio || "No bio available"}</p>

          <div class="stats">
            <div>Repos<br><strong>${user.public_repos}</strong></div>
            <div>Followers<br><strong>${user.followers}</strong></div>
            <div>Following<br><strong>${user.following}</strong></div>
          </div>

          <a href="${user.html_url}" target="_blank">View Profile</a>
        </div>
      `;
    })
    .catch(() => {
      result.innerHTML = `<p class="error">User not found</p>`;
    });
}
